import React, {useContext} from "react";
import {QuizContext} from "../../context/QuizContext";

const Answer = ({ answer }) => {

    const [state, dispatch] = useContext(QuizContext)

    return (
        <button
            className="button"
            onClick={() => dispatch({type: "SET_USER_ANSWER", payload: answer})}>
            <span className="button-text">{answer}</span>
        </button>
    )
}

export default Answer