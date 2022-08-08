import React from 'react'
import { useRouter } from 'next/router'
import { Grid, Typography, Box, Paper, Button, Container } from '@mui/material';
import { DetailHeroSection } from '../../src/common/HeroSection/DetailHeroSection'
import { Callout } from '../../src/common/Callout/Callout'
import { DetailCard1 } from '../../src/common/Card/DetailCard1'
import { DetailCard2 } from '../../src/common/Card/DetailCard2'
import { DetailGallery } from '../../src/common/Gallery/DetailGallery';

export default function Detail() {
    const router = useRouter()

    return (
        <Box>
            <Container maxWidth='xl' sx={{}} >
                <Box className={'DetailPageBody'} >
                    <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column', alignItems: 'center' }} >
                        <Typography variant='h1' sx={(theme) => ({
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '4rem',
                            fontWeight: '500',
                            pb: '4%',
                            [theme.breakpoints.down("lg")]: {
                                fontSize: '3.5rem',
                            },
                            [theme.breakpoints.down("md")]: {
                                fontSize: '3rem',
                            },
                            [theme.breakpoints.down("sm")]: {
                                fontSize: '2rem',
                                py: '4%',
                            },
                        })}>
                            Thông tin cơ bản
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}