import React, {useContext} from "react";
import Answer from "../Answer/Answer";
import {QuizContext} from "../../context/QuizContext";
import {CSSTransition} from "react-transition-group";
import "./Question.scss"
import classNames from "classnames";

const QuestionTest = ({indexQuestion, question}) => {
    const [state, dispatch] = useContext(QuizContext)

    const isCurrentPage = indexQuestion === state.currentQuestionIndex;
    const moveDirection = (indexQuestion === 0 || indexQuestion % 2 === 0)

    return (
        // <CSSTransition
        //     in={indexQuestion === state.currentQuestionIndex}
        //     timeout={500}
        //     className="question">
        //     <div className="question">
        //         <h2>{question.question}</h2>
        //         <div className="answers">
        //             {question.answers.map((answer, i) =>
        //                 <Answer key={i} answer={answer}/>
        //             )}
        //         </div>
        //     </div>
        // </CSSTransition>
        <>
            <div className={
                classNames("question",
                    {
                        "active": isCurrentPage,
                        "from-right": !moveDirection,
                        "from-left": moveDirection
                    })
            }>
                <h2>{question.question}</h2>
                <div className="answers">
                    {question.answers.map((answer, i) =>
                        <Answer key={i} answer={answer}/>
                    )}
                </div>
            </div>
        </>
    )
}

export default QuestionTest