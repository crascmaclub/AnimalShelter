
import Homepage from '../src/components/index/Homepage'
import { SEO } from '../src/components/SEO/index'

export const getStaticProps = async () => {
  const res = await fetch("https://animalsheltedbacknew-production.up.railway.app/get-thumbnails");
  const data = await res.json();


  return {
    props: {
      data: data
    }
  }
}

export default function Home({ data }) {
  return (
    <div>
      <SEO
        url={`https://animal-shelter-omega.vercel.app/`}
        openGraphType="website"
        schemaType="article"
        title={"Trang chủ"}
        description={"Một dự án với sứ mệnh nâng cao nhận thức của người dân về các loài động vật mà cụ thể hơn là những loài đang có nguy cơ tuyệt chủng. Ngoài ra, chúng tôi cũng nhắm tới việc phát triển các dự án giúp nắm bắt được những sự thay đổi về môi trường ảnh hưởng xấu tới môi trường sinh thái để có thể đưa ra các giải pháp kịp thời."}
        image={"https://www.aspca.org/sites/default/files/behind-the-scenes-of-an-animal-rescue-main.jpg"}
      />
      <Homepage data={data} />
    </div>
  )
}
