import style from "./Navbar.module.css"
//React router
import { NavLink } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"


function Navbar() {
    return (
        <nav className={style.navbar}>
            <ul className={style.main_menu}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
            <SearchBar />
        </nav >
    )
}

export default Navbar