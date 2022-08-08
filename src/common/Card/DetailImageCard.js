import * as React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import image from '../../Assets/index/butterfly.jpg'
// import { useRouter } from 'next/router'


export const DetailImageCard = ({ data='' , source }) => {
    return (
        <Grid item xs={4}>
            <Box component='img' src={data? data : source.src} alt='Ảnh động vật' sx={(theme) => ({
                width: '100%',
                height: 'auto',
                aspectRatio: '1',
                objectFit: 'cover',
                mt: '2%',
            })} />
        </Grid>
    )
}

