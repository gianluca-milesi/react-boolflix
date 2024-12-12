import style from "./SearchBar.module.css"
//Context
import GlobalContext from "../../context/GlobalContext"
//React router
import { useNavigate } from "react-router-dom"
//Hooks
import { useContext, useState, useEffect } from "react"


function SearchBar() {

    const { fetchMoviesByTitle, fetchSeriesByTitle, filterFilms } = useContext(GlobalContext)

    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    //Handlers
    function handleSearch(event) {
        const value = event.target.value
        setSearch(value)
    }
    //Functions
    function filterFilms() {
        fetchMoviesByTitle(search)
        fetchSeriesByTitle(search)
        navigate("/")
    }
    // function executeSearch() {
    //     fetchMoviesByTitle(search)
    //     fetchSeriesByTitle(search)
    //     // setTimeout(()=>{
    //     //     filterFilms(search)
    //     // }, 1000)
    //     navigate("/");
    // }


    return (
        <div className={style.search_form}>
            <input className={style.search_bar} type="text" name="" id="" placeholder="Cerca" value={search} onChange={handleSearch} />
            <button className={style.search_button} onClick={filterFilms}>Cerca</button>
        </div>
    )
}

export default SearchBar