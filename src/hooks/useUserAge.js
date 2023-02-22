import { useState, useEffect } from "react";
import { getUserAge } from "../utils/getDate";

const useUserAge = (day, month, year, numberOfFullYears) => {
    const [isUserAgeValid, setUserAgeValid]  = useState(true)

    useEffect(() => {

        if(!!day && !!month && !!year) {
            setUserAgeValid(getUserAge(day, month, year, numberOfFullYears))
        }
    }, [day, month, year, numberOfFullYears])

    return {
        isUserAgeValid
    }
}

export default useUserAge