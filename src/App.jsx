//Axios
import axios from "axios"
import { API_MOVIES_URI } from "./config.js"
import { API_SERIES_URI } from "./config.js"
//React router
import { BrowserRouter, Route, Routes } from "react-router-dom"
//Context
import GlobalContext from "./context/GlobalContext.js"
//Hooks
import { useState } from "react"
//Layouts
import DefaultLayout from "./layouts/DefaultLayout.jsx"
import BlankLayout from "./layouts/BlankLayout.jsx"
//Pages
import NotFound from "./pages/NotFound/NotFound.jsx"
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"
import Main from "./components/Main/Main.jsx"


function App() {

  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [query, setQuery] = useState("")

  //FUNZIONI
  //Fetch Movies
  function fetchMoviesByTitle() {
    axios.get(`${API_MOVIES_URI}&query=${query}`)
      .then((res) => {
        setMovies(res.data.results)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  //Fetch TV Series
  function fetchSeriesByTitle() {
    axios.get(`${API_SERIES_URI}&query=${query}`)
      .then((res) => {
        setSeries(res.data.results)
      })
      .catch((err) => {
        console.error(err)
      })
  }


  return (
    <GlobalContext.Provider value={{ movies, series, query, setQuery, fetchMoviesByTitle, fetchSeriesByTitle }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
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