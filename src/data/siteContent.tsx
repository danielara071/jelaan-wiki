import { IconAI, IconArch, IconDD, IconTransform } from "../components/icons";
import type {
  FooterColumn,
  NavItem,
  PhilItem,
  ServiceCard,
  StatItem,
} from "../types/site";

export const navLinks: NavItem[] = [
  { label: "Acerca de", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Visión", href: "#vision" },
];

export const aboutCapabilities = [
  "Estrategia de IA y aprendizaje automático",
  "Arquitectura e ingeniería de software",
  "Hojas de ruta de transformación digital",
  "Debida diligencia tecnológica",
];

export const services: ServiceCard[] = [
  {
    title: "IA y aprendizaje automático",
    desc: "Desde la selección de modelos y la estrategia de datos hasta el despliegue en producción y el monitoreo. Diseñamos sistemas de IA confiables, explicables y alineados con el negocio.",
    icon: <IconAI />,
  },
  {
    title: "Arquitectura de software",
    desc: "Diseño de sistemas escalables, seguros y mantenibles. Evaluamos, rediseñamos o creamos arquitectura desde cero para plataformas que necesitan crecer sin acumular deuda.",
    icon: <IconArch />,
  },
  {
    title: "Transformación digital",
    desc: "Hojas de ruta estratégicas que modernizan sistemas heredados, reestructuran la cultura de ingeniería y alinean las inversiones tecnológicas con los resultados de negocio — sin interrumpir operaciones.",
    icon: <IconTransform />,
  },
  {
    title: "Debida diligencia tecnológica",
    desc: "Evaluaciones técnicas independientes y rigurosas para fusiones y adquisiciones, rondas de inversión y alianzas estratégicas. Identificamos riesgos y oportunidades con claridad y profundidad.",
    icon: <IconDD />,
  },
];

export const stats: StatItem[] = [
  { value: "98", suffix: "%", label: "Retención de clientes" },
  { value: "12", suffix: "+", label: "Años de experiencia" },
  { value: "40", suffix: "+", label: "Proyectos entregados" },
  { value: "6", suffix: "x", label: "Multiplicador promedio de ROI" },
];

export const philosophyItems: PhilItem[] = [
  {
    num: "01",
    title: "Pensamiento sistémico",
    desc: "No resolvemos problemas aislados. Diseñamos sistemas coherentes donde cada componente amplifica el conjunto.",
  },
  {
    num: "02",
    title: "Inteligencia adaptativa",
    desc: "La tecnología que aprende de su entorno es la que perdura. Construimos para lo que viene.",
  },
  {
    num: "03",
    title: "Precisión sobre velocidad",
    desc: "La velocidad sin dirección es ruido. Avanzamos con intención, entregando soluciones correctas antes que rápidas.",
  },
  {
    num: "04",
    title: "Alianzas duraderas",
    desc: "Medimos el éxito en años, no en sprints. Nuestro trabajo gana confianza al seguir siendo relevante mucho después de cerrar el proyecto.",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Servicios",
    links: [
      { label: "IA y aprendizaje automático", href: "#" },
      { label: "Arquitectura de software", href: "#" },
      { label: "Transformación digital", href: "#" },
      { label: "Debida diligencia tecnológica", href: "#" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Acerca de", href: "#" },
      { label: "Casos de estudio", href: "#" },
      { label: "Perspectivas", href: "#" },
      { label: "Carreras", href: "#" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "hello@jelaan.com", href: "mailto:hello@jelaan.com" },
      { label: "LinkedIn", href: "#" },
      { label: "Agendar una llamada", href: "#" },
    ],
  },
];
