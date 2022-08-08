import React from 'react'
import { Grid, Typography, Box, Paper, Button } from '@mui/material';

export const DetailCard2 = ({ data }) => {
    const facts = [
        ['Prey', 'Con mồi: '],
        ['Name Of Young', 'Tên con non: '],
        ['Group Behavior', 'Tập tính quần thể: '],
        ['Estimated Population Size', 'Số lượng quần thể: '],
        ['Biggest Threat', 'Mối đe dọa lớn nhất: '],
        ['Most Distinctive Feature', 'Đặc điểm nổi bật nhất: '],
        ['Other Name(s)', 'Các tên khác: '],
        ['Gestation Period', 'Thời kì mang thai: '],
        ['Habitat', 'Môi trường sống: '],
        ['Diet', 'Chế độ ăn: '],
        ['Average Litter Size', 'Trung bình con sinh ra: '],
        ['Lifestyle', 'Lối sống: '],
        ['Location', 'Nơi sống: '],
        ['Group', 'Nhóm: ']
    ]

    const features = [
        ['Color', 'Màu cơ thể: '],
        ['Skin Type', 'Loại da: '],
        ['Top Speed', 'Tốc độ cao nhất: '],
        ['Lifespan', 'Tuổi thọ: '],
        ['Weight', 'Cân nặng: '],
        ['Length', 'Chiều dài: '],
        ['Age of Sexual Maturity', 'Tuổi giao phối: '],
        ['Age of Weaning', 'Tuổi cai sữa: ']
    ]

    const processed_data = data[0]

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
                        Sự thật thú vị
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
                                        {processed_data[item[0]] ? processed_data[item[0]] : 'Chưa biết'}
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
                        Đặc điểm vật lý
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
                                        {processed_data[item[0]] ? processed_data[item[0]] : 'Chưa biết'}
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
