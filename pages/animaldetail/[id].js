import React from 'react'
import { useRouter } from 'next/router'
import { Grid, Typography, Box, Paper, Button } from '@mui/material';

export const Detail = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>Detail</div>
    )
}
