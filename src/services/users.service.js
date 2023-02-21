import axiosService from "./axios.service";
import { urls } from "../configs";

const usersService = {
  getAll: (page = 1) => axiosService.get(urls.users, {params:{page}}),
 putById: (id) => axiosService.put(`${urls.users.paid}/${id}`)
};


export { usersService };
