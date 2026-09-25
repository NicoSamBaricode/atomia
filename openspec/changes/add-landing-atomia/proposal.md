# Proposal

## Why

ATOMIA necesita una presencia pública en www.atomia.tech que comunique su propuesta de valor (+5% de energía nuclear limpia sin modificar la planta) a operadores, reguladores y partners. Hoy solo existe el deck IB50K, sin landing institucional bilingüe.

## What Changes

- Crear landing estática bilingüe ES/EN en `index.html` + `styles.css` + `app.js`, sin build ni backend.
- Implementar 8 secciones institucionales: header, hero, problema, solución, prueba Atucha II, equipo, contacto, footer.
- Implementar toggle ES/EN con diccionario i18n en JS y persistencia en `localStorage`.
- Integrar branding fiel a la presentación IB50K (fondo navy oscuro, acento teal, títulos amarillo, badge pill con borde teal) y mantener el diseño del deck (hero con badge + título gigante + claim en dos líneas). Logo aportado por el cliente en `assets/`.
- Integrar contacto directo vía mailto, LinkedIn y WhatsApp, sin formulario con backend.
- Dockerizar el sitio (imagen nginx sirviendo los estáticos + `docker-compose.yml`) para subir rápido al VPS.
- Excluir cifras sensibles del deck: facturación US$22.5M, modelo de negocio por contrato y pedido de financiamiento.

## Capabilities

### New Capabilities

- `landing`: estructura, contenido institucional, branding fiel al deck, responsive, SEO básico y contacto visible.
- `landing-i18n`: conmutación de idioma ES/EN en cliente sin recarga ni backend.
- `landing-deploy`: distribución como imagen Docker + compose para VPS.

### Modified Capabilities

- Ninguna (proyecto nuevo, repo vacío).

## Impact

- Archivos nuevos: `index.html`, `styles.css`, `app.js`, `assets/` (logo), `Dockerfile`, `docker-compose.yml`, `.dockerignore`, `README.md` con instrucciones de deploy.
- Sin dependencias de build; deploy con `docker compose up -d` en el VPS para atomia.tech (imagen nginx:alpine sirviendo los estáticos).
- Sin backend ni almacenamiento de datos; `localStorage` solo guarda preferencia de idioma.
