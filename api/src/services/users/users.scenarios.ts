import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String6668010',
        phone: 'String9723277',
        firstName: 'String',
        lastName: 'String',
        photo: 'String',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
    two: {
      data: {
        email: 'String1069648',
        phone: 'String6587450',
        firstName: 'String',
        lastName: 'String',
        photo: 'String',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
