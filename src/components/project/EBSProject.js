import React from 'react'
import { EBSHeroSection } from '../../common/HeroSection/EBSHeroSection'
import { BasicInformationSection } from '../../common/InformationSection/BasicInformationSection'
import { EBSContentSection } from '../../common/ContentSection/EBSContentSection'
import { ExperienceSection } from '../../common/ExperienceSection/ExperienceSection'
import img1 from '../../Assets/project/image-small1.png'
import img2 from '../../Assets/project/image-small2.png'
import img3 from '../../Assets/project/image-small3.png'
import img4 from '../../Assets/project/image-big1.png'
import img5 from '../../Assets/project/image-big2.png'
import img6 from '../../Assets/project/image-big3.png'

const EBSProject = () => {
  return (
    <main>
      <EBSHeroSection />

      <BasicInformationSection />

      <EBSContentSection
        src={[img1, img4]}
        dark={true}
        section={'GIAI ĐOẠN 1'}
        title={'Bố trí mạng lưới máy quét'}
        description={'Nhận thông tin, báo cáo về những khu vực xuất hiện sự bất thường, các tác nhân ảnh hưởng xấu tới môi trường sống của các loài động vật để tiến hành bố trí các thiết bị, máy quét, cũng như thiết lập liên kết với server. Trong tương lai, dự án có thể mở rộng hơn nữa với việc nâng vùng bao phủ để cung cấp thêm nhiều thông tin hơn và đồng thời giúp người dùng hiểu thêm về những môi trường mà các loài động vật khác nhau sinh sống'}
      />

      <EBSContentSection
        src={[img2, img5]}
        reverse={true}
        section={'GIAI ĐOẠN 2'}
        title={'Cập nhật thông tin về Server'}
        description={'Sau khi lấy dữ liệu từ các máy quét, cảm biến nhiệt độ và độ ẩm, thông tin sẽ được gửi về lại server để tiếp tục đến với giai đoạn xử lí dữ liệu và cuối cùng là gửi về lại trang web.'}
      />

      <EBSContentSection
        src={[img3, img6]}
        dark={true}
        section={'GIAI ĐOẠN 3'}
        title={'Hiển thị thông tin lên website'}
        description={'Bằng cách truy cập AnimalShelter người dùng có thể chọn các khu vực và tìm hiểu về những dữ liệu môi trường sống của các loài động vật trong khu vực đó để có được cái nhìn kĩ càng hơn về cuộc sống của những loài động vật để từ đó thấu hiểu hơn.'}
      />

      <ExperienceSection />
    </main>
  )
}

export default EBSProject
