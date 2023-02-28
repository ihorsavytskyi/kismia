import { useState, useEffect } from "react";
import { getUserAge } from "../utils/getDate";

const useUserAgeValid = (day, month, year, minAge, maxAge) => {
    const [isUserAgeValid, setUserAgeValid] = useState(null)
    const [userAgeValidError, setUserAgeValidError]  = useState([])

    useEffect(() => {

        if(!!day && !!month && !!year) {
            if(getUserAge(day, month, year, minAge, maxAge).length > 0) {
                setUserAgeValid(false)
                setUserAgeValidError(getUserAge(day, month, year, minAge, maxAge))
            } else {
                setUserAgeValid(true)
            }
        }
    }, [day, month, year, minAge, maxAge])

    return {
        isUserAgeValid,
        userAgeValidError
    }
}

export default useUserAgeValid