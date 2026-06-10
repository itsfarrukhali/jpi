import type { OfficialNoticeType } from "../../generated/prisma/client";

export type JobOpeningRecord = {
  id: string;
  slug: string;
  title: string;
  department: string;
  type: string;
  qualification: string;
  description: string;
  responsibilities: string[];
  officialNoticeUrl: string | null;
  officialNoticeType: OfficialNoticeType | null;
  published: boolean;
  createdAt?: string;
  updatedAt?: string;
};
