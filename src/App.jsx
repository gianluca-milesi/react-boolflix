//Axios
import axios from "axios"
import { API_MOVIES_URI } from "./config.js"
import { API_SERIES_URI } from "./config.js"
//React router
import { BrowserRouter, Route, Routes } from "react-router-dom"
//Hooks
import { useState } from "react"
//Context
import GlobalContext from "./context/GlobalContext.js"
//Layouts
import DefaultLayout from "./layouts/DefaultLayout.jsx"
import BlankLayout from "./layouts/BlankLayout.jsx"
//Pages
import NotFound from "./pages/NotFound/NotFound.jsx"
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"


function App() {

  const [films, setFilms] = useState([])
  // const [filteredFilms, setFilteredFilms] = useState([]);

  //FUNZIONI
  //Fetch Movies
  function fetchMoviesByTitle(movie = "") {
    axios.get(`${API_MOVIES_URI}&query=${movie}`)
      .then((res) => {
        setFilms(res.data.results)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  //Fetch TV Series
  function fetchSeriesByTitle(serie = "") {
    axios.get(`${API_SERIES_URI}&query=${serie}`)
      .then((res) => {
        setFilms(res.data.results)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  // //Filter
  // function filterFilms(searched) {
  //   const filtered = films.filter((film) =>
  //     (film.title.toLowerCase().includes(searched.toLowerCase())) ||
  //     (film.name.toLowerCase().includes(searched.toLowerCase()))
  //   )
  //   setFilteredFilms(filtered)
  // }


  return (
    <GlobalContext.Provider value={{ films, fetchMoviesByTitle, fetchSeriesByTitle, filteredFilms, filterFilms }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Route>
          <Route element={<BlankLayout />}>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
