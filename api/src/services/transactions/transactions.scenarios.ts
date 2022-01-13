import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TransactionCreateArgs>({
  transaction: {
    one: { data: { amount: 1692139, transactionType: 'ADMIN_TO_SECTION' } },
    two: { data: { amount: 1583992, transactionType: 'ADMIN_TO_SECTION' } },
  },
})

export type StandardScenario = typeof standard
