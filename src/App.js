import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./mainlayout";
import {LoginPage, RegisterPage} from "./pages";




const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/login'}/>}/>
                <Route path={'/login'} element = {<LoginPage/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
            </Route>
        </Routes>
  );
}
export default App;
