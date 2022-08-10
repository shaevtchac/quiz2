import './menu.css';
import { MenuOptions } from '../../App';

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
                <img src="/assets/images/quiz.svg" alt="quiz" />
                Quiz
            </button>
            <button
                onClick={() => {
                    handleMenuClick('learn');
                }}
            >
                <img src="/assets/images/nauka.svg" alt="nauka" />
                Nauka
            </button>
        </div>
    );
};

export default Menu;
