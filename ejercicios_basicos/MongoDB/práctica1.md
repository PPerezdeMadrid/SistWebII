# Plantillas de Ejercicios MongoDB

# Nivel 1
1. ¿Cuántas colecciones tienen menos de 100 personas en el campo pop?
```bash
db.getCollectionNames().forEach(function(collection) {
    let count = db[collection].countDocuments({ pop: { $lt: 100 } });
    if (count > 0) {
        print(collection + " tiene " + count + " documentos con 'pop' menor a 100");
    }
});
```
2. En sample_training.trips ¿Cuál es la diferencia entre la gente que nació en 1998 y la que nació después de 1998?
Nacidos en 1998: db.trips.find($eq: {"birth_year": 1998}).count()
Nacidos después 1998: db.trips.find($gt: {"birth_year": 1998}).count()
Total: db.trips.find($eq: {"birth_year": 1998}).count() - db.sample_training.trips.find($gt: {"birth_year": 1998}).count()
Corrección:
- Nacidos en 1998 (no hace falta $eq): db.trips.find({"birth_year": 1998}).count()
- Nacidos después 1998 (mal sintaxis): db.trips.find({"birth year": {$gt: 1998}}).count()

3. en sample_training.routes ¿Cuántas rutas tienen al menos una parada?
db.routes.find($gt:{"parada": 1})
Corrección: db.routes.fing({"paradas": {"$gte": 1}})

4. ¿Cuántos negocios tienen un resultado de inspección "Out of Business" y pertenecen al sector "Home Improvement Contractor - 100"?
db.business.find($and:[
   {"inspection result": "Out of Business"},
   {"inspection result": "Home Improvement Contractor - 100"}
]).count()
Corrección (has entendido mal el resultado)
db.sample_training.business.find({
  "inspection_result": "Out of Business",
  "sector": "Home Improvement Contractor - 100"
}).count()


5. En sample_training.inspections ¿Cuántos documentos hay con fecha de inspeccción "Feb 20 2015" o "Feb 21 2015" y cuyo sector no sea "Cigarette Retail Dealer - 127"?
db.inspection.find("fecha inspeccion":{$in:["Feb 20 2015","Feb 21 2015"] })
Corrección (se me ha olvidado el sector):
db.sample_training.inspections.find({
  date: { $in: ["Feb 20 2015", "Feb 21 2015"] },
  sector: { $ne: "Cigarette Retail Dealer - 127" }
}).count()


# Nivel 2
1. En `sample_training.companies`, ¿cuántas empresas tienen más empleados que el año en el que se fundaron? (sol. 324)
db.sample_training.companies.find({
   {$expr: {$gt: ["$number_employees", "$founded_year"]}}
}).count()

2. En `sample_training.companies`, ¿en cuántas empresas coinciden su `permalink` con su `twitter_username`? (sol. 1299)
db.sample_training.companies.find({
   {$expr: {$eq: ["$permalink", "$twitter_username"]}}
}).count()

3. En `sample_airbnb.listingsAndReviews`, ¿cuál es el nombre del alojamiento en el que pueden estar más de 6 personas alojadas y tiene exactamente 50 reviews? (sol. Sunset Beach Lodge Retreat)
db.sample_airbnb.listingsAndReviews.find({
   person: {$gt:6},
   $reviews: 50,
   {name: 1}
})
4. En `sample_airbnb.listingsAndReviews`, ¿cuántos documentos tienen el `"property_type"` "House" e incluyen `"Changing table"` como una de las `"amenities"`? (sol. 11)
db.sample_airbnb.listingsAndReviews.find({
   property_type: "House",
   "Changing table": "amenities"
})

---
5. En `sample_training.companies`, ¿cuántas empresas tienen oficinas en Seattle? (sol. 117)
6. En `sample_training.companies`, haga una query que devuelva únicamente el nombre de las empresas que tengan exactamente 8 `"funding_rounds"`
7. En `sample_training.trips`, ¿cuántos viajes empiezan en estaciones que están al oeste de la longitud -74? (sol. 1928)  
   Nota 1: Hacia el oeste la longitud decrece  
   Nota 2: el formato es `<field_name>: [ <longitud>, <latitud> ]`
8. En `sample_training.inspections`, ¿cuántas inspecciones se llevaron a cabo en la ciudad de `"NEW YORK"`? (sol. 18279)
9. En `sample_airbnb.listingsAndReviews`, haga una query que devuelva el nombre y la dirección de los alojamientos que tengan `"Internet"` como primer elemento de `"amenities"`

# Nivel 3
1. En `sample_airbnb.listingsAndReviews`, ¿qué "room types" existen?  
2. En `sample_training.companies`, haga una query que devuelva el nombre y el año en el que se fundaron las 5 compañías más antiguas.  
3. En `sample_training.trips`, ¿en qué año nació el ciclista más joven? (sol. 1999)