import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material'
import NavBar from './components/NavBar'
import ExcerciseDetail from './pages/ExcerciseDetail'
import Home from './pages/Home'
import Footer from './components/Footer'
function App() {
  return (
    <Box width="400px" >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExcerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
