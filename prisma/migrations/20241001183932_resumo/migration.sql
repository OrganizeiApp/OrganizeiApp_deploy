/*
  Warnings:

  - You are about to drop the `ResumoLimit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ResumoLimit";

-- CreateTable
CREATE TABLE "Caderno" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Caderno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IList" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "cadernoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ICard" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "description" TEXT,
    "listId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ICard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resumo" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Resumo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EstanteLimit" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EstanteLimit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "IList_cadernoId_idx" ON "IList"("cadernoId");

-- CreateIndex
CREATE INDEX "ICard_listId_idx" ON "ICard"("listId");

-- CreateIndex
CREATE UNIQUE INDEX "EstanteLimit_userId_key" ON "EstanteLimit"("userId");

-- AddForeignKey
ALTER TABLE "Caderno" ADD CONSTRAINT "Caderno_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IList" ADD CONSTRAINT "IList_cadernoId_fkey" FOREIGN KEY ("cadernoId") REFERENCES "Caderno"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ICard" ADD CONSTRAINT "ICard_listId_fkey" FOREIGN KEY ("listId") REFERENCES "IList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resumo" ADD CONSTRAINT "Resumo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
