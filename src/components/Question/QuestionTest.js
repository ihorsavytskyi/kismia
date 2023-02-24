import React, {useContext, useEffect, useRef} from "react";
import Answer from "../Answer/Answer";
import {QuizContext} from "../../context/QuizContext";
import {CSSTransition, Transition} from "react-transition-group";

const QuestionTest = ({indexQuestion, question}) => {
    const [state, dispatch] = useContext(QuizContext)

    return (
        <CSSTransition
            in={indexQuestion === state.currentQuestionIndex}
            timeout={1000}
            className="question">
            <div className="question">
                <h2>{question.question}</h2>
                <div className="answers">
                    {question.answers.map((answer, i) =>
                        <Answer key={i} answer={answer}/>
                    )}
                </div>
            </div>
        </CSSTransition>
    )
}

export default QuestionTest