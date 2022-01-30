import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>TIL</h1>
      <p>List of #TodayILearned</p>
      <p>
        <Link to={routes.posts()}>Posts</Link>
      </p>
    </>
  )
}

export default HomePage
