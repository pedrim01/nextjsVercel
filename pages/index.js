export async function getStaticProps(context) {
  try {
    const res = await fetch(
      'https://greyhoundbet.racingpost.com/card/blocks.sd?race_id=1955873&r_date=2023-01-23&tab=form&blocks=card-header%2Ccard-pager%2Ccard-tabs%2Ccard-title%2Cform',
    )
    const posts = await res.json()
    
    return {
      props: {
        posts,
      },
    }
  } catch (error) {
    console.log(error)
    return error
  }
}

export default function Todos({ posts }) {
  return (
    <>
      <ul>
        {posts['form'].dogs.map((post) => (
          <li>{post.dogName}</li>
        ))}
      </ul>
    </>
  )
}