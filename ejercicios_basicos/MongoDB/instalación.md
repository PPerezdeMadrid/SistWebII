
Instalar MongoDB en MacOS:
```bash
brew tap mongodb/brew
brew install mongodb-community@7.0
```

Iniciarlo con:
```bash
brew services start mongodb/brew/mongodb-community
```

Instalar MongoDB Shell:
```bash
brew install mongosh
mongosh
```

Instalar MongoDB Database Tools:
```bash
brew install mongodb-database-tools
mongoimport --version
```

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

```bash
mongosh
> use sample_training
> show collections
```

Verificar los datos importados: `db.grades.findOne()`


