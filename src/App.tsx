import { useState } from 'react';
import Menu from './components/menu/Menu';
import Quiz from './components/quiz/Quiz';
export type MenuOptions = 'menu' | 'quiz' | 'learn';

function App() {
    const [currentScreen, setCurrentScreen] = useState<MenuOptions>('menu');
    return (
        <main className="App">
            {currentScreen === 'menu' && (
                <Menu
                    handleMenuClick={(option) => {
                        setCurrentScreen(option);
                    }}
                />
            )}
            {currentScreen === 'quiz' && (
                <Quiz
                    handleClose={() => {
                        setCurrentScreen('menu');
                    }}
                />
            )}
        </main>
    );
}

export default App;
