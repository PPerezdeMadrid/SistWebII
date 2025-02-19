
# Ejercicios Tema 2 JSON


## JSON Schema – Ejercicio 1

Realiza los siguientes pasos:

- Piensa en la información que podríamos guardar sobre una película específica
- Crea un objeto JSON con la información anterior
- Diseña el JSON Schema para validar el JSON anterior

Puedes usar páginas como [Imdb](https://www.imdb.com) o [Rotten Tomatoes](https://www.rottentomatoes.com).

**Información básica de una película**
- Título: Nombre de la película.
- Año de estreno: Año en que se lanzó.
- Duración: Minutos de duración.
- Director: Nombre del director.
- Género: Lista de géneros (acción, drama, etc.).
- Calificación IMDb: Puntuación del 1 al 10.

```json
[
    {
        "titulo": "Beauty and the Beast",
        "estreno": 2017,
        "duracion": 129,
        "director": "Bill Condon",
        "genero": ["Fantasía", "Romance", "Musical"],
        "IMDb": 7.1
    }
]

```

```json
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "type": "object",
    "properties": {
        "titulo": {
            "type": "string"
        },
        "estreno": {
            "type": "integer"
        },
        "duracion": {
            "type": "integer"
        },
        "director": {
            "type": "string"
        },
        "genero": {
            "type": "array",
            "items": {
                "type": "string"
        }
        },
        "calificacionIMDb": {
            "type": "number"
        }
    },
    "required": ["titulo", "estreno", "duracion", "director", "genero"]
}

```