# XPath

## Ejercicio 1

Usa XPath para responder a las siguientes preguntas sobre el archivo `hamlet.xml`:

```bash
basex -i hamlet "//ACT[TITLE='ACT II']//SCENE/TITLE"
```
![Resultado ej 1.1](img/ej1.1.png)
 
2. ¿Cuántas veces habla Hamlet?  
Contar cuántos diálogos (SPEECH) tienen como hablante a HAMLET.
```bash
basex -i hamlet.xml -x "count(//SPEAKER[text() = 'HAMLET']/parent::SPEECH)"
```
![Resultado ej 1.2](img/ej1.2.png)

3. El texto de las líneas que contengan la palabra "king" 
```bash
basex -i hamlet.xml -x "//LINE[contains(., 'king')]"
```
![Resultado ej 1.3](img/ej1.3.png)

4. El segundo diálogo (`speech`) de Bernardo en el tercer acto  

```bash
basex -i hamlet.xml -x "//ACT[TITLE='ACT III']//SPEECH[SPEAKER='BERNARDO'][2]"
```

> Nota: `[2]` selecciona el segundo diálogo de Bernardo en el acto III.
![Resultado ej 1.4](img/ej1.4.png)
> Nota: Parece que no hay ningún resultado. Si miramos todas las veces que habla Bernardo en el tercer acto nos sale que cero.
![Resultado ej 1.4b](img/ej1.4b.png)


5. Número de líneas de cada diálogo (`speech`)  
```bash
basex -i hamlet.xml -x "//SPEECH/count(LINE)"
```
![Resultado ej 1.5b](img/ej1.5b.png)

* El primer diálogo tiene 2 líneas.
* El segundo diálogo tiene 1 línea.
* El tercer diálogo tiene 10 líneas.
* Y así sucesivamente.


6. Número de líneas del diálogo (`speech`) con más líneas 
```bash
basex -i hamlet.xml -x "max(//SPEECH/count(LINE))"
```
![Resultado ej 1.6](img/ej1.6.png)

7. Todos los diálogos (`speech`) de la tercera `PERSONA` del primer `PGROUP` dentro de `PERSONAE`

```bash
basex -i hamlet.xml -x "//PERSONAE/PGROUP[1]/PERSONA[3]//SPEECH"
```

Esta consulta hace lo siguiente:

* Selecciona el primer grupo de personajes dentro de `PERSONAE` (`PGROUP[1]`).
* Luego, selecciona la tercera `PERSONA` dentro de ese grupo (`PERSONA[3]`).
* Finalmente, obtiene todos los diálogos (`SPEECH`) asociados a esa persona.

![Resultado ej 1.7](img/ej1.7.png)

Parece que no hay un resultado.
![Resultado ej 1.7b](img/ej1.7b.png)


