import style from "./NotFound.module.css"
//React router
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <main>
            <section>
                <div className={style.body}>
                    <h1>404 <span>Pagina non trovata</span></h1>
                    <Link className={style.link} to="/" >Torna alla Home</Link>
                </div>
            </section>
        </main>
    )
}

export default NotFound