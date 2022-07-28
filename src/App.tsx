import { useState } from 'react';
import signs from './data';
const IMAGES_LOCATION = 'assets/images/';
function App() {
    const [animate, setAnimate] = useState(false);
    return (
        <main className="App">
            <button onClick={() => setAnimate((prev) => !prev)}>Klik</button>
            <div className="signs">
                <div
                    className="signs__image-container-1"
                    style={{
                        transform: animate
                            ? 'translateY(0)'
                            : 'translateY(100vh)',
                    }}
                >
                    <img
                        src={window.location + IMAGES_LOCATION + signs[1].image}
                        alt="asdas"
                    />
                </div>
                <div
                    className="signs__image-container-2"
                    style={{
                        transform: animate
                            ? 'translateY(0)'
                            : 'translateY(100vh)',
                    }}
                >
                    <img
                        src={window.location + IMAGES_LOCATION + signs[2].image}
                        alt="asdas"
                    />
                </div>
                <div
                    className="signs__image-container-3"
                    style={{
                        transform: animate
                            ? 'translateY(0)'
                            : 'translateY(100vh)',
                    }}
                >
                    <img
                        src={window.location + IMAGES_LOCATION + signs[3].image}
                        alt="asdas"
                    />
                </div>
                <div
                    className="signs__image-container-4"
                    style={{
                        transform: animate
                            ? 'translateY(0)'
                            : 'translateY(100vh)',
                    }}
                >
                    <img
                        src={window.location + IMAGES_LOCATION + signs[4].image}
                        alt="asdas"
                    />
                </div>
            </div>
        </main>
    );
}

export default App;
