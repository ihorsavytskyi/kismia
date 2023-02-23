import React, {useContext, useEffect} from "react";
import Answer from "../Answer/Answer";
import {QuizContext} from "../../context/QuizContext";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Question = () => {
    const [state, dispatch] = useContext(QuizContext)

    const isQuizFinished = state.isQuizFinished
    const currentQuestion = !isQuizFinished && state.questions[state.currentQuestionIndex].question
    const currentQuestionAnswers = !isQuizFinished && state.answers

    useEffect(() => {
        console.log(state.currentQuestionIndex)
    }, [state.currentQuestionIndex, state.answers])

    return (
        <>
            {!isQuizFinished &&
                <div className="question">
                    <h2>{currentQuestion}</h2>
                    <div className="answers">
                        <TransitionGroup className="question" component={null}>
                            {currentQuestionAnswers.map((answer, i) =>
                                <CSSTransition
                                    key={i}
                                    in={true}
                                    timeout={50000}
                                    classNames={{
                                        enterActive: 'loading',
                                        enterDone: 'loaded',
                                        exit: 'hide'
                                    }}>
                                    <Answer answer={answer}/>
                                </CSSTransition>
                            )}
                        </TransitionGroup>
                    </div>
                </div>
            }
        </>
    )
}

export default Question