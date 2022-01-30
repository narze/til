import type { TilPostsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import TilPost from 'src/components/TilPost'

export const QUERY = gql`
  query TilPostsQuery {
    posts {
      id
      title
      content
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ posts }: CellSuccessProps<TilPostsQuery>) => {
  return (
    <>
      {posts.map((item, idx) => {
        return <TilPost key={idx} post={item} />
      })}
    </>
  )
}
