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
    "nav.prueba": "Prueba",
    "nav.mercado": "Mercado",
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
    "problema.c1t": "Demanda Exponencial de Energía",
    "problema.c1d": "Los centros de datos y la IA disparan la demanda global de energía limpia y de base ininterrumpida.",
    "problema.c2t": "Márgenes Sobredimensionados",
    "problema.c2d": "Centrales operando con márgenes de seguridad sobredimensionados por herramientas o métodos anacrónicos.",
    "problema.c3t": "Potencia Limitada",
    "problema.c3d": "La potencia máxima generada por una central nuclear está limitada por el fenómeno de Flujo Crítico de Calor (CHF) u otras condiciones críticas.",
    "problema.chartt": "Demanda de Energía Eléctrica",
    "problema.chartc": "Consumo de Data Centers vs. Países",
    "problema.charts": "Fuente: Bloomberg, análisis de datos BloombergNEF y DC Byte",
    "solucion.eyebrow": "La solución",
    "solucion.title": "Física y datos para aumentar la potencia",
    "solucion.s1n": "1 · Input",
    "solucion.s1t": "Datos del cliente",
    "solucion.i1t": "Datos experimentales",
    "solucion.i1d": " — Ensayos y bases de datos termohidráulicos y de CHF del cliente.",
    "solucion.i2t": "Leyes físicas",
    "solucion.i2d": " — Principios que la solución debe respetar.",
    "solucion.i3t": "Código de cálculo termohidráulico del cliente",
    "solucion.i3d": " — Aprobado por ente regulatorio.",
    "solucion.s2n": "2 · AtomIA Toolkit",
    "solucion.s2t": "Física + Machine Learning",
    "solucion.t1t": "Toolkit",
    "solucion.t1d": " — Conjunto de herramientas basadas en fundamentos físicos potenciadas por Machine Learning.",
    "solucion.t2d": "Solución ajustada a las características del cliente.",
    "solucion.s3n": "3 · Output",
    "solucion.s3t": "Más potencia, misma seguridad",
    "solucion.o1t": "+ Potencia",
    "solucion.o1d": " — Una mejor predicción de fenómenos críticos permite operar con más potencia manteniendo los estándares de seguridad.",
    "solucion.o2t": "Auditable",
    "solucion.o2d": " — Explicable para reguladores como la ARN, NRC y la ANSN.",
    "solucion.o3t": "Se integra",
    "solucion.o3d": " — Mejora el código del cliente sin reemplazarlo.",
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
    "equipo.p3": "Ingeniero Nuclear e investigador en el CAB, especializado en termohidráulica nuclear, modelado físico y Machine Learning. Experiencia en investigación experimental, desarrollo de modelos computacionales y aplicación de ML a problemas de ingeniería complejos.",
    "mercado.eyebrow": "Mercado y negocio",
    "mercado.title": "reactores de agua: nuestro mercado",
    "mercado.desc": "Arrancamos por 5 centrales en Argentina y Brasil.",
    "mercado.proc": "Proceso de negocio",
    "mercado.p1": "Estudio de factibilidad",
    "mercado.p2": "Desarrollo Core Predictivo AtomIA",
    "mercado.p3": "Soporte de licenciamiento y mantenimiento",
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
    "nav.prueba": "Proof",
    "nav.mercado": "Market",
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
    "problema.c3d": "Maximum power from a nuclear plant is limited by Critical Heat Flux (CHF) and other critical conditions.",
    "problema.chartt": "Electric Energy Demand",
    "problema.chartc": "Data Center Consumption vs. Countries",
    "problema.charts": "Source: Bloomberg, BloombergNEF and DC Byte data analysis",
    "solucion.eyebrow": "The solution",
    "solucion.title": "Physics and data to raise power",
    "solucion.s1n": "1 · Input",
    "solucion.s1t": "Client data",
    "solucion.i1t": "Experimental data",
    "solucion.i1d": " — Client CHF and thermal-hydraulic tests and databases.",
    "solucion.i2t": "Physical laws",
    "solucion.i2d": " — Principles the solution must respect.",
    "solucion.i3t": "Client thermal-hydraulic calculation code",
    "solucion.i3d": " — Approved by the regulatory body.",
    "solucion.s2n": "2 · AtomIA Toolkit",
    "solucion.s2t": "Physics + Machine Learning",
    "solucion.t1t": "Toolkit",
    "solucion.t1d": " — Physics-grounded, Machine Learning-boosted toolkit.",
    "solucion.t2d": "Solution tailored to each client's characteristics.",
    "solucion.s3n": "3 · Output",
    "solucion.s3t": "More power, same safety",
    "solucion.o1t": "+ Power",
    "solucion.o1d": " — Better prediction of critical phenomena enables higher-power operation while keeping safety standards.",
    "solucion.o2t": "Auditable",
    "solucion.o2d": " — Explainable to regulators such as ARN, NRC and ANSN.",
    "solucion.o3t": "It integrates",
    "solucion.o3d": " — Improves the client's code without replacing it.",
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
    "equipo.p3": "Nuclear Engineer and CAB researcher, specialized in nuclear thermal-hydraulics, physical modeling and Machine Learning.",
    "mercado.eyebrow": "Market & business",
    "mercado.title": "water reactors: our market",
    "mercado.desc": "Starting with 5 plants in Argentina and Brazil.",
    "mercado.proc": "Business process",
    "mercado.p1": "Feasibility study",
    "mercado.p2": "AtomIA Predictive Core development",
    "mercado.p3": "Licensing and maintenance support",
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
