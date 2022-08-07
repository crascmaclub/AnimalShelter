import React from 'react'
import { useRouter } from 'next/router'
import { Grid, Typography, Box, Paper, Button } from '@mui/material';

export default function Detail() {
    const router = useRouter()
    const { id } = router.query
    return (
      <div>
        Hello
      </div>
    )
  }