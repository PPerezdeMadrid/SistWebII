# Plantillas de Ejercicios MongoDB

# Nivel 1
1. ¿Cuántas colecciones tienen menos de 100 personas en el campo pop?
2. En sample_training.trips ¿Cuál es la diferencia entre la gente que nació en 1998 y la que nació después de 1998?
3. en sample_training.routes ¿Cuántas rutas tienen al menos una parada?
4. ¿Cuántos negocios tienen un resultado de inspección "Out of Business" y pertenecen al sector "Home Improvement Contractor - 100"?
5. En sample_training.inspections ¿Cuántos documentos hay con fecha de inspeccción "Feb 20 2015" o "Feb 21 2015" y cuyo sector no sea "Cigarette Retail Dealer - 127"?

# Nivel 2
1. En `sample_training.companies`, ¿cuántas empresas tienen más empleados que el año en el que se fundaron? (sol. 324)
2. En `sample_training.companies`, ¿en cuántas empresas coinciden su `permalink` con su `twitter_username`? (sol. 1299)
3. En `sample_airbnb.listingsAndReviews`, ¿cuál es el nombre del alojamiento en el que pueden estar más de 6 personas alojadas y tiene exactamente 50 reviews? (sol. Sunset Beach Lodge Retreat)
4. En `sample_airbnb.listingsAndReviews`, ¿cuántos documentos tienen el `"property_type"` "House" e incluyen `"Changing table"` como una de las `"amenities"`? (sol. 11)
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