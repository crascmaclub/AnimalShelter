import * as React from 'react';
import { Container, Typography, Box, Button, Grid, CircularProgress, Backdrop } from '@mui/material';
import { GalleryCard4_6, GalleryCard1, GalleryCard9_16 } from '../GalleryCard/GalleryCard'
import image from '../../Assets/index/butterfly.jpg'
// import { useRouter } from 'next/router'

export const Gallery = ({ apiData }) => {
    // const [loading, setLoading] = React.useState(false)
    // const [data, setData] = React.useState([])
    // const [error, setError] = React.useState('')
    let col1 = []
    let col2 = []
    let col3 = []
    console.log(apiData)

    let tmp = []
    let col = 0
    let count = 0
    for (let index = 0; index < 10; index++) {
        tmp.push(apiData[index])
        count += 1
        if (count == 3) {
            count = 0
            if (col == 0) {
                col1 = tmp
            } else if (col == 1) {
                col2 = tmp
            } else if (col == 2) {
                col3 = tmp
            }
            tmp = []
            col += 1
        }
    }

    // React.useEffect(() => {
    //     fetch("https://fbi2022-animal-shelter-api.herokuapp.com/get-thumbnails")
    //         .then((res) => res.json())
    //         .then(
    //             (result) => {
    //                 setLoading(true);
    //                 setData(result);
    //                 let tmp = []
    //                 let col = 0
    //                 let count = 0
    //                 for (let index = 0; index < 10; index++) {
    //                     tmp.push(result[index])
    //                     count += 1
    //                     if (count == 3) {
    //                         count = 0
    //                         if (col == 0) {
    //                             setCol1(tmp)
    //                         } else if (col == 1) {
    //                             setCol2(tmp)
    //                         } else if (col == 2) {
    //                             setCol3(tmp)
    //                         }
    //                         tmp = []
    //                         col += 1
    //                     }
    //                 }
    //             },
    //             // Note: it's important to handle errors here
    //             // instead of a catch() block so that we don't swallow
    //             // exceptions from actual bugs in components.
    //             (error) => {
    //                 setLoading(true);
    //                 setError(error);
    //             }
    //         );
    // }, [])

    // if (error) {
    //     return <>{error.message}</>;
    // } else if (!loading) {
    //     return (
    //         <Backdrop
    //             sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#4C6FFF' }}
    //             open={true}
    //         >
    //             <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    //                 <CircularProgress color="inherit" />
    //                 <Typography variant='h4' sx={{ fontSize: '1.5rem', fontFamily: 'Inter, sans-serif', color: '#fff', pt: '8%' }}>
    //                     Đang lấy dữ liệu
    //                 </Typography>
    //             </Box>
    //         </Backdrop>
    //     )
    // } else {
    return (
        <Container component='section' maxWidth='xl' sx={{
            py: '4%'
        }}>
            <Box className='gallery-header' >
                <Typography variant='body2' sx={(theme) => ({
                    fontFamily: 'Inter, san-serif',
                    color: '#425466',
                    fontSize: '1.125rem',
                    fontWeight: '400',
                    pb: '1%',
                    [theme.breakpoints.down("md")]: {
                        fontSize: '0.6rem',
                    },
                })}>
                    03 - Thư viện
                </Typography>
                <Box sx={(theme) => ({
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    [theme.breakpoints.down("md")]: {
                        flexDirection: 'column',
                        justifyContent: 'center',
                    },
                })}>
                    <Typography variant='h1' sx={(theme) => ({
                        fontFamily: 'Inter, san-serif',
                        fontWeight: '700',
                        fontSize: '4rem',
                        [theme.breakpoints.down("md")]: {
                            fontSize: '2.5rem',
                        },
                        [theme.breakpoints.down("sm")]: {
                            fontSize: '1.5rem',
                        },
                    })}>
                        Chúng tôi cung cấp thông tin đầy đủ nhất về các loài động thực vật trong thiên nhiên
                    </Typography>
                    <Box sx={(theme) => ({
                        pl: '5%',
                        [theme.breakpoints.down("md")]: {
                            pt: 2,
                            pl: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        },
                    })}>
                        <Typography variant='body1' sx={(theme) => ({
                            fontFamily: 'Inter, san-serif',
                            color: '#425466',
                            fontSize: '1.125rem',
                            fontWeight: '400',
                            pb: 2,
                            [theme.breakpoints.down("md")]: {
                                fontSize: '0.65rem',
                            },
                        })}>
                            AnimalShelter cung cấp cho người dùng một nguồn thông tin phong phú về các giống loài khác nhau để giúp mọi người thoải mái tìm tòi, khám phá.
                        </Typography>
                        <Button
                            variant='contained'
                            component='a'
                            href='/library'
                            sx={(theme) => ({
                                backgroundColor: '#4C6FFF',
                                color: '#FFF',
                                fontWeight: '600',
                                [theme.breakpoints.down("md")]: {
                                    width: 'max-content',
                                    fontSize: '0.5rem'
                                },
                            })}
                        >
                            Xem thêm
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Grid container spacing={'2%'} className='gallery-images'
                sx={{
                    py: '4%'
                }}
            >
                <Grid item xs={4}>
                    <GalleryCard9_16 data={col1[0]} source={image} />
                    <GalleryCard1 data={col1[1]} source={image} />
                    <GalleryCard4_6 data={col1[2]} source={image} />
                </Grid>
                <Grid item xs={4}>
                    <GalleryCard4_6 data={col2[0]} source={image} />
                    <GalleryCard9_16 data={col2[1]} source={image} />
                    <GalleryCard1 data={col2[2]} source={image} />
                </Grid>
                <Grid item xs={4}>
                    <GalleryCard1 data={col3[0]} source={image} />
                    <GalleryCard4_6 data={col3[1]} source={image} />
                    <GalleryCard9_16 data={col3[2]} source={image} />
                </Grid>
            </Grid>

        </Container >
    );
    // }

}
