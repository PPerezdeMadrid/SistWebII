## Ejercicios Nivel 1 – `sample_airbnb`

1. **Encuentra el alojamiento con más reviews.**
   Muestra solo el nombre y la cantidad de reviews.
   ```js
   db.listingsAndReviews.aggregate([
    {$project:{_id: 0, name:1,  sizeReviews:{$size: "$reviews"}}},
    {$sort:{sizeReviews: -1} },
    {$limit: 1}
   ])

   ```

2. **Encuentra el alojamiento con más amenities.**
   Muestra el nombre y la cantidad de amenities.
   ```js
   db.listingsAndReviews.aggregate([
    {$project:{_id: 0, name:1,  sizeAmenities:{$size: "$amenities"}}},
    {$sort:{sizeAmenities: -1} },
    {$limit: 1}
   ])
   ```

3. **Agrupa los alojamientos por tipo de propiedad (`property_type`) y muestra cuántos hay de cada tipo.**
    ```js
    db.listingsAndReviews.aggregate([  
        {$group: {_id: "$property_type", CountProperty:{$sum: 1}}},
        {$project: {property_type:1,CountProperty:1}}
    ])     
    ```
    > Nota: size en project y sum en group

4. **Cuenta cuántos alojamientos tienen wifi.**
   Sugerencia: busca el string `"Wifi"` dentro del array `amenities`.
    ```js
    db.listingsAndReviews.find(
        {amenities: "Wifi"}
    ).count()   
    ```

5. **Filtra los alojamientos que tengan más de 50 reviews y una puntuación (`review_scores.rating`) mayor a 90.**
    ```js
    db.listingsAndReviews.aggregate([
    {
        $match: {
            $expr: {
                $gt: [{ $size: "$reviews" }, 50]
            },
            "review_scores.review_scores_rating": { $gt: 90 }
        }
    },
    {
        $project: {name: 1,reviews_count: { $size: "$reviews" },"review_scores.review_scores_rating": 1}
    }
    ])
    ```

6. **Ordena los alojamientos por precio (`price`) descendente y muestra los 5 primeros.**
    ```js
    db.listingsAndReviews.aggregate([
        {$sort: {price:-1}},
        {$limit: 5},
        {$project: {_id:0, price: 1, name: 1}}
    ])
    ```

7. **Cuenta cuántos alojamientos hay por país (`address.country`) y ordénalos de mayor a menor.**
    ```js
    db.listingsAndReviews.aggregate([
        {$group:{_id: "$address.country", CountCountry: {$sum: 1} }},
        {$project: {_id:1,CountCountry:1 }}
    ])
    ```

---

## Ejercicios nivel 2

1. En `sample_training.companies`, ¿cuántas empresas tienen más empleados que el año en el que se fundaron?
    > Nota: para comparar dos campos dentro de un mismo documento usamos `$expr`
    ```js
    db.companies.find({
        $expr: {
            $gt: ["$number_of_employees", "$founded_year"]
        }
        }).count()
    ```
2. En `sample_training.companies`, ¿en cuántas empresas coinciden su `permalink` con su `twitter_username`?
    ```js
    db.companies.find({
        $expr: {
            $eq: ["$permalink", "$twitter_username"]
        }
        }).count()
    ```

3. En `sample_airbnb.listingsAndReviews`, ¿cuál es el nombre del alojamiento en el que pueden estar más de 6 personas alojadas y tiene exactamente 50 reviews?

4. En `sample_airbnb.listingsAndReviews`, ¿cuántos documentos tienen el `"property_type"` "House" e incluyen `"Changing table"` como una de las `"amenities"`?

5. En `sample_training.companies`, ¿cuántas empresas tienen oficinas en Seattle?
    ```js
    db.companies.find({"offices.city": "Seattle"}).count()
    ```
---

## Ejercicios nivel 3

1. En `sample_airbnb.listingsAndReviews`, ¿qué "room type" existen?

2. En `sample_training.companies`, haga una query que devuelva el nombre y el año en el que se fundaron las 5 compañías más antiguas.
    ```js
    db.companies.aggregate([
        {$match: { founded_year: { $ne: null } } },
        {$sort: {founded_year: 1}},
        {$limit: 5},
        {$project: {_id:0, name:1,founded_year:1 }}
    ])
    ```

3. En `sample_training.trips`, ¿en qué año nació el ciclista más joven?
    ```js
    db.trips.aggregate([
        {$match: { "birth year": { $type: 'number' } } },
        {$sort: {"birth year": -1}},
        {$limit: 1},
        {$project: {_id:0, name:1, "birth year":1 }}
    ])
    ```
    > Importante el match!!! porq hay valores `null`

---
