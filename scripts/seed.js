import { PrismaClient } from '@prisma/client'
import faker from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  await prisma.section.createMany({
    data: [
      { adminId: 2, code: 'A' },
      { adminId: 3, code: 'B' },
      { adminId: 4, code: 'C ' },
      { adminId: 5, code: 'D' },
    ],
    skipDuplicates: true,
  })

  for (let i = 1; i <= 100; i++) {
    await prisma.tent.create({
      data: {
        code: 'TG-' + i,
        Section: { connect: { id: Math.floor(Math.random() * 4) + 1 } },
      },
    })
  }

  for (let i = 1; i <= 500; i++) {
    await prisma.refugee.create({
      data: {
        dateOfBirh: faker.date.past(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        photo: faker.image.avatar(),
        sex: faker.helpers.randomize(['FEMALE', 'MALE']),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        Tent: { connect: { id: Math.floor(Math.random() * 100) + 1 } },
      },
    })
  }

  for (let i = 0; i < 1000; i++) {
    await prisma.transaction.create({
      data: {
        amount: faker.random.number({ min: 1, max: 100 }),
        transactionType: faker.helpers.randomize([
          'ADMIN_TO_SECTION',
          'ADMIN_TO_INDIVIDUAL',
        ]),
        Section: { connect: { id: Math.floor(Math.random() * 4) + 1 } },
        admin: { connect: { id: Math.floor(Math.random() * 5) + 1 } },
        refugee: { connect: { id: Math.floor(Math.random() * 500) + 1 } },
      },
    })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
