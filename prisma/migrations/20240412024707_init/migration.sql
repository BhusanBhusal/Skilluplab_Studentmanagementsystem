-- CreateTable
CREATE TABLE "StudentEnrollment" (
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
    "fees" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "StudentEnrollment_email_key" ON "StudentEnrollment"("email");
