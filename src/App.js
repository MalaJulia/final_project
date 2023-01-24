import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./mainlayout";
import {LoginPage, RegisterPage, UsersPage} from "./pages";




const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/login'}/>}/>
                <Route path={'/login'} element = {<LoginPage/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
                <Route path={'/users'} element={<UsersPage/>}/>
            </Route>
        </Routes>
  );
}
export default App;
