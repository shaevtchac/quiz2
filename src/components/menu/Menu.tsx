import './menu.css';
import { MenuOptions } from '../../App';
import { IMAGES_LOCATION } from '../quiz/Quiz';

interface MenuProps {
    handleMenuClick: (option: MenuOptions) => void;
}

const Menu: React.FC<MenuProps> = ({ handleMenuClick }) => {
    return (
        <div className="menu">
            <button
                onClick={() => {
                    handleMenuClick('quiz');
                }}
            >
                <img src={IMAGES_LOCATION + 'quiz.svg'} alt="quiz" />
                Quiz
            </button>
            <button
                onClick={() => {
                    handleMenuClick('learn');
                }}
            >
                <img src={IMAGES_LOCATION + 'nauka.svg'} alt="nauka" />
                Nauka
            </button>
        </div>
    );
};

export default Menu;
