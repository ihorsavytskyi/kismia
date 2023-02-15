import React, {useContext} from "react";
import Button from "../Button/Button";
import {QuizContext} from "../Questions/Questions";
import {useNavigate} from "react-router-dom";

const Question = ({ question }) => {

    const navigate = useNavigate()
    const { currentQuestion, setCurrentQuestion, userAnswers, setUserAnswers, questions } = useContext(QuizContext)

    const handleClick = ((value) => {
        setCurrentQuestion(currentQuestion + 1)
        setUserAnswers([
            ...userAnswers,
            {
                [question.question]: value
            }
        ])

        if((currentQuestion + 1) === questions.length) navigate("/registration")
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