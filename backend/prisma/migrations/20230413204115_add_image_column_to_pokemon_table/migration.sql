/*
  Warnings:

  - Added the required column `image` to the `pokemons` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pokemons" ADD COLUMN     "image" TEXT NOT NULL;
