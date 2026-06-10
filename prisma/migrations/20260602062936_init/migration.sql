-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SUPER_ADMIN', 'ADMIN');

-- CreateEnum
CREATE TYPE "Permission" AS ENUM ('READ_ONLY', 'READ_WRITE', 'FULL_ACCESS');

-- CreateEnum
CREATE TYPE "ContentType" AS ENUM ('NEWS', 'PROGRAMS', 'CAREERS', 'DEPARTMENTS', 'COURSES', 'WEBSITE_SETTINGS');

-- CreateEnum
CREATE TYPE "ManageContent" AS ENUM ('NEWS', 'PROGRAMS', 'CAREERS', 'DEPARTMENTS', 'COURSES', 'WEBSITE_SETTINGS');

-- CreateEnum
CREATE TYPE "Designation" AS ENUM ('PRINCIPAL', 'VICE_PRINCIPAL', 'HEAD_OF_DEPARTMENT', 'ADMINISTRATOR');

-- CreateEnum
CREATE TYPE "NewsCategory" AS ENUM ('NEWS', 'ANNOUNCEMENTS', 'EVENTS', 'SEMINARS');

-- CreateEnum
CREATE TYPE "ProgramTag" AS ENUM ('DAE', 'CERT', 'SHORT', 'JEC');

-- CreateEnum
CREATE TYPE "ProgramCategory" AS ENUM ('dae', 'certifications', 'short_courses', 'jec');

-- CreateEnum
CREATE TYPE "DEPARTMENTS" AS ENUM ('SOFTWARE_TECHNOLOGY', 'COMPUTER_INFORMATION_TECHNOLOGY', 'MECHANICAL_TECHNOLOGY', 'CIVIL_TECHNOLOGY', 'CHEMICAL_TECHNOLOGY', 'ELECTRICAL_TECHNOLOGY', 'ELECTRONICS_TECHNOLOGY', 'RAC_TECHNOLOGY');

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "avatarURL" TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "designation" "Designation" NOT NULL DEFAULT 'ADMINISTRATOR',
    "role" "Role" NOT NULL DEFAULT 'ADMIN',
    "permission" "Permission" NOT NULL DEFAULT 'READ_ONLY',
    "manageContent" "ContentType"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NewsItem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "category" "NewsCategory" NOT NULL DEFAULT 'NEWS',
    "image" TEXT NOT NULL,
    "pdfUrl" TEXT,
    "slug" TEXT NOT NULL,
    "galleryImages" TEXT[],
    "published" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewsItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Program" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "department" "DEPARTMENTS" NOT NULL,
    "duration" TEXT NOT NULL,
    "seats" INTEGER NOT NULL,
    "eligibility" TEXT[],
    "description" TEXT NOT NULL,
    "icon" TEXT,
    "thumbnail" TEXT,
    "coverImage" TEXT,
    "tag" "ProgramTag" NOT NULL,
    "category" "ProgramCategory" NOT NULL,
    "subjects" JSONB NOT NULL,
    "careers" TEXT[],
    "published" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Program_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobOpening" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "department" "DEPARTMENTS" NOT NULL,
    "type" TEXT NOT NULL,
    "qualification" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "responsibilities" TEXT[],
    "published" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobOpening_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "NewsItem_slug_key" ON "NewsItem"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Program_slug_key" ON "Program"("slug");
