import type { Prisma, User, Refugee, Tent } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'
import { sendEmail } from 'src/lib/emailNotification'

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
  let receivingRefugee: Refugee
  let receivingTent: Tent
  let adminSending
  let sectionRecieving
  let adminReceiving
  let receivingAdminUser

  if (input.transactionType == 'ADMIN_TO_INDIVIDUAL') {
    //just subtarct from adminId
    adminSending = await db.user.update({
      where: { id: input.adminId },
      data: {
        accountBalance: {
          decrement: input.amount,
        },
      },
    })

    receivingRefugee = await db.refugee.findUnique({
      where: { id: input.refugeeId },
    })

    receivingTent = await db.tent.findUnique({
      where: { id: receivingRefugee.tentId },
    })
  } else {
    // admin to section
    //subtratc from adminId
    adminSending = await db.user.update({
      where: { id: input.adminId },
      data: {
        accountBalance: {
          decrement: input.amount,
        },
      },
    })

    sectionRecieving = await db.section.findFirst({
      where: { id: input.sectionId },
    })

    //then  get admin of sectionId and add to him
    adminReceiving = await db.section
      .findFirst({ where: { id: input.sectionId } })
      .admin()

    receivingAdminUser = await db.user.update({
      where: { id: adminReceiving.id },
      data: {
        accountBalance: {
          increment: input.amount,
        },
      },
    })

    //show mpesa prompt
    //stkPush(process.env.ADMIN_PHONE, input.amount, `${receivingUser.firstName} ${receivingUser.lastName}`)
    //notification to receoient
    sendEmail('template_6xnx8in', {
      amount: input.amount,
      beneficiary_name: `${receivingAdminUser.firstName} ${receivingAdminUser.lastName}`,
      time: new Date().toString(),
      section: sectionRecieving.code,
      balance: receivingAdminUser.accountBalance,
      to: receivingAdminUser.email,
    })
  }

  //notificatuon to sender
  sendEmail('template_wt5x0ka', {
    sender_name: `${adminSending.firstName} ${adminSending.lastName}`,
    amount: input.amount,
    beneficiary_details:
      input.transactionType === 'ADMIN_TO_SECTION'
        ? `${receivingAdminUser.firstName} ${receivingAdminUser.lastName} - Section ${sectionRecieving.code} admin`
        : `${receivingRefugee.firstName} ${receivingRefugee.lastName} of tent ${receivingTent.code}`,
    time: new Date().toString(),
    balance: adminSending.accountBalance,
    to: adminSending.email,
  })

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
