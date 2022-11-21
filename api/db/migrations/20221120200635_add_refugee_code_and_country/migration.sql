-- AlterEnum
ALTER TYPE "TransactionType" ADD VALUE 'DONATION';

-- AlterTable
ALTER TABLE "Refugee" ADD COLUMN     "code" TEXT DEFAULT E'codexx',
ADD COLUMN     "country" TEXT DEFAULT E'counryxx';

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "donor" TEXT NOT NULL DEFAULT E'';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" DROP DEFAULT;
