
// ── TYPES ────────────────────────────────────────────────────────────────────
interface ServiceCard {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface PhilItem {
  num: string;
  title: string;
  desc: string;
}

interface StatItem {
  value: string;
  suffix: string;
  label: string;
}

// ── GLOBAL STYLES (injected once) ────────────────────────────────────────────
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

  :root {
    --graphite: #3E4349;
    --deep-slate: #1F2328;
    --cyan: #00A8E8;
    --steel: #8A8F98;
    --bone: #F5F1E8;
    --white: #FFFFFF;
    --cyan-dim: rgba(0,168,232,0.12);
    --cyan-glow: rgba(0,168,232,0.25);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    font-family: 'Poppins', sans-serif;
    background: var(--bone);
    color: var(--graphite);
    line-height: 1.6;
    overflow-x: hidden;
  }

  .jl-hero-label::before {
    content: '';
    display: inline-block; width: 32px; height: 1.5px;
    background: var(--cyan); margin-right: 0.75rem;
    vertical-align: middle;
  }

  .jl-section-label::before {
    content: '';
    display: inline-block; width: 24px; height: 1.5px;
    background: var(--cyan); margin-right: 0.75rem;
    vertical-align: middle;
  }

  @keyframes scrollLine {
    0%, 100% { opacity: 0.4; width: 48px; }
    50% { opacity: 1; width: 80px; }
  }

  .jl-scroll-indicator::after {
    content: '';
    display: block; width: 48px; height: 1px;
    background: var(--steel);
    animation: scrollLine 2s ease-in-out infinite;
  }

  .jl-nav-link {
    color: var(--steel); text-decoration: none;
    font-size: 0.85rem; font-weight: 500; letter-spacing: 0.04em;
    text-transform: uppercase;
    transition: color 0.3s ease;
  }
  .jl-nav-link:hover { color: var(--cyan); }

  .jl-btn-primary {
    background: var(--cyan); color: var(--deep-slate);
    font-family: 'Poppins', sans-serif;
    font-size: 0.85rem; font-weight: 700;
    letter-spacing: 0.08em; text-transform: uppercase;
    padding: 0.9rem 2.4rem; border: none;
    border-radius: 2px; cursor: pointer;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    text-decoration: none; display: inline-block;
  }
  .jl-btn-primary:hover {
    box-shadow: 0 0 32px rgba(0,168,232,0.25), 0 4px 24px rgba(0,168,232,0.35);
    transform: translateY(-2px);
  }

  .jl-btn-ghost {
    background: transparent; color: var(--white);
    font-family: 'Poppins', sans-serif;
    font-size: 0.85rem; font-weight: 600;
    letter-spacing: 0.08em; text-transform: uppercase;
    padding: 0.9rem 2.4rem;
    border: 1.5px solid rgba(255,255,255,0.2);
    border-radius: 2px; cursor: pointer;
    transition: border-color 0.3s ease, color 0.3s ease;
    text-decoration: none; display: inline-block;
  }
  .jl-btn-ghost:hover { border-color: var(--white); }

  .jl-nav-cta {
    background: transparent; border: 1.5px solid var(--cyan);
    color: var(--cyan); padding: 0.55rem 1.4rem;
    font-family: 'Poppins', sans-serif; font-size: 0.8rem;
    font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
    cursor: pointer; border-radius: 2px;
    transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  }
  .jl-nav-cta:hover {
    background: var(--cyan); color: var(--deep-slate);
    box-shadow: 0 0 20px rgba(0,168,232,0.25);
  }

  .jl-stat-card {
    padding: 2rem;
    background: var(--white);
    border-radius: 4px;
    border-bottom: 2px solid transparent;
    box-shadow: 0 2px 20px rgba(62,67,73,0.06);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  .jl-stat-card:hover {
    border-color: var(--cyan);
    box-shadow: 0 8px 32px rgba(0,168,232,0.10);
  }

  .jl-service-card {
    padding: 2.5rem 2rem;
    background: var(--bone);
    border-radius: 4px;
    border: 1px solid rgba(62,67,73,0.1);
    border-top: 3px solid transparent;
    position: relative;
    overflow: hidden;
    transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    cursor: default;
  }
  .jl-service-card::after {
    content: '';
    position: absolute; bottom: 0; left: 0; right: 0;
    height: 2px; background: var(--cyan);
    transform: scaleX(0); transform-origin: left;
    transition: transform 0.3s ease;
  }
  .jl-service-card:hover {
    border-top-color: var(--cyan);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0,168,232,0.12);
  }
  .jl-service-card:hover::after { transform: scaleX(1); }
  .jl-service-card:hover .jl-service-icon {
    background: rgba(0,168,232,0.25);
  }

  .jl-service-icon {
    width: 48px; height: 48px;
    background: rgba(0,168,232,0.12);
    border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 1.5rem;
    transition: background 0.3s ease;
  }

  .jl-service-link {
    display: inline-flex; align-items: center; gap: 0.5rem;
    margin-top: 1.5rem;
    font-size: 0.78rem; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--cyan); text-decoration: none;
    transition: gap 0.3s ease;
  }
  .jl-service-link:hover { gap: 0.9rem; }

  .jl-phil-item {
    padding: 2rem;
    border: 1px solid rgba(0,168,232,0.15);
    border-radius: 4px;
    transition: border-color 0.3s ease, background 0.3s ease;
  }
  .jl-phil-item:hover {
    border-color: rgba(0,168,232,0.5);
    background: rgba(0,168,232,0.04);
  }

  .jl-footer-link {
    font-size: 0.85rem; color: rgba(255,255,255,0.45);
    text-decoration: none; transition: color 0.3s ease;
  }
  .jl-footer-link:hover { color: var(--cyan); }

  @media (max-width: 768px) {
    .jl-nav-links { display: none !important; }
    .jl-about-grid { grid-template-columns: 1fr !important; }
    .jl-cta-strip { flex-direction: column !important; align-items: flex-start !important; }
    .jl-footer-top { flex-direction: column !important; }
  }
`;

// ── SVG ICONS ─────────────────────────────────────────────────────────────────
const IconAI = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="#00A8E8" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
);

const IconArch = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="#00A8E8" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1"/>
    <rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/>
    <rect x="14" y="14" width="7" height="7" rx="1"/>
  </svg>
);

const IconTransform = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="#00A8E8" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
  </svg>
);

const IconDD = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="#00A8E8" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 8v4l3 3"/>
  </svg>
);

const LogoMark = () => (
  <svg viewBox="0 0 100 100" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 18 C36 18 26 28 26 40 C26 52 36 58 50 58 C64 58 74 64 74 76 C74 88 64 94 50 94 C36 94 26 84 26 72"
      stroke="#00A8E8" strokeWidth="5" fill="none" strokeLinecap="round"/>
    <path d="M50 18 C64 18 74 28 74 40 C74 52 64 58 50 58"
      stroke="#3E4349" strokeWidth="9" fill="none" strokeLinecap="round"/>
    <circle cx="42" cy="15" r="3" fill="#3E4349"/>
    <path d="M38 13 L34 11 M38 16 L34 18" stroke="#3E4349" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// ── DATA ──────────────────────────────────────────────────────────────────────
const services: ServiceCard[] = [
  {
    title: "AI & Machine Learning",
    desc: "From model selection and data strategy to production deployment and monitoring. We design AI systems that are reliable, explainable, and business-aligned.",
    icon: <IconAI />,
  },
  {
    title: "Software Architecture",
    desc: "Scalable, secure, and maintainable system design. We evaluate, redesign, or greenfield architecture for platforms that need to grow without accumulating debt.",
    icon: <IconArch />,
  },
  {
    title: "Digital Transformation",
    desc: "Strategic roadmaps that modernize legacy systems, restructure engineering culture, and align technology investments with business outcomes — without disrupting operations.",
    icon: <IconTransform />,
  },
  {
    title: "Technology Due Diligence",
    desc: "Independent, rigorous technical assessments for M&A, investment rounds, and strategic partnerships. We surface risk and opportunity with clarity and depth.",
    icon: <IconDD />,
  },
];

const stats: StatItem[] = [
  { value: "98", suffix: "%", label: "Client Retention" },
  { value: "12", suffix: "+", label: "Years of Expertise" },
  { value: "40", suffix: "+", label: "Engagements Delivered" },
  { value: "6",  suffix: "x", label: "Avg. ROI Multiplier" },
];

const philItems: PhilItem[] = [
  {
    num: "01",
    title: "Systems Thinking",
    desc: "We don't solve isolated problems. We engineer coherent systems where every component amplifies the whole.",
  },
  {
    num: "02",
    title: "Adaptive Intelligence",
    desc: "Technology that learns from its environment is technology that outlasts its moment. We build for what comes next.",
  },
  {
    num: "03",
    title: "Precision Over Velocity",
    desc: "Speed without direction is noise. We move with intention, delivering solutions that are correct before they are fast.",
  },
  {
    num: "04",
    title: "Enduring Partnerships",
    desc: "We measure success in years, not sprints. Our work earns trust by remaining relevant long after the engagement closes.",
  },
];

// ── COMPONENTS ────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "1.2rem 6vw",
      background: "rgba(31,35,40,0.92)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid rgba(0,168,232,0.08)",
    }}>
      <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
        <LogoMark />
        <span style={{ fontSize: "1.3rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>
          Jela<span style={{ color: "#00A8E8" }}>'</span>an
        </span>
      </a>

      <ul className="jl-nav-links" style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
        {["About", "Services", "Vision"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="jl-nav-link">{item}</a>
          </li>
        ))}
      </ul>

      <button className="jl-nav-cta">Get in Touch</button>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh",
      background: "linear-gradient(145deg, #0e1114 0%, #1F2328 40%, #2a3038 100%)",
      display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "flex-start",
      padding: "0 6vw",
      position: "relative", overflow: "hidden",
    }}>
      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(0,168,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,168,232,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />
      {/* Glow */}
      <div style={{
        position: "absolute", top: "-20%", right: "-10%",
        width: 600, height: 600,
        background: "radial-gradient(circle, rgba(0,168,232,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="jl-hero-label" style={{
        fontSize: "0.75rem", fontWeight: 600,
        letterSpacing: "0.22em", textTransform: "uppercase",
        color: "#00A8E8", marginBottom: "1.5rem",
        display: "flex", alignItems: "center", position: "relative", zIndex: 1,
      }}>
        Technology Consulting
      </div>

      <h1 style={{
        fontSize: "clamp(2.8rem, 6vw, 5.5rem)", fontWeight: 800,
        color: "#fff", lineHeight: 1.08, letterSpacing: "-0.03em",
        maxWidth: 820, marginBottom: "1.75rem", position: "relative", zIndex: 1,
      }}>
        Engineering<br />
        <span style={{ color: "#00A8E8" }}>Intelligent</span><br />
        Solutions
      </h1>

      <p style={{
        fontSize: "clamp(1rem, 1.8vw, 1.2rem)", fontWeight: 300,
        color: "#8A8F98", maxWidth: 540, marginBottom: "3rem", lineHeight: 1.75,
        position: "relative", zIndex: 1,
      }}>
        We help organizations navigate the complexity of modern technology —
        architecting systems that think, adapt, and endure.
      </p>

      <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
        <a href="#services" className="jl-btn-primary">Explore Our Work</a>
        <a href="#about" className="jl-btn-ghost">Learn More</a>
      </div>

      <div className="jl-scroll-indicator" style={{
        position: "absolute", bottom: "2.5rem", left: "6vw",
        color: "#8A8F98", fontSize: "0.72rem", letterSpacing: "0.15em",
        textTransform: "uppercase", display: "flex", alignItems: "center", gap: "0.75rem",
      }}>
        Scroll to discover
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: string; }) {
  return (
    <div className="jl-section-label" style={{
      fontSize: "0.72rem", fontWeight: 600,
      letterSpacing: "0.2em", textTransform: "uppercase",
      color: "#00A8E8", marginBottom: "1rem",
      display: "flex", alignItems: "center",
    }}>
      {children}
    </div>
  );
}

function About() {
  return (
    <section id="about" style={{ padding: "7rem 6vw", background: "#F5F1E8" }}>
      <SectionLabel>Who We Are</SectionLabel>
      <h2 style={{
        fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700,
        letterSpacing: "-0.025em", color: "#3E4349", lineHeight: 1.15, marginBottom: "1.25rem",
      }}>
        Technology Strategy<br />Rooted in Intelligence
      </h2>
      <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "#8A8F98", maxWidth: 620, lineHeight: 1.85 }}>
        Jela'an is a technology consulting firm specializing in AI systems, software architecture, and
        enterprise digital transformation. We bridge strategic vision with technical execution —
        turning ambiguity into precision.
      </p>

      <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
        {["AI & Machine Learning Strategy", "Software Architecture & Engineering", "Digital Transformation Roadmaps", "Technology Due Diligence"].map((p) => (
          <div key={p} style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "0.9rem", color: "#3E4349", fontWeight: 500 }}>
            <div style={{ width: 6, height: 6, background: "#00A8E8", borderRadius: "50%", flexShrink: 0 }} />
            {p}
          </div>
        ))}
      </div>

      <div className="jl-about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6vw", alignItems: "center", marginTop: "4rem" }}>
        <div>
          <p style={{ fontSize: "1rem", color: "#3E4349", lineHeight: 1.9, fontWeight: 400 }}>
            Our team operates at the intersection of strategic consulting and deep technical expertise.
            We don't offer generic frameworks — we engineer solutions tailored to the precise constraints,
            ambitions, and culture of each client.
            <br /><br />
            From startup architecture reviews to enterprise AI deployments, we bring the same disciplined
            intelligence to every engagement.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          {stats.map((s) => (
            <div key={s.label} className="jl-stat-card">
              <div style={{ fontSize: "2.6rem", fontWeight: 800, color: "#3E4349", letterSpacing: "-0.03em", lineHeight: 1 }}>
                {s.value}<span style={{ color: "#00A8E8" }}>{s.suffix}</span>
              </div>
              <div style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "#8A8F98", marginTop: "0.5rem" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" style={{
      padding: "7rem 6vw",
      background: "#fff",
      borderTop: "1px solid rgba(62,67,73,0.08)",
      borderBottom: "1px solid rgba(62,67,73,0.08)",
    }}>
      <div style={{ maxWidth: 640, marginBottom: "4rem" }}>
        <SectionLabel>What We Do</SectionLabel>
        <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "#3E4349", lineHeight: 1.15, marginBottom: "1.25rem" }}>
          Our Services
        </h2>
        <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "#8A8F98", lineHeight: 1.85 }}>
          Four core disciplines, delivered with precision and a long-term perspective.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
        {services.map((s) => (
          <div key={s.title} className="jl-service-card">
            <div className="jl-service-icon">{s.icon}</div>
            <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#3E4349", letterSpacing: "-0.015em", marginBottom: "0.75rem" }}>
              {s.title}
            </div>
            <div style={{ fontSize: "0.88rem", color: "#8A8F98", lineHeight: 1.75 }}>{s.desc}</div>
            <a href="#" className="jl-service-link">Learn more →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="vision" style={{
      padding: "7rem 6vw",
      background: "linear-gradient(145deg, #0e1114 0%, #1F2328 60%, #252c33 100%)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(0,168,232,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,168,232,0.03) 1px, transparent 1px)",
        backgroundSize: "80px 80px", pointerEvents: "none",
      }} />
      {/* Glow */}
      <div style={{
        position: "absolute", bottom: "-30%", left: "50%", transform: "translateX(-50%)",
        width: 800, height: 400,
        background: "radial-gradient(ellipse, rgba(0,168,232,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 900 }}>
        <SectionLabel>Our Vision</SectionLabel>
        <h2 style={{
          fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 700,
          color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1.25rem",
        }}>
          Continuous Evolution.<br />Infinite Potential.
        </h2>
        <p style={{ fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.45)", maxWidth: 560, lineHeight: 1.85 }}>
          Our mark — a serpent forming an unbroken loop — embodies the principle at the heart of everything
          we build: systems that learn, adapt, and perpetually improve. Intelligence without end.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem", marginTop: "4rem" }}>
          {philItems.map((p) => (
            <div key={p.num} className="jl-phil-item">
              <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "rgba(0,168,232,0.2)", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: "1rem" }}>
                {p.num}
              </div>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", marginBottom: "0.6rem" }}>{p.title}</div>
              <div style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{p.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", paddingTop: "2rem", color: "rgba(0,168,232,0.2)", fontSize: "0.72rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          ∞ — Intelligence Without End
        </div>
      </div>
    </section>
  );
}

function CTAStrip() {
  return (
    <div className="jl-cta-strip" style={{
      background: "#F5F1E8", padding: "5rem 6vw",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: "2rem", flexWrap: "wrap",
      borderTop: "1px solid rgba(62,67,73,0.1)",
    }}>
      <div>
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#3E4349" }}>
          Ready to engineer your next<br />intelligent system?
        </h2>
        <p style={{ color: "#8A8F98", marginTop: "0.5rem" }}>Let's start with a conversation.</p>
      </div>
      <a href="mailto:hello@jelaan.com" className="jl-btn-primary" style={{ whiteSpace: "nowrap" }}>
        Start a Conversation
      </a>
    </div>
  );
}

function Footer() {
  const serviceLinks = ["AI & Machine Learning", "Software Architecture", "Digital Transformation", "Technology Due Diligence"];
  const companyLinks = ["About", "Case Studies", "Insights", "Careers"];
  const contactLinks = [{ label: "hello@jelaan.com", href: "mailto:hello@jelaan.com" }, { label: "LinkedIn", href: "#" }, { label: "Schedule a Call", href: "#" }];

  return (
    <footer style={{ background: "#1F2328", padding: "4rem 6vw 2.5rem", borderTop: "1px solid rgba(0,168,232,0.08)" }}>
      <div className="jl-footer-top" style={{ display: "flex", justifyContent: "space-between", gap: "3rem", flexWrap: "wrap", marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div>
          <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>
            Jela<span style={{ color: "#00A8E8" }}>'</span>an
          </div>
          <p style={{ fontSize: "0.82rem", color: "#8A8F98", marginTop: "0.75rem", maxWidth: 260, lineHeight: 1.7 }}>
            Technology consulting built on intelligence, precision, and continuous evolution.
          </p>
        </div>

        {[
          { title: "Services", links: serviceLinks.map((l) => ({ label: l, href: "#" })) },
          { title: "Company", links: companyLinks.map((l) => ({ label: l, href: "#" })) },
          { title: "Contact", links: contactLinks },
        ].map((col) => (
          <div key={col.title}>
            <h4 style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8F98", marginBottom: "1.25rem" }}>
              {col.title}
            </h4>
            <ul style={{ listStyle: "none" }}>
              {col.links.map((l) => (
                <li key={l.label} style={{ marginBottom: "0.6rem" }}>
                  <a href={l.href} className="jl-footer-link">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.25)" }}>© 2025 Jela'an. All rights reserved.</p>
        <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.25)" }}>Privacy Policy · Terms of Use</p>
      </div>
    </footer>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <style>{globalStyles}</style>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Philosophy />
        <CTAStrip />
      </main>
      <Footer />
    </>
  );
}
