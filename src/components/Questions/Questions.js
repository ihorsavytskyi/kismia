import React, {createContext, useState} from "react";
import data  from "../../helpers/data"
import Question from "../Question/Question";

export const QuizContext = createContext([])
const Questions = () => {

    const questions = data.questions
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])

    return (
        <QuizContext.Provider value={{ currentQuestion, setCurrentQuestion, userAnswers, setUserAnswers, questions }}>
            <div className="questions">
                {questions &&
                    <Question question={questions[currentQuestion]}/>
                }
            </div>
        </QuizContext.Provider>
    )
}

export default Questions