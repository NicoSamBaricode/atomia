# Spec Delta

## ADDED Requirements

### Requirement: Assets reales del deck
El sistema SHALL usar los assets reales de la presentación: logo en hero/header, gráfico de demanda eléctrica en la sección problema y fotos reales en las 4 tarjetas del equipo. No SHALL quedar placeholders visibles cuando los assets existen en `assets/`.

#### Scenario: Logo y fotos visibles
- **WHEN** el visitante abre la página con `assets/` completo
- **THEN** ve el logo real de ATOMIA en header y hero, el gráfico de demanda en problema y una foto real en cada tarjeta del equipo

### Requirement: Problema con cards a la izquierda y gráfico a la derecha
El sistema SHALL presentar la sección problema con las 3 tarjetas apiladas verticalmente a la izquierda y el gráfico de demanda a la derecha (apilados en móvil).

#### Scenario: Layout problema en desktop
- **WHEN** el visitante ve la sección problema en desktop
- **THEN** encuentra las tarjetas IA, % y CHF·CC una arriba de otra a la izquierda y el gráfico a la derecha con la misma altura del conjunto

### Requirement: Hover en todas las cards
El sistema SHALL aplicar a todas las cards un efecto hover (elevación leve, borde teal y sombra), desactivado cuando el usuario prefiere movimiento reducido.

#### Scenario: Hover fluido y accesible
- **WHEN** el visitante pasa el cursor sobre cualquier card
- **THEN** la card se eleva con borde teal, salvo preferencia de movimiento reducido

### Requirement: Solución como flujo en 3 pasos
El sistema SHALL presentar la solución como flujo Input → AtomIA Toolkit → Output con flechas de progresión, conservando los sub-bloques del deck (datos experimentales, leyes físicas, código del cliente, +potencia, auditable, se integra).

#### Scenario: Flujo legible
- **WHEN** el visitante recorre la sección solución de izquierda a derecha (o de arriba abajo en móvil)
- **THEN** percibe la secuencia 1 Input → 2 Toolkit → 3 Output con sus contenidos

### Requirement: Sección mercado sin cifras sensibles y sin sección próximo paso
El sistema SHALL incluir la sección mercado (~420 reactores de agua, foco en 5 centrales AR/BR, proceso de negocio en 3 pasos) y SHALL NOT incluir sección de próximo paso; el contacto final es directo (¿Nos comunicamos? + email/LinkedIn/WhatsApp), sin mostrar US$2.5M por contrato ni US$22.5M acumulados.

#### Scenario: Contenido público sin finanzas ni próximo paso
- **WHEN** se revisa el texto de mercado y contacto
- **THEN** aparecen mercado, proceso y canales de contacto, y no aparecen cifras de facturación ni objetivos de financiamiento
