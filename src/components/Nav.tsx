import { navLinks } from "../data/siteContent";
import { LogoMark } from "./icons";

export function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.2rem 6vw",
        background: "rgba(31,35,40,0.92)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(0,168,232,0.08)",
      }}
    >
      <a
        href="#"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          textDecoration: "none",
        }}
      >
        <LogoMark />
        <span style={{ fontSize: "1.3rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>
          Jela<span style={{ color: "#00A8E8" }}>'</span>an
        </span>
      </a>

      <ul className="jl-nav-links" style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
        {navLinks.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="jl-nav-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button className="jl-nav-cta">Ponte en contacto</button>
    </nav>
  );
}
