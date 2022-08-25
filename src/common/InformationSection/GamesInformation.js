import * as React from 'react';
import { Container, Typography, Box, Grid, Button, Paper, Dialog, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import test from '../../Assets/project/game_preview.png'
// import { useRouter } from 'next/router'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const GamesInformation = ({ data }) => {
    const [appear, setAppear] = React.useState(false)

    const handleClick = () => {
        setAppear(!appear)
    }
    const handleClose = () => {
        setAppear(false);
    };

    return (
        <Box component='section' className="InformationSection" >
            <Container maxWidth="xl" sx={{}}>
                <Box>
                    <Box sx={{ px: '12%', py: 8, borderBottom: '1px solid #4C6FFF' }} >
                        <Typography variant='body2' sx={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: '400'
                        }}>
                            Các trò chơi
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
                            Mục tiêu của chúng tôi
                        </Typography>
                    </Box>

                </Box>
                <Box sx={{ px: '12%', pt: 3, pb: 5 }}>
                    <Typography variant='body1' sx={(theme) => ({
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '1rem',
                        color: '#4F4F4F'
                    })}>
                        Chúng tôi mang đến cho những người dùng những trò chơi vô cùng vui nhộn, thú vị và đồng thời cũng rất bổ ích khi cung cấp cho người dùng những kiến thức cơ bản về các loài động vật khác nhau dưới hình thức các tựa game. Đồng thời, qua những tựa game vui nhộn đó, chúng tôi cũng mong muốn rằng mọi người sẽ có thêm hứng thú trong việc tìm hiểu về các loài động vật và từ đó mang con người và các loài động vật hoang dã lại gần nhau hơn.
                    </Typography>
                </Box>

                <Box>
                    <Box sx={{ px: '12%', py: 8, borderBottom: '1px solid #4C6FFF' }} >
                        <Typography variant='body2' sx={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: '400'
                        }}>
                            Trải nghiệm
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
                            Các trò chơi của chúng tôi
                        </Typography>
                    </Box>

                </Box>
                <Box sx={{ px: '12%', pt: 3, pb: 5 }}></Box>

                <Grid container sx={{pb:'4%'}} >
                    <Grid item lg={4} sm={6} xs={12} >
                        <Paper elevation={4} sx={{
                            p: '2%',
                            borderRadius: '16px'
                        }}>
                            <Box sx={{ height: 'auto', width: '100%%', display: 'flex', justifyContent: 'flex-end' }} >
                                <Box component='img' src={test.src} alt='Ảnh game động vật' sx={(theme) => ({
                                    width: '100%',
                                    height: 'auto',
                                    aspectRatio: '16 / 9',
                                    objectFit: 'cover',
                                    borderRadius: '16px'
                                })} />
                            </Box>

                            <Box sx={{
                                px: '5%',
                                pt: '3%'
                            }}>
                                <Box sx={{
                                    pb: '4%'
                                }}>
                                    <Typography variant='body1' sx={(theme) => ({
                                        fontFamily: 'Inter, sans-serif',
                                        color: '#425466',
                                        pl: '0.5%',
                                        [theme.breakpoints.down("md")]: {
                                            fontSize: '0.8rem'
                                        },
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: '0.75rem'
                                        },
                                    })}>
                                        Tựa game giúp mọi người có trải nghiệm được tự tay chăm nuôi các loài động vật khác nhau. Việc chăm sóc không chỉ
                                    </Typography>
                                </Box>

                                <Button
                                    variant='contained'
                                    // onClick={handleClick}
                                    component='a'
                                    href='http://sebastianmihai.com/subpages/animalkeeper/keeper.html'
                                    target="_blank"
                                    sx={(theme) => ({
                                        backgroundColor: '#4C6FFF',
                                        color: '#FFF',
                                        boxShadow: 'none',
                                        borderRadius: '6px',
                                        my: '3%',
                                        fontFamily: 'Inter, san-serif',
                                        [theme.breakpoints.down("md")]: {
                                            fontSize: '0.6rem',
                                        },
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: '0.5rem',
                                        },
                                    })}
                                >
                                    Trải nghiệm ngay
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>

                <Dialog
                    open={appear}
                    TransitionComponent={Transition}
                    keepMounted
                    fullWidth={true}
                    maxWidth={'md'}
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Animal Feeding"}</DialogTitle>
                    <DialogContent>
                        <Box sx={(theme) => ({
                            width: '100%',
                            height: '700px',
                            [theme.breakpoints.down("lg")]: {
                                heiht: '650px'
                            },
                            [theme.breakpoints.down("md")]: {
                                height: '550px'
                            },
                            [theme.breakpoints.down("sm")]: {
                                height: '450px'
                            },
                        })} >
                            <iframe style={{ width: "100%", height: "100%" }} frameborder="0" allowfullscreen mozallowfullscreen="true"
                                webkitallowfullscreen="true"
                                src={"http://sebastianmihai.com/subpages/animalkeeper/keeper.html"}> </iframe>
                        </Box>
                    </DialogContent>
                </Dialog>
            </Container>
        </Box>
    );
}
