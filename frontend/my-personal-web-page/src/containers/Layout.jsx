import { Outlet } from "react-router";

import HeaderComponent from "../components/header_component";
import FooterComponent from "../components/footer_component";

const Layout = () => {
    return (
        <>
            <HeaderComponent/>

            <Outlet/>

            <FooterComponent/>
        </>
    )
}

export {Layout}