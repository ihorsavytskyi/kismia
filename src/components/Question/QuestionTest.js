import React, {useContext} from "react";
import Answer from "../Answer/Answer";
import {QuizContext} from "../../context/QuizContext";
import {CSSTransition} from "react-transition-group";
import "./Question.scss"

const QuestionTest = ({indexQuestion, question}) => {
    const [state, dispatch] = useContext(QuizContext)

    return (
        <CSSTransition
            in={indexQuestion === state.currentQuestionIndex}
            timeout={500}
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