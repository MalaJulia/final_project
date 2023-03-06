import axiosService from "./axios.service";
import { urls } from "../configs";

const usersService = {
  getAll: (page = 1) => axiosService.get(urls.users, {params:{page}}),
 putById: (_id = '', data) => axiosService.put(`${urls.users.paid}/${_id}`,data)
};


export { usersService };
