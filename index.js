import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

/* =========================
   EJERCICIO 1 - SIMULACIÓN
   ========================= */
app.post("/ej1/simular/:tiempo", (req, res) => {
  const tiempo = parseInt(req.params.tiempo);
  const { m, v0, a } = req.body;

  if (!m || !v0 || !a) {
    return res.status(400).json({ error: "Debe enviar masa, v0(velocidad inicial) y aceleracion en el body" });
  }

  const resultados = [];

  for (let t = 1; t <= tiempo; t++) {
    const v = v0 + a * t; // velocidad final
    const E = 0.5 * m * Math.pow(v, 2); // energía cinética
    const d = v0 * t + 0.5 * a * Math.pow(t, 2); // distancia recorrida

    resultados.push({
      segundo: t,
      velocidad: v,
      energia: E,
      distancia: d,
    });
  }

  res.json(resultados);
});

/* =========================
   EJERCICIO 2 - CALCULADORA
   ========================= */
function guardarHistorial(req, res, operacion, a, b, resultado) {
  const expresion = `${a}${operacion}${b}=${resultado}`;
  let historial = [];

  if (req.cookies.historial) {
    historial = JSON.parse(req.cookies.historial);
  }

  historial.push(expresion);
  res.cookie("historial", JSON.stringify(historial));
  return resultado;
}

// Operaciones básicas
app.post("/ej2/sumar", (req, res) => {
  const { a, b } = req.body;
  const resultado = a + b;
  guardarHistorial(req, res, "+", a, b, resultado);
  res.json({ resultado });
});

app.post("/ej2/restar", (req, res) => {
  const { a, b } = req.body;
  const resultado = a - b;
  guardarHistorial(req, res, "-", a, b, resultado);
  res.json({ resultado });
});

app.post("/ej2/multiplicar", (req, res) => {
  const { a, b } = req.body;
  const resultado = a * b;
  guardarHistorial(req, res, "*", a, b, resultado);
  res.json({ resultado });
});

app.post("/ej2/dividir", (req, res) => {
  const { a, b } = req.body;
  if (b === 0) return res.status(400).json({ error: "División por cero no permitida" });
  const resultado = a / b;
  guardarHistorial(req, res, "/", a, b, resultado);
  res.json({ resultado });
});

// Historial
app.get("/ej2/historial", (req, res) => {
  const historial = req.cookies.historial ? JSON.parse(req.cookies.historial) : [];
  res.json({ historial });
});

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
