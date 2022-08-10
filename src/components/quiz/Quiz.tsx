import { useEffect, useRef, useState } from 'react';
import { signs, Sign } from '../../data';
import { shuffle, getRandom, speech, later, playAudio } from '../../helpers';
import './quiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlay } from '@fortawesome/free-solid-svg-icons';
const IMAGES_LOCATION = 'assets/images/';
const QUIZ_LENGTH = 40; //number of questions in quiz

type Answer = {
    img: string;
    rightAnswer: boolean;
};
type QuestionData = {
    text: string;
    answers: Answer[];
};

// const Animations = {
//     NONE: { animationName: 'none' },

//     GOOD_ANSWER: {
//         animationName: 'good-answer',
//         animationDuration: '100ms',
//         animationTimingFunction: 'ease-in',
//         animationDirection: 'alternate',
//         animationIterationCount: '4',
//     }, //'good-answer 1s ease-in',
//     BAD_ANSWER: {
//         animationName: 'bad-answer',
//         animationDuration: '100ms',
//         animationTimingFunction: 'ease-in',
//         animationIterationCount: '4',
//     }, //'bad-answer 1s ease-in',
// };
enum Animations {
    GOOD_ANSWER = 'good-answer 100ms ease-in alternate 4',
    BAD_ANSWER = 'bad-answer 300ms ease-in 2',
    NONE = 'none',
}

interface QuizProps {
    handleClose: () => void;
}

const Quiz: React.FC<QuizProps> = ({ handleClose }) => {
    const [currentQuestion, setCurrentQuestion] = useState<QuestionData>(null);
    const [questions, setQuestions] = useState<QuestionData[]>([]);
    const [displaySigns, setDisplaySigns] = useState(true);
    const [score, setScore] = useState(0);
    const currentQuestionNumber = useRef(0);
    const answerClicked = useRef<HTMLDivElement>(null);

    const startQuiz = () => {
        const quizQuestions = getRandom(signs, QUIZ_LENGTH) as Sign[];
        const quizQuestionsWithAnswers = quizQuestions.map((sign) => {
            const goodAnswer: Answer = { img: sign.image, rightAnswer: true };
            let randomSigns: Sign[];
            do {
                randomSigns = getRandom(signs, 3);
            } while (randomSigns.includes(sign));
            const badAnswers: Answer[] = randomSigns.map((sign) => ({
                img: sign.image,
                rightAnswer: false,
            }));
            const answers: Answer[] = [goodAnswer, ...badAnswers];
            shuffle(answers);

            return { text: sign.name, answers };
        }) as QuestionData[];
        setQuestions(quizQuestionsWithAnswers);
        setCurrentQuestion(quizQuestionsWithAnswers[0]);
        speech(quizQuestionsWithAnswers[0].text);
    };

    const changeQuestion = async () => {
        const TRANSITION_DURATION = 1100; //ms
        setDisplaySigns(false);
        await later(TRANSITION_DURATION);
        currentQuestionNumber.current++;
        const nextQuestion = questions[currentQuestionNumber.current];
        if (currentQuestionNumber.current < QUIZ_LENGTH) {
            setCurrentQuestion(nextQuestion);
            speech(nextQuestion.text);
        } else return; //quiz end --------------------------------------------------------------------------------------------
        setDisplaySigns(true);
        await later(TRANSITION_DURATION);
    };
    const handleAnswer = async (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        rightAnswer: boolean
    ) => {
        const GOOD_ANSWER_ANIMATION_DURATION = 450; //ms
        const BAD_ANSWER_ANIMATION_DURATION = 650;
        answerClicked.current = e.currentTarget;
        if (rightAnswer) {
            setScore(score + 1);
            answerClicked.current.style.animation = Animations.GOOD_ANSWER;
            playAudio('/assets/sounds/correct-answer.mp3');
            await later(GOOD_ANSWER_ANIMATION_DURATION);
            answerClicked.current.style.animation = Animations.NONE;
        } else {
            answerClicked.current.style.animation = Animations.BAD_ANSWER;
            playAudio('/assets/sounds/bad-answer.mp3');
            await later(BAD_ANSWER_ANIMATION_DURATION);
            answerClicked.current.style.animation = Animations.NONE;
        }
        changeQuestion();
    };

    useEffect(() => {
        startQuiz();
    }, []);
    return (
        <>
            {currentQuestion && (
                <div className="question">
                    <div className="controls">
                        <FontAwesomeIcon
                            icon={faPlay}
                            className="icon"
                            onClick={() => {
                                speech(currentQuestion.text);
                            }}
                        />
                        <div className="score-sign">
                            <img
                                src="/assets/images/Znak_B-1.svg"
                                alt="Zakaz ruchu"
                            />
                            <p>{score}</p>
                        </div>
                        <FontAwesomeIcon
                            icon={faXmark}
                            className="icon"
                            onClick={handleClose}
                        />
                    </div>

                    <div className="signs">
                        {currentQuestion.answers.map((answer, index) => {
                            return (
                                <div
                                    onClick={(e) =>
                                        handleAnswer(e, answer.rightAnswer)
                                    }
                                    key={index}
                                    className={
                                        'signs__image-container-' +
                                        (index + 1).toString()
                                    }
                                    style={{
                                        transform: displaySigns
                                            ? 'translateY(0vh)'
                                            : 'translateY(90vh)',
                                    }}
                                >
                                    <img
                                        src={
                                            window.location +
                                            IMAGES_LOCATION +
                                            answer.img
                                        }
                                        alt="znak drogowy"
                                    />
                                    <img
                                        src={
                                            window.location +
                                            IMAGES_LOCATION +
                                            'pole.png'
                                        }
                                        alt="sign pole"
                                        height="600px"
                                        width="10%"
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <progress
                        value={currentQuestionNumber.current + 1}
                        max={QUIZ_LENGTH}
                    >
                        {currentQuestionNumber.current + 1}
                    </progress>
                </div>
            )}
        </>
    );
};

export default Quiz;
