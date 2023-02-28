import React, {useContext, useEffect} from "react";
import {QuizContext} from "../../context/QuizContext";
import Question from "../Question/Question";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const Questions = () => {
    const [state, dispatch] = useContext(QuizContext)

    return (
        <div className="questions">
            <TransitionGroup
            component={null}>
            {state.questions.map((question, index) =>

                <CSSTransition
                    key={index}
                    timeout={5000}
                    className="item">
                    <Question key={index} indexQuestion={index} question={question}/>
                </CSSTransition>
            )}
            </TransitionGroup>
        </div>
    )
}

export default Questions