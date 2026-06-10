-- Preserve existing program rows while allowing programs without a department.
ALTER TABLE "Program"
ALTER COLUMN "department" TYPE TEXT USING "department"::TEXT,
ALTER COLUMN "department" DROP NOT NULL;

CREATE TYPE "ProgramListingPage" AS ENUM (
  'DAE',
  'CERTIFICATIONS',
  'DIPLOMA_CERTIFICATIONS',
  'SHORT_COURSES',
  'JEC'
);

ALTER TABLE "Program" ADD COLUMN "listingPage" "ProgramListingPage";

UPDATE "Program"
SET "listingPage" = CASE
  WHEN "tag" = 'DAE' THEN 'DAE'::"ProgramListingPage"
  WHEN "tag" = 'JEC' THEN 'JEC'::"ProgramListingPage"
  WHEN "tag" = 'SHORT' THEN 'SHORT_COURSES'::"ProgramListingPage"
  ELSE 'CERTIFICATIONS'::"ProgramListingPage"
END;

ALTER TABLE "Program" ALTER COLUMN "listingPage" SET NOT NULL;
