import {
  aboutCapabilities,
  philosophyItems,
  services,
  stats,
} from "../data/siteContent";

function SectionLabel({ children }: { children: string }) {
  return (
    <div
      className="jl-section-label"
      style={{
        fontSize: "0.72rem",
        fontWeight: 600,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#00A8E8",
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(145deg, #0e1114 0%, #1F2328 40%, #2a3038 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "0 6vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,168,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,168,232,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(0,168,232,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="jl-hero-label"
        style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#00A8E8",
          marginBottom: "1.5rem",
          display: "flex",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        Consultoría tecnológica
      </div>

      <h1
        style={{
          fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
          fontWeight: 800,
          color: "#fff",
          lineHeight: 1.08,
          letterSpacing: "-0.03em",
          maxWidth: 820,
          marginBottom: "1.75rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        Ingeniería
        <br />
        de soluciones
        <br />
        <span style={{ color: "#00A8E8" }}>inteligentes</span>
      </h1>

      <p
        style={{
          fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
          fontWeight: 300,
          color: "#8A8F98",
          maxWidth: 540,
          marginBottom: "3rem",
          lineHeight: 1.75,
          position: "relative",
          zIndex: 1,
        }}
      >
        Ayudamos a las organizaciones a navegar la complejidad de la tecnología moderna
        — diseñando sistemas que piensan, se adaptan y perduran.
      </p>

      <div
        style={{
          display: "flex",
          gap: "1.25rem",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 1,
        }}
      >
        <a href="#services" className="jl-btn-primary">
          Explorar nuestro trabajo
        </a>
        <a href="#about" className="jl-btn-ghost">
          Saber más
        </a>
      </div>

      <div
        className="jl-scroll-indicator"
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "6vw",
          color: "#8A8F98",
          fontSize: "0.72rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        Desplázate para descubrir
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" style={{ padding: "7rem 6vw", background: "#F5F1E8" }}>
      <SectionLabel>Quiénes somos</SectionLabel>
      <h2
        style={{
          fontSize: "clamp(2rem, 3.5vw, 3rem)",
          fontWeight: 700,
          letterSpacing: "-0.025em",
          color: "#3E4349",
          lineHeight: 1.15,
          marginBottom: "1.25rem",
        }}
      >
        Estrategia tecnológica
        <br />
        basada en la inteligencia
      </h2>
      <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "#8A8F98", maxWidth: 620, lineHeight: 1.85 }}>
        Jela&apos;an es una firma de consultoría tecnológica especializada en sistemas de IA,
        arquitectura de software y transformación digital empresarial. Conectamos la visión
        estratégica con la ejecución técnica — convirtiendo la ambigüedad en precisión.
      </p>

      <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
        {aboutCapabilities.map((capability) => (
          <div
            key={capability}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              fontSize: "0.9rem",
              color: "#3E4349",
              fontWeight: 500,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                background: "#00A8E8",
                borderRadius: "50%",
                flexShrink: 0,
              }}
            />
            {capability}
          </div>
        ))}
      </div>

      <div
        className="jl-about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6vw",
          alignItems: "center",
          marginTop: "4rem",
        }}
      >
        <div>
          <p style={{ fontSize: "1rem", color: "#3E4349", lineHeight: 1.9, fontWeight: 400 }}>
            Nuestro equipo opera en la intersección entre la consultoría estratégica y la experiencia
            técnica profunda. No ofrecemos marcos genéricos — diseñamos soluciones adaptadas a las
            restricciones, ambiciones y cultura de cada cliente.
            <br />
            <br />
            Desde revisiones de arquitectura para startups hasta despliegues de IA en empresas,
            llevamos la misma disciplina intelectual a cada proyecto.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          {stats.map((stat) => (
            <div key={stat.label} className="jl-stat-card">
              <div
                style={{
                  fontSize: "2.6rem",
                  fontWeight: 800,
                  color: "#3E4349",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {stat.value}
                <span style={{ color: "#00A8E8" }}>{stat.suffix}</span>
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#8A8F98",
                  marginTop: "0.5rem",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "7rem 6vw",
        background: "#fff",
        borderTop: "1px solid rgba(62,67,73,0.08)",
        borderBottom: "1px solid rgba(62,67,73,0.08)",
      }}
    >
      <div style={{ maxWidth: 640, marginBottom: "4rem" }}>
        <SectionLabel>Qué hacemos</SectionLabel>
        <h2
          style={{
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            color: "#3E4349",
            lineHeight: 1.15,
            marginBottom: "1.25rem",
          }}
        >
          Nuestros servicios
        </h2>
        <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "#8A8F98", lineHeight: 1.85 }}>
          Cuatro disciplinas clave, entregadas con precisión y una perspectiva de largo plazo.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "2rem",
        }}
      >
        {services.map((service) => (
          <div key={service.title} className="jl-service-card">
            <div className="jl-service-icon">{service.icon}</div>
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#3E4349",
                letterSpacing: "-0.015em",
                marginBottom: "0.75rem",
              }}
            >
              {service.title}
            </div>
            <div style={{ fontSize: "0.88rem", color: "#8A8F98", lineHeight: 1.75 }}>
              {service.desc}
            </div>
            <a href="#" className="jl-service-link">
              Saber más →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Philosophy() {
  return (
    <section
      id="vision"
      style={{
        padding: "7rem 6vw",
        background: "linear-gradient(145deg, #0e1114 0%, #1F2328 60%, #252c33 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,168,232,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,168,232,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 400,
          background: "radial-gradient(ellipse, rgba(0,168,232,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 900 }}>
        <SectionLabel>Nuestra visión</SectionLabel>
        <h2
          style={{
            fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
            marginBottom: "1.25rem",
          }}
        >
          Evolución continua.
          <br />
          Potencial infinito.
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            fontWeight: 300,
            color: "rgba(255,255,255,0.45)",
            maxWidth: 560,
            lineHeight: 1.85,
          }}
        >
          Nuestra marca — una serpiente que forma un bucle ininterrumpido — encarna el principio
          en el centro de todo lo que construimos: sistemas que aprenden, se adaptan y mejoran de
          forma perpetua. Inteligencia sin fin.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
            marginTop: "4rem",
          }}
        >
          {philosophyItems.map((item) => (
            <div key={item.num} className="jl-phil-item">
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: "rgba(0,168,232,0.2)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: "1rem",
                }}
              >
                {item.num}
              </div>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", marginBottom: "0.6rem" }}>
                {item.title}
              </div>
              <div style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            paddingTop: "2rem",
            color: "rgba(0,168,232,0.2)",
            fontSize: "0.72rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          ∞ — Inteligencia sin fin
        </div>
      </div>
    </section>
  );
}

export function CTAStrip() {
  return (
    <div
      className="jl-cta-strip"
      style={{
        background: "#F5F1E8",
        padding: "5rem 6vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
        flexWrap: "wrap",
        borderTop: "1px solid rgba(62,67,73,0.1)",
      }}
    >
      <div>
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#3E4349" }}>
          ¿Listos para diseñar su próximo
          <br />
          sistema inteligente?
        </h2>
        <p style={{ color: "#8A8F98", marginTop: "0.5rem" }}>Comencemos con una conversación.</p>
      </div>
      <a href="mailto:hello@jelaan.com" className="jl-btn-primary" style={{ whiteSpace: "nowrap" }}>
        Iniciar conversación
      </a>
    </div>
  );
}
