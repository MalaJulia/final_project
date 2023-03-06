const baseURL = " http://localhost:5000";

const urls = {
  admin: {
    adminUser:"admin/users",
    adminCreate:"admin/create",
    adminRefreshToken:"admin/users/{id}/re_token"
  },
  users: {
    paid:'/paid/',
    myUser:"/users/me"

  },
  auth: {
    login: "/auth/login",
    refresh: "/auth/refresh",
    activate: "/auth/activate/{token}",
    logout:"/auth/logout"
  },
};

export { urls, baseURL };
