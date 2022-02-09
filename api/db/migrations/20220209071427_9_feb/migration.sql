-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "ref" UUID NOT NULL DEFAULT gen_random_uuid();
