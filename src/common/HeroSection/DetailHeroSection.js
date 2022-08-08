import * as React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import test from '../../Assets/library/aardvark.jpg'
// import { useRouter } from 'next/router'


export const DetailHeroSection = ({ data }) => {
    const processed_data = data[0]

    return (
        <Box component='section' className="HeroSection" >
            <Box sx={(theme) => ({
                py: '5%',
                px: '5%',
                height: { lg: '670px', md: '500px', sm: '260px', xs: '200px' },
                [theme.breakpoints.down("sm")]: {
                    p: '0%'
                },
            })} >
                <Box sx={{ height: '100%', width: 'auto', display: 'flex', justifyContent: 'flex-end' }} >
                    <Box component='img' src={processed_data["Gallery"] ? processed_data["Gallery"][0] : test.src} alt='Ảnh động vật' sx={(theme) => ({
                        width: 'auto',
                        height: '100%',
                        aspectRatio: '16 / 9',
                        objectFit: 'cover',
                        // borderRadius: '16px',
                        [theme.breakpoints.down("sm")]: {
                            aspectRatio: '12 / 9',
                        },
                    })} />
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#333333' }} >
                        <Box sx={{}}>
                            <Typography variant='h3'
                                sx={(theme) => ({
                                    fontFamily: 'Inter, sans-serif',
                                    color: '#FFF',
                                    fontSize: '2rem',
                                    fontWeight: '700',
                                    [theme.breakpoints.down("lg")]: {
                                        fontSize: '1.5rem'
                                    },
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: '1rem'
                                    },
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: '0.8rem'
                                    },
                                })}>
                                {processed_data["name"] && (processed_data["name"])}
                            </Typography>
                            <Typography variant='body1'
                                sx={(theme) => ({
                                    fontFamily: 'Inter, sans-serif',
                                    color: '#FFF', pt: '3%',
                                    fontSize: '1.5rem',
                                    fontWeight: '600',
                                    [theme.breakpoints.down("lg")]: {
                                        fontSize: '1rem'
                                    },
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: '0.9rem'
                                    },
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: '0.7rem'
                                    },
                                })}>
                                    {processed_data["Scientific Name"] ? processed_data["Scientific Name"] : 'Chưa rõ' }
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
