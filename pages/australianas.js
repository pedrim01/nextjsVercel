export async function getServerSideProps({ req, res }) {
    res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
    
  
    try {
      const response = await fetch(
        'https://www.thegreyhoundrecorder.com.au/form-guides/ascot-park/long-form/83389/4',
      )
      const post = await response.text()
      
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
  
  export default function Aus({post, dateAgora }) {
    return (
      <div>
        <h1>{dateAgora}</h1>
        <div dangerouslySetInnerHTML= {{__html: post}} >
        </div>
      </div>
    )
  }
  