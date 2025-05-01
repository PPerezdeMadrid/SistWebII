# MongoDB

## Índice
(pendiente)

## Descarga e instalación de MongoDB

### En Windows
1. Ve al sitio oficial de MongoDB: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community).
2. Descarga el instalador para Windows.
3. Ejecuta el instalador y sigue las instrucciones:
    - Selecciona la opción "Complete" durante la instalación.
    - Asegúrate de marcar la opción para instalar MongoDB como un servicio.
4. Una vez instalado, verifica la instalación abriendo una terminal y ejecutando:
    ```bash
    mongod --version
    ```



### En macOS (usando Homebrew)
1. Abre una terminal y ejecuta el siguiente comando para instalar MongoDB:
    ```bash
    brew tap mongodb/brew
    brew install mongodb-community@7.0
    ```
2. Inicia el servicio de MongoDB:
    ```bash
    brew services start mongodb/brew/mongodb-community
    ```
3. Verifica la instalación ejecutando:
    ```bash
    mongod --version
    ```

### Ejemplo: Instalación de colecciones de ejemplo
1. Descarga los datos de ejemplo desde el repositorio oficial de MongoDB: [https://www.mongodb.com/docs/manual/tutorial/sample-datasets/](https://www.mongodb.com/docs/manual/tutorial/sample-datasets/).
2. Importa una colección de ejemplo usando el comando `mongoimport`. Por ejemplo:
    ```bash
    mongoimport --db ejemploDB --collection restaurantes --file restaurantes.json --jsonArray
    ```
    - `--db ejemploDB`: Especifica el nombre de la base de datos.
    - `--collection restaurantes`: Especifica el nombre de la colección.
    - `--file restaurantes.json`: Ruta al archivo JSON con los datos.
    - `--jsonArray`: Indica que el archivo contiene un array de documentos JSON.

    Descargarse `sample_training.zip` para los ejercicios:
    ```bash
    git clone https://github.com/neelabalan/mongodb-sample-dataset.git
    cd mongodb-sample-dataset/sample_training
    ```

    Luego ejecuta estos comandos para importar cada archivo en la base de datos sample_training:

    ```bash
    mongoimport --db sample_training --collection companies --file companies.json
    mongoimport --db sample_training --collection inspections --file inspections.json
    mongoimport --db sample_training --collection routes --file routes.json
    mongoimport --db sample_training --collection trips --file trips.json
    mongoimport --db sample_training --collection zips --file zips.json
    mongoimport --db sample_training --collection grades --file grades.json
    mongoimport --db sample_training --collection posts --file posts.json
    mongoimport --db sample_training --collection stories --file stories.json
    mongoimport --db sample_training --collection tweets --file tweets.json
    ```
    Puedes repetir el comando para cada archivo .json que veas en esa carpeta.

3. Verifica que los datos se hayan importado correctamente:
    ```bash
    mongo
    use ejemploDB
    db.restaurantes.find().pretty()
    ```

## Básicos de configuración

### Shell
- `cls`: Limpiar la consola.
- `show dbs`: Mostrar las bases de datos.
- `db`: Devuelve el nombre de la base de datos activa.
- `use <nombre_db>`: Cambiar a una base de datos concreta.

### Collections
- `show collections`: Muestra las colecciones de la DB activas.
- `db.createCollection(<name>, <options>)`: Crea una nueva colección (crea automáticamente si no existe).
- `db.<collection>.drop()`: Elimina la colección

### Read
- `db.<collection>.findOne()`: Devuelve un elemento de la colección.
- `db.<collection>.find()`: Devileve todos los elementos de la colección. Si hay más de 20, devuelve 20 y un puntero.
- `db.<collection>.find().pretty`: Lo presenta de una forma más fácil de leer.
- `db.<collection>.find().count()`
- `db.<collection>.find(<query>)`: Query para filtrar la búsqueda
```js
db.zips.find({"state": "AL"}).count()
```

### Insert
- `db.<collection>.insertOne(<document>)`
- `db.<collection>.insertMany([<document1>, <document2>,...])`
Al insertar un elemento, si no existe la base de datos o la colección, la crea en ese momento. 
```js
db.libros.insertMany([
  { titulo: "1984", autor: "George Orwell", año: 1949 },
  { titulo: "Fahrenheit 451", autor: "Ray Bradbury", año: 1953 }
]);
```

### _id
Clave primaria (único por documento)
- Puede ser de cualqiuer tipo excepto array o regex.
- Si no lo indicamos al insertar, se genera un `ObjectId`.
- Es inmmutable.
- Al insertar un documento con un `_id`que ya existe, salta una excepción:
    + **E1100** duplicate key error collection.
    + Si estábamos insertando múltiples, no se insertarán los que fallen. Podemos añadir `{"ordered": false}`para que sí. 

### Update
- `db.<collection>.updateOne(filter, update, options)`
- `db.<collection>.updateMany(filter, update, options)`: actualiza el valor de un campo.
    + Filter: selección del criterio.
    + Update: Modificación a aplicar
- `db.<collection>.replaceOne(filter, replacement, options)`: Reemplazar un documento por otro. 

    ```js
    db.libros.updateOne(
    { titulo: "1984" },
    { $set: { autor: "George Orwell (Revisado)" } }
    );

    db.libros.updateMany(
    { año: { $lt: 2000 } },
    { $set: { disponible: true } }
    );

    db.libros.replaceOne(
    { titulo: "Fahrenheit 451" },
    { titulo: "Fahrenheit 451", autor: "Ray Bradbury", año: 1953, disponible: true }
    );
    ```

### Delete
- `db.<collection>.deleteOne(filter, options)`
- `db.<collection>.deleteMany(filter, options)`

---

## Operadores
### Comparadores
- `$eq`: Igual a un valor específico.
    ```js
    db.libros.find({ año: { $eq: 1953 } });
    ```
- `$ne`: No igual a un valor específico.
    ```js
    db.libros.find({ año: { $ne: 1953 } });
    ```
- `$gt`: Mayor que.
    ```js
    db.libros.find({ año: { $gt: 2000 } });
    ```
- `$gte`: Mayor o igual que.
    ```js
    db.libros.find({ año: { $gte: 2000 } });
    ```
- `$lt`: Menor que.
    ```js
    db.libros.find({ año: { $lt: 2000 } });
    ```
- `$lte`: Menor o igual que.
    ```js
    db.libros.find({ año: { $lte: 2000 } });
    ```
- `$in`: Coincide con cualquiera de los valores en un array.
    ```js
    db.libros.find({ año: { $in: [1949, 1953] } });
    ```
- `$nin`: No coincide con ninguno de los valores en un array.
    ```js
    db.libros.find({ año: { $nin: [1949, 1953] } });
    ```

### Operadores Lógicos
- `$and`: Combina múltiples condiciones (todas deben cumplirse).
    ```js
    db.libros.find({ $and: [{ año: { $gte: 1950 } }, { disponible: true }] });
    ```
- `$or`: Combina múltiples condiciones (al menos una debe cumplirse).
    ```js
    db.libros.find({ $or: [{ año: { $lt: 1950 } }, { disponible: false }] });
    ```
- `$not`: Niega una condición.
    ```js
    db.libros.find({ año: { $not: { $gte: 2000 } } });
    ```
- `$nor`: Ninguna de las condiciones debe cumplirse.
    ```js
    db.libros.find({ $nor: [{ año: { $lt: 1950 } }, { disponible: false }] });
    ```

#### Expressive `$expr` en MongoDB

El operador `$expr` permite usar expresiones agregadas dentro de consultas regulares. Esto es útil para realizar comparaciones entre campos del mismo documento o para usar operadores condicionales.

##### Ejemplo: Comparación entre campos
```js
db.ventas.find({
    $expr: {
        $gt: ["$cantidad", "$stock"]
    }
});
```
En este ejemplo, se seleccionan los documentos donde el campo `cantidad` es mayor que el campo `stock`.

##### Ejemplo: Uso de operadores condicionales
```js
db.ventas.find({
    $expr: {
        $cond: {
            if: { $gte: ["$cantidad", 100] },
            then: true,
            else: false
        }
    }
});
```
Aquí se evalúa una condición y se devuelve un valor basado en el resultado.

##### Ejemplo: Combinación con otros operadores
```js
db.ventas.find({
    $and: [
        { categoria: "electrónica" },
        {
            $expr: {
                $lt: ["$precio", "$precioPromocion"]
            }
        }
    ]
});
```
Este ejemplo busca documentos de la categoría `electrónica` donde el precio sea menor que el precio de promoción.

#### Operadores Array
### Operadores Array

- `$push`: Añade un elemento a un array. Si el campo no existe, lo crea.
    ```js
    db.libros.updateOne(
      { titulo: "1984" },
      { $push: { comentarios: "Excelente libro" } }
    );
    ```
- También se puede usar con modificadores como `$each`, `$sort`, `$slice`, etc., para mayor control:
    ```js
    db.libros.updateOne(
        { titulo: "1984" },
        {
        $push: {
            comentarios: {
                $each: ["Muy interesante", "Recomendado"],
                $sort: 1,
                $slice: 5
            }
        }
        }
    );
    ```
En este ejemplo:
- `$each`: Añade múltiples elementos.
- `$sort`: Ordena los elementos del array.
- `$slice`: Limita el tamaño del array.
---

## Agregaciones

---

## Índices

---

## Validación

---

## Modelado de datos

---