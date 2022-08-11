import * as React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import test from '../../Assets/project/hero-image.jpg'
// import { useRouter } from 'next/router'


export const EBSHeroSection = ({ data }) => {

    return (
        <Box component='section' className="HeroSection" >
            <Container maxWidth='xl' sx={{ position: 'relative' }}>
                <Box  >
                    <Box sx={{ width: '100%' }} >
                        <Box component='img' src={test.src} alt='Ảnh động vật' sx={(theme) => ({
                            width: '100%',
                            height: 'auto',
                            aspectRatio: '16 / 9',
                            objectFit: 'cover',
                            filter: 'brightness(50%)'
                            // borderRadius: '16px',
                            // [theme.breakpoints.down("sm")]: {
                            //     aspectRatio: '12 / 9',
                            // },
                        })} />
                    </Box>
                </Box>
                <Typography variant='h1' sx={(theme) => ({
                    position: 'absolute',
                    bottom: '0',
                    color: '#fff',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '700',
                    px: 8,
                    pb: 6,
                    fontSize: '5rem',
                    width: { md: '70%', xs: '80%' },
                    [theme.breakpoints.down("lg")]: {
                        fontSize: '4rem',
                    },
                    [theme.breakpoints.down("md")]: {
                        fontSize: '3rem',
                        px: 6,
                        pb: 4,
                    },
                    [theme.breakpoints.down("sm")]: {
                        fontSize: '1.8rem',
                        px: 4,
                        pb: 2,
                    },

                })}>
                    Hệ thống kiểm soát
                    môi trường sinh thái
                </Typography>

            </Container>
        </Box>
    );
}
