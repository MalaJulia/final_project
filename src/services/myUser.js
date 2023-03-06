import axiosService from "./axios.service";
import {urls} from "../configs";

const myUserService = {
    getMyUser:() => axiosService.get(urls.users.myUser),
};

export {myUserService};
