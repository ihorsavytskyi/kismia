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

export const getUserAge = (day, month, year, minAge, maxAge) => {

    let currentDate = moment()
    let dateOfBirth = moment(`${day}-${month}-${year}`, "DD-MM-YYYY")

    const isUserAgeValidError = (currentDate.diff(dateOfBirth, "years", true) < minAge) ?
        "Ваш возраст не может быть меньше 18 лет" :
        (currentDate.diff(dateOfBirth, "years", true) > maxAge) ?
            "Ваш возраст не может быть больше 80 лет" : ""

    return isUserAgeValidError
}

