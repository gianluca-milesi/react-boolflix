import style from "./Home.module.css"
//Hooks
import { useContext } from "react"
//Components
// import SearchBar from "../../components/SearchBar/SearchBar"
import Card from "../../components/Card/Card"
import GlobalContext from "../../context/GlobalContext"


function Home() {

    const { films } = useContext(GlobalContext)


    return (
        <main>
            <section>
                <div className="container">
                    <p>Home Page</p>
                </div>
            </section>

            {/* <section>
                <div className="container">
                    <SearchBar />
                </div>
            </section> */}

            <section>
                <div className="container">
                    <div className="row">
                        {films.map((movie) => (
                            <div key={movie.id} className="col-4">
                                <Card item={movie} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home