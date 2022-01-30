import { posts, post, createPost, updatePost, deletePost } from './posts'
import type { StandardScenario } from './posts.scenarios'

describe('posts', () => {
  scenario('returns all posts', async (scenario: StandardScenario) => {
    const result = await posts()

    expect(result.length).toEqual(Object.keys(scenario.post).length)
  })

  scenario('returns a single post', async (scenario: StandardScenario) => {
    const result = await post({ id: scenario.post.one.id })

    expect(result).toEqual(scenario.post.one)
  })

  scenario('creates a post', async () => {
    const result = await createPost({
      input: { title: 'String', content: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.content).toEqual('String')
  })

  scenario('updates a post', async (scenario: StandardScenario) => {
    const original = await post({ id: scenario.post.one.id })
    const result = await updatePost({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a post', async (scenario: StandardScenario) => {
    const original = await deletePost({ id: scenario.post.one.id })
    const result = await post({ id: original.id })

    expect(result).toEqual(null)
  })
})
