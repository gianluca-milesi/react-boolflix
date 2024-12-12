import style from "./Card.module.css"

function Card(){
    return(
        <div className="card">
            <figure>
                <img src="..." />
            </figure>
            <div className="card_body">
                <h3>Titolo</h3>
                <h4>Titolo Originale</h4>
                <p>Lingua</p>
                <p>Voto</p>
            </div>
        </div>
    )
}

export default Card