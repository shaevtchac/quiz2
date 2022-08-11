import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlay } from '@fortawesome/free-solid-svg-icons';

export const PlayIcon = (props: any) => {
    return <FontAwesomeIcon icon={faPlay} className="icon" {...props} />;
};
export const CloseIcon = (props: any) => {
    return <FontAwesomeIcon icon={faXmark} className="icon" {...props} />;
};
