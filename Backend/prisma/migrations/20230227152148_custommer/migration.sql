-- CreateTable
CREATE TABLE "custommer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "github" TEXT NOT NULL,

    CONSTRAINT "custommer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "custommer_email_key" ON "custommer"("email");
