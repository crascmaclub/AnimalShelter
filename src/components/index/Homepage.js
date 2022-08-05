import React from 'react'
import { Navbar } from '../../common/Navbar/Navbar'
import { HeroSection } from '../../common/HeroSection/HeroSection'
import { ContentSection } from '../../common/ContentSection/ContentSection'
import { Gallery } from '../../common/Gallery/Gallery'
import row1 from '../../Assets/index/elephant.jpg'
import row2 from '../../Assets/index/map.jpg'

const Homepage = () => {
  return (
    <div>
      <Navbar />

      <HeroSection />

      <ContentSection  src={row1} reverse={false} dark={false} isText={true} 
        section={'01 - Giới thiệu'} 
        title={'AnimalShelter là'} 
        description={'Một dự án với sứ mệnh nâng cao nhận thức của người dân về các loài động thực vật mà cụ thể hơn là những loài đang có nguy cơ tuyệt chủng. Ngoài ra, chúng tôi cũng nhắm tới việc phát triển các dự án giúp nắm bắt được những sự thay đổi về môi trường ảnh hưởng xấu tới môi trường sinh thái để có thể đưa ra các giải pháp kịp thời.'} />

      <ContentSection src={row2} reverse={true} dark={true} isText={false} isButton={true}
        section={'02 - Radar'} 
        title={'Tìm kiếm các loài động thực vật xung quanh bạn'} 
        description={'Khám phá những loài động ở gần khu vực bạn sinh sống một cách nhanh chóng.'} />

      <Gallery/>
    </div>
  )
}

export default Homepage