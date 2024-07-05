-- AlterTable
ALTER TABLE "StudentEnrollment" ADD COLUMN "resetToken" TEXT;
ALTER TABLE "StudentEnrollment" ADD COLUMN "tokenExpiry" DATETIME;
