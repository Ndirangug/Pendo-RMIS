import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const sections = () => {
  return db.section.findMany()
}

export const section = ({ id }: Prisma.SectionWhereUniqueInput) => {
  return db.section.findUnique({
    where: { id },
  })
}

interface CreateSectionArgs {
  input: Prisma.SectionCreateInput
}

export const createSection = ({ input }: CreateSectionArgs) => {
  return db.section.create({
    data: input,
  })
}

interface UpdateSectionArgs extends Prisma.SectionWhereUniqueInput {
  input: Prisma.SectionUpdateInput
}

export const updateSection = ({ id, input }: UpdateSectionArgs) => {
  return db.section.update({
    data: input,
    where: { id },
  })
}

export const deleteSection = ({ id }: Prisma.SectionWhereUniqueInput) => {
  return db.section.delete({
    where: { id },
  })
}

export const Section = {
  tens: (_obj, { root }: ResolverArgs<ReturnType<typeof section>>) =>
    db.section.findUnique({ where: { id: root.id } }).tens(),
  admin: (_obj, { root }: ResolverArgs<ReturnType<typeof section>>) =>
    db.section.findUnique({ where: { id: root.id } }).admin(),
  Transaction: (_obj, { root }: ResolverArgs<ReturnType<typeof section>>) =>
    db.section.findUnique({ where: { id: root.id } }).Transaction(),
}
