import React from 'react'

import { SEO } from '../src/components/SEO/index'
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

import libray_bg from '../src/Assets/library/HeroImagefixed.jpg'

export const getStaticProps = async () => {
  const res = await fetch(`https://animal-shelter-6wb7.onrender.com/get-animal-page?page=1`);
  const data = await res.json();

  // const allAnimal = await fetch("https://animal-shelter-6wb7.onrender.com/get-all-animal");
  // const allAnimalData = await allAnimal.json();

  return {
    props: {
      data: data,
      // animalData: allAnimalData,
    }
  }
}

export default function Home({ data, url }) {
  let initialValues = {
    animalName: '',
  }
  const [search, setSearch] = React.useState(initialValues);
  const [type, setType] = React.useState(0);
  const [area, setArea] = React.useState('');
  const [loading, setLoading] = React.useState(false)

  const listHeaders = ['Ăn thịt', 'Ăn cỏ', 'Thủy sinh', 'Trên cạn']
  const continentsVN = ['Châu Á', 'Châu Âu', 'Châu Đại Dương', 'Bắc Mỹ', 'Nam Mỹ', 'Nam Cực', 'Châu Phi']
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
      const value = String(event.target.value)
      setArea([continentsEN[index], event.target.value]);
      let tmp = []
      for (let i = 0; i < clientData.length; i++) {
        if (clientData[i]["Location Map"]) {
          let check = String(clientData[i]["Location Map"][0])
          if (check.toLowerCase() == value.toLowerCase()) {
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
    fetch(`https://animal-shelter-6wb7.onrender.com/get-animals-base-on-demand?demand=${'name,Gallery,Fun Fact,Length,Lifespan,Weight,_id,Location Map'}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setClientData(result);
          setTmpData(result);
          if (tmpData) {
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

    //   fetch(process.env.REACT_APP_BACKEND_LINK+`search-animal?name=${check_str}`)
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
      <SEO
        url={`${'https://animal-shelter-omega.vercel.app'}/library`}
        openGraphType="website"
        schemaType="article"
        title={"Thư viện động vật"}
        description={"Với thư viện động vật, chúng tôi cung cấp cho người dùng các thông tin chi tiết về các loài động vật để người dùng có thể hiểu hơn và thấu hiểu những gì động vật đã phải trải qua. Đặc biệt, trang cũng hỗ trợ tiếng Việt - điều nhiều trang thông tin chưa có"}
        image={"https://static01.nyt.com/images/2022/01/16/fashion/VIRAL-LIBRARY/VIRAL-LIBRARY-articleLarge.jpg?quality=75&auto=webp&disable=upscale"}
      />

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
