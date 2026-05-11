import { Heading } from "@react-email/components";

export const EmailHeading = ({ children }: { children: React.ReactNode }) => (
  <Heading
    style={{
      fontSize: "18px",
      fontWeight: "bold",
      color: "#1F2937",
      marginBottom: "16px",
      paddingBottom: "8px",
      borderBottom: "2px solid #D4921A",
    }}
    as="h2"
  >
    {children}
  </Heading>
);
