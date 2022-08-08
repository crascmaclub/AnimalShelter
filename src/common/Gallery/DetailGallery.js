import * as React from 'react';
import { Container, Typography, Box, Button, Grid, CircularProgress, Backdrop } from '@mui/material';
import { DetailImageCard } from '../Card/DetailImageCard'
import image from '../../Assets/index/butterfly.jpg'
import { Callout } from '../Callout/Callout';
// import { useRouter } from 'next/router'


export const DetailGallery = ({ data }) => {
    const processed_data = data[0]
    const [images, setImages] = React.useState(processed_data["Gallery"])
    const isImage = processed_data["Gallery"].length > 0 
    console.log(processed_data)
    return (
        <Container component='section' maxWidth='xl' sx={{
            py: '4%'
        }}>
            <Box className='gallery-header' >
                <Box sx={(theme) => ({
                    display: 'flex',
                    justifyContent: 'center'
                })}>
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
                        Kho Ảnh
                    </Typography>
                </Box>
            </Box>

            <Grid container spacing={'2%'} className='gallery-images'
                sx={{
                    pb: '4%'
                }}
            >
                {images.map((item,index) => {
                    return(
                        <DetailImageCard key={index} data={item} source={image} />
                    )
                })}

                {isImage == false ? (
                    <Callout color={'#F7936F'} title="Không có ảnh" description={'Loài động vật này hiện chưa có ảnh minh họa'} />
                ) : (
                    null
                )}
            </Grid>

        </Container >
    );
    // }

}
