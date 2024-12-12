//React router
import { Outlet } from "react-router-dom"
//Layouts
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default DefaultLayout