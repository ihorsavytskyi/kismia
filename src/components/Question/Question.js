import React, {useContext, useEffect, useState} from "react";
import Button from "../Button/Button";
import {QuizContext} from "../Questions/Questions";
import {useNavigate} from "react-router-dom";

const Question = ({ question }) => {

    const navigate = useNavigate()
    const { currentQuestion, setCurrentQuestion, userAnswers, setUserAnswers, questions } = useContext(QuizContext)
    const [totalQuestion, setTotalQuestion] = useState(null)

    useEffect(() => {
        setTotalQuestion(questions.length)
    }, [])

    // useEffect(() => {
    //     console.log("currentQuestion: ", currentQuestion)
    //     console.log("totalQuestion: ", totalQuestion)
    //     console.log("currentQuestion + 1: ", currentQuestion + 1)
    //     console.log((currentQuestion + 1) === totalQuestion)
    //
    //     if(currentQuestion > totalQuestion) {
    //         navigate("/kismia/registration")
    //     }
    //
    // }, [currentQuestion])

    const handleClick = ((value) => {
        setCurrentQuestion(currentQuestion + 1)
        setUserAnswers([
            ...userAnswers,
            {
                [question.question]: value
            }
        ])

        // if((currentQuestion + 1) === questions.length) navigate("/kismia/registration")
        if((currentQuestion + 1) === totalQuestion) navigate("/kismia/registration")
    })

    return (
        <div className="question">
            <h2>{question.question}</h2>
            <div className="answers">
                {question.answers.map((answer, i) =>
                    <Button key={i} text={answer} handleClick={() => handleClick(answer)}/>
                )}
            </div>
        </div>
    )
}

export default Question