import axiosService from "./axios.service";
import {urls} from "../configs";

const adminUserService = {
     getAll:() => axiosService.get(urls.admin.adminUser),
};

export {adminUserService};
