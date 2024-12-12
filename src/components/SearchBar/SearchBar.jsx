import style from "./SearchBar.module.css"
//Context
import GlobalContext from "../../context/GlobalContext"
//Hooks
import { useContext, useEffect, useState } from "react"

function SearchBar() {

    const { fetchFilmsByTitle } = useContext(GlobalContext)

    const [search, setSearch] = useState("")

    //Handler
    function handleSearch(event) {
        const value = event.target.value
        setSearch(value)
    }

    function filterFilms() {
        fetchFilmsByTitle(search)
    }


    return (
        <div className={style.search_form}>
            <input className={style.search_bar} type="text" name="" id="" placeholder="Cerca" value={search} onChange={handleSearch} />
            <button className={style.search_button} onClick={filterFilms}>Cerca</button>
        </div>
    )
}

export default SearchBar