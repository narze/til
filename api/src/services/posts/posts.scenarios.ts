import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: { data: { title: 'String', content: 'String' } },
    two: { data: { title: 'String', content: 'String' } },
  },
})

export type StandardScenario = typeof standard
