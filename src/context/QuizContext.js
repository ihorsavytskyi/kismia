import React, {createContext, useEffect, useReducer} from "react";
import data from "../data/data"
import {useNavigate} from "react-router-dom";

const initialState = {
    questions: data.questions,
    currentQuestionIndex: 0,
    answers: data.questions[0].answers,
    userAnswers: [],
    isQuizFinished: false
}

const reducer = (state, action) => {
    if(action.type === "SET_USER_ANSWER") {
        const isQuizFinished = state.currentQuestionIndex === (state.questions.length - 1)
        const currentQuestionIndex = !isQuizFinished ? state.currentQuestionIndex + 1 : state.currentQuestionIndex
        const answers = !isQuizFinished ? state.questions[currentQuestionIndex].answers : []
        const userAnswer = {
            question: state.questions[state.currentQuestionIndex].question,
            answer: action.payload
        }

        return {
            ...state,
            currentQuestionIndex: currentQuestionIndex,
            answers: answers,
            userAnswers: [...state.userAnswers, userAnswer],
            isQuizFinished: isQuizFinished
        }
    }
}

export const QuizContext = createContext({})

export const QuizProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const navigate = useNavigate()

    useEffect(() => {
        if(state.isQuizFinished) {
            navigate("/kismia/registration")
        }

    }, [state.isQuizFinished])

    return (
        <QuizContext.Provider
            value={[state, dispatch]}>
            { children }
        </QuizContext.Provider>
    )
}