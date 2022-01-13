import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const transactions = () => {
  return db.transaction.findMany()
}

export const transaction = ({ id }: Prisma.TransactionWhereUniqueInput) => {
  return db.transaction.findUnique({
    where: { id },
  })
}

interface CreateTransactionArgs {
  input: Prisma.TransactionCreateInput
}

export const createTransaction = ({ input }: CreateTransactionArgs) => {
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
