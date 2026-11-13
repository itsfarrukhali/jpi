import test from "node:test";
import assert from "node:assert/strict";
import { daeFeeStructure, daeAiFeeStructure, daeCyberFeeStructure, getFeeStructureForProgram } from "../src/data/fees.ts";
import { otherFees2026 } from "../src/data/admissions.ts";

test("Cyber Security fees include admission only in the first-year total", () => {
  assert.deepEqual(daeCyberFeeStructure.rows.map(({ admissionFee, tuitionFee, totalFee }) => [admissionFee, tuitionFee, totalFee]), [
    ["Rs. 25,000", "Rs. 48,000", "Rs. 73,000"],
    ["—", "Rs. 48,000", "Rs. 48,000"],
    ["—", "Rs. 48,000", "Rs. 48,000"],
  ]);
  assert.equal(getFeeStructureForProgram("dae-cyber-security", "dae", "DAE"), daeCyberFeeStructure);
});

test("existing DAE and AI fees and program routing are unchanged", () => {
  assert.deepEqual(daeFeeStructure.rows.map((row) => row.totalFee), ["Rs. 60,000", "Rs. 40,000", "Rs. 40,000"]);
  assert.deepEqual(daeAiFeeStructure.rows.map((row) => row.totalFee), ["Rs. 68,000", "Rs. 48,000", "Rs. 48,000"]);
  assert.equal(getFeeStructureForProgram("dae-cit", "dae", "DAE"), daeFeeStructure);
  assert.equal(getFeeStructureForProgram("dae-ai", "dae", "DAE"), daeAiFeeStructure);
});

test("other fees group repeated services without losing any of the 33 quoted rates", () => {
  assert.equal(otherFees2026.length, 22);
  assert.equal(new Set(otherFees2026.map((row) => row.item)).size, 22);
  assert.equal(otherFees2026.reduce((count, row) => count + [row.fee, row.normal, row.urgent].filter(Boolean).length, 0), 33);
  const expected = [
    ["Change of Technology after Registration SBTE", "10,000", undefined, undefined],
    ["Change of Programme after Registration SBTE", "10,000", undefined, undefined],
    ["Change of Technology before Registration SBTE", "3,000", undefined, undefined],
    ["Change of Programme before Registration SBTE", "3,000", undefined, undefined],
    ["PC", undefined, undefined, "5,000"],
    ["Duplicate PC", "6,000", undefined, undefined],
    ["ID Card Duplicate", "500", undefined, undefined],
    ["SBTE Registration Card Duplicate / Photocopy", "500", undefined, undefined],
    ["SBTE Registration Form Duplicate / Photocopy", "500", undefined, undefined],
    ["Admit Card (Photocopy)", "500", undefined, undefined],
    ["Marksheet (Photocopy)", "500", undefined, undefined],
    ["Bonafied Certificate", undefined, "500", "1,000"],
    ["English Proficiency Certificate", undefined, "500", "1,000"],
    ["Appearance Certificate", undefined, "500", "1,000"],
    ["Hope Certificate", undefined, "500", "1,000"],
    ["Other Certificate", undefined, "1,000", "2,000"],
    ["Recommendation Letter", undefined, "1,000", "1,500"],
    ["Internship Letter", undefined, "500", "1,000"],
    ["Practical Scrutiny (Per Subject)", undefined, "500", "1,000"],
    ["Theory Scrutiny (Per Subject)", undefined, "500", "1,000"],
    ["Verification of Document", undefined, "2,500", "4,000"],
    ["Diploma Processing Fee", undefined, "500", "1,000"],
  ];
  assert.deepEqual(otherFees2026.map((row) => [row.item, row.fee, row.normal, row.urgent]), expected);
});
