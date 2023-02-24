import { useState, useEffect } from "react";
import { getUserAge } from "../utils/getDate";

const useUserAgeValid = (day, month, year, minAge, maxAge) => {
    const [userAgeValidError, setUserAgeValidError]  = useState(true)

    useEffect(() => {

        if(!!day && !!month && !!year) {
            setUserAgeValidError(getUserAge(day, month, year, minAge, maxAge))
        }
    }, [day, month, year, minAge, maxAge])

    return userAgeValidError
}

export default useUserAgeValid