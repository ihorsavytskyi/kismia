import moment from "moment/moment";
import 'moment/locale/ru';
export const getDate = (date) => {
    return moment(date, "YYYYMMDD").startOf('day').fromNow()
}