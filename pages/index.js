import Head from 'next/head'
import Homepage from '../src/components/index/Homepage'

export const getStaticProps = async () => {
  const res = await fetch("https://fbi2022-animal-shelter-api.herokuapp.com/get-thumbnails");
  const data = await res.json();
  console.log('hello')

  return {
    props: {
      data: data
    }
  }
}

export default function Home({data}) {
  return (
    <div>
      <Homepage data={data} />
    </div>
  )
}
  