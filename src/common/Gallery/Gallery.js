import * as React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { GalleryCard4_6, GalleryCard1, GalleryCard9_16 } from '../GalleryCard/GalleryCard'
import image from '../../Assets/index/butterfly.jpg'
// import { useRouter } from 'next/router'


export const Gallery = () => {
    return (
        <Container maxWidth='xl' sx={{
            py: '4%'
        }}>
            <Box className='gallery-header' >
                <Typography variant='body2' sx={{
                    fontFamily: 'Inter, san-serif',
                    color: '#425466',
                    fontSize: '1.125rem',
                    fontWeight: '400',
                    pb: '1%'
                }}>
                    03 - Thư viện
                </Typography>
                <Box sx={(theme) => ({
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    [theme.breakpoints.down("md")]: {
                        flexDirection: 'column',
                        justifyContent: 'center',
                    },
                })}>
                    <Typography variant='h1' sx={(theme) => ({
                        fontFamily: 'Inter, san-serif',
                        fontWeight: '700',
                        fontSize: '4rem',
                        [theme.breakpoints.down("md")]: {
                            fontSize: '2.5rem',
                        },
                    })}>
                        Chúng tôi cung cấp thông tin đầy đủ nhất về các loài động thực vật trong thiên nhiên
                    </Typography>
                    <Box sx={(theme) => ({
                        pl: '5%',
                        [theme.breakpoints.down("md")]: {
                            pt: 2,
                            pl: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        },
                    })}>
                        <Typography variant='body1' sx={{
                            fontFamily: 'Inter, san-serif',
                            color: '#425466',
                            fontSize: '1.125rem',
                            fontWeight: '400',
                            pb: 2
                        }}>
                            AnimalShelter cung cấp cho người dùng một nguồn thông tin phong phú về các giống loài khác nhau để giúp mọi người thoải mái tìm tòi, khám phá.
                        </Typography>
                        <Button
                            variant='contained'
                            sx={(theme) => ({
                                backgroundColor: '#4C6FFF',
                                color: '#FFF',
                                fontWeight: '600',
                                [theme.breakpoints.down("md")]: {
                                    width: '16%'
                                },
                            })}
                        >
                            Xem thêm
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Grid container spacing={3} className='gallery-images' 
                sx={{
                    py:'4%'
                }}
            >
                <Grid item xs={4}>
                    <GalleryCard9_16 source={image} />
                    <GalleryCard1 source={image} />
                    <GalleryCard4_6 source={image} />
                </Grid>
                <Grid item xs={4}>
                    <GalleryCard4_6 source={image} />
                    <GalleryCard9_16 source={image} />
                    <GalleryCard1 source={image} />
                </Grid>
                <Grid item xs={4}>
                    <GalleryCard1 source={image} />
                    <GalleryCard4_6 source={image} />
                    <GalleryCard9_16 source={image} />
                </Grid>
                

            </Grid>

        </Container >
    );
}
