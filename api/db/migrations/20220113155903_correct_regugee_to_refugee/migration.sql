/*
  Warnings:

  - You are about to drop the column `regugeeId` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the `Regugee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Regugee" DROP CONSTRAINT "Regugee_tentId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_regugeeId_fkey";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "regugeeId",
ADD COLUMN     "refugeeId" INTEGER;

-- DropTable
DROP TABLE "Regugee";

-- CreateTable
CREATE TABLE "Refugee" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "sex" "Sex" NOT NULL,
    "dateOfBirh" TIMESTAMP(3) NOT NULL,
    "tentId" INTEGER,

    CONSTRAINT "Refugee_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Refugee" ADD CONSTRAINT "Refugee_tentId_fkey" FOREIGN KEY ("tentId") REFERENCES "Tent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_refugeeId_fkey" FOREIGN KEY ("refugeeId") REFERENCES "Refugee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
