import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Viewer from './pages/Viewer'
import About from './pages/About'
import Header from './component/Header'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/Viewer"
          element={
            <>
              <Viewer />
              <Header />
            </>
          }
        />
        <Route
          path="/Gallery"
          element={
            <>
              <Gallery />
              <Header />
            </>
          }
        />
        <Route
          path="/About"
          element={
            <>
              <About />
              <Header />
            </>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
