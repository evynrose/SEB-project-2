import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import CatBreeds from "./components/Catbreeds"
import.meta.env.VITE_API_KEY

//create variables for use within our code 
// const [catInfo, setCatInfo] = React.useState('null')
// const [search, setSearch] = React.useState('null')

function App() {
  return <Router>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catbreeds" element={<CatBreeds />} /> 
      </Routes>
    </main>
  </Router>
}

export default App