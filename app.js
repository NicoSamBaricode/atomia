/* AtomIA landing — i18n ES/EN + contacto configurable.
   TODO(config): reemplazar los valores de CONTACT con los reales. */
var CONTACT = {
  email: "info@atomia.tech",
  linkedin: "https://www.linkedin.com/company/atomia-tech",
  whatsapp: "https://wa.me/5492944000000"
};

var STRINGS = {
  es: {
    "skip": "Saltar al contenido",
    "nav.problema": "Problema",
    "nav.solucion": "Solución",
    "nav.validacion": "Validación",
    "nav.equipo": "Equipo",
    "nav.contacto": "Contacto",
    "hero.badge": "IB50K · 16ª edición",
    "hero.claim1": "+5% de energía nuclear limpia",
    "hero.claim2": "Sin modificar la planta",
    "hero.desc": "Combinamos Física + Machine Learning para que las centrales nucleares operen con más potencia respetando los mismos estándares de seguridad.",
    "hero.cta1": "Contáctanos",
    "hero.cta2": "Ver la solución",
    "problema.eyebrow": "El problema",
    "problema.title": "Un techo invisible en cada reactor",
    "problema.c1t": "Demanda exponencial de energía",
    "problema.c1d": "Los centros de datos y la IA disparan la demanda global de energía limpia de base, firme e ininterrumpida.",
    "problema.c2t": "Márgenes sobredimensionados",
    "problema.c2d": "Centrales operando con márgenes de seguridad sobredimensionados por herramientas y métodos anacrónicos.",
    "problema.c3t": "Potencia limitada",
    "problema.c3d": "La potencia máxima está limitada por el fenómeno de Flujo Crítico de Calor (CHF) y otras condiciones críticas.",
    "solucion.eyebrow": "La solución",
    "solucion.title": "Física y datos para aumentar la potencia",
    "solucion.s1n": "1 · Input",
    "solucion.s1t": "Datos del cliente",
    "solucion.s1d": "Datos experimentales y bases termohidráulicas y de CHF del cliente, leyes físicas y su código de cálculo aprobado por el ente regulatorio.",
    "solucion.s2n": "2 · AtomIA Toolkit",
    "solucion.s2t": "Física + Machine Learning",
    "solucion.s2d": "Conjunto de herramientas con fundamentos físicos potenciadas por ML, ajustadas a las características de cada cliente.",
    "solucion.s3n": "3 · Output",
    "solucion.s3t": "Más potencia, misma seguridad",
    "solucion.s3d": "Mejor predicción de fenómenos críticos para operar con más potencia manteniendo los estándares de seguridad.",
    "solucion.t1": "Auditable: explicable para reguladores como ARN, NRC y ANSN.",
    "solucion.t2": "Se integra: mejora el código del cliente sin reemplazarlo.",
    "prueba.eyebrow": "La prueba · Atucha II",
    "prueba.title": "Ya validado en una central real",
    "prueba.m1": "más de margen térmico verificado",
    "prueba.m2": "MWh por año adicionales, potenciales",
    "prueba.m3": "por año para la operadora (a US$40/MWh)",
    "prueba.m4": "CO₂eq/año evitadas al desplazar gas natural",
    "prueba.trl": "TRL 6 · demostración en entorno real",
    "equipo.eyebrow": "El equipo",
    "equipo.title": "+10 años de experiencia en el área",
    "equipo.p1": "Dr. Ing. Nuclear · CNEA, CONICET e Instituto Balseiro.",
    "equipo.p2": "Datos, IT y desarrollo de negocios.",
    "equipo.p3": "Ingeniero Nuclear · termohidráulica, modelado físico y ML.",
    "equipo.p4": "Simulación, validación y licenciamiento.",
    "contacto.title": "¿Nos comunicamos?",
    "contacto.desc": "Tomar contacto con operadores, reguladores y partners del sector nuclear.",
    "contacto.email": "Escribir por email",
    "footer.loc": "Bariloche"
  },
  en: {
    "skip": "Skip to content",
    "nav.problema": "Problem",
    "nav.solucion": "Solution",
    "nav.validacion": "Validation",
    "nav.equipo": "Team",
    "nav.contacto": "Contact",
    "hero.badge": "IB50K · 16th edition",
    "hero.claim1": "+5% clean nuclear energy",
    "hero.claim2": "Without modifying the plant",
    "hero.desc": "We combine Physics + Machine Learning so nuclear power plants operate at higher power while meeting the same safety standards.",
    "hero.cta1": "Contact us",
    "hero.cta2": "See the solution",
    "problema.eyebrow": "The problem",
    "problema.title": "An invisible ceiling in every reactor",
    "problema.c1t": "Exponential energy demand",
    "problema.c1d": "Data centers and AI are driving global demand for clean, firm, always-on baseload energy.",
    "problema.c2t": "Oversized margins",
    "problema.c2d": "Plants operating with oversized safety margins due to outdated tools and methods.",
    "problema.c3t": "Limited power",
    "problema.c3d": "Maximum power is limited by Critical Heat Flux (CHF) and other critical conditions.",
    "solucion.eyebrow": "The solution",
    "solucion.title": "Physics and data to raise power",
    "solucion.s1n": "1 · Input",
    "solucion.s1t": "Client data",
    "solucion.s1d": "Client experimental data and CHF/thermal-hydraulic databases, physical laws, and their regulator-approved calculation code.",
    "solucion.s2n": "2 · AtomIA Toolkit",
    "solucion.s2t": "Physics + Machine Learning",
    "solucion.s2d": "Physics-grounded, ML-boosted toolkit tailored to each client's characteristics.",
    "solucion.s3n": "3 · Output",
    "solucion.s3t": "More power, same safety",
    "solucion.s3d": "Better prediction of critical phenomena to operate at higher power while keeping safety standards.",
    "solucion.t1": "Auditable: explainable to regulators such as ARN, NRC and ANSN.",
    "solucion.t2": "It integrates: improves the client's code without replacing it.",
    "prueba.eyebrow": "The proof · Atucha II",
    "prueba.title": "Already validated in a real plant",
    "prueba.m1": "verified additional thermal margin",
    "prueba.m2": "potential additional MWh per year",
    "prueba.m3": "per year for the operator (at US$40/MWh)",
    "prueba.m4": "CO₂eq/year avoided by displacing natural gas",
    "prueba.trl": "TRL 6 · demonstration in a real environment",
    "equipo.eyebrow": "The team",
    "equipo.title": "10+ years of experience in the field",
    "equipo.p1": "PhD Nuclear Engineer · CNEA, CONICET and Balseiro Institute.",
    "equipo.p2": "Data, IT and business development.",
    "equipo.p3": "Nuclear Engineer · thermal-hydraulics, physical modeling and ML.",
    "equipo.p4": "Simulation, validation and licensing.",
    "contacto.title": "Shall we talk?",
    "contacto.desc": "Get in touch with operators, regulators and nuclear industry partners.",
    "contacto.email": "Write by email",
    "footer.loc": "Bariloche"
  }
};

function setLang(lang) {
  var dict = STRINGS[lang] || STRINGS.es;
  document.documentElement.lang = lang;
  var nodes = document.querySelectorAll("[data-i18n]");
  for (var i = 0; i < nodes.length; i++) {
    var key = nodes[i].getAttribute("data-i18n");
    if (dict[key]) nodes[i].textContent = dict[key];
  }
  var btns = document.querySelectorAll(".lang-toggle button");
  for (var j = 0; j < btns.length; j++) {
    btns[j].setAttribute("aria-pressed", btns[j].getAttribute("data-lang") === lang ? "true" : "false");
  }
  try { localStorage.setItem("atomia-lang", lang); } catch (e) {}
}

function initContact() {
  var email = document.getElementById("link-email");
  var li = document.getElementById("link-linkedin");
  var wa = document.getElementById("link-whatsapp");
  if (email) email.href = "mailto:" + CONTACT.email;
  if (li) li.href = CONTACT.linkedin;
  if (wa) wa.href = CONTACT.whatsapp;
}

document.addEventListener("DOMContentLoaded", function () {
  var saved = "es";
  try { saved = localStorage.getItem("atomia-lang") || "es"; } catch (e) {}
  if (saved !== "es" && saved !== "en") saved = "es";
  setLang(saved);
  initContact();
  var btns = document.querySelectorAll(".lang-toggle button");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      setLang(this.getAttribute("data-lang"));
    });
  }
});
