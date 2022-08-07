import React from 'react'
import { Navbar } from '../../common/Navbar/Navbar'
import { HeroSection } from '../../common/HeroSection/HeroSection'
import { LibraryResult } from './LibraryResult'
import { Footer } from '../../common/Footer/Footer'

import libray_bg from '../../Assets/library/HeroImagefixed.png'

const Library = () => {
  const [type, setType] = React.useState(0)
  const [area, setArea] = React.useState('');

  return (
    <div>
      <Navbar />

      <HeroSection isInput={true} backgroundImg={libray_bg} title={'Cùng khám phá các sự thật thú vị về các loài động vật '} />

      <LibraryResult area={area} type={type} setArea={setArea} setType={setType} />

      <Footer />
    </div>
  )
}

export default Library