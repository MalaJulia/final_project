import axiosService from "./axios.service";
import { urls } from "../configs";

const searchService = {
  searchName: (page = 1, name= '') => axiosService.get(urls.users, { params: { page, name } }),

};

export { searchService };
