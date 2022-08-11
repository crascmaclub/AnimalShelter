import * as React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import test from '../../Assets/project/hero-image.jpg'
// import { useRouter } from 'next/router'


export const BasicInformationSection = ({ data }) => {

    return (
        <Box component='section' className="InformationSection" >
            <Container maxWidth="xl" sx={{}}>
                <Box>
                    <Box sx={{ px: '12%', py: 8, borderBottom: '1px solid #4C6FFF' }} >
                        <Typography variant='body2' sx={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: '400'
                        }}>
                            DỰ ÁN
                        </Typography>
                        <Typography variant='h3' sx={(theme) => ({
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '3.875rem',
                            fontWeight: '500',
                            color: '#333333',
                            [theme.breakpoints.down("md")]: {
                                fontSize: '3rem',
                            },
                            [theme.breakpoints.down("sm")]: {
                                fontSize: '2.5rem',
                            },
                            [theme.breakpoints.down("xs")]: {
                                fontSize: '2rem',
                            },
                        })}>
                            Cách hệ thống hoạt động.
                        </Typography>
                    </Box>

                </Box>
                <Box sx={{ px: '12%', pt: 3, pb: 5 }}>
                    <Typography variant='body1' sx={(theme) => ({
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '1rem',
                        color: '#4F4F4F'
                    })}>
                        Hệ thống bao gồm một mạng lưới các máy quét, máy đo nhiệt độ, độ ẩm được bố trí ở các địa điểm khác nhau trong nhưng khu vực được đánh giá là có tiềm ẩn những tác nhân có thể gây ra những ảnh hưởng xấu tới môi trường sống của các loài động vật ở các khu bảo tồn thiên nhiên. Mọi thông tin sẽ được thu thập và gửi về máy chủ, hiển thị trực tiếp lên trang web để người dùng có thể khám phá thêm về môi trường sống của động vật.
                    </Typography>
                    <Typography variant='body1' sx={(theme) => ({
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '1rem',
                        color: '#4F4F4F',
                        pt: 3
                    })}>
                        Chúng tôi đã chia chu trình hoạt động của hệ thống thành 3 giai đoạn để mọi người có hứng htus với dự án có thể dễ dàng tìm hiểu, khám phá những tiềm năng của dự án.
                    </Typography>
                </Box>
            </Container>

            <Container maxWidth='xl' sx={{}}>
                <Grid container spacing={'6%'} sx={{ py: '4%', pt: '2%' }} >
                    <Grid item xs={4} sx={{}}>
                        <Box sx={{ pb: 2, borderBottom: '1px solid #4C6FFF' }} >
                            <Typography variant='h5' sx={(theme) => ({
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '1.375rem',
                                fontWeight: '400',
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: '1.2rem',
                                },
                            })}>
                                Giai đoạn 1
                            </Typography>
                        </Box>
                        <Box sx={{ py: 3 }} >
                            <Typography variant='h2'
                                sx={(theme) => ({
                                    fontFamily: 'Inter,sans-serif',
                                    fontSize: '2.5rem',
                                    fontWeight: '400',
                                    color: '#333333',
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: '2rem',
                                    },
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: '1.7rem',
                                    },
                                    [theme.breakpoints.down("xs")]: {
                                        fontSize: '1.5rem',
                                    },
                                })}
                            >
                                Bố trí mạng lưới máy quét
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sx={{}}>
                        <Box sx={{ pb: 2, borderBottom: '1px solid #4C6FFF' }} >
                            <Typography variant='h5' sx={(theme) => ({
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '1.375rem',
                                fontWeight: '400',
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: '1.2rem',
                                },
                            })}>
                                Giai đoạn 2
                            </Typography>
                        </Box>
                        <Box sx={{ py: 3 }} >
                            <Typography variant='h2'
                                sx={(theme) => ({
                                    fontFamily: 'Inter,sans-serif',
                                    fontSize: '2.5rem',
                                    fontWeight: '400',
                                    color: '#333333',
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: '2rem',
                                    },
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: '1.7rem',
                                    },
                                    [theme.breakpoints.down("xs")]: {
                                        fontSize: '1.5rem',
                                    },
                                })}
                            >
                                Cập nhật thông tin về server
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sx={{}}>
                        <Box sx={{ pb: 2, borderBottom: '1px solid #4C6FFF' }} >
                            <Typography variant='h5' sx={(theme) => ({
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '1.375rem',
                                fontWeight: '400',
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: '1.2rem',
                                },
                            })}>
                                Giai đoạn 3
                            </Typography>
                        </Box>
                        <Box sx={{ py: 3 }} >
                            <Typography variant='h2'
                                sx={(theme) => ({
                                    fontFamily: 'Inter,sans-serif',
                                    fontSize: '2.5rem',
                                    fontWeight: '400',
                                    color: '#333333',
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: '2rem',
                                    },
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: '1.7rem',
                                    },
                                    [theme.breakpoints.down("xs")]: {
                                        fontSize: '1.5rem',
                                    },
                                })}
                            >
                                Hiển thị thông tin lên web
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
