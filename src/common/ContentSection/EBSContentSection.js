import * as React from 'react';
import { Container, Typography, Box, Button, CircularProgress } from '@mui/material';
import test from '../../Assets/project/mainboard.jpg'

// import { useRouter } from 'next/router'

export const EBSContentSection = ({ src, dark, reverse, section, title, description }) => {
    const blockTheme = dark ? '#333333' : '#fff';
    const fontColor = dark ? '#fff' : '#4F4F4F'
    const sectionColor = dark ? '#E2E8F0' : '#425466'
    const titleColor = dark ? '#FFF' : '#333333'
    const isReverse = reverse ? 'row-reverse' : 'row'

    return (
        <Box component='section' className="ContentSection" sx={(theme) => ({
            backgroundColor: blockTheme,
            py: '4%',
            px: '6%',
            pt: '0',
            [theme.breakpoints.down("xl")]: {
                px: 0
            },
        })}>
            <Container maxWidth='xl'
                sx={(theme) => ({
                    pt: '4%',
                    display: 'flex',
                    alignItems: 'center',
                    // flexFlow: isReverse,
                    // justifyContent: justifyContent,
                    [theme.breakpoints.down("sm")]: {
                        flexDirection: 'column'
                    },
                })}
            >
                <Box sx={{ pb: 4 }} >
                    <Typography variant='body2' sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: '400',
                        color: sectionColor
                    }}>
                        {section}
                    </Typography>
                    <Typography variant='h3' sx={(theme) => ({
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '3.875rem',
                        fontWeight: '500',
                        color: titleColor,
                        pt: 2,
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
                        {title}
                    </Typography>
                    <Typography variant='body1' sx={(theme) => ({
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '1rem',
                        color: fontColor,
                        pt: 2
                    })} >
                        {description}
                    </Typography>
                </Box>

            </Container>
            <Container maxWidth='xl' sx={{}} >
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexFlow: isReverse }} >
                    <Box component='img' src={src[0].src} alt='Ảnh minh họa' sx={(theme) => ({
                        width: '28%',
                        height: 'auto',
                        aspectRatio: '14 / 16',
                        objectFit: 'cover',
                        [theme.breakpoints.down("sm")]: {
                            display:'none'
                        },
                    })} />
                    <Box component='img' src={src[1].src} alt='Ảnh minh họa' sx={(theme) => ({
                        width: '68%',
                        height: 'auto',
                        aspectRatio: '16 / 9',
                        objectFit: 'cover',
                        [theme.breakpoints.down("sm")]: {
                            width: '100%',
                            height: 'auto',
                        },
                    })} />
                </Box>
            </Container>
        </Box>
    );
}
