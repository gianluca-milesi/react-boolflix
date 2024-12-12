import style from "./Card.module.css"

function Card({ item = {} }) {

    const { poster_path, title, original_title, original_language, vote_average } = item

    return (
        <div className="card">
            <figure>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
            </figure>
            <div className="card_body">
                <h3>{title}</h3>
                <h4>{original_title}</h4>
                <p>{original_language}</p>
                <p>{vote_average}</p>
            </div>
        </div>
    )
}

export default Card