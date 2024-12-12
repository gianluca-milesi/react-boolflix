import SearchBar from "../../components/SearchBar/SearchBar"
import style from "./Home.module.css"

function Home() {
    return (
        <main>
            <section>
                <div className="container">
                    <p>Home Page API ESEMPIO: https://api.themoviedb.org/3/discover/movie?api_key=086f17d86aa6687746c193c96c659fe8</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <SearchBar />
                </div>
            </section>
        </main>
    )
}

export default Home