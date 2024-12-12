import style from "./Header.module.css"
//Components
import Navbar from "../../components/Navbar/Navbar"


function Header() {
    return (
        <header>
            <div className="container">
                <Navbar />
            </div>
        </header>
    )
}

export default Header