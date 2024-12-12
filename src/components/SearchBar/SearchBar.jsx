import style from "./SearchBar.module.css"

function SearchBar() {
    return (
        <div className={style.search_form}>
            <input className={style.search_bar} type="text" name="" id="" placeholder="Cerca" />
            <button className={style.search_button}>Cerca</button>
        </div>
    )
}

export default SearchBar