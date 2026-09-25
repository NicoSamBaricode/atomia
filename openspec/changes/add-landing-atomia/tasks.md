# Tasks

## 1. Base y estructura

- [x] 1.1 Crear `index.html` con estructura semántica de las 8 secciones y verificar que abre en navegador sin errores de consola
- [x] 1.2 Crear `styles.css` con tokens fieles al deck (`--bg-navy`, `--teal`, `--gold`), hero réplica de la slide y responsive móvil/escritorio, y verificar que a 360px no hay scroll horizontal
- [x] 1.3 Crear `assets/` + fallback SVG de logo y verificar que header y hero muestran logo o fallback

## 2. Contenido ES + i18n

- [x] 2.1 Redactar todo el contenido ES institucional (hero, problema, solución, Atucha II, equipo, contacto) y verificar que no incluye cifras de facturación ni financiamiento
- [x] 2.2 Crear diccionario EN completo en `app.js` y verificar cobertura total (cada `data-i18n` tiene clave ES y EN)
- [x] 2.3 Implementar toggle ES/EN con persistencia `localStorage` y verificar cambio instantáneo + recuerdo tras recarga

## 3. Contacto, SEO y cierre

- [x] 3.1 Configurar constantes `CONTACT` (email, LinkedIn, WhatsApp) y verificar que los tres enlaces abren el destino correcto
- [x] 3.2 Añadir title, meta description, Open Graph y atributos de accesibilidad y verificar con inspección del `<head>` y navegación por teclado
- [x] 3.3 Crear `README.md` con instrucciones de deploy y verificar `openspec validate add-landing-atomia` pasa sin errores

## 4. Docker para VPS

- [x] 4.1 Crear `Dockerfile` (nginx:alpine), `.dockerignore` y `docker-compose.yml` y verificar `docker build -t atomia-web .` termina con éxito
- [x] 4.2 Verificar `docker compose up -d` sirve el landing en ES/EN en el puerto 80 y documentar actualización en `README.md`
