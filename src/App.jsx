//Axios
import axios from "axios"
//React router
import { BrowserRouter, Route, Routes } from "react-router-dom"
//Context
import GlobalContext from "./context/GlobalContext.js"
//Layouts
import DefaultLayout from "./layouts/DefaultLayout.jsx"
import BlankLayout from "./layouts/BlankLayout.jsx"
//Pages
import NotFound from "./pages/NotFound/NotFound.jsx"
import Home from "./pages/Home/Home.jsx"

function App() {

  return (
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
  )
}

export default App
