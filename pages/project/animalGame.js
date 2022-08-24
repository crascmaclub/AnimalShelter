import React from 'react'

import { SEO } from '../../src/components/SEO/index'
import AnimalGame from '../../src/components/project/AnimalGame'

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
                title={"Các trò chơi giáo dục về các loài động vật"}
                description={"Chúng tôi mang đến cho người dùng những trò chơi vui nhộn, thú vị nhưng cũng vô cùng bổ ích với mục đích giúp mọi người trở nên gần gũi với các loài động vật hơn."}
                image={"https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
            />
            <AnimalGame />
            
        </div>
    )
}
