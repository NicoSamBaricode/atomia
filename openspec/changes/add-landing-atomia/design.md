# Design

## Context

Repo vacío, solo `.git` + OpenSpec inicializado. Ver `proposal.md` para motivación. Restricciones: sitio estático puro (sin build), bilingüe ES/EN, sin backend, identidad visual fiel a la presentación IB50K, deploy con Docker al VPS para www.atomia.tech, logo aportado por el cliente en `assets/`.

## Goals / Non-Goals

**Goals:**
- Landing de una sola página, rápida (<100KB sin imágenes de logo), responsive y accesible, visualmente fiel a la presentación IB50K.
- i18n en cliente con cambio instantáneo y persistencia.
- Estructura lista para que el cliente suelte sus archivos de logo sin tocar código.
- Deploy al VPS con un solo comando Docker.

**Non-Goals:**
- Sin formulario con backend, sin analytics, sin CMS, sin blog.
- Sin cifras de negocio ni sección de financiamiento (contenido no público).
- Sin framework (Astro/Next) ni pipeline de build.

## Decisions

- **Single `index.html` + `styles.css` + `app.js` con atributos `data-i18n`**: un solo documento a mantener; el JS recorre `[data-i18n]` y sustituye texto desde un diccionario `STRINGS = {es: {...}, en: {...}}`. Alternativa descartada: dos páginas `/es/` + `/en/` (mejor SEO, pero duplica mantenimiento y el tráfico inicial es directo, no orgánico).
- **Español por defecto, `localStorage` clave `atomia-lang`**: respeta audiencia inicial AR/BR. Alternativa descartada: detectar `navigator.language` (impredecible para reguladores/inversores con browser en otro idioma).
- **CSS custom properties con paleta del deck + layout con CSS Grid/Flex y media queries**: tokens `--bg-navy: #070b18` (fondo), `--teal: #2dd4bf` (badge borde + claim + acentos), `--gold: #ffc400` (título gigante), `--ink: #eef2ff` (texto), `--muted: #9aa4c0` (secundario); hero replica la slide (badge pill outline, H1 96px desktop, claim dos líneas teal/blanco). Cero dependencias. Alternativa descartada: Tailwind/CDN (añade peso y dependencia externa, y dificulta fidelidad exacta).
- **`assets/logo.*` con fallback SVG inline**: el HTML referencia `assets/logo.svg` (o png) y si no existe se muestra un átomo SVG mínimo. Así el cliente solo sube archivos sin editar HTML.
- **Contacto con `mailto:`, `https://linkedin.com/...` y `https://wa.me/...` placeholder**: sin backend. Los URLs reales se configuran como constantes al inicio de `app.js`.
- **SEO mínimo on-page**: `<html lang>` dinámico según idioma, title, meta description y Open Graph estáticos en ES con alternos EN vía JS. Sin `hreflang` multi-URL porque hay una sola URL (trade-off consciente del enfoque A).
- **Docker con `nginx:alpine` + `docker-compose.yml`**: `Dockerfile` de una sola etapa (FROM nginx:alpine, COPY estáticos a `/usr/share/nginx/html`, EXPOSE 80); `.dockerignore` excluye `openspec/`, `.git/`, `node_modules/`; compose con `restart: unless-stopped` y mapeo `80:80`. Alternativa descartada: imagen Node con build (innecesario, sitio sin build) y Caddy/Traefik (el VPS ya resuelve TLS/proxy fuera de este repo).

## Risks / Trade-offs

- [Risk] Una sola URL debilita SEO por idioma → Mitigación: title/description bilingües y contenido completo en ambos idiomas vía JS; migrar a `/es/`+`/en/` si el tráfico orgánico lo exige.
- [Risk] Logo aún no entregado, medidas desconocidas → Mitigación: contenedor con altura fija y `object-fit: contain` + fallback SVG; pedir SVG preferentemente.
- [Risk] Traducciones EN provistas por el equipo pueden ser inconsistentes → Mitigación: diccionario centralizado en `app.js` fácil de revisar; verificar cobertura total con script simple (`grep data-i18n` vs claves).
- [Risk] Enlaces LinkedIn/WhatsApp placeholder rotos si no se configuran → Mitigación: constantes `CONTACT = {...}` al inicio de `app.js` claramente marcadas como TODO de configuración.

## Migration Plan

- Deploy: `docker compose up -d --build` en el VPS; el README documenta copiar el repo, configurar puerto/dominio y verificar.
- Rollback: `docker compose down` + re-subir tag anterior o versión previa de los estáticos y reconstruir (sitio sin estado).
