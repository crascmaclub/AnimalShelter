import React from 'react'
import Head from 'next/head'
import {
  Container,
  Backdrop,
  Typography,
  CircularProgress,
  Box,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Pagination,
  Skeleton,
  Snackbar,
  Alert,
} from '@mui/material';
import { HeroSection } from '../src/common/HeroSection/HeroSection';
import { LibraryCard } from '../src/common/Card/LibraryCard'

import libray_bg from '../src/Assets/library/HeroImagefixed.png'

export const getStaticProps = async () => {
  const res = await fetch("https://fbi2022-animal-shelter-api.herokuapp.com/get-animal-page?page=1");
  const data = await res.json();


  return {
    props: {
      data: data
    }
  }
}


export default function Home({ data }) {
  let initialValues = {
    animalName: '',
  }
  const [search, setSearch] = React.useState(initialValues);
  const [type, setType] = React.useState(0);
  const [area, setArea] = React.useState('');
  const [loading, setLoading] = React.useState(false)

  const listHeaders = ['Ăn thịt', 'Ăn cỏ', 'Thủy sinh', 'Trên cạn']
  const continentsVN = ['Châu Á', 'Châu Âu', 'Châu Đại Dương', 'Bắc Mỹ', 'Nam Mỹ', 'Châu Nam Cực', 'Châu Phi']
  const continentsEN = ['Asia', 'Europe', 'Oceania', 'North-America', 'South-America', 'Antarctica', 'Africa']
  const [page, setPage] = React.useState(1);
  const [clientData, setClientData] = React.useState([])
  const [tmpData, setTmpData] = React.useState([])
  const [pageData, setPageData] = React.useState(data)
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState('')

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleOnClickHeaderButton = (e) => {
    setType(e.target.name)
    // setLoading(true)
  }

  const handleChange = (event) => {
    if (event.target.value != 0) {
      const index = continentsVN.indexOf(event.target.value)
      setArea([continentsEN[index], event.target.value]);
      let tmp = []
      for (let i = 0; i < clientData.length; i++) {
        if (clientData[i]["Location Map"]) {
          if (clientData[i]["Location Map"][0] == continentsEN[index]) {
            tmp.push(clientData[i])
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
      setTmpData(clientData)
      setPageData(data)
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
    setLoading(true);
    fetch("https://fbi2022-animal-shelter-api.herokuapp.com/get-all-animal")
      .then((res) => res.json())
      .then(
        (result) => {
          setClientData(result);
          setTmpData(result);
          if(tmpData){
            setLoading(false)
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setError(error);
          setOpen(true)
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

    // Query API Search
    // console.log(search)
    // if (search.animalName != '') {

    //   let check_str = search.animalName.toLowerCase()

    //   fetch(`https://fbi2022-animal-shelter-api.herokuapp.com/search-animal?name=${check_str}`)
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       setTmpData(result)

    //       let tmpPage = []
    //       for (let index = 0; index < result.length; index++) {
    //         tmpPage.push(result[index])
    //       }
    //       setPageData(tmpPage)
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       setError(error);
    //       setOpen(true)
    //     }
    //   );
    // } else {
    //   setPageData(data)
    // }
    // -----------------------------------------------------------

    // On submit search
    console.log(search)
    if (search.animalName != '') {
      let tmp = []

      for (let index = 0; index < clientData.length; index++) {
        let base_str = clientData[index]["name"].toLowerCase()
        let check_str = search.animalName.toLowerCase()
        let check = base_str.includes(check_str)
        if (check) {
          tmp.push(clientData[index])
        }
      }

      setTmpData(tmp)

      let tmpPage = []
      for (let index = 0; index < tmp.length; index++) {
        tmpPage.push(tmp[index])
      }
      setPageData(tmpPage)
    } else {
      setTmpData(clientData)
      setPageData(data)
    }

  }, [search])

  return (
    <main>

      <HeroSection loading={loading} field={search} setSearch={setSearch} isInput={true} backgroundImg={libray_bg} title={'Cùng khám phá các sự thật thú vị về các loài động vật '} />

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
              ml: 'auto'
            }}>
              {loading ? (
                <Skeleton variant="rounded" width={180} height={60} />
              ) : (
                <FormControl
                  sx={
                    (theme) => ({
                      minWidth: 180,
                      [theme.breakpoints.down("sm")]: {
                        minWidth: "337px",
                      },
                      '& > div': {
                        [theme.breakpoints.down("sm")]: {
                          fontSize: '0.7rem'
                        },
                      }
                    })
                  } size="small">
                  <InputLabel id="area" sx={
                    (theme) => ({
                      [theme.breakpoints.down("sm")]: {
                        fontSize: '0.7rem'
                      },
                    })
                  } >Vùng</InputLabel>
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
              )}

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

          {loading == false && (
            <Box sx={{ display: 'flex', justifyContent: 'center', pt: '4%' }}>
              <Pagination count={Math.floor(tmpData.length / 18)} defaultPage={1} siblingCount={0} boundaryCount={2} shape="rounded" page={page} onChange={handleChangePagination} />
            </Box>
          )}

          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              {error}
            </Alert>
          </Snackbar>

        </Container >
      </Box >
    </main >
  )
}
