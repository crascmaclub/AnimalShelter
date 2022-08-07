import React from 'react'
import { Grid, Typography, Box, Paper, Button } from '@mui/material';
import test from '../../Assets/library/aardvark.jpg'

export const LibraryCard = ({ data }) => {
    const titles = ['Fun fact:  ', 'Chiều dài:  ', 'Vòng đời:  ', 'Cân nặng:  ']
    const keys = ['Fun Fact', 'Length', 'Lifespan', 'Weight']

    // console.log(data)
    return (
        <Grid item lg={4} sm={6} xs={12} >
            <Paper elevation={4} sx={{
                p: '2%',
                borderRadius: '16px'
            }}>
                <Box sx={{ height: 'auto', width: '100%%', display: 'flex', justifyContent: 'flex-end' }} >
                    <Box component='img' src={data['Gallery'] ? data['Gallery'][0] : test.src} alt='Ảnh động vật' sx={(theme) => ({
                        width: '100%',
                        height: 'auto',
                        aspectRatio: '16 / 9',
                        objectFit: 'cover',
                        borderRadius: '16px'
                    })} />
                </Box>

                <Box sx={{
                    px: '5%'
                }}>
                    <Typography variant='h5' sx={(theme) => ({
                        fontFamily: 'Inter, sans-serif',
                        color: '#16192C',
                        fontWeight: '700',
                        py: '3%',
                        fontSize: '1.5rem',
                        [theme.breakpoints.down("md")]: {
                            fontSize: '1rem'
                        },
                        [theme.breakpoints.down("sm")]: {
                            fontSize: '0.8rem'
                        },
                    })}>
                        {data['name'] ? data['name'] : 'Không có tên thường'}
                        {/* {name} */}
                    </Typography>
                    <Box sx={{
                        pb: '4%'
                    }}>
                        {titles.map((item, index) => {
                            if (data[keys[index]]) {
                                return (
                                    <Box key={item} sx={{ display: 'flex', }}>
                                        <Typography variant='body1' sx={(theme) => ({
                                            fontFamily: 'Inter, sans-serif',
                                            color: '#425466',
                                            fontWeight: '700',
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: '0.8rem'
                                            },
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: '0.75rem'
                                            },
                                        })}>
                                            {item}
                                        </Typography>
                                        <Typography variant='body1' sx={(theme) => ({
                                            fontFamily: 'Inter, sans-serif',
                                            color: '#425466',
                                            pl: '0.5%',
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: '0.8rem'
                                            },
                                            [theme.breakpoints.down("sm")]: {
                                                fontSize: '0.75rem'
                                            },
                                        })}>
                                            {data[keys[index]] ? data[keys[index]] : ''}
                                        </Typography>
                                    </Box>
                                )
                            }
                        })}
                    </Box>

                    <Button
                        variant='contained'
                        // onClick={handleClick}
                        component='a'
                        href={`/animaldetail/${data['_id']['$oid']}`}
                        sx={(theme) => ({
                            backgroundColor: '#4C6FFF',
                            color: '#FFF',
                            boxShadow: 'none',
                            borderRadius: '6px',
                            my: '3%',
                            fontFamily: 'Inter, san-serif',
                            [theme.breakpoints.down("md")]: {
                                fontSize: '0.6rem',
                            },
                            [theme.breakpoints.down("sm")]: {
                                fontSize: '0.5rem',
                            },
                        })}
                    >
                        Tìm hiểu thêm
                    </Button>
                </Box>
            </Paper>
        </Grid>
    )
}
