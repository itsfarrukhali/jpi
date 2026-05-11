// src/lib/emails/templates/contact-confirmation.tsx
import { Text } from "@react-email/components";
import { EmailLayout } from "../components/email-layout";
import { EmailHeading } from "../components/heading";
import { GoldButton } from "../components/gold-button";

export const ContactUserEmail = ({ name }: { name: string }) => (
  <EmailLayout preview="We received your message — JPI">
    <EmailHeading>Thank You, {name}!</EmailHeading>
    <Text style={text}>
      We have received your query and our team will get back to you within{" "}
      <strong>1‑2 working days</strong>.
    </Text>
    <Text style={text}>
      If your matter is urgent, please call us during office hours or visit the
      institute.
    </Text>
    <GoldButton href="https://jpikhi.edu.pk/contact">
      Visit Contact Page
    </GoldButton>
  </EmailLayout>
);

const text = {
  fontSize: "14px",
  color: "#374151",
  lineHeight: "1.8",
  marginBottom: "16px",
};
