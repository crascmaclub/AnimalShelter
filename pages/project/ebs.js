import React from 'react'

import { SEO } from '../../src/components/SEO/index'
import EBSProject from '../../src/components/project/EBSProject'

export async function getServerSideProps(context) {
    return {
      props: {
        url: context.req.headers.host,
      },
    };
  }

export default function environment_balance_system(props) {
    return (
        <div>
            <SEO
                url={`${'https://animal-shelter-omega.vercel.app'}/project/ebs`}
                openGraphType="website"
                schemaType="article"
                title={"Hệ thống kiểm soát môi trường sinh thái"}
                description={"Hệ thống bao gồm một mạng lưới các máy quét, máy đo nhiệt độ, độ ẩm được bố trí ở các địa điểm khác nhau trong nhưng khu vực được đánh giá là có tiềm ẩn những tác nhân có thể gây ra những ảnh hưởng xấu tới môi trường sống của các loài động vật ở các khu bảo tồn thiên nhiên. Mọi thông tin sẽ được thu thập và gửi về máy chủ, hiển thị trực tiếp lên trang web để người dùng có thể khám phá thêm về môi trường sống của động vật."}
                image={"https://lh3.googleusercontent.com/7ceSaxAn3M7CJN2FScZ9gWZTOLpxzrZhOSNdUB3ReRabGKUnQn0D-D1nO9zin8lOBUzSe8xphTdbwaTZIfvfwLBb41lOuUF5Vq-JorHSINIaT1__GGNCeZSTfTiO1MDLWe84pTtx2InJsqssgHPhFiWRJgs527Lk-hV-cA3JmuUY_UJ1T-vTuHjV0qREjSfN7re_7UQ2Z8vcXusNwOjNxOdpnp9GSY3p2uFNQ9hiJQHKO_impECcdAk41g2UX4fIzJiITgpeYUmrhvgID5gfZVyPvFoOhL7SH2UWsvQIVy4mSPmNV38WXq0YztqNsDUVT9tmnoltOY_FjgqJrOcnZJvfikPGs77yakgqD2WiQXUkNpd74wXqXmVY-MuT2sEOnqS-XQhkmAZSnlNTGcHb4pRfRzWEyB4UbhOo-aEvBpCwVCdvqbCDnwxtobLXoYbzmaztYkHr6SoiypMjFdU7iyKic7B6QuAH25GY2nfqXPGqoLiro60ll2f5K0nqzvn32H1r2f3gShJFhNQCly5MYjVnRaBfYJRXqUGtvSLAVSwHszncgSycEdjH_UBBXupqPop2yt1ttVb8PoRWiK_88jMlCO71vNhcUmh5ipE4LZHDr6rdxKMvTOpCfFp3A24JDVSi2Em2kBVIMKj-tVr3SZ-X_3eC9BOkqKv-wElyvJtX5xQEPlqTJ0ShtFXqwhyZ-c4gWzcLOXkkRCWDULlZykIdDmW2jgzEvLJfD4Id9rhBSv31aNSU21DZO0dtx6Lz_X1lP2QibqgzfVSdWVEHZVE2w0plS8fGUl3k9HASOuOmZkG_H8tjelkgOtmFshrNZ5gfSw=w1475-h824-no?authuser=1"}
            />
            <EBSProject />
        </div>
    )
}
