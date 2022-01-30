import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import TilPostsCell from 'src/components/TilPostsCell'
import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="p-4">
        <TilPostsCell />

        {isAuthenticated && (
          <p className="mt-4">
            <Link
              to={routes.newPost()}
              className="p-2 rounded bg-slate-500 text-white"
            >
              Create new Post
            </Link>
          </p>
        )}
      </div>
    </>
  )
}

export default HomePage
