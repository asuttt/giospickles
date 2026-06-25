import { certificationRows } from "@/content/siteContent";

export default function CertificationLogoRows() {
  return (
    <div className="certification-logo-groups">
      {certificationRows.map((row) => {
        const rowClassName =
          row.type === "accounting"
            ? "certification-logo-row certification-logo-row-accounting"
            : "certification-logo-row certification-logo-row-payroll";

        return (
          <div aria-label={row.label} className={rowClassName} key={row.label}>
            {row.items.map((item) => (
              <div className="certification-logo" key={item.name}>
                <img
                  alt={`${item.name} certification`}
                  draggable={false}
                  loading="lazy"
                  onContextMenu={(event) => event.preventDefault()}
                  src={item.logo}
                />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
