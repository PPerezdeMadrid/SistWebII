const ajv = require("./schemas")
const express = require("express");
const app = express();

app.use(express.json());

// Función para validar JSON basado en su esquema
function validateJSON(type, json) {
    const validate = ajv.getSchema(type);
    if (validate(json)) {
        console.log(`${type} JSON OK`);
        return { status: 200 };
    } else {
        console.log(`${type} JSON NOT OK`);
        console.log(validate.errors);
        return { status: 400, error: validate.errors };
    }
}

// Rutas para validar JSON
app.post("/validate/threat", (req, res) => {
    const result = validateJSON("threat", req.body);
    res.status(result.status).json(result);
});

app.post("/validate/countermeasure", (req, res) => {
    const result = validateJSON("countermeasure", req.body);
    res.status(result.status).json(result);
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Ejemplos para probar con postman: 
// http://localhost:3000/validate/threat

const threat_ok = {
    "cve": "CVE-2023-12345",
    "name": "SQL Injection",
    "description": "Vulnerabilidad que permite inyección de SQL",
    "countermeasures": ["CM-001"],
    "severity": "critical"
};
// http://localhost:3000/validate/countermeasure
const countermeasure_ok = {
    "id": "CM-001",
    "name": "Firewall Rules",
    "description": "Reglas de firewall para bloquear tráfico no autorizado",
    "effectiveness": "high",
    "related_threats": ["TH-001", "TH-002"]
};