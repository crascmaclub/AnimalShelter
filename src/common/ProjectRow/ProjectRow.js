import * as React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { useRouter } from 'next/router'

export const ProjectRow = ({ src, dark, reverse, section, title, description, isText, developed }) => {
    const theme = dark ? '#333333' : '#fff';
    const fontColor = dark ? '#fff' : '#18191F'
    const sectionColor= dark ? '#E2E8F0' : '#425466'
    const isReverse = reverse ? 'row-reverse' : 'row'
    const justifyContent = reverse ? 'space-between' : null
    const contentPaddingLeft = reverse ? '11%' : '5%'
    const contentPaddingRight = reverse ? '5%' : '11%'

    return (
        <Box sx={{
            backgroundColor: theme,
        }}>
            <Box
                sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    flexFlow: isReverse,
                    justifyContent: justifyContent,
                    // [theme.breakpoints.down("sm")]: {
                    //     flexDirection: 'column'
                    // },
                })}
            >
                <Box sx={{ height: 'auto', width:'50%', display:'flex', justifyContent:'flex-end' }} >
                    <Box component='img' src={src.src} alt='Giới thiệu về AnimalShelter' sx={(theme) => ({
                        width: '100%',
                        height: 'auto',
                        aspectRatio: '5 / 4',
                        objectFit: 'cover',
                    })} />
                </Box>

                <Box sx={(theme) => ({
                    pl: contentPaddingLeft,
                    pr: contentPaddingRight,
                    [theme.breakpoints.down("xl")]: {
                        px:'2.5%'
                    },
                    // px:'5%',
                    width:'50%',
                })} >
                    <Typography variant='body2' sx={(theme) =>({
                        fontFamily: 'Inter, san-serif',
                        color: sectionColor,
                        fontSize: '1.125rem',
                        fontWeight: '400',
                        [theme.breakpoints.down("md")]: {
                            fontSize: '0.6rem',
                        },
                    })}>
                        {section}
                    </Typography>
                    <Typography variant='h3' sx={(theme) => ({
                        fontFamily: 'Inter, san-serif',
                        color: fontColor,
                        fontSize: '2.5rem',
                        fontWeight: '800',
                        pt: 1,
                        [theme.breakpoints.down("lg")]: {
                            fontSize: '2rem',
                        },
                        [theme.breakpoints.down("md")]: {
                            fontSize: '1.5rem',
                        },
                        [theme.breakpoints.down("sm")]: {
                            fontSize: '1rem',
                        },
                    })}>
                        {title}
                    </Typography>
                    <Typography variant='body1' sx={(theme)=>({
                        fontFamily: 'Inter, san-serif',
                        color: fontColor,
                        fontSize: '1.125rem',
                        fontWeight: '400',
                        pt: '8%',
                        [theme.breakpoints.down("lg")]: {
                            fontSize: '0.9rem',
                        },
                        [theme.breakpoints.down("md")]: {
                            fontSize: '0.6rem',
                        },
                        [theme.breakpoints.down("sm")]: {
                            display:'none'
                        },
                    })}>
                        {description}
                    </Typography>

                    {isText && (
                        <Box component='a' href='#' sx={(theme)=>({
                            pt: 4,
                            display: 'flex',
                            alignItem: 'center',
                            textDecoration: 'none',
                            [theme.breakpoints.down("md")]: {
                                pt: 2
                            },
                        })}>
                            <Typography variant='body1' sx={(theme) => ({
                                fontFamily: 'Inter, san-serif',
                                color: "#4C6FFF",
                                fontSize: '1.25rem',
                                fontWeight: '700',
                                [theme.breakpoints.down("md")]: {
                                    fontSize: '0.65rem',
                                },
                            })}>
                                Về chúng tôi
                            </Typography>
                            <ArrowForwardIcon sx={(theme) => ({ my: 'auto', color: '#4C6FFF', ml: 2, 
                                [theme.breakpoints.down("md")]: {
                                    fontSize: '0.65rem',
                                    ml: 0.5
                                },  
                            })} />
                        </Box>
                    )}

                    { developed ? (
                        <Button
                            variant='outlined'
                            sx={(theme) => ({
                                fontWeight:'600',
                                fontFamily:'Inter, san-serif',
                                mt:'8%',
                                border: '1px solid #EDF2F7 !important',
                                color: '#FFFFFF',
                                [theme.breakpoints.down("md")]: {
                                    fontSize: '0.5rem',
                                    // mt:2
                                },
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: '0.4rem',

                                },
                            })}
                        >
                            Đang phát triển
                        </Button>
                    ) : (
                        <Button
                            variant='contained'
                            sx={(theme) => ({
                                backgroundColor: '#FFF',
                                fontFamily:'Inter, san-serif',
                                color: '#16192C',
                                fontWeight:'600',
                                mt:'8%',
                                "&:hover": {
                                    backgroundColor: '#EDF2F7'
                                },
                                [theme.breakpoints.down("md")]: {
                                    fontSize: '0.5rem',
                                    // mt:2
                                },
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: '0.4rem',

                                },
                            })}
                        >
                            Tìm hiểu ngay
                        </Button>
                    )}
                </Box>
            </Box>
        </Box>
    );
}
