import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { Post } from 'types/graphql'

const TilPost = ({ post }: { post: Post }) => {
  const { isAuthenticated } = useAuth()

  return (
    <div className="p-4 bg-gray-300 rounded mt-4">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {isAuthenticated && (
        <p>
          <Link to={routes.post({ id: post.id })} className="underline">
            View
          </Link>
        </p>
      )}
    </div>
  )
}

export default TilPost
