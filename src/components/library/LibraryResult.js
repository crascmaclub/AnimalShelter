import React from 'react'
import { Container, Typography, Box, Button, Select, MenuItem, FormControl, InputLabel, Grid, Pagination } from '@mui/material';
import { LibraryCard } from '../../common/Card/LibraryCard'

export const LibraryResult = ({ area, type, setArea, setType }) => {
    const [loading, setLoading] = React.useState(false)
    const listHeaders = ['Ăn thịt', 'Ăn cỏ', 'Thủy sinh', 'Trên cạn']
    const continentsVN = ['Châu Á', 'Châu Âu', 'Châu Đại Dương', 'Bắc Mỹ', 'Nam Mỹ', 'Châu Nam Cực', 'Châu Phi']
    const continentsEN = ['Asia', 'Europe', 'Oceania', 'North-America', 'South-America', 'Antarctica', 'Africa']
    const [page, setPage] = React.useState(1);

    const handleOnClickHeaderButton = (e) => {
        setType(e.target.name)
        setLoading(true)
    }

    const handleChange = (event) => {
        const index = continentsVN.indexOf(event.target.value)
        setArea([continentsEN[index], event.target.value]);
        setLoading(true)
    };

    const handleChangePagination = (event, value) => {
        setPage(value);
    };

    return (
        <Box sx={{ py: '3%' }}>
            <Container maxWidth='xl' sx={(theme) => ({

            })}
            >
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
                    <Box className='leftGroup' sx={{ width: '100%', display: { sm: 'block', xs: 'none' } }}>
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

                    }}>
                        <FormControl
                            sx={(theme) => ({
                                minWidth: 180,
                                [theme.breakpoints.down("sm")]: {
                                    minWidth: "337px",
                                },
                                '& > div': {
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: '0.7rem'
                                    },
                                }
                            })} size="small">
                            <InputLabel id="area" sx={(theme) => ({
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: '0.7rem'
                                },
                            })} >Vùng</InputLabel>
                            <Select
                                labelId="area"
                                id="area"
                                value={area[1]}
                                label="Vùng"
                                onChange={handleChange}
                                sx={(theme) => ({
                                    // width: '100%'
                                })}
                            >
                                <MenuItem sx={{ fontFamily: 'Inter,sans-serif', fontWeight: 'bold' }} value="">Bỏ chọn</MenuItem>
                                {
                                    continentsVN.map((item, index) => {
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

                {/* Result Body */}
                <Box>
                    <Grid container spacing={'2%'} sx={{

                    }}>
                        <LibraryCard />
                        <LibraryCard />
                        <LibraryCard />
                        <LibraryCard />
                        <LibraryCard />
                        <LibraryCard />
                        <LibraryCard />
                        <LibraryCard />
                        <LibraryCard />
                        <LibraryCard />
                        <LibraryCard />
                        <LibraryCard />
                    </Grid>
                </Box>

                <Box sx={{display:'flex', justifyContent:'center', pt:'4%'}}>
                    <Pagination count={10} shape="rounded" page={page} onChange={handleChangePagination} />
                </Box>
            </Container>
        </Box>
    )
}
