import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const tents = () => {
  return db.tent.findMany()
}

export const tent = ({ id }: Prisma.TentWhereUniqueInput) => {
  return db.tent.findUnique({
    where: { id },
  })
}

interface CreateTentArgs {
  input: Prisma.TentCreateInput
}

export const createTent = ({ input }: CreateTentArgs) => {
  return db.tent.create({
    data: input,
  })
}

interface UpdateTentArgs extends Prisma.TentWhereUniqueInput {
  input: Prisma.TentUpdateInput
}

export const updateTent = ({ id, input }: UpdateTentArgs) => {
  return db.tent.update({
    data: input,
    where: { id },
  })
}

export const deleteTent = ({ id }: Prisma.TentWhereUniqueInput) => {
  return db.tent.delete({
    where: { id },
  })
}

export const Tent = {
  refugees: (_obj, { root }: ResolverArgs<ReturnType<typeof tent>>) =>
    db.tent.findUnique({ where: { id: root.id } }).refugees(),
  Section: (_obj, { root }: ResolverArgs<ReturnType<typeof tent>>) =>
    db.tent.findUnique({ where: { id: root.id } }).Section(),
}
