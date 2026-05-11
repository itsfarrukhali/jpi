import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface EmailLayoutProps {
  preview?: string;
  children: React.ReactNode;
}

export const EmailLayout = ({ preview, children }: EmailLayoutProps) => (
  <Html>
    <Head />
    {preview && <Preview>{preview}</Preview>}
    <Body style={styles.body}>
      <Container style={styles.container}>
        {/* Header */}
        <Section style={styles.header}>
          <Text style={styles.headerTitle}>JINNAH POLYTECHNIC INSTITUTE</Text>
          <Text style={styles.headerSubtitle}>Est. 1961 · Karachi</Text>
        </Section>
        {/* Content */}
        <Section style={styles.content}>{children}</Section>
        {/* Gold divider */}
        <Hr style={styles.goldDivider} />
        {/* Footer */}
        <Section style={styles.footer}>
          <Text style={styles.footerText}>
            ST-1, Nazimabad-5, Karachi 74600
          </Text>
          <Text style={styles.footerText}> info@jpikhi.edu.pk</Text>
          <Text style={styles.footerNote}>
            © {new Date().getFullYear()} Jinnah Polytechnic Institute. All
            rights reserved.
            <br />A Project of Anjuman‑e‑Islamia Trust Pakistan
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

// Styles
const styles = {
  body: {
    backgroundColor: "#F3F4F6",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    margin: 0,
    padding: "20px",
  },
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
  },
  header: {
    backgroundColor: "#0D1F3C",
    padding: "24px 32px",
    textAlign: "center" as const,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: "18px",
    fontWeight: "bold",
    letterSpacing: "1px",
    margin: "0",
  },
  headerSubtitle: {
    color: "#D4921A",
    fontSize: "11px",
    fontWeight: 600,
    marginTop: "4px",
  },
  content: {
    padding: "32px",
  },
  goldDivider: {
    borderTop: "1px solid #D4921A",
    margin: "0 32px",
  },
  footer: {
    padding: "16px 32px",
    textAlign: "center" as const,
    backgroundColor: "#F9FAFB",
  },
  footerText: {
    fontSize: "11px",
    color: "#6B7280",
    margin: "2px 0",
  },
  footerNote: {
    marginTop: "12px",
    paddingTop: "12px",
    borderTop: "1px solid #E5E7EB",
    fontSize: "10px",
    color: "#9CA3AF",
  },
};
