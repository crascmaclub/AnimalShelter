import React from 'react'
import { Grid, Typography, Box, Paper, Button } from '@mui/material';

export const DetailCard1 = ({ data }) => {
    const plh = [
        ['Kingdom', 'Giới: '], 
        ['Phylum', 'Ngành: '], 
        ['Class', 'Lớp: '], 
        ['Order', 'Bộ: '], 
        ['Family', 'Họ: '], 
        ['Genus', 'Chi: '], 
        ['Scientific Name', 'Tên Khoa Học: ']
    ]
    const processed_data = data[0]
    // console.log(processed_data)
    return (
        <Paper elevation={3} sx={{ my: 8 }}>
            <Box sx={(theme) => ({
                px: 8,
                pt: 4,
                display: 'flex',
                justifyContent: 'space-between',
                [theme.breakpoints.down("md")]: {
                    flexDirection: 'column',
                },
                [theme.breakpoints.down("sm")]: {
                    px:2
                },
            })}>
                <Box sx={{}}>
                    <Box>
                        <Typography variant='h2' sx={(theme) => ({
                            fontFamily: 'Inter, sans-serif',
                            color: '#27272E',
                            fontSize: '2rem',
                            fontWeight: '700',
                            [theme.breakpoints.down("md")]: {
                                fontSize: '1.5rem'
                            },
                        })}>
                            Phân loại học
                        </Typography>
                        <Box sx={(theme) => ({
                            py: 2
                        })}>
                            {plh.map((item, index) => {
                                return (
                                    <Box key={index} sx={{ display: 'flex' }} >
                                        <Typography variant='body1' sx={(theme) => ({
                                            py: 1,
                                            fontFamily: 'Inter, sans-serif',
                                            color: '#4C6FFF',
                                            fontWeight: '600',
                                            fontSize: '1.25rem',
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: '1rem'
                                            },
                                        })}>
                                            {item[1]}
                                        </Typography>
                                        <Typography variant='body1' sx={(theme) => ({
                                            pl: 1,
                                            py: 1,
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: '600',
                                            fontSize: '1.25rem',
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: '1rem'
                                            },
                                        })}>
                                            {processed_data[item[0]] ? processed_data[item[0]] : 'Chưa biết'}
                                        </Typography>
                                    </Box>
                                )
                            })}
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant='h2' sx={(theme) => ({
                            fontFamily: 'Inter, sans-serif',
                            color: '#27272E',
                            fontSize: '2rem',
                            fontWeight: '700',
                            [theme.breakpoints.down("md")]: {
                                fontSize: '1.5rem'
                            },
                        })}>
                            Tình trạng bảo tồn
                        </Typography>
                        <Box sx={(theme) => ({
                            pt: 2
                        })}>
                            <Typography variant='body1' sx={(theme) => ({
                                py: 1,
                                fontFamily: 'Inter, sans-serif',
                                color: '#4C6FFF',
                                fontWeight: '600',
                                fontSize: '1.25rem',
                                [theme.breakpoints.down("md")]: {
                                    fontSize: '1rem'
                                },
                                [theme.breakpoints.up("md")]: {
                                    pb:4
                                },
                            })}>
                                {processed_data["Conservation Status"] ? processed_data["Conservation Status"] : "Chưa rõ"}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={(theme) => ({
                    [theme.breakpoints.down("md")]: {
                        py: 3,
                        pt: 1
                    },
                })} >
                    <Typography variant='h2' sx={(theme) => ({
                        fontFamily: 'Inter, sans-serif',
                        color: '#27272E',
                        fontSize: '2rem',
                        fontWeight: '700',
                        [theme.breakpoints.down("md")]: {
                            fontSize: '1.5rem'
                        },
                    })}>
                        Địa điểm sinh sống
                    </Typography>
                    <Box sx={(theme) => ({
                        pt: 2
                    })}>
                        <Typography variant='body1' sx={(theme) => ({
                            py: 1,
                            fontFamily: 'Inter, sans-serif',
                            color: '#4C6FFF',
                            fontWeight: '600',
                            fontSize: '1.25rem',
                            [theme.breakpoints.down("md")]: {
                                fontSize: '1rem'
                            },
                        })}>
                            {processed_data["Location Map"] ? processed_data["Location Map"][0] : "Chưa rõ"}
                        </Typography>
                        <Box component='img' src={processed_data["Location Map"] ? processed_data["Location Map"][1] : ''} alt='Ảnh động vật' sx={(theme) => ({
                            width: '100%',
                            height: 'auto',
                            aspectRatio: '8/4',
                            objectFit: 'cover',
                            mt: 2,
                        })} />
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}
