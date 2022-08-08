import React from 'react'
import { Navbar } from '../../common/Navbar/Navbar'
import { HeroSection } from '../../common/HeroSection/HeroSection'
import { ContentSection } from '../../common/ContentSection/ContentSection'
import { Gallery } from '../../common/Gallery/Gallery'
import { ProjectSection } from '../../common/ProjectSection/ProjectSection'
import { CTASection } from '../../common/CTASection/CTASection'
import { Footer } from '../../common/Footer/Footer'
import row1 from '../../Assets/index/elephant.jpg'
import row2 from '../../Assets/index/map.jpg'
import hero_img from '../../Assets/index/HeroImage2.png'

const Homepage = () => {
  return (
    <main>
      <HeroSection isButton={true} backgroundImg={hero_img} title={'Sừng tê giác không khác móng tay con người.'} description={'Tuy sừng tê giác không hề mang những khả năng chữa bệnh ‘kì diệu’, hay là thần dược như nhiều người đồn thổi nhưng hàng năm vẫn có hàng trăm, hàng ngàn cá thể tê giác bị săn bắt và lấy sừng trái phép. Chính vì thế, cùng nhau chúng ta hãy chung tay chống lại tệ nạn này bằng cách nâng cao nhận thức của bản thân cũng như những người xung quanh về giống loài đáng yêu này nhé.'} />
      {/* IntroSection */}
      <ContentSection src={row1} reverse={false} dark={false} isText={true}
        section={'01 - Giới thiệu'}
        title={'AnimalShelter là'}
        description={'Một dự án với sứ mệnh nâng cao nhận thức của người dân về các loài động thực vật mà cụ thể hơn là những loài đang có nguy cơ tuyệt chủng. Ngoài ra, chúng tôi cũng nhắm tới việc phát triển các dự án giúp nắm bắt được những sự thay đổi về môi trường ảnh hưởng xấu tới môi trường sinh thái để có thể đưa ra các giải pháp kịp thời.'} />
      {/* RadarSection */}
      <ContentSection src={row2} reverse={true} dark={true} isText={false} isButton={true}
        section={'02 - Radar'}
        title={'Tìm kiếm các loài động thực vật xung quanh bạn'}
        description={'Khám phá những loài động ở gần khu vực bạn sinh sống một cách nhanh chóng.'} />

      <Gallery />

      <ProjectSection />

      <CTASection />
    </main>
  )
}

export default Homepage