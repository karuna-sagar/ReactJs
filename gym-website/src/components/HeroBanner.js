import React from 'react'
import { Stack, Box, Typography, Button } from '@mui/material'
import HeroBannerImage from "../assets/images/banner.png"
const HeroBanner = () => {
    return (
        <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px" >
            <Typography color="#FF2625" fontWeight="600" fontSize="600" >
                Fitness Club
            </Typography>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
                Sweat, Smile <br />
                And Repeat
            </Typography>
            <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
                Check out the most effective exercises personalized to you
            </Typography>
            <Button variant='contained' color="error" href='#'>Explore Exercise</Button>
            <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
        </Box>
    )
}

export default HeroBanner
