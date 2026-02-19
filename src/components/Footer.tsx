import { footerColumns } from "../data/siteContent";

export function Footer() {
  return (
    <footer
      style={{
        background: "#1F2328",
        padding: "4rem 6vw 2.5rem",
        borderTop: "1px solid rgba(0,168,232,0.08)",
      }}
    >
      <div
        className="jl-footer-top"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "3rem",
          flexWrap: "wrap",
          marginBottom: "3rem",
          paddingBottom: "3rem",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div>
          <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>
            Jela<span style={{ color: "#00A8E8" }}>'</span>an
          </div>
          <p
            style={{
              fontSize: "0.82rem",
              color: "#8A8F98",
              marginTop: "0.75rem",
              maxWidth: 260,
              lineHeight: 1.7,
            }}
          >
            Consultoría tecnológica basada en inteligencia, precisión y evolución continua.
          </p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h4
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#8A8F98",
                marginBottom: "1.25rem",
              }}
            >
              {column.title}
            </h4>
            <ul style={{ listStyle: "none" }}>
              {column.links.map((link) => (
                <li key={link.label} style={{ marginBottom: "0.6rem" }}>
                  <a href={link.href} className="jl-footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.25)" }}>
          © 2025 Jela&apos;an. Todos los derechos reservados.
        </p>
        <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.25)" }}>
          Política de privacidad · Términos de uso
        </p>
      </div>
    </footer>
  );
}
