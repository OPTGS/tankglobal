# 📁 Carpeta /data - Contenido Editable del Sitio

Esta carpeta contiene todos los datos estructurados y contenido editable del sitio Tank Global Solutions. Está diseñada para ser compatible con sistemas CMS headless como **sitepins.com**.

## 📂 Estructura

```
data/
├── site.json              # Configuración general del sitio (nombre, SEO, contacto)
├── navigation.json        # Enlaces de navegación y footer (EN/ES)
├── partners.json          # Lista de partners/clientes
├── pages/
│   ├── home.json          # Contenido de la página principal (EN/ES)
│   ├── services.json      # Contenido de la página de servicios (EN/ES)
│   └── contact.json       # Contenido de la página de contacto (EN/ES)
├── content/
│   ├── faqs.json          # Preguntas frecuentes (EN/ES)
│   ├── features.json      # Características destacadas (EN/ES)
│   └── testimonials.json  # Testimonios de clientes (EN/ES)
└── products/
    └── tanks.json         # Catálogo de productos (tanques ISO)
```

## 🌐 Formato de Idiomas

La mayoría de los archivos contienen contenido bilingüe con claves `en` (inglés) y `es` (español):

```json
{
  "en": { "title": "Our Services" },
  "es": { "title": "Nuestros Servicios" }
}
```

## 📝 Archivos Principales

### `site.json`
Información global del sitio:
- Nombre y descripción
- URL del dominio
- Información de contacto
- Configuración SEO

### `navigation.json`
Menús de navegación:
- `navbar`: Enlaces del menú principal
- `footer`: Secciones y enlaces del pie de página

### `pages/*.json`
Contenido específico de cada página:
- Títulos y subtítulos
- Secciones de contenido
- Botones y llamadas a la acción

### `content/*.json`
Contenido reutilizable:
- FAQs
- Features/Características
- Testimonios

### `products/tanks.json`
Catálogo de productos con:
- ID único
- Nombre y categoría
- Especificaciones técnicas
- Imágenes
- Aplicaciones

## 🔧 Uso con sitepins.com

Esta estructura permite que sitepins.com:

1. **Detecte automáticamente** los archivos JSON editables
2. **Genere formularios** basados en la estructura del JSON
3. **Sincronice cambios** directamente al repositorio Git
4. **Mantenga el historial** de todas las modificaciones

## ⚠️ Notas Importantes

- Los archivos usan **JSON puro** para máxima compatibilidad
- Las rutas de imágenes son relativas a la carpeta `/public`
- El contenido HTML (como `<span>`) se permite en algunos campos de texto
- Los cambios se reflejan automáticamente en el próximo build

## 🚀 Integración con Astro

Para usar estos datos en componentes Astro:

```astro
---
import siteData from '../../data/site.json';
import homeData from '../../data/pages/home.json';

const lang = 'en'; // o 'es'
const content = homeData[lang];
---

<h1>{content.hero.title}</h1>
```

---

**Tank Global Solutions** - Solving all your tank needs
