import React, {useContext, useEffect} from "react";
import {QuizContext} from "../../context/QuizContext";

import {CSSTransition} from "react-transition-group";

import Answer from "../Answer/Answer";
// import classNames from "classnames";

import "./Question.scss"

const QuestionTest = ({indexQuestion, question}) => {
    const [state, dispatch] = useContext(QuizContext)

    // const isCurrentPage = indexQuestion === state.currentQuestionIndex;
    // const moveDirection = (indexQuestion === 0 || indexQuestion % 2 === 0)
    const isVisibleQuestion = state.isQuestionVisible
    const currentQuestion = state.questions[state.currentQuestionIndex]

    useEffect(() => {
        dispatch({type: "SET_VISIBLE_QUESTIONS"})
        }, [state.currentQuestionIndex])

    return (
        <CSSTransition
            key={state.currentQuestionIndex}
            in={isVisibleQuestion}
            timeout={1500}
            classNames={{
                // appear: 'question-appear',
                // appearActive: 'question-active-appear',
                // appearDone: 'question-done-appear',
                // enter: 'question-enter',
                // enterActive: 'question-active-enter',
                enterDone: 'question-done-enter',
                // exit: 'question-exit',
                // exitActive: 'question-active-exit',
                exitDone: 'question-done-exit'
            }}>
            <div className="question">
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

export default QuestionTest