import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RefugeeCreateArgs>({
  refugee: {
    one: {
      data: {
        firstName: 'String',
        lastName: 'String',
        photo: 'String',
        sex: 'MALE',
        dateOfBirh: '2022-01-13T16:07:54Z',
      },
    },
    two: {
      data: {
        firstName: 'String',
        lastName: 'String',
        photo: 'String',
        sex: 'MALE',
        dateOfBirh: '2022-01-13T16:07:54Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
