import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TentCreateArgs>({
  tent: {
    one: { data: { code: 'String' } },
    two: { data: { code: 'String' } },
  },
})

export type StandardScenario = typeof standard
