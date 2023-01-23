import {Footer, Header} from "../components";
import {Outlet} from "react-router-dom";

const MainLayout = ()=> {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export {MainLayout}