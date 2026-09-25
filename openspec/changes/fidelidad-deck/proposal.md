# Proposal

## Why

El usuario rechazó el aspecto genérico del primer landing: quiere réplica fiel de la presentación IB50K con sus assets reales (logo, gráfico Bloomberg de demanda, fotos del equipo), mismos iconos, flujos y secciones del deck.

## What Changes

- Incorporar assets reales extraídos de la presentación original en `assets/`: `logo.png`, `logo-mark.png`, `grafico-demanda.png`, fotos `equipo-{christian,nicolas,rosendo,dario}.jpg`.
- Rediseñar secciones como réplica del deck: hero con logo real, problema con chips de iconos IA/%/CHF·CC + gráfico de demanda con epígrafe, solución como flujo 3 pasos con flechas, equipo con fotos reales, nuevas secciones mercado (sin cifras de facturación) y próximo paso + contacto final.
- Ampliar diccionario EN para las nuevas secciones.
- Excluir cifras sensibles: US$2.5M por contrato, US$22.5M acumulados (no son contenido público).

## Capabilities

### New Capabilities

- Ninguna.

### Modified Capabilities

- `landing`: fidelidad visual al deck + assets reales + secciones mercado y próximo paso.

## Impact

- Archivos modificados: `index.html`, `styles.css`, `app.js`.
- Archivos nuevos en `assets/`: logo, gráfico y 4 fotos (~1MB total).
- Sin cambios en Docker ni en i18n (solo se agregan claves).
