import * as React from 'react';
import { Container, Typography, Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import texture from '../../Assets/index/texture.png'
import cta_bg from '../../Assets/index/sus_cta_bg.png'
// import { useRouter } from 'next/router'

export const CTASection = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            console.log(values)
        },
    });

    return (
        <Box sx={(theme) => ({
            backgroundImage: `url(${cta_bg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        })} >
            <Container maxWidth='xl' >
                <Box sx={{ width: { md: '50%', xs: '80%' }, py: '10%' }}>
                    <Typography variant='h3' sx={(theme) => ({
                        fontFamily: 'Inter, san-serif',
                        color: '#27272E',
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
                        Nhận thông báo mới về các các dự án mới trong tương lai
                    </Typography>
                    <Box component='form' onSubmit={formik.handleSubmit} sx={{ pt: { md: '2%', xs: '4%' } }}>
                        <TextField
                            id='email'
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            label="Email"
                            variant="outlined"
                            required
                            size='small'
                            sx={(theme) => ({
                                width: '50%',
                                '& > div': {
                                    borderRadius: '5px 0px 0px 5px!important',
                                    background: '#fff',
                                },
                                '& > div > fieldset': {
                                    borderColor: '#fff'
                                },
                                '& > div > input': {
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: '0.4rem',
                                    },
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: '0.3rem',
                                    },
                                },
                                '& > label ': {
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: '0.55rem',
                                    },
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: '0.45rem',
                                    },
                                },
                            })}
                        />
                        <Button
                            variant='contained'
                            type='submit'
                            onClick={formik.handleSubmit}
                            sx={(theme) => ({
                                width: 'max-content',
                                background: `url(${texture.src}) no-repeat`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                fontFamily: 'Inter, san-serif',
                                color: '#FFF',
                                fontWeight: '600',
                                "&:hover": {
                                    backgroundColor: '#EDF2F7'
                                },
                                [theme.breakpoints.down("md")]: {
                                    fontSize: '0.5rem',
                                },
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: '0.4rem',
                                },
                                filter: 'drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25))',
                                borderRadius: '0px 5px 5px 0px',
                            })}
                        >
                            Search
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
