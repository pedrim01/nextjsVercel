export async function getServerSideProps({ req, res }) {
  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
  

  try {
    const response = await fetch(
      'https://greyhoundbet.racingpost.com/card/blocks.sd?race_id=1955654&r_date=2023-01-26&tab=form&blocks=card-header%2Ccard-pager%2Ccard-tabs%2Ccard-title%2Cform',
    )
    
    const posts = await response.json()
    const dynamicDate = new Date()
    const dateAgora = await dynamicDate.toGMTString()
  
    
    return {
      props: {
        posts,
        dateAgora,
      },
    }
  } catch (error) {
    console.log(error)
    return error
  }
}

export default function Todos({ posts, dateAgora }) {
  return (
    <>
      <h1>{dateAgora}</h1>
      <ul>
        {posts['form'].dogs.map((post) => (
          <li>{post.dogName}</li>
        ))}
      </ul>
    </>
  )
}
