import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }: Prisma.UserWhereUniqueInput) => {
  return db.user.findUnique({
    where: { id },
  })
}

interface CreateUserArgs {
  input: Prisma.UserCreateInput
}

export const createUser = ({ input }: CreateUserArgs) => {
  return db.user.create({
    data: input,
  })
}

interface UpdateUserArgs extends Prisma.UserWhereUniqueInput {
  input: Prisma.UserUpdateInput
}

export const updateUser = ({ id, input }: UpdateUserArgs) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }: Prisma.UserWhereUniqueInput) => {
  return db.user.delete({
    where: { id },
  })
}

export const User = {
  section: (_obj, { root }: ResolverArgs<ReturnType<typeof user>>) =>
    db.user.findUnique({ where: { id: root.id } }).section(),
  Transaction: (_obj, { root }: ResolverArgs<ReturnType<typeof user>>) =>
    db.user.findUnique({ where: { id: root.id } }).Transaction(),
}

// export const eligibleRecepients = async ({
//   adminId,
// }: ElibibleRecepientsArgs) => {
//   const user = await db.user.findFirst({ where: { id: adminId } })

//   let recepients = []

//   if (user.role == 'CAMP_ADMIN') {
//     recepients = await db.user.findMany({ where: { role: 'SECTION_ADMIN' } })
//   } else {
//     recepients = await (
//       await db.user
//         .findFirst({ where: { id: adminId } })
//         .section()
//         .tens()
//     ).map((tent) => {
//       return db.refugee.findMany({ where: { id: tent.id } })
//     })
//   }

//   return recepients
// }

export const sectionAdmins = () => {
  return db.user.findMany({ where: { role: 'SECTION_ADMIN' } })
}
