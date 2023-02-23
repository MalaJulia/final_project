import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import MainLayout from "./mainlayout/MainLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import UsersPage from "./pages/UsersPage/UsersPage";

const App = () => {
  return (
    <Routes>
      <Route path={"/"}>
        <Route index element={<Navigate to={"/login"} />} />
        <Route path={"/login"} element={<LoginPage />} />

        {/*<Route path={"/users"} element={<UsersPage />} />*/}
      </Route>

            <Route path={"/"} element={<MainLayout />}>
                <Route path={"/users"} element={<UsersPage />} />
                <Route path={"/register"} element={<RegisterPage />} />
            </Route>

    </Routes>
  );
};
export default App;
