import {Footer, Header} from "../components";
import {Outlet} from "react-router-dom";

const MainLayout = ()=> {
    return (
        <div style={{height: '100vh'}}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export {MainLayout}