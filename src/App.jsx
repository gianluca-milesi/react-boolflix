//Axios
import axios from "axios"
import { API_BASE_URI } from "./config.js"
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

  function fetchFilmsByTitle(film = "") {
    axios.get(`${API_BASE_URI}&query=${film}`)
      .then((res) => {
        setFilms(res.data.results)
      })
      .catch((err) => {
        console.error(err)
      })
  }




  return (
    <GlobalContext.Provider value={{ films, fetchFilmsByTitle }}>
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
