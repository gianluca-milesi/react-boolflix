import style from "./ItemList.module.css"
//Components
import Card from "../Card/Card.jsx"


function ItemList({ title, items = [] }) {
    return (
        <section className={style.fetched_data_section}>
            <div className="container">
                <h2>{title}</h2>
                <ul className="row">
                    {items.map((item) => (
                        <li key={item.id} className="col-4"><Card item={item} /></li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ItemList