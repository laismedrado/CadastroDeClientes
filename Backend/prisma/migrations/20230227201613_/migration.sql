/*
  Warnings:

  - The primary key for the `admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `custommer` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "admin" DROP CONSTRAINT "admin_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "admin_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "admin_id_seq";

-- AlterTable
ALTER TABLE "custommer" DROP CONSTRAINT "custommer_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "custommer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "custommer_id_seq";
