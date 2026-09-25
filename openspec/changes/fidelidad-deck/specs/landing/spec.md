# Spec Delta

## ADDED Requirements

### Requirement: Assets reales del deck
El sistema SHALL usar los assets reales de la presentación: logo en hero/header, gráfico de demanda eléctrica en la sección problema y fotos reales en las 4 tarjetas del equipo. No SHALL quedar placeholders visibles cuando los assets existen en `assets/`.

#### Scenario: Logo y fotos visibles
- **WHEN** el visitante abre la página con `assets/` completo
- **THEN** ve el logo real de ATOMIA en header y hero, el gráfico de demanda en problema y una foto real en cada tarjeta del equipo

### Requirement: Iconos del problema como en el deck
El sistema SHALL identificar las 3 tarjetas del problema con los mismos marcadores del deck: IA (demanda), % (márgenes) y CHF·CC (potencia limitada).

#### Scenario: Marcadores visibles
- **WHEN** el visitante revisa la sección problema
- **THEN** cada tarjeta muestra su marcador IA, % o CHF·CC respectivamente

### Requirement: Solución como flujo en 3 pasos
El sistema SHALL presentar la solución como flujo Input → AtomIA Toolkit → Output con flechas de progresión, conservando los sub-bloques del deck (datos experimentales, leyes físicas, código del cliente, +potencia, auditable, se integra).

#### Scenario: Flujo legible
- **WHEN** el visitante recorre la sección solución de izquierda a derecha (o de arriba abajo en móvil)
- **THEN** percibe la secuencia 1 Input → 2 Toolkit → 3 Output con sus contenidos

### Requirement: Secciones mercado y próximo paso sin cifras sensibles
El sistema SHALL incluir la sección mercado (~420 reactores de agua, foco en 5 centrales AR/BR, proceso de negocio en 3 pasos) y la sección próximo paso (objetivo 12 meses, consolidar, fortalecer equipo, misiones comerciales) con CTA de contacto, sin mostrar US$2.5M por contrato ni US$22.5M acumulados.

#### Scenario: Contenido público sin finanzas
- **WHEN** se revisa el texto de mercado y próximo paso
- **THEN** aparecen mercado, proceso y objetivos, y no aparece ninguna cifra de facturación
