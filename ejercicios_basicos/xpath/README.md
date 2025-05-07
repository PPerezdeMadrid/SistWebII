# BaseX
## ⚙️ Primeros pasos

1. **Abre BaseX GUI** o la **consola**.

2. **Carga el archivo `hamlet.xml`** como base de datos:

   * GUI: `Database > New`, selecciona tu archivo y ponle un nombre.
   * Consola:

     ```bash
     basex -c"CREATE DB hamlet /ruta/a/hamlet.xml"
     ```

3. Asegúrate de estar dentro de esa base de datos:

   ```bash
   OPEN hamlet.xml
   ```
