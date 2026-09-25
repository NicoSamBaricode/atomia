# AtomIA · www.atomia.tech

Landing institucional bilingüe (ES/EN) de ATOMIA. Sitio estático puro:
`index.html` + `styles.css` + `app.js`, sin build ni backend.

## Vista previa local

Abrí `index.html` en el navegador, o servilo con:

```bash
python3 -m http.server 8000
```

## Configurar antes de publicar

1. Subí el logo a `assets/logo.svg` (ver `assets/README.md`).
2. Revisá los valores de `CONTACT` al inicio de `app.js`
   (email, LinkedIn, WhatsApp).

## Deploy al VPS con Docker

```bash
docker compose up -d --build
```

Verificá en `http://TU_VPS/` que el landing cargue en ES/EN.
Para actualizar: copiá los archivos nuevos y repetí el comando.

Rollback: `docker compose down` y levantá la versión anterior.
