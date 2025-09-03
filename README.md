# 📌 API Ejercicios 2 y 3

Este proyecto contiene dos ejercicios implementados con **ExpressJS**:

1. **Ejercicio 2:** Simulación del movimiento de un objeto segundo a segundo.  
2. **Ejercicio 3:** API de calculadora básica (sumar, restar, multiplicar y dividir) con historial almacenado en cookies.  

---
# Tecnologías

   Node.js
   Express.js
   cookie-parser

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/EdwinPinto29/retos_EdwinPinto.git
   cd ejercicios-express

2. Instalar dependencias:
   npm install

3. Iniciar servidor:
   node index.js

   El servidor se ejecuta en:
   http://localhost:3000

## Ejercicio 2: Simulación de Movimiento

**Endpoint**
   POST /ej2/simular/:tiempo   -(Pon el tiempo en el parametro)

### Ejemplo de uso:
   {
  "m": 10,
  "v0": 2,
  "a": 3
}

## Ejercicio 3: Calculadora con Historial

## 📌 Endpoints 

| Método | Endpoint            | Descripción                          |
|--------|---------------------|--------------------------------------|
| POST   | `/ej3/sumar`        | Suma dos números                     |
| POST   | `/ej3/restar`       | Resta dos números                    |
| POST   | `/ej3/multiplicar`  | Multiplica dos números               |
| POST   | `/ej3/dividir`      | Divide dos números (valida división por cero) |
| GET    | `/ej3/historial`    | Devuelve el historial almacenado en la cookie |

### Ejemplo de uso:
{ "a": 4, "b": 7 }

## Historial

**Endpoints**
   GET /ej3/historial
