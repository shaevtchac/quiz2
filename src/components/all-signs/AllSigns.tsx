import './all-signs.css';
import { signs, Sign } from '../../data';
import { IMAGES_LOCATION } from '../quiz/Quiz';
import { speech } from '../../helpers';
import { CloseIcon } from '../icons';
import { useEffect, useRef, useState } from 'react';

interface AllSignsProps {
    handleClose: () => void;
}
const AllSigns: React.FC<AllSignsProps> = ({ handleClose }) => {
    const [selectedSign, setSelectedSign] = useState<HTMLDivElement>(null);
    const scrollTimer = useRef<NodeJS.Timeout>(null);
    const [scrolledDown, setScrolledDown] = useState(false);

    const handleScroll = (event: Event) => {
        if (scrollTimer.current) {
            clearTimeout(scrollTimer.current);
        }
        scrollTimer.current = setTimeout(() => {
            setSelectedSign(null);
            if (window.scrollY > 0) {
                setScrolledDown(true);
            } else {
                setScrolledDown(false);
            }
        }, 200);
    };

    const handleSignClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        sign: Sign
    ) => {
        console.log(e.currentTarget);
        setSelectedSign(e.currentTarget);
        speech(sign.name + sign.description);
    };
    useEffect(() => {
        if (selectedSign) selectedSign.classList.add('selected');
        return () => {
            if (selectedSign) selectedSign.classList.remove('selected');
        };
    }, [selectedSign]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="all-signs">
                <div className="icon-wrapper">
                    <div
                        className="close-icon"
                        style={{
                            backgroundColor: scrolledDown
                                ? '#0000007f'
                                : 'transparent',
                        }}
                    >
                        <CloseIcon
                            onClick={(e) => {
                                e.stopPropagation();
                                handleClose();
                            }}
                            style={{
                                color: scrolledDown ? 'white' : '#00000044',
                            }}
                        />
                    </div>
                </div>
                {signs.map((sign, index) => {
                    return (
                        <div className="sign">
                            <img
                                src={IMAGES_LOCATION + sign.image}
                                alt="znak drogowy"
                            />
                            <div
                                className="inner-sign"
                                onClick={(e) => handleSignClick(e, sign)}
                            >
                                <img
                                    src={IMAGES_LOCATION + sign.image}
                                    alt="znak drogowy"
                                />
                            </div>
                        </div>
                    );
                })}
                <div
                    onClick={() => setSelectedSign(null)}
                    className={
                        selectedSign
                            ? 'modal-background selected'
                            : 'modal-background'
                    }
                ></div>
            </div>
        </>
    );
};

export default AllSigns;
