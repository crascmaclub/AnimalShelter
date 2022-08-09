import React from 'react'
import { HeroSection } from '../../common/HeroSection/HeroSection'
import { LibraryResult } from './LibraryResult'

import libray_bg from '../../Assets/library/HeroImagefixed.png'

const Library = ({data}) => {
  
  


  return (
    <main>

      

      <LibraryResult apiData={data} field={search} area={area} type={type} setArea={setArea} setType={setType} />

    </main>
  )
}

export default Library