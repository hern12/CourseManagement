import moment from "moment";

const ymdFormat = date => moment(date).format("YYYY-MM-DD");

export default {
  ymdFormat
};
