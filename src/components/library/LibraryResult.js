import React from 'react'
import { Container, Backdrop, Typography, CircularProgress, Box, Button, Select, MenuItem, FormControl, InputLabel, Grid, Pagination } from '@mui/material';
import { LibraryCard } from '../../common/Card/LibraryCard'

export const LibraryResult = ({ area, type, setArea, setType, field, apiData }) => {
    const [loading, setLoading] = React.useState(false)
    const listHeaders = ['Ăn thịt', 'Ăn cỏ', 'Thủy sinh', 'Trên cạn']
    const continentsVN = ['Châu Á', 'Châu Âu', 'Châu Đại Dương', 'Bắc Mỹ', 'Nam Mỹ', 'Châu Nam Cực', 'Châu Phi']
    const continentsEN = ['Asia', 'Europe', 'Oceania', 'North-America', 'South-America', 'Antarctica', 'Africa']
    const [page, setPage] = React.useState(1);
    const [data, setData] = React.useState([])
    const [tmpData, setTmpData] = React.useState([])
    const [pageData, setPageData] = React.useState([])
    const [error, setError] = React.useState('')

    const handleOnClickHeaderButton = (e) => {
        setType(e.target.name)
        // setLoading(true)
    }

    const handleChange = (event) => {
        if (event.target.value != 0) {
            const index = continentsVN.indexOf(event.target.value)
            setArea([continentsEN[index], event.target.value]);
            let tmp = []
            for (let i = 0; i < data.length; i++) {
                if (data[i]["Location Map"]) {
                    if (data[i]["Location Map"][0] == continentsEN[index]) {
                        tmp.push(data[i])
                    }
                }
            }

            setTmpData(tmp)
            let tmpPageData = []
            if (tmp.length > 18) {
                for (let index = 0; index < 18; index++) {
                    tmpPageData.push(tmp[index])
                }
            } else {
                for (let index = 0; index < tmp.length; index++) {
                    tmpPageData.push(tmp[index])
                }
            }
            setPageData(tmpPageData)
        } else {
            setTmpData(data)
            let tmpPageData = []
            for (let index = 0; index < 18; index++) {
                tmpPageData.push(data[index])
            }
            setPageData(tmpPageData)
        }

        // setLoading(true)
    };

    const handleChangePagination = (event, value) => {
        setPage(value);
        let tmp = []
        for (let index = (value - 1) * 18; index < value * 18; index++) {
            tmp.push(tmpData[index])
        }
        setPageData(tmp)
    };

    React.useEffect(() => {
        fetch("https://fbi2022-animal-shelter-api.herokuapp.com/get-all-animal")
            .then((res) => res.json())
            .then(
                (result) => {
                    setLoading(true);
                    setData(result);
                    setTmpData(result);
                    let tmp = []
                    for (let index = 0; index < 18; index++) {
                        tmp.push(result[index])
                    }
                    setPageData(tmp)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setLoading(true);
                    setError(error);
                }
            );
    }, [])

    React.useEffect(() => {
        // REAL TIME SEARCH
        // if (field.animalName != '') {
        //     let tmp = []

        //     for (let index = 0; index < data.length; index++) {
        //         let base_str = data[index]["name"].toLowerCase()
        //         let check_str = field.animalName.toLowerCase()
        //         let check = base_str.includes(check_str)
        //         if (check) {
        //             tmp.push(data[index])
        //         }
        //     }

        //     setTmpData(tmp)

        //     let tmpPage = []
        //     for (let index = 0; index < tmp.length; index++) {
        //         tmpPage.push(tmp[index])
        //     }
        //     setPageData(tmpPage)
        // } else {
        //     setTmpData(data)
        //     let tmpPage = []
        //     for (let index = 0; index < 18; index++) {
        //         tmpPage.push(data[index])
        //     }
        //     setPageData(tmpPage)
        // }

        // ---------------------------------------------------------

        // On submit search
        console.log(field)
        if (field.animalName != '') {
            let tmp = []

            for (let index = 0; index < data.length; index++) {
                let base_str = data[index]["name"].toLowerCase()
                let check_str = field.animalName.toLowerCase()
                let check = base_str.includes(check_str)
                if (check) {
                    tmp.push(data[index])
                }
            }

            setTmpData(tmp)

            let tmpPage = []
            for (let index = 0; index < tmp.length; index++) {
                tmpPage.push(tmp[index])
            }
            setPageData(tmpPage)
        } else {
            setTmpData(data)
            let tmpPage = []
            for (let index = 0; index < 18; index++) {
                tmpPage.push(data[index])
            }
            setPageData(tmpPage)
        }

    }, [field])

    if (error) {
        return <>{error.message}</>;
    } else if (!loading) {
        return (
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#4C6FFF' }}
                open={true}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CircularProgress color="inherit" />
                    <Typography variant='h4' sx={{ fontSize: '1.5rem', fontFamily: 'Inter, sans-serif', color: '#fff', pt: '8%' }}>
                        Đang lấy dữ liệu
                    </Typography>
                </Box>

            </Backdrop>
        )
    } else {
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
                        <Box className='leftGroup' sx={{ width: '100%', display: { sm: 'none', xs: 'none' } }}>
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
                            ml:'auto'
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
                                    <MenuItem sx={{ fontFamily: 'Inter,sans-serif', fontWeight: 'bold' }} value={0}>Bỏ chọn</MenuItem>
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
                            {pageData.map((item, index) => {
                                return (
                                    <LibraryCard key={index} data={item} />
                                )
                            })}
                        </Grid>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', pt: '4%' }}>
                        <Pagination count={Math.floor(tmpData.length / 18)} defaultPage={1} siblingCount={0} boundaryCount={2} shape="rounded" page={page} onChange={handleChangePagination} />
                    </Box>
                </Container>
            </Box>
        )
    }


}
