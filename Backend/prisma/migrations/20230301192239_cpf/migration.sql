/*
  Warnings:

  - You are about to drop the column `github` on the `customer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[CPF]` on the table `customer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `CPF` to the `customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customer" DROP COLUMN "github",
ADD COLUMN     "CPF" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "customer_CPF_key" ON "customer"("CPF");
