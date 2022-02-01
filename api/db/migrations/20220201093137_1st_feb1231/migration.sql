/*
  Warnings:

  - You are about to drop the column `dateOfBirh` on the `Refugee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Refugee" DROP COLUMN "dateOfBirh",
ADD COLUMN     "dateOfBirth" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
