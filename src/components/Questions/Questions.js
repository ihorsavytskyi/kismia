import React, {useContext, useEffect} from "react";
import {QuizContext} from "../../context/QuizContext";
import QuestionTest from "../Question/QuestionTest";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const Questions = () => {
    const [state, dispatch] = useContext(QuizContext)

    useEffect(() => {
        console.log(state.questions)
        state.questions.map((question, index) => {
            console.log(question)
        })

    }, [])

    return (
        <div className="questions">
            {state.questions.map((question, index) =>
                <QuestionTest key={index} indexQuestion={index} question={question}/>
            )}
        </div>
    )
}

export default Questions