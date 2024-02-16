import { Box } from '@mui/material'
import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Excercises from '../components/Excercises'

function Home() {
    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([])
    return (
        <Box>
            <HeroBanner />
            <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises} />
            <Excercises bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises} />
        </Box>
    )
}

export default Home
