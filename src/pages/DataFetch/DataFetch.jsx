import style from "./DataFetch.module.css"
//Components
import ItemList from "../../components/ItemList/ItemList";
//Context
import GlobalContext from "../../context/GlobalContext";
//Hook
import { useContext } from "react";


function DataFetch() {

    const { movies, series } = useContext(GlobalContext)

    return (
        <main>
            <ItemList title="Movies" items={movies} id="movies"/>
            <ItemList title="TV Shows" items={series} id="series"/>
        </main>
    )
}

export default DataFetch