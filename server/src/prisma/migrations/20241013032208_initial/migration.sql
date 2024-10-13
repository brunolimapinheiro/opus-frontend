/*
  Warnings:

  - You are about to drop the `Candidate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContactInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Education` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Candidate` DROP FOREIGN KEY `Candidate_contactInfoId_fkey`;

-- DropForeignKey
ALTER TABLE `Education` DROP FOREIGN KEY `Education_candidateId_fkey`;

-- DropTable
DROP TABLE `Candidate`;

-- DropTable
DROP TABLE `ContactInfo`;

-- DropTable
DROP TABLE `Education`;

-- CreateTable
CREATE TABLE `candidate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `contactInfoId` INTEGER NOT NULL,

    UNIQUE INDEX `candidate_email_key`(`email`),
    UNIQUE INDEX `candidate_contactInfoId_key`(`contactInfoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contactInfo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `phone` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `education` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `formation` VARCHAR(191) NOT NULL,
    `experience` VARCHAR(191) NOT NULL,
    `curriculum` VARCHAR(191) NOT NULL,
    `candidateId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `candidate` ADD CONSTRAINT `candidate_contactInfoId_fkey` FOREIGN KEY (`contactInfoId`) REFERENCES `contactInfo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `education` ADD CONSTRAINT `education_candidateId_fkey` FOREIGN KEY (`candidateId`) REFERENCES `candidate`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
