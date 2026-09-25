# Spec Delta

## Purpose

Permitir desplegar el landing de ATOMIA en cualquier VPS con Docker en un solo comando, sin depender de runtimes ni builds locales.

## ADDED Requirements

### Requirement: Imagen Docker autocontenida
El sistema SHALL proveer un `Dockerfile` basado en nginx:alpine que sirva `index.html`, `styles.css`, `app.js` y `assets/` en el puerto 80, sin incluir archivos de OpenSpec ni de git.

#### Scenario: Build de imagen
- **WHEN** se ejecuta `docker build -t atomia-web .`
- **THEN** el build termina con éxito y la imagen sirve la página en el puerto 80

#### Scenario: Imagen sin archivos internos
- **WHEN** se inspecciona el contenido servido por el contenedor
- **THEN** no son accesibles `openspec/`, `.git/` ni `node_modules/`

### Requirement: Despliegue con compose en VPS
El sistema SHALL proveer un `docker-compose.yml` con servicio web (build local, puerto 80:80, `restart: unless-stopped`) de modo que `docker compose up -d` levante el sitio, y un `README.md` con los pasos de despliegue en VPS y actualización.

#### Scenario: Levantar en VPS
- **WHEN** se copian los archivos al VPS y se ejecuta `docker compose up -d`
- **THEN** www.atomia.tech responde con el landing en ambos idiomas

#### Scenario: Actualización
- **WHEN** se publica una nueva versión de los estáticos
- **THEN** el README describe cómo reconstruir (`docker compose up -d --build`) y verificar el sitio
