import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

interface QueryTransactionsInput {
  adminId?: number
  refugeeId?: number
}

export const transactions = ({
  adminId,
  refugeeId,
}: QueryTransactionsInput) => {
  if (adminId !== undefined && adminId !== null) {
    console.log('filter with admin')
    return db.transaction.findMany({
      where: { adminId },
    })
  } else if (refugeeId !== undefined && refugeeId !== null) {
    console.log('getting with refugees')
    return db.transaction.findMany({
      where: { refugeeId },
    })
  } else {
    return db.transaction.findMany()
  }
}

export const transaction = ({ id }: Prisma.TransactionWhereUniqueInput) => {
  return db.transaction.findUnique({
    where: { id },
  })
}

interface CreateTransactionInput extends Prisma.TransactionCreateInput {
  adminId?: number
  sectionId?: number
  refugeeId?: number
}

interface CreateTransactionArgs {
  input: CreateTransactionInput
}

export const createTransaction = async ({ input }: CreateTransactionArgs) => {
  if (input.transactionType == 'ADMIN_TO_INDIVIDUAL') {
    //just subtarct from adminId
    const adminSending = await db.user.update({
      where: { id: input.adminId },
      data: {
        accountBalance: {
          decrement: input.amount,
        },
      },
    })
  } else {
    //subtratc from adminId
    const adminSending = await db.user.update({
      where: { id: input.adminId },
      data: {
        accountBalance: {
          decrement: input.amount,
        },
      },
    })
    //then  get admin of sectionId and add to him
    const adminReceiving = await db.section
      .findFirst({ where: { id: input.sectionId } })
      .admin()

    await db.user.update({
      where: { id: adminReceiving.id },
      data: {
        accountBalance: {
          increment: input.amount,
        },
      },
    })
  }

  return db.transaction.create({
    data: input,
  })
}

interface UpdateTransactionArgs extends Prisma.TransactionWhereUniqueInput {
  input: Prisma.TransactionUpdateInput
}

export const updateTransaction = ({ id, input }: UpdateTransactionArgs) => {
  return db.transaction.update({
    data: input,
    where: { id },
  })
}

export const deleteTransaction = ({
  id,
}: Prisma.TransactionWhereUniqueInput) => {
  return db.transaction.delete({
    where: { id },
  })
}

export const Transaction = {
  refugee: (_obj, { root }: ResolverArgs<ReturnType<typeof transaction>>) =>
    db.transaction.findUnique({ where: { id: root.id } }).refugee(),
  admin: (_obj, { root }: ResolverArgs<ReturnType<typeof transaction>>) =>
    db.transaction.findUnique({ where: { id: root.id } }).admin(),
  Section: (_obj, { root }: ResolverArgs<ReturnType<typeof transaction>>) =>
    db.transaction.findUnique({ where: { id: root.id } }).Section(),
}
