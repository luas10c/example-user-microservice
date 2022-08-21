-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('UNDEFINED', 'FEMALE', 'MALE');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT,
    "birthday" TIMESTAMP(3),
    "gender" "Gender" NOT NULL DEFAULT 'UNDEFINED',
    "region" TEXT DEFAULT 'Brasil',
    "about" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
