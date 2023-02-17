import moment from "moment/moment";
import 'moment/locale/ru';
export const getDate = (date) => {
    return moment(date, "YYYYMMDD").startOf('day').fromNow()
}

export const getCurrentYear = () => {
    return moment().year()
}

export const getDayInMonth = (month, year) => {
    return moment(`${year}-${month}`, "YYYY-MM").daysInMonth()
}

export const getUserAge = (day, month, year) => {
    console.log(day, month, year)
}

