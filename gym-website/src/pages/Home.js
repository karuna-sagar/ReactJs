import { Box } from '@mui/material'
import React from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Excercises from '../components/Excercises'

function Home() {
    return (
        <Box>
            <HeroBanner />
            <SearchExercises />
            <Excercises />
        </Box>
    )
}

export default Home
