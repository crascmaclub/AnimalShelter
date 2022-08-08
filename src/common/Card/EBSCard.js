import React from 'react'
import { Grid, Typography, Box, Paper, Button } from '@mui/material';

export const EBSCard = ({ data }) => {
    const facts = [
        ['Temperature', 'Nhiệt độ: '],
        ['Humidity', 'Độ ẩm: '],
        ['Abnormal Phenomenon Frequency', 'Tần suất hiện tượng bất thường: '],
        ['Number Of Species Affected', 'Số lượng cá thể bị ảnh hưởng: '],
    ]

    const features = [
        ['Influence Level', 'Mức độ ảnh hưởng: '],
    ]

    return (
        <Paper elevation={3} sx={{ my: 8 }}>
            <Box sx={(theme) => ({
                px: 8,
                pt: 4,
                display: 'flex',
                justifyContent: 'space-between',
                [theme.breakpoints.down("md")]: {
                    flexDirection: 'column'
                },
                [theme.breakpoints.down("sm")]: {
                    px: 2
                },
            })}>
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
                        Thông tin cơ bản
                    </Typography>
                    <Box sx={(theme) => ({
                        py: 2
                    })}>
                        {facts.map((item, index) => {
                            return (
                                <Box key={index} sx={{ display: 'flex' }} >
                                    <Typography key={index} variant='body1'
                                        sx={(theme) => ({
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
                                    <Typography key={index} variant='body1' sx={(theme) => ({
                                        py: 1,
                                        pl: 1,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: '600',
                                        fontSize: '1.25rem',
                                        [theme.breakpoints.down("md")]: {
                                            fontSize: '1rem'
                                        },
                                    })}>
                                        {data[item[0]] ? data[item[0]] : 'Chưa biết'}
                                    </Typography>
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
                <Box sx={(theme) => ({
                    [theme.breakpoints.down("md")]: {
                        py: 2,
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
                        Tình trạng
                    </Typography>
                    <Box sx={(theme) => ({
                        pt: 2
                    })}>
                        {features.map((item, index) => {
                            return (
                                <Box key={index} sx={{ display: 'flex' }} >
                                    <Typography key={index} variant='body1' sx={(theme) => ({
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
                                    <Typography key={index} variant='body1' sx={(theme) => ({
                                        pl: 1,
                                        py: 1,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: '600',
                                        fontSize: '1.25rem',
                                        [theme.breakpoints.down("md")]: {
                                            fontSize: '1rem'
                                        },
                                    })}>
                                        {data[item[0]] ? data[item[0]] : 'Chưa biết'}
                                    </Typography>
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}
