-- CreateEnum
CREATE TYPE "OfficialNoticeType" AS ENUM ('IMAGE', 'PDF');

-- Preserve existing job opening data while making departments flexible.
ALTER TABLE "JobOpening"
ADD COLUMN "officialNoticeType" "OfficialNoticeType",
ADD COLUMN "officialNoticeUrl" TEXT,
ADD COLUMN "slug" TEXT;

UPDATE "JobOpening"
SET "slug" = 'legacy-' || "id"
WHERE "slug" IS NULL;

ALTER TABLE "JobOpening"
ALTER COLUMN "slug" SET NOT NULL,
ALTER COLUMN "department" TYPE TEXT USING "department"::TEXT;

CREATE UNIQUE INDEX "JobOpening_slug_key" ON "JobOpening"("slug");
