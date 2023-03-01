/*
  Warnings:

  - You are about to drop the column `CPF` on the `customer` table. All the data in the column will be lost.
  - Added the required column `cpf` to the `customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customer" DROP COLUMN "CPF",
ADD COLUMN     "cpf" TEXT NOT NULL;
