// src/lib/emails/templates/newsletter.tsx
import { Text } from "@react-email/components";
import { EmailLayout } from "../components/email-layout";
import { EmailHeading } from "../components/heading";
import { GoldButton } from "../components/gold-button";

export const NewsletterWelcomeEmail = ({ email }: { email: string }) => (
  <EmailLayout preview="Welcome to JPI Newsletter">
    <EmailHeading>Welcome to JPI Updates!</EmailHeading>
    <Text style={text}>
      You have successfully subscribed to the Jinnah Polytechnic Institute
      newsletter with <strong>{email}</strong>.
    </Text>
    <Text style={text}>
      You’ll receive the latest news, events, admissions info, and achievements
      directly in your inbox.
    </Text>
    <Text style={text}>— The JPI Team</Text>
    <GoldButton href="https://jpikhi.edu.pk">Visit Website</GoldButton>
  </EmailLayout>
);

const text = {
  fontSize: "14px",
  color: "#374151",
  lineHeight: "1.8",
  marginBottom: "16px",
};
