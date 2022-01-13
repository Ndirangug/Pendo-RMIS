import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.SectionCreateArgs>({
  section: {
    one: {
      data: {
        code: 'String',
        admin: {
          create: {
            email: 'String8077424',
            phone: 'String8993992',
            firstName: 'String',
            lastName: 'String',
            photo: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        code: 'String',
        admin: {
          create: {
            email: 'String9330050',
            phone: 'String4460245',
            firstName: 'String',
            lastName: 'String',
            photo: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
