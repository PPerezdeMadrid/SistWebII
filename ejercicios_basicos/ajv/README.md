# Validador con ajv

**Ejecutar el servidor:**  
```sh
node index.js
```

## Validar una amenaza (`/validate/threat`) 
- **Ejemplo de JSON válido:**  
```json
{
    "cve": "CVE-2023-12345",
    "name": "SQL Injection",
    "description": "Vulnerabilidad que permite inyección de SQL",
    "countermeasures": ["CM-001"],
    "severity": "critical"
}
```

## Validar una contramedida (`/validate/countermeasure`)
- **Ejemplo de JSON válido:**  
```json
{
    "id": "CM-001",
    "name": "Firewall Rules",
    "description": "Reglas de firewall para bloquear tráfico no autorizado",
    "effectiveness": "high",
    "related_threats": ["TH-001", "TH-002"]
}
```

---

## ✅ **Ejemplo de validación exitosa**  

**Cuando el JSON es válido:**  
![Countermeasure OK](postman_countermeasure_ok.png)
![threat OK](postman_threat_ok.png)

---

## ❌ **Ejemplo de error en la validación**  

**Cuando el JSON es inválido:**  
![Countermeasure NOT OK](postman_countermeasure_not_ok.png)
![Threat NOT OK](postman_threat_not_ok.png)

---
