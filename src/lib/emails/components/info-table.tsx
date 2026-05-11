export const InfoTable = ({ data }: { data: [string, string][] }) => (
  <table
    style={{ width: "100%", borderCollapse: "collapse", marginBottom: "16px" }}
  >
    <tbody>
      {data.map(([label, value], i) => (
        <tr key={i}>
          <td style={colStyle.label}>{label}</td>
          <td style={colStyle.value}>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const colStyle = {
  label: {
    padding: "8px 12px",
    color: "#6B7280",
    fontSize: "13px",
    width: "140px",
    verticalAlign: "top" as const,
    borderBottom: "1px solid #E5E7EB",
  },
  value: {
    padding: "8px 12px",
    color: "#111827",
    fontSize: "13px",
    fontWeight: 500,
    verticalAlign: "top" as const,
    borderBottom: "1px solid #E5E7EB",
  },
};
