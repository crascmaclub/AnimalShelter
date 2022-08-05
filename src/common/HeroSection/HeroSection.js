import * as React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import hero_img from '../../Assets/index/HeroImage2.png'
// import { useRouter } from 'next/router'


export const HeroSection = ({backgroundImg, title, description, isDescription, isButton, isInput}) => {
    return (
        <Box sx={{
            backgroundImage: `url(${hero_img.src})`,
            backgroundColor: '#27272E',
            backgroundPosition: 'center'
        }}>
            <Container maxWidth='xl' sx={{ padding: '0 2% !important' }} >
                <Typography variant='h1'
                    sx={(theme) => ({
                        fontFamily: 'Inter, san-serif',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '5rem',
                        pt: '8%',
                        width: { md: '60%', xs: '92%' },
                        [theme.breakpoints.down("md")]: {
                            fontSize: '3.5rem',
                        },

                    })}
                >
                    Sừng tê giác không khác móng tay con người
                </Typography>
                <Typography variant='body1'
                    sx={{
                        fontFamily: 'Inter, san-serif',
                        color: '#fff',
                        fontSize: '1rem',
                        pt: 4,
                        width: { md: '55%', xs: '76%' }
                    }}
                >
                    Tuy sừng tê giác không hề mang những khả năng chữa bệnh ‘kì diệu’, hay là thần dược như nhiều người đồn thổi nhưng hàng năm vẫn có hàng trăm, hàng ngàn cá thể tê giác bị săn bắt và lấy sừng trái phép. Chính vì thế, cùng nhau chúng ta hãy chung tay chống lại tệ nạn này bằng cách nâng cao nhận thức của bản thân cũng như những người xung quanh về giống loài đáng yêu này nhé.
                </Typography>
                <Box sx={{
                    pt: 4,
                    pb: "12%",
                }}>
                    <Button
                        variant='contained'
                        sx={{
                            backgroundColor: '#FFF',
                            color: '#16192C',
                            fontWeight:'600',
                            "&:hover": {
                                backgroundColor: '#EDF2F7'
                            }
                        }}
                    >
                        Tìm hiểu ngay
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
