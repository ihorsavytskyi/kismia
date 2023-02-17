import {useEffect, useState} from "react";
import {getDayInMonth} from "../utils/getDate";

export const useDaysInMonth = (initialValue, month, year) => {

    const [dayInMonth, setDayInMonth] = useState(initialValue)

    useEffect(() => {
        if(!!month && !!year) {
            setDayInMonth(getDayInMonth(month, year))
        }

    }, [month, year])

    return dayInMonth
}