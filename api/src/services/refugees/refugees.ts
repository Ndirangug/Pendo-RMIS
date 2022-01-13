import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const refugees = () => {
  return db.refugee.findMany()
}

export const refugee = ({ id }: Prisma.RefugeeWhereUniqueInput) => {
  return db.refugee.findUnique({
    where: { id },
  })
}

interface CreateRefugeeArgs {
  input: Prisma.RefugeeCreateInput
}

export const createRefugee = ({ input }: CreateRefugeeArgs) => {
  return db.refugee.create({
    data: input,
  })
}

interface UpdateRefugeeArgs extends Prisma.RefugeeWhereUniqueInput {
  input: Prisma.RefugeeUpdateInput
}

export const updateRefugee = ({ id, input }: UpdateRefugeeArgs) => {
  return db.refugee.update({
    data: input,
    where: { id },
  })
}

export const deleteRefugee = ({ id }: Prisma.RefugeeWhereUniqueInput) => {
  return db.refugee.delete({
    where: { id },
  })
}

export const Refugee = {
  Tent: (_obj, { root }: ResolverArgs<ReturnType<typeof refugee>>) =>
    db.refugee.findUnique({ where: { id: root.id } }).Tent(),
  Transaction: (_obj, { root }: ResolverArgs<ReturnType<typeof refugee>>) =>
    db.refugee.findUnique({ where: { id: root.id } }).Transaction(),
}
