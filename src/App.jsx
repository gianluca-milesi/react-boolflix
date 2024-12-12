//Axios
import axios from "axios"
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

function App() {

  const [films, setFilms] = useState([])

  function fetchFilms() {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=086f17d86aa6687746c193c96c659fe8&query=${search}`)
      .then((res) => {
        setFilms(res.data.results)
      })
      .catch((err) => {
        console.error(err)
      })
  }




  return (
    <GlobalContext.Provider value={{ films, fetchFilms }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />}></Route>
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
