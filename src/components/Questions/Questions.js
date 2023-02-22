import React, {createContext, useEffect, useState} from "react";
import data  from "../../data/data"
import Question from "../Question/Question";
import {useNavigate} from "react-router-dom";
export const QuizContext = createContext([])
const Questions = () => {

    const navigate = useNavigate()
    const questions = data.questions
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])
    const [totalQuestion, setTotalQuestion] = useState(questions.length)

    useEffect(() => {
        setTotalQuestion(questions.length)
    }, [])

    useEffect(() => {
        if(currentQuestion === totalQuestion) {
            navigate("/kismia/registration")
        }

    }, [currentQuestion])

    return (
        <QuizContext.Provider value={{ currentQuestion, setCurrentQuestion, userAnswers, setUserAnswers, questions }}>
            <div className="questions">
                {(questions && currentQuestion < totalQuestion) &&
                    <Question question={questions[currentQuestion]}/>
                }
            </div>
        </QuizContext.Provider>
    )
}

export default Questions