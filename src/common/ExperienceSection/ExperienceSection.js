import * as React from 'react';
import { Container, Backdrop, Typography, CircularProgress, Box, Button, Select, MenuItem, FormControl, InputLabel, Grid, Pagination } from '@mui/material';
import test from '../../Assets/project/hero-image.jpg'
import { EBSCard } from '../Card/EBSCard';
// import { useRouter } from 'next/router'


export const ExperienceSection = ({ data }) => {
    const listHeaders = ['Định Công']
    const areas = ['Hà Nội']
    const [type,setType] = React.useState(0)
    const [value, setValue] = React.useState()
    const sample = {
        'Temperature': "28°C",
        'Humidity': "65%",
        'Abnormal Phenomenon Frequency': "1-2 lần",
        'Number Of Species Affected': "Chưa rõ",
        'Influence Level': "An toàn"
    }

    const handleOnClickHeaderButton = (e) => {
        setType(e.target.name)
        // setLoading(true)
    }

    const handleChange = (event) => { 
        setValue(event.target.value)
    }

    return (
        <Box component='section' className="InformationSection" >
            <Container maxWidth="xl" sx={{}}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                    <Box sx={{ py: 3 }} >
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
                            Trải Nghiệm
                        </Typography>
                    </Box>

                </Box>
                <Box sx={{ pt: 3, pb: 5, display: 'flex', justifyContent: 'center', borderTop: '1px solid #4C6FFF' }}>
                    <Typography variant='body1' sx={(theme) => ({
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '1rem',
                        color: '#4F4F4F'
                    })}>
                        Cùng tìm hiểu về môi trường các loài động vật sinh sống với sản phẩm của chúng tôi
                    </Typography>
                </Box>
            </Container>
            <Container maxWidth='xl' sx={{}}>
                {/* Result Header */}
                <Box className='resultHeader'
                    sx={(theme) => ({
                        flexGrow: 0,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        pb: '3%',
                        [theme.breakpoints.down("sm")]: {
                            flexDirection: 'column'
                        },
                    })}>
                    <Box className='leftGroup' sx={{ width: '100%', display: { sm: 'flex', xs: 'none' } }}>
                        {listHeaders.map((item, index) => {
                            return (
                                <Button
                                    variant='contained'
                                    key={index}
                                    name={index}
                                    onClick={handleOnClickHeaderButton}
                                    className={type == index ? 'triggered' : ''}
                                    sx={(theme) => ({
                                        backgroundColor: '#FFF',
                                        color: '#18191F',
                                        boxShadow: 'none',
                                        fontFamily: 'Inter, san-serif',
                                        mr: '2%',
                                        [theme.breakpoints.down("md")]: {
                                            fontSize: '0.6rem',
                                        },
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: '0.5rem',
                                        },
                                        '&:hover': {
                                            backgroundColor: '#4C6FFF',
                                            color: '#FFF'
                                        }
                                    })}
                                >
                                    {item}
                                </Button>
                            )
                        })}
                    </Box>
                    <Box sx={{
                        ml: 'auto'
                    }}>
                        <FormControl
                            sx={(theme) => ({
                                minWidth: 180,
                                [theme.breakpoints.down("sm")]: {
                                    minWidth: "300px",
                                },
                                '& > div': {
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: '1rem'
                                    },
                                }
                            })} size="small">
                            <InputLabel id="area" sx={(theme) => ({
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: '1rem'
                                },
                            })} >Vùng</InputLabel>
                            <Select
                                labelId="area"
                                id="area"
                                value={value}
                                label="Vùng"
                                onChange={handleChange}
                                sx={(theme) => ({
                                    // width: '100%'
                                })}
                            >
                                <MenuItem sx={{ fontFamily: 'Inter,sans-serif', fontWeight: 'bold' }} value={0}>Bỏ chọn</MenuItem>
                                {
                                    areas.map((item, index) => {
                                        return (
                                            <MenuItem
                                                key={index}
                                                value={item}
                                                sx={{
                                                    fontFamily: 'Inter,sans-serif',
                                                }}
                                            >
                                                {item}
                                            </MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Box>
                </Box>

                <EBSCard data={sample} />
            </Container>
        </Box>
    );
}
