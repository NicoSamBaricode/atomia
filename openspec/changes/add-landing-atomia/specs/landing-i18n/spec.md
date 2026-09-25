# Spec Delta

## Purpose

Permitir que visitantes de Argentina/Brasil y del ámbito internacional (reguladores, inversores) lean el landing de ATOMIA en español o inglés sin recargar ni depender de backend.

## ADDED Requirements

### Requirement: Toggle ES/EN instantáneo
El sistema SHALL ofrecer un toggle ES/EN en el header que cambie todos los textos visibles al otro idioma de forma instantánea y sin recargar la página. El español es el idioma por defecto.

#### Scenario: Cambio a inglés
- **WHEN** el visitante hace clic en el toggle EN
- **THEN** todos los títulos, párrafos, CTAs, navegación y footer se muestran en inglés inmediatamente

#### Scenario: Idioma por defecto español
- **WHEN** un visitante nuevo abre la página sin preferencia guardada
- **THEN** el contenido se muestra en español

### Requirement: Persistencia de preferencia
El sistema SHALL guardar la preferencia de idioma en `localStorage` y restaurarla en visitas posteriores.

#### Scenario: Preferencia recordada
- **WHEN** el visitante elige inglés, cierra y vuelve a abrir la página
- **THEN** la página carga directamente en inglés

### Requirement: Cobertura total del diccionario
El sistema SHALL traducir el 100% de las cadenas visibles mediante un diccionario ES/EN en `app.js`, sin dejar textos sin traducir ni claves visibles.

#### Scenario: Sin fugas de idioma
- **WHEN** se alterna entre ES y EN y se recorren todas las secciones
- **THEN** no queda ningún texto en el idioma contrario ni identificadores técnicos visibles
