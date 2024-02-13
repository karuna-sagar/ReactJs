import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material'
function App() {
  return (
    <Box width="400px" >
      NavBar
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExcerciseDetail />} />
      </Routes>
    </Box>
  )
}

export default App
