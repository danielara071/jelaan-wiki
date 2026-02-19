# Jela'an Wiki

Wiki interna para Jela'an Consulting Group - Una consultora innovativa especializada en soluciones tecnológicas.

## 🚀 Tecnologías

- **React 18** - Librería de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework de estilos

## 🎨 Identidad Visual
.

La aplicación utiliza la identidad de marca completa de Jela'an:

### Colores
- **Primary**: #0A66C2 (Azul Profesional)
- **Secondary**: #E86C44 (Terracota Cálido)
- **Accent**: #2D5F7E (Azul Océano)
- **Warm**: #D4A574 (Dorado Suave)
- **Success**: #059669

### Tipografías
- **Syne** - Logos, títulos principales
- **Inter** - Texto de cuerpo, UI
- **Crimson Pro** - Énfasis editorial

## 📦 Instalación

```bash
npm install
```

## 🏃 Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/`

## 🏗️ Build para Producción

```bash
npm run build
npm run preview
```

## 📁 Estructura

```
src/
├── App.tsx       # Componente principal con lógica de la wiki
├── main.tsx      # Punto de entrada
└── index.css     # Estilos globales y Tailwind
```

## ✨ Características

- ✅ Diseño responsivo (mobile-first)
- ✅ Navegación por categorías
- ✅ Búsqueda de artículos (UI preparada)
- ✅ Renderizado simple de Markdown
- ✅ Dark theme profesional
- ✅ Menú lateral colapsable

## 📝 Agregar Nuevo Artículo

Edita el array `articles` en `src/App.tsx`:

```typescript
{
  id: '6',
  title: 'Mi Nuevo Artículo',
  category: 'Categoría',
  content: `# Título

Tu contenido aquí en formato markdown simple.

## Subtítulo
- Lista 1
- Lista 2
`
}
```

## 🎯 Próximos Pasos Sugeridos

- [ ] Conectar a un backend/CMS
- [ ] Implementar búsqueda funcional
- [ ] Agregar edición de artículos
- [ ] Añadir autenticación
- [ ] Soporte para imágenes
- [ ] Exportar artículos a PDF

---

Desarrollado para **Jela'an Consulting Group** 🚀
