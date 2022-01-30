import PostCell from 'src/components/Post/PostCell'

type PostPageProps = {
  id: string
}

const PostPage = ({ id }: PostPageProps) => {
  return <PostCell id={id} />
}

export default PostPage
