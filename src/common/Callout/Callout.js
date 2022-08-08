import * as React from 'react';
import { Container, Typography, Box, Button, Paper } from '@mui/material';
// import { useRouter } from 'next/router'

export const Callout = ({ title, description, color }) => {

    return (
        <Paper elevation={3} sx={{ display: 'flex' }}>
            <Box sx={{ minWidth: '10px', backgroundColor: '#4C6FFF' }}></Box>
            <Box sx={{ pl: 2, py: 2 }} >
                <Typography variant='h2'
                    sx={(theme) => ({
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '1.5rem',
                        color: color,
                        fontWeight: '700',
                        [theme.breakpoints.down("sm")]: {
                            fontSize: '1rem',
                        },
                    })} >
                    {title}
                </Typography>
                <Typography variant='body1'
                    sx={(theme) => ({
                        pt: 1,
                        fontFamily: 'Inter, sans-serif',
                        [theme.breakpoints.down("sm")]: {
                            fontSize: '0.8rem',
                        },
                    })} >
                    {description}
                </Typography>
            </Box>
        </Paper>
    );
}
