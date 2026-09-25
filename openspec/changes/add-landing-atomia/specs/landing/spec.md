# Spec Delta

## Purpose

Presentar públicamente a ATOMIA como empresa que combina física y machine learning para aumentar la potencia nuclear con los mismos estándares de seguridad.

## ADDED Requirements

### Requirement: Estructura institucional completa
El sistema SHALL presentar las 8 secciones institucionales (header, hero, problema, solución, prueba Atucha II, equipo, contacto, footer) en una sola página desplazable con navegación por anclas.

#### Scenario: Navegación por secciones
- **WHEN** el visitante hace clic en un enlace del header (Problema, Solución, Validación, Equipo, Contacto)
- **THEN** la página se desplaza a la sección correspondiente y el enlace activo queda visible

#### Scenario: Contenido sensible excluido
- **WHEN** se revisa todo el texto visible de la página
- **THEN** no aparecen cifras de facturación (US$22.5M), precio por contrato ni pedido de financiamiento

### Requirement: Hero con propuesta de valor
El sistema SHALL mostrar en el hero el badge IB50K 16ª edición, el nombre AtomIA, el claim "+5% de energía nuclear limpia / Sin modificar la planta" y la descripción de física + machine learning, más dos CTAs hacia contacto y solución.

#### Scenario: Hero visible al cargar
- **WHEN** el visitante abre www.atomia.tech
- **THEN** ve el badge, el título, el claim, la descripción y ambos CTAs sin necesidad de desplazar

### Requirement: Prueba Atucha II con métricas verificables
El sistema SHALL mostrar las 4 métricas de validación (>5% margen térmico, 375.000 MWh/año, US$15M/año, ~138 ton CO₂eq/año) junto a la etiqueta TRL 6 en entorno real.

#### Scenario: Métricas visibles
- **WHEN** el visitante llega a la sección de validación
- **THEN** encuentra las 4 métricas con sus unidades y la mención TRL 6

### Requirement: Equipo fundador
El sistema SHALL listar los 4 perfiles (Christian Marcel CEO/CTO, Nicolás Sammarco CBDO/CIO, Rosendo Fazzari CSO, Darío Osorio CSO) con rol y una línea de credenciales.

#### Scenario: Equipo completo
- **WHEN** el visitante revisa la sección equipo
- **THEN** ve nombre, rol y credencial de cada uno de los 4 integrantes

### Requirement: Branding fiel a la presentación y responsive
El sistema SHALL replicar la identidad visual de la presentación IB50K: fondo navy oscuro, acento teal para badge pill con borde y claim "+5%", títulos principales en amarillo, texto secundario claro, y mantener el diseño del hero (badge superior, título gigante AtomIA, claim en dos líneas, descripción y CTAs). Además SHALL usar el logo de `assets/` y adaptarse a móvil (una columna) y escritorio (múltiples columnas) sin scroll horizontal a 360px de ancho.

#### Scenario: Identidad del deck reconocible
- **WHEN** se compara el hero con la primera slide de la presentación
- **THEN** se reconocen el badge pill IB50K con borde teal, el título amarillo gigante, el claim teal/blanco y el fondo navy oscuro

#### Scenario: Render móvil sin scroll horizontal
- **WHEN** la página se abre a 360px de ancho
- **THEN** todo el contenido es legible sin desplazamiento horizontal y el header colapsa la navegación

#### Scenario: Logo del cliente
- **WHEN** existen archivos de logo en `assets/`
- **THEN** el header y el hero usan esos archivos en lugar de un placeholder

### Requirement: Canales de contacto directo
El sistema SHALL exponer enlaces funcionales de email (mailto), LinkedIn y WhatsApp en la sección contacto y en el footer, incluyendo la mención Bariloche y www.atomia.tech.

#### Scenario: Contacto clicable
- **WHEN** el visitante hace clic en email, LinkedIn o WhatsApp
- **THEN** se abre el destino correspondiente (cliente de correo, perfil de LinkedIn, chat de WhatsApp)

### Requirement: SEO y accesibilidad base
El sistema SHALL incluir título, meta description, etiquetas Open Graph, HTML semántico, contraste AA en textos y foco visible en elementos interactivos.

#### Scenario: Metadatos presentes
- **WHEN** se inspecciona el `<head>` del documento
- **THEN** existen título, meta description y etiquetas Open Graph con el dominio www.atomia.tech
