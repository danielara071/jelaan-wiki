import { useState } from 'react'

interface Article {
  id: string
  title: string
  content: string
  category: string
}

const articles: Article[] = [
  {
    id: '1',
    title: 'Bienvenida',
    category: 'General',
    content: `# Bienvenidos a Jela'an Wiki

Esta es la base de conocimientos de Jela'an Consulting Group. Una consultora innovativa y arriesgada que transforma ideas en soluciones tecnológicas de alto impacto.

## Nuestra Misión

Combinamos expertise técnico con visión estratégica para impulsar el crecimiento de nuestros clientes a través de soluciones tecnológicas de vanguardia.

## Valores

- **Innovación**: Pensamiento adelantado en tecnología y metodologías
- **Arriesgada**: No tememos a los desafíos complejos y proyectos ambiciosos
- **Profesionalismo**: Seriedad y expertise en cada proyecto
- **Accesibilidad**: Cercana y comprometida con nuestros clientes`
  },
  {
    id: '2',
    title: 'Servicios',
    category: 'General',
    content: `# Nuestros Servicios

## Desarrollo de Software

Creamos soluciones personalizadas utilizando las últimas tecnologías y mejores prácticas de la industria.

## Arquitectura Cloud

Diseñamos e implementamos infraestructuras cloud escalables, seguras y eficientes.

## Transformación Digital

Acompañamos a las empresas en su proceso de digitalización e innovación tecnológica.

## Consultoría Estratégica

Asesoramiento técnico y estratégico para la toma de decisiones tecnológicas críticas.`
  },
  {
    id: '3',
    title: 'Guía de Identidad',
    category: 'Diseño',
    content: `# Guía de Identidad Visual

## Paleta de Colores

- **Azul Profesional** (#0A66C2): Color primario que transmite confianza y experiencia
- **Terracota Cálido** (#E86C44): Color secundario que aporta energía y calidez
- **Azul Océano** (#2D5F7E): Acento que añade profundidad y estabilidad
- **Dorado Suave** (#D4A574): Acento cálido que transmite sofisticación

## Tipografía

- **Syne**: Para logos, títulos y headers (modernidad e innovación)
- **Inter**: Para textos de cuerpo y UI (legibilidad y versatilidad)
- **Crimson Pro**: Alternativa serif para énfasis editorial (elegancia)`
  },
  {
    id: '4',
    title: 'Stack Tecnológico',
    category: 'Tecnología',
    content: `# Stack Tecnológico

## Frontend

- React / Next.js
- TypeScript
- Tailwind CSS
- Vite

## Backend

- Node.js / Express
- Python / FastAPI
- Go

## Cloud & DevOps

- AWS / Azure / GCP
- Docker / Kubernetes
- CI/CD (GitHub Actions, GitLab CI)

## Bases de Datos

- PostgreSQL
- MongoDB
- Redis`
  },
  {
    id: '5',
    title: 'Procesos',
    category: 'Metodología',
    content: `# Procesos y Metodologías

## Metodología Ágil

Trabajamos con sprints de 2 semanas, reuniones diarias y entregas incrementales.

## Code Review

Todo código pasa por revisión de al menos un desarrollador senior antes de ser integrado.

## Testing

Implementamos pruebas unitarias, de integración y end-to-end en todos nuestros proyectos.

## Documentación

Mantenemos documentación técnica actualizada y accesible para todos los stakeholders.`
  }
]

function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article>(articles[0])
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const categories = Array.from(new Set(articles.map(a => a.category)))

  return (
    <div className="min-h-screen bg-darker font-inter text-light">
      {/* Header */}
      <header className="bg-dark border-b border-accent/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-accent/20 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="font-syne text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Jela'an
            </h1>
          </div>
          <span className="text-warm text-sm font-medium tracking-widest">CONSULTING GROUP</span>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed lg:static lg:translate-x-0 w-72 bg-dark h-[calc(100vh-73px)] border-r border-accent/20 overflow-y-auto transition-transform duration-300 z-40`}
        >
          <div className="p-6">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Buscar artículos..."
                className="w-full px-4 py-2 bg-darker border border-accent/30 rounded-lg text-light placeholder-light/40 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {categories.map(category => (
              <div key={category} className="mb-6">
                <h3 className="text-warm font-semibold text-sm uppercase tracking-wider mb-3">
                  {category}
                </h3>
                <ul className="space-y-1">
                  {articles
                    .filter(a => a.category === category)
                    .map(article => (
                      <li key={article.id}>
                        <button
                          onClick={() => {
                            setSelectedArticle(article)
                            if (window.innerWidth < 1024) setSidebarOpen(false)
                          }}
                          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                            selectedArticle.id === article.id
                              ? 'bg-primary/20 text-primary border-l-2 border-primary'
                              : 'hover:bg-accent/10 text-light/70 hover:text-light'
                          }`}
                        >
                          {article.title}
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 lg:p-12 max-w-4xl">
          <article className="prose prose-invert prose-headings:font-syne prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6 prose-h1:text-primary prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-secondary prose-h3:text-xl prose-h3:font-medium prose-h3:mt-6 prose-h3:mb-3 prose-p:text-light/80 prose-p:leading-relaxed prose-li:text-light/80 prose-strong:text-primary prose-strong:font-semibold max-w-none">
            {selectedArticle.content.split('\n').map((line, idx) => {
              if (line.startsWith('# ')) {
                return <h1 key={idx}>{line.substring(2)}</h1>
              } else if (line.startsWith('## ')) {
                return <h2 key={idx}>{line.substring(3)}</h2>
              } else if (line.startsWith('### ')) {
                return <h3 key={idx}>{line.substring(4)}</h3>
              } else if (line.startsWith('- **')) {
                const match = line.match(/- \*\*(.+?)\*\*:?\s*(.*)/)
                if (match) {
                  return (
                    <li key={idx}>
                      <strong>{match[1]}</strong>
                      {match[2] && `: ${match[2]}`}
                    </li>
                  )
                }
              } else if (line.startsWith('- ')) {
                return <li key={idx}>{line.substring(2)}</li>
              } else if (line.trim() === '') {
                return <br key={idx} />
              } else {
                return <p key={idx}>{line}</p>
              }
              return null
            })}
          </article>
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default App
