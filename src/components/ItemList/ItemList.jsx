import style from "./ItemList.module.css";
//Components
import Card from "../Card/Card.jsx";
//Hooks
import { useRef } from "react";
//Restituisce una proprietà .current che mantiene lo stesso valore tra i vari render del componente


function ItemList({ title, items = [], id }) {
    const scrollContainerRef = useRef(null); //collegato alla ul

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({ left: -1000, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({ left: 1000, behavior: "smooth" });
    };
    //scrollBy metodo DOM che sposta la barra di scorrimento

    return (
        <section className={`${style.fetched_data_section} ${style[id]}`}>
            <div className={style.container}>
                <h2>{title}</h2>
                <button onClick={scrollLeft} className={style.scroll_button_left}>
                    ◀
                </button>
                <button onClick={scrollRight} className={style.scroll_button_right}>
                    ▶
                </button>
                <ul ref={scrollContainerRef} id={id} className={style.scroll_container}>
                    {items.map((item) => (
                        <li key={item.id} className={style.scroll_item}>
                            <Card item={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default ItemList;