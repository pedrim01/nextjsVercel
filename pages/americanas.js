const axios = require('axios');

export async function getServerSideProps({ req, res }) {
  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

  try {
    const response = await axios.get(
      'https://www.trackinfo.com/inform/inform-byraceid.jsp?raceid=GCA$20230127E01',
       
      {
        proxy: {
            protocol: 'http',
            host: 'proxy.scrapingbee.com',
            port: 8886,
            auth: {
                username: 'VD1S57ASOUX84E058SNK38UFOHPVI5NOP1STB5W95C1WXEOMSYDDGH1H94S9ZDCAJA5KJ0CMRGV5KBU5',
                password: 'render_js=False&premium_proxy=True'
            }
        }
    },

    )

    const post = await response.data

    const dynamicDate = new Date()

    const dateAgora = await dynamicDate.toGMTString()

    console.log(post)

    return {
      props: {
        post,
        dateAgora,
      },
    }
  } catch (error) {
    console.log(error)
    return error
  }
}

export default function Aus({ post, dateAgora }) {
  return (
    <div>
      <h1>{dateAgora}</h1>
      <div dangerouslySetInnerHTML={{ __html: post }}></div>
      
    </div>
  )
}
