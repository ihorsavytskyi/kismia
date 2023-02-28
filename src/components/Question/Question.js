import React, {useContext, useEffect} from "react";
import {QuizContext} from "../../context/QuizContext";
import {CSSTransition} from "react-transition-group";
import Answer from "../Answer/Answer";

import "./Question.scss"

const Question = ({indexQuestion, question}) => {
    const [state, dispatch] = useContext(QuizContext)

    const isVisibleQuestion = state.isQuestionVisible
    const currentQuestion = state.questions[state.currentQuestionIndex]

    useEffect(() => {
        dispatch({type: "SET_VISIBLE_QUESTIONS"})
    }, [state.currentQuestionIndex])

    return (
        <CSSTransition
            key={state.currentQuestionIndex}
            in={isVisibleQuestion}
            timeout={0}
            unmountOnExit
            classNames={{
                enterDone: 'question-done-enter'
            }}>
            <div className="question" data-question-index={state.currentQuestionIndex}>
                <h2>{currentQuestion.question}</h2>
                <div className="answers">
                    {currentQuestion.answers.map((answer, i) =>
                        <Answer key={i} answer={answer}/>
                    )}
                </div>
            </div>
        </CSSTransition>
    )
}

export default Question