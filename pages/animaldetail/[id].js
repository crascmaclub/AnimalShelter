
import React from 'react'
import { useRouter } from 'next/router'
import { Typography, Box, Container, Backdrop, CircularProgress } from '@mui/material';
import { DetailHeroSection } from '../../src/common/HeroSection/DetailHeroSection'
import { SEO } from '../../src/components/SEO/index'
import { Callout } from '../../src/common/Callout/Callout'
import { DetailCard1 } from '../../src/common/Card/DetailCard1'
import { DetailCard2 } from '../../src/common/Card/DetailCard2'
import { DetailGallery } from '../../src/common/Gallery/DetailGallery';


export async function getStaticProps({ params }) {
  const res = await fetch(`https://animalsheltedbacknew-production.up.railway.app/animal-detail?key=${params.id}`)
  const data = await res.json()

  return {
    props: {
      data: data,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const res = await fetch(`https://animalsheltedbacknew-production.up.railway.app/get-animals-base-on-demand?demand=${'_id'}`)
  const ids = await res.json()

  const paths = ids.map((id) => ({
    params: { id: id['_id']['$oid'] },
  }))
  // console.log('Paths:',paths)

  return {
    paths,
    fallback: true
  }
}


export default function Detail(props) {
  const router = useRouter()
  const { id } = router.query
  const [loading, setLoading] = React.useState(false)
  // const [data, setData] = React.useState([])
  const data = props.data
  const [error, setError] = React.useState('')
  // console.log('data: ', data)

  // React.useEffect(() => {
  //   if (!router.isReady) return;

  //   let uri = `https://animalsheltedbacknew-production.up.railway.app/animal-detail?key=${id}`
  //   console.log(uri)
  //   fetch(uri)
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setLoading(true);
  //         setData(result);
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         setLoading(true);
  //         setError(error);
  //       }
  //     );

  // }, [router.isReady])

  if (router.isFallback) {
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
      <Box>
        <SEO
          url={`${'https://animal-shelter-omega.vercel.app'}/animaldetail/${id}`}
          openGraphType="website"
          schemaType="article"
          title={data[0]["name"]}
          description={data[0]["Fun Fact"]}
          image={data[0]["Gallery"] ? data[0]["Gallery"][0] : "https://www.aspca.org/sites/default/files/behind-the-scenes-of-an-animal-rescue-main.jpg"}
        />
        <Container maxWidth='xl' sx={{}} >
          <DetailHeroSection data={data} />
          <Box className={'DetailPageBody'} >
            <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column', alignItems: 'center' }} >
              <Typography variant='h1' sx={(theme) => ({
                fontFamily: 'Inter, sans-serif',
                fontSize: '4rem',
                fontWeight: '500',
                pb: '4%',
                [theme.breakpoints.down("lg")]: {
                  fontSize: '3.5rem',
                },
                [theme.breakpoints.down("md")]: {
                  fontSize: '3rem',
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: '2rem',
                  py: '4%',
                },
              })}>
                Thông tin cơ bản
              </Typography>
            </Box>

            <Callout color={'#27272E'} title={'Sự thật thú vị'} description={data[0]["Fun Fact"]} />

            <DetailCard1 data={data} />

            <DetailCard2 data={data} />

            {data[0]['iframe'] ? (
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
                <iframe style={{ width: "100%", height: "100%" }} title="Pig" frameborder="0" allowfullscreen mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                  src={data[0]['iframe']}> </iframe>
              </Box>
            ) : (
              null
            )}

            <DetailGallery data={data} />
          </Box>
        </Container>
      </Box>
    )
  }
}