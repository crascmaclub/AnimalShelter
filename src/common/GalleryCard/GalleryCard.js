import * as React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import image from '../../Assets/index/butterfly.jpg'
// import { useRouter } from 'next/router'


export const GalleryCard4_6 = ({ data, source }) => {
    return (
        <Box component='img' src={data["Gallery"] ? data["Gallery"][0] : source.src} alt='Ảnh động vật' sx={(theme) => ({
            width: '100%',
            height: 'auto',
            aspectRatio: '4 / 6',
            objectFit: 'cover',
            mt:'2%',
            borderRadius: '8px'
        })} />
    )
}

export const GalleryCard1 = ({ data, source }) => {
    return (

        <Box component='img' src={data["Gallery"] ? data["Gallery"][0] : source.src} alt='Ảnh động vật' sx={(theme) => ({
            width: '100%',
            height: 'auto',
            aspectRatio: '1',
            objectFit: 'cover',
            mt:'2%',
            borderRadius: '8px'
        })} />

    )
}

export const GalleryCard9_16 = ({ data, source }) => {
    return (

        <Box component='img' src={data["Gallery"] ? data["Gallery"][0] : source.src} alt='Ảnh động vật' sx={(theme) => ({
            width: '100%',
            height: 'auto',
            aspectRatio: '9 / 16',
            objectFit: 'cover',
            mt:'2%',
            borderRadius: '8px'
        })} />

    )
}

