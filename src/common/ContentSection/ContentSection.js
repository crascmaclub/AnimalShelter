import * as React from 'react';
import { Container, Typography, Box, Button, CircularProgress } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { findSpeciesInArea } from '../../utils/FindingAnimal'
import { ResponsiveDialog } from '../Dialog/Dialog'
// import { useRouter } from 'next/router'

export const ContentSection = ({ src, dark, reverse, section, title, description, isText, isButton }) => {
    const theme = dark ? '#333333' : '#fff';
    const fontColor = dark ? '#fff' : '#18191F'
    const sectionColor = dark ? '#E2E8F0' : '#425466'
    const isReverse = reverse ? 'row-reverse' : 'row'
    const contentPaddingLeft = reverse ? '0%' : '4%'
    const contentPaddingRight = reverse ? '4%' : '0%'
    const justifyContent = reverse ? 'space-between' : null
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState([])
    const [done, setDone] = React.useState(false)
    const [number, setNumber] = React.useState(0)
    const [open, setOpen] = React.useState(true);

    const getLocation = () => {
        setLoading(true)
        setDone(false)
        setOpen(true)
        fetch("https://fbi2022-animal-shelter-api.herokuapp.com/get-map-data")
            .then((res) => res.json())
            .then(
                (result) => {
                    setData(result)
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(showPosition);
                    } else {
                        console.log("Browser doesn't not support GeolocationAPI or user does not accept website get location")
                    }
                    setLoading(false)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log('error', error)
                    setLoading(false)
                }
            );
    }
    const showPosition = (position) => {
        // console.log("Run showPos")
        // x.innerHTML = "Latitude: " + position.coords.latitude +
        // "<br>Longitude: " + position.coords.longitude;

        let occurrence_animal = findSpeciesInArea(position.coords.longitude, position.coords.latitude, data)

        if (occurrence_animal.length != 0) {
            setNumber(occurrence_animal.length)
            setDone(true)
        } else {
            setDone(true)
        }

    }

    const handleOnClick = () => {
        getLocation()
    }

    return (
        <Box component='section' sx={{
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
                <Box sx={{ height: { xl: '520px', md: '480px', sm: '280px', xs: 'auto' }, width: { xs: '100%' }, display: 'flex', justifyContent: 'flex-end' }} >
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
                    <Typography variant='body2' sx={(theme) => ({
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
                    <Typography variant='body1' sx={(theme) => ({
                        fontFamily: 'Inter, san-serif',
                        color: fontColor,
                        fontSize: '1.125rem',
                        fontWeight: '400',
                        pt: 4,
                        [theme.breakpoints.down("md")]: {
                            fontSize: '0.6rem',
                            pt: 2
                        },
                    })}>
                        {description}
                    </Typography>
                    {isText && (
                        <Box component='a' href='#' sx={(theme) => ({
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
                            <ArrowForwardIcon sx={(theme) => ({
                                my: 'auto', color: '#4C6FFF', ml: 2,
                                [theme.breakpoints.down("md")]: {
                                    fontSize: '0.65rem',
                                    ml: 0.5
                                },
                            })} />
                        </Box>
                    )}

                    {isButton && (
                        <>
                            {loading == false ? (
                                <Button
                                    variant='contained'
                                    onClick={handleOnClick}
                                    sx={(theme) => ({
                                        backgroundColor: '#FFF',
                                        fontFamily: 'Inter, san-serif',
                                        color: '#16192C',
                                        fontWeight: '600',
                                        mt: 4,
                                        "&:hover": {
                                            backgroundColor: '#EDF2F7'
                                        },
                                        [theme.breakpoints.down("md")]: {
                                            fontSize: '0.5rem',
                                            mt: 2
                                        },
                                    })}
                                >
                                    Thử ngay
                                </Button>
                            ) : (
                                <Button
                                    variant='outlined'
                                    onClick={handleOnClick}
                                    disabled
                                    endIcon={<CircularProgress sx={{ color: '#D8D8D8', width: '30px!important', height: '30px!important' }} />}
                                    sx={(theme) => ({
                                        backgroundColor: '#C8C8C8',
                                        border: '1px solid #C8C8C8',
                                        fontFamily: 'Inter, san-serif',
                                        color: '#fff',
                                        fontWeight: '600',
                                        mt: 4,
                                        "&:hover": {
                                            backgroundColor: '#EDF2F7'
                                        },
                                        [theme.breakpoints.down("md")]: {
                                            fontSize: '0.5rem',
                                            mt: 2
                                        },
                                    })}
                                >
                                    Tìm kiếm
                                </Button>
                            )}
                        </>
                    )}
                    {done && (
                        <ResponsiveDialog
                            open={open}
                            setOpen={setOpen}
                            isButton={true}
                            href={'/library'}
                            btn_content={'Tìm hiểu thêm'}
                            title={`Có ${number} loài động vật quý hiếm xung quanh bạn.`}
                            description={'Trong đó có thể có cả những loài với số lượng cá thể sụt giảm nhanh chóng do tác động của môi trường cũng như con người. Cùng xem các bài viết cũng như tìm hiểu về các loài động vật nhé.'} />
                    )}
                </Box>
            </Container>
        </Box>
    );
}
