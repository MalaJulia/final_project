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
    course = ""
  ) =>
    axiosService.get(urls.users, {
      params: { page, name, surname, age, email, phone,course },
    }),
};

export { searchService };

// already_paid
//     :
//     null
// course_format
//     :
//     "static"
// course_type
//     :
//     "pro"
// created_at
//     :
//     "2021-08-04T18:18:23Z"

// msg
//     :
//     null

// status
//     :
//     "Новый"
// sum
//     :
//     null
// utm
//     :
//     "event"
// _id
