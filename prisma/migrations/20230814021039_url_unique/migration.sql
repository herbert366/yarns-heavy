/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `Card` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Card_url_key" ON "Card"("url");
