import style from "./Home.module.css"
//Hooks
import { useContext, useEffect } from "react"
//Components
import SearchBar from "../../components/SearchBar/SearchBar"
import Card from "../../components/Card/Card"
import GlobalContext from "../../context/GlobalContext"

function Home() {

    const { films, fetchFilms } = useContext(GlobalContext)

    useEffect(() => {
        fetchFilms()
    }, [])


    return (
        <main>
            <section>
                <div className="container">
                    <p>Home Page</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <SearchBar />
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <Card />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home