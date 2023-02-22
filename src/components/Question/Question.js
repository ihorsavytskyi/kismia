import React, {useContext, useEffect, useState} from "react";
import Button from "../Button/Button";
import {QuizContext} from "../Questions/Questions";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Question = ({ question }) => {

    const { currentQuestion, setCurrentQuestion, userAnswers, setUserAnswers} = useContext(QuizContext)
    const [ answers, setAnswers ] = useState([])
    const [ isVisibleAnswers, setVisibleAnswers] = useState(false)

    useEffect(() => {
        setAnswers(question.answers)
        setVisibleAnswers(!isVisibleAnswers)
    }, [question])

    const handleClick = ((value) => {
        setCurrentQuestion(currentQuestion + 1)
        setUserAnswers([
            ...userAnswers,
            {
                [question.question]: value
            }
        ])
        setVisibleAnswers(!isVisibleAnswers)
    })

    return (
        <div className="question">
            <h2>{question.question}</h2>
            <div className="answers">
                <TransitionGroup className="question" component={null}>
                    {answers.map((answer, i) =>
                        <CSSTransition
                            key={i}
                            in={isVisibleAnswers}
                            timeout={5000}
                            classNames={{
                                enterActive: 'loading',
                                enterDone: 'loaded',
                                exit: 'hide'
                            }}>
                            <Button text={answer} handleClick={() => handleClick(answer)}/>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </div>
    )
}

export default Question