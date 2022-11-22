-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CAMP_ADMIN', 'SECTION_ADMIN');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('ADMIN_TO_SECTION', 'ADMIN_TO_INDIVIDUAL', 'DONATION');

-- CreateTable
CREATE TABLE "Refugee" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "sex" "Sex" NOT NULL,
    "tentId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateOfBirth" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "code" TEXT DEFAULT E'codexx',
    "country" TEXT DEFAULT E'counryxx',

    CONSTRAINT "Refugee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tent" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "sectionId" INTEGER,

    CONSTRAINT "Tent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'SECTION_ADMIN',
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" TIMESTAMP(3),
    "accountBalance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "transactionType" "TransactionType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "adminId" INTEGER,
    "sectionId" INTEGER,
    "phoneNumber" TEXT DEFAULT E'',
    "refugeeId" INTEGER,
    "ref" UUID NOT NULL DEFAULT gen_random_uuid(),
    "donor" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Section_adminId_key" ON "Section"("adminId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Refugee" ADD CONSTRAINT "Refugee_tentId_fkey" FOREIGN KEY ("tentId") REFERENCES "Tent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tent" ADD CONSTRAINT "Tent_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_refugeeId_fkey" FOREIGN KEY ("refugeeId") REFERENCES "Refugee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE SET NULL ON UPDATE CASCADE;
