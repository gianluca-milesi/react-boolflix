import style from "./Navbar.module.css"
//React router
import { NavLink } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"


function Navbar() {
    return (
        <nav className={style.navbar}>
            <ul className={style.main_menu}>
                <li><img className={style.logo} src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" /></li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/tv-series">Serie TV</NavLink></li>
            </ul>
            <SearchBar />
        </nav >
    )
}

export default Navbar