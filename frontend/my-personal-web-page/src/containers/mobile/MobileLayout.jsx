import { Outlet } from "react-router";
import MobileHeaderContainer from "./MobileHeaderContainer";

const MobileLayout = () => {
    return (
        <>
            <MobileHeaderContainer/>

            <Outlet/>

        </>
    )
}

export {MobileLayout}