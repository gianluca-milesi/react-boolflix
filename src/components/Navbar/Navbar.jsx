import style from "./Navbar.module.css"
//React router
import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav className={style.navbar}>
                <ul className={style.main_menu}>
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>
            </nav >
        </>
    )
}

export default Navbar