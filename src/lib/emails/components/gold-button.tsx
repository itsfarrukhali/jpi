import { Link } from "@react-email/components";

export const GoldButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    style={{
      display: "inline-block",
      backgroundColor: "#D4921A",
      color: "#0D1F3C",
      padding: "12px 28px",
      fontWeight: 700,
      fontSize: "14px",
      textDecoration: "none",
      borderRadius: "2px",
      marginTop: "24px",
    }}
  >
    {children}
  </Link>
);
