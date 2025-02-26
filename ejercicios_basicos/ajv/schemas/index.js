const Ajv2020 = require("ajv/dist/2020");
const ajv = new Ajv2020();

const schema_threat = require("./threat.schema.json")
const schema_countermeasure = require("./countermeasure.schema.json")

ajv.addSchema(schema_threat, "threat")
ajv.addSchema(schema_countermeasure, "countermeasure")

module.exports = ajv;