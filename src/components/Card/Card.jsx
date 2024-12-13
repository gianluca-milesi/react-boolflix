import style from "./Card.module.css"
import { flags } from "../../config.js"
import placeholder from "../../assets/placeholder.jpg"
//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faStar as faStarEmpty } from "@fortawesome/free-solid-svg-icons"


function Card({ item = {} }) {

    const { poster_path, title, original_title, original_language, vote_average, overview } = item //Movies
    const { name, original_name } = item //TV Series

    const pathImage = "https://image.tmdb.org/t/p/w342"
    const languageFlag = flags[original_language]

    const stars = Math.ceil((vote_average || 0) / 2)

    return (
        <>
            <div className={style.card}>
                <figure>
                    <img className={style.film_image} src={`${pathImage}${poster_path}` || placeholder} />
                </figure>
                <div className={style.card_body}>
                    <div className={style.titles}>
                        <h3>{title || name}</h3>
                        <h5>{original_title || original_name}</h5>
                    </div>
                    <div className={style.details}>
                        <p className={style.overview}><strong>Overview:</strong> {overview}</p>
                        <div className={style.language}>
                            <p><span>Language:</span> {original_language}</p>
                            <img className={style.flag_image} src={languageFlag} />
                        </div>
                        <div className={style.stars}>
                            {[...Array(5)].map((_, index) => (
                                <FontAwesomeIcon
                                    key={index}
                                    icon={index < stars ? faStar : faStarEmpty}
                                    className={`${index < stars ? style.star_full : style.star_empty}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card