import style from "./Card.module.css"
import { flags } from "../../config.js"


function Card({ item = {} }) {

    const { poster_path, title, original_title, original_language, vote_average } = item //Movies
    const { name, original_name } = item //TV Series

    const pathImage = "https://image.tmdb.org/t/p/w500"
    const languageFlag = flags[original_language]


    return (
        <div className={style.card}>
            <figure>
                <img className={style.film_image} src={`${pathImage}${poster_path}`} />
            </figure>
            <div className={style.card_body}>
                <div className={style.titles}>
                    <h3>{title || name}</h3>
                    <h5>{original_title || original_name}</h5>
                </div>
                <div className={style.details}>
                    <div className={style.language}>
                        <p><span>Language:</span> {original_language}</p>
                        <img className={style.flag_image} src={languageFlag} />
                    </div>
                    <p><span>Vote:</span> {vote_average}</p>
                </div>
            </div>
        </div>
    )
}

export default Card