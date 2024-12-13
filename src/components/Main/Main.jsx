import style from "./Main.module.css"
//Components
import ItemList from "../ItemList/ItemList";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";


function Main() {

    const { movies, series } = useContext(GlobalContext)

    return (
        <main>
            <ItemList title="Movies" items={movies} />
            <ItemList title="TV Shows" items={series} />
        </main>
    )
}

export default Main