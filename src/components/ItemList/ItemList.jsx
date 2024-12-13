import style from "./ItemList.module.css"
//Components
import Card from "../Card/Card.jsx"


function ItemList({ title, items = [] }) {
    return (
        <section className={style.movies_section}>
            <div className="container">
                <h2>{title}</h2>
            </div>
            <div className="container">
                <ul>
                    {items.map((item) => (
                        <li key={item.id}><Card item={item} /></li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ItemList