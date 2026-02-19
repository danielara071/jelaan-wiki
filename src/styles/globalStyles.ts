export const globalStyles = `
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
