import axiosService from "./axios.service";
import { urls } from "../configs";

const searchService = {
  Search: (
    page = 1,
    name = "",
    surname = "",
    age = "",
    email = "",
    phone = "",
    course = "",
    course_format ="",
    course_type= "",
    status=""

  ) =>
    axiosService.get(urls.users, {
      params: { page, name, surname, age, email, phone,course, course_format, course_type, status },
    }),
};

export { searchService };

// already_paid
//     :
//     null
// created_at
//     :
//     "2021-08-04T18:18:23Z"
// msg
//     :
//     null
// sum
//     :
//     null
// utm
//     :
//     "event"
// _id
