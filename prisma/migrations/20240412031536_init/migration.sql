-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_StudentEnrollment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "residentalAddress" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "college" TEXT NOT NULL,
    "termsAndCondition" BOOLEAN NOT NULL,
    "refundPolicy" BOOLEAN NOT NULL,
    "enrollmentDate" DATETIME NOT NULL,
    "sessionTime" TEXT NOT NULL,
    "fees" TEXT
);
INSERT INTO "new_StudentEnrollment" ("college", "course", "education", "email", "enrollmentDate", "fees", "fullName", "id", "mobile", "refundPolicy", "residentalAddress", "sessionTime", "termsAndCondition") SELECT "college", "course", "education", "email", "enrollmentDate", "fees", "fullName", "id", "mobile", "refundPolicy", "residentalAddress", "sessionTime", "termsAndCondition" FROM "StudentEnrollment";
DROP TABLE "StudentEnrollment";
ALTER TABLE "new_StudentEnrollment" RENAME TO "StudentEnrollment";
CREATE UNIQUE INDEX "StudentEnrollment_email_key" ON "StudentEnrollment"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
