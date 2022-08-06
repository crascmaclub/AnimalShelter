import * as React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { useRouter } from 'next/router'

export const ContentSection = ({ src, dark, reverse, section, title, description, isText, isButton }) => {
    const theme = dark ? '#333333' : '#fff';
    const fontColor = dark ? '#fff' : '#18191F'
    const sectionColor= dark ? '#E2E8F0' : '#425466'
    const isReverse = reverse ? 'row-reverse' : 'row'
    const contentPaddingLeft = reverse ? '0%' : '4%'
    const contentPaddingRight = reverse ? '4%' : '0%'
    const justifyContent = reverse ? 'space-between' : null

    return (
        <Box sx={{
            backgroundColor: theme,
        }}>
            <Container maxWidth='xl'
                sx={(theme) => ({
                    py: '4%',
                    display: 'flex',
                    alignItems: 'center',
                    flexFlow: isReverse,
                    justifyContent: justifyContent,
                    [theme.breakpoints.down("sm")]: {
                        flexDirection: 'column'
                    },
                })}
            >
                <Box sx={{ height: { xl: '520px', md: '480px', sm:'280px',  xs: 'auto' }, width:{xs: '100%'}, display:'flex', justifyContent:'flex-end' }} >
                    <Box component='img' src={src.src} alt='Giới thiệu về AnimalShelter' sx={(theme) => ({
                        width: 'auto',
                        height: '100%',
                        aspectRatio: '1',
                        objectFit: 'cover',
                        [theme.breakpoints.down("sm")]: {
                            aspectRatio: '16 / 9',
                            width: '100%',
                            height: 'auto',
                        },
                    })} />
                </Box>

                <Box sx={(theme) => ({
                    pl: contentPaddingLeft,
                    pr: contentPaddingRight,
                    [theme.breakpoints.down("md")]: {
                        pt: '3%'
                    },
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
                        [theme.breakpoints.down("md")]: {
                            fontSize: '1.5rem',
                        },
                    })}>
                        {title}
                    </Typography>
                    <Typography variant='body1' sx={(theme)=>({
                        fontFamily: 'Inter, san-serif',
                        color: fontColor,
                        fontSize: '1.125rem',
                        fontWeight: '400',
                        pt: 4,
                        [theme.breakpoints.down("md")]: {
                            fontSize: '0.6rem',
                            pt:2
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

                    { isButton && (
                        <Button
                            variant='contained'
                            sx={(theme) => ({
                                backgroundColor: '#FFF',
                                fontFamily:'Inter, san-serif',
                                color: '#16192C',
                                fontWeight:'600',
                                mt:4,
                                "&:hover": {
                                    backgroundColor: '#EDF2F7'
                                },
                                [theme.breakpoints.down("md")]: {
                                    fontSize: '0.5rem',
                                    mt:2
                                },
                            })}
                        >
                            Thử ngay
                        </Button>
                    )}
                </Box>
            </Container>
        </Box>
    );
}
