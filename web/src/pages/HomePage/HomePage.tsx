import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import TilPostsCell from 'src/components/TilPostsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="p-4">
        <TilPostsCell />
        <p className="mt-4">
          <Link
            to={routes.newPost()}
            className="p-2 rounded bg-slate-500 text-white"
          >
            Create new Post
          </Link>
        </p>
      </div>
    </>
  )
}

export default HomePage
