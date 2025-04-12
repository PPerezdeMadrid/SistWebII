# MongoDB – EJ3

1. En `sample_airbnb.listingsAndReviews`, ¿qué "room types" existen?  
![Ejercicio 3.1](img/ej3.1.png)

2. En `sample_training.companies`, haga una query que devuelva el nombre y el año en el que se fundaron las 5 compañías más antiguas.  
![Ejercicio 3.2](img/ej3.2.png)

3. En `sample_training.trips`, ¿en qué año nació el ciclista más joven? (sol. 1999)
![Ejercicio 3.3](img/ej3.3.png)

    Nota: Usamos `$nin: [null, ""]` para excluir tanto los valores null como los strings vacíos (""), asegurando que solo se consideren documentos con un valor válido en "birth year"