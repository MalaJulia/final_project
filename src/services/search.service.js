import axiosService from "./axios.service";
import { urls } from "../configs";

const searchService = {
  Search: ({
    page = 1,
    name = "",
    surname = "",
    age = "",
    email = "",
    phone = "",
    course = "",
    course_format = "",
    course_type = "",
    status = "",
    created_at = "",
    order = "email",
  }) =>
    axiosService.get(urls.users.paid, {
      params: {
        page,
        name,
        surname,
        age,
        email,
        phone,
        course,
        course_format,
        course_type,
        status,
        created_at,
        order,
      },
    }),
};

export { searchService };
