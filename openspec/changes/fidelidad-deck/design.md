# Design

## Context

Ver `proposal.md`. Assets ya extraídos de la presentación original (ver `assets/`). Brief cerrado: replicar el deck exactamente; la dirección visual del brief manda sobre cualquier default estético.

## Goals / Non-Goals

**Goals:**
- Cada sección del landing espeja una slide: hero, problema, solución, prueba, mercado, equipo, próximo paso/contacto.
- Assets reales con peso web razonable (fotos equipo ≤640px JPEG).
- Bilingüe total incluyendo las secciones nuevas.

**Non-Goals:**
- Sin rediseño creativo ni "toque propio": fidelidad manda.
- Sin cifras de facturación en mercado.

## Decisions

- **Logo negro sobre navy**: `logo.png` (fondo negro) se presenta dentro de marco negro redondeado en el hero (emblema) y `logo-mark.png` recortado en círculo con anillo teal en el header — replica el tratamiento circular del deck sin bordes visibles.
- **Chips de iconos IA / % / CHF·CC**: recreados en CSS (pastilla teal sobre navy), porque en el deck son formas de texto, no imágenes exportables.
- **Flujo solución con flechas CSS** (→ en desktop, ↓ en móvil) en lugar de imagen: mantiene texto seleccionable y traducible.
- **Gráfico Bloomberg como `<figure>` con epígrafe** y crédito de fuente, igual que el deck.
- **Mercado sin finanzas**: 420 reactores + foco AR/BR + proceso 3 pasos; las cifras US$2.5M/22.5M quedan fuera hasta que el usuario las autorice.

## Risks / Trade-offs

- [Risk] Foto asignada a persona equivocada → Mitigación: mapeo confirmado por el usuario (Christian=C, Nicolás=A, Rosendo=B, Darío=D).
- [Risk] `assets/` pesa ~1MB (fotos) → Mitigación: JPEG 640px; carga diferida con `loading="lazy"` fuera del hero.
