import {useState } from 'react';
import AllSigns from './components/all-signs/AllSigns';
import AnimatedBackground from './components/animated-background/AnimatedBackground';
import Menu from './components/menu/Menu';
import Quiz from './components/quiz/Quiz';
export type MenuOptions = 'menu' | 'quiz' | 'learn';

function App() {
    // useEffect(() => {
    //     document.body.requestFullscreen();
    //     //  screen.orientation.lock("landscape");

    //     return () => {};
    // }, []);

    const [currentScreen, setCurrentScreen] = useState<MenuOptions>('menu');
    return (
        <main className="App">
            <AnimatedBackground />
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
            {currentScreen === 'learn' && (
                <AllSigns
                    handleClose={() => {
                        setCurrentScreen('menu');
                    }}
                />
            )}
        </main>
    );
}

export default App;
