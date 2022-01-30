import { Link, routes } from '@redwoodjs/router'
import { Post } from 'types/graphql'

const TilPost = ({ post }: Post) => {
  return (
    <div className="p-4 bg-gray-300 rounded mt-4">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>
        <Link to={routes.post({ id: post.id })} className="underline">
          Read
        </Link>
      </p>
    </div>
  )
}

export default TilPost
