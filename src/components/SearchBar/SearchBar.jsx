import style from "./SearchBar.module.css"
//Context
import GlobalContext from "../../context/GlobalContext"
//React router
import { useNavigate } from "react-router-dom"
//Hooks
import { useContext, useEffect } from "react"


function SearchBar() {

    const { query, setQuery, fetchMoviesByTitle, fetchSeriesByTitle } = useContext(GlobalContext)

    const navigate = useNavigate()

    //Handlers
    function handleSearch(event) {
        const value = event.target.value
        setQuery(value)
    }
    //Functions
    function submit(event) {
        event.preventDefault()

        fetchMoviesByTitle()
        fetchSeriesByTitle()
        navigate("/search")
    }

    //Fetch ogni volta
    useEffect(() => {
        navigate("/search")
        fetchMoviesByTitle()
        fetchSeriesByTitle()
    }, [query])


    return (
        <form onSubmit={submit}>
            <div className={style.search_form}>
                <input className={style.search_bar} type="text" name="query" placeholder="Cerca" value={query} onChange={handleSearch} />
                <button className={style.search_button} onClick={submit}>Cerca</button>
            </div>
        </form>
    )
}

export default SearchBar