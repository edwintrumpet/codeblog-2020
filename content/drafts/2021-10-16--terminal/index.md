---
title: Introducción a la terminal y línea de comandos
cover: https://www.redeszone.net/app/uploads-redeszone.net/2018/02/Ubuntu-Terminal-ASCII.png
author: Edwin García
tags: frontend,backend
---

Por medio de la terminal podemos realizar muchas de las tareas que usualmente nos toman muchos clicks, pero eso no es todo. Además de hacer más rápido nuestro trabajo en muchas ocaciones es necesario para manipular elementos que se encuentran en nuestros archivos por medio de códigos en programación.

Cuando abrimos el explorador de archivos en nuestro computador podemos ver claramente que estamos ubicados en un lugar, que podemos entrar en una carpeta, salir de ella, volver atrás, crear carpetas, eliminarlas, crear documentos, borrarlos...

Vamos a pensar en la terminal como algo similar al explorador de archivos, solo que cuando entramos nos encontramos con una pantalla usualmente negra que no nos dice mucho. Si fuera similar al explorador de archivos lo primero que me interesa saber es en qué carpeta estoy y qué archivos hay en esta carpeta.

## ¿Cómo sé en donde estoy?

Cuando abrimos la terminal usualmente se abre en el directorio `/home/usr` que es donde el usuario actual guarda todos sus archivos, esta dirección también se representa por medio del símbolo `~`. También podríamos abrir la terminal desde un directorio diferente si así lo indicamos por ejemplo abriéndola dando click derecho dentro del explorador de archivos en una ubicación específica.

En cualquier momento podemos usar la siguiente instrucción para ver en qué ubicación estamos actualmente

```shell
pwd
```

## Rutas absolutas y relativas

### Rutas absolutas

Cuando queremos indicar la ubicación de un archivo o directorio y usamos la dirección completa desde la raiz estamos hablando de rutas absolutas, estas rutas en Linux y MacOs inician con `/` que es el archivo raiz.

Por ejemplo:

`/home/usr/Documentos/academicos`

es una ruta absoluta

### Rutas relativas

También podemos indicar una ubicación con respecto a la ubicación actual, en este caso no se pone el slash sino el nombre del directorio o archivo al que deseamos acceder directamente desde la posición actual o podemos usar el punto y los dos puntos que nos ayudan a navegar con facilidad.

Por ejemplo, si estoy en el directorio de **Documentos** y en este directorio tengo otro que se llama **academicos** puedo indicar la dirección de **academicos** simplemente así

`academicos`

o así

`./academicos`

Si quisiera volver a **Documentos** no podría simplemente escribir `Documentos` porque esta carpeta no está contenida en la que estamos y no la encontraría, por lo que para ir hacia arriba en el árbol de directorios usaremos los dos puntos así.

`..`

o así

`../`

### Punto y dos puntos

Como podemos ver, el punto se refiere al directorio actual, mientras que los dos puntos se refieren al directorio padre o el directorio que se encuentra arriba en el árbol de directorios.

## Estructura de una instrucción

Cuando queremos hacer algo con la terminal la única forma en la que podemos interactuar es por medio de texto, entonces cualquier texto que escribamos en ella es una instrucción.

Una instrucción puede tener una sola palabra, pero también puede tener algunos parámetros extras que se llaman banderas con los que se le indica que se comporte de alguna manera especial o se le pueden pasar parámetros para que actúe de acuerdo a esos parámetros.

Por ejemplo el siquiente comando nos muestra los archivos y carpetas que hay en la ubicación actual.

```shell
ls
```

Pero no nos muestra los archivos ocultos, si quisieramos ver incluso los archivos ocultos debemos indicarlo por medio de una badera así

```shell
ls -a
```

Pero si nuestro interés fuera más bien ver los archivos en forma de lista con algunas de sus características usaríamos

```shell
ls -l
```

También podríamos juntar las dos o más banderas para indicarle por ejemplo que me muestre los archivos en lista, que incluya los ocultos y además que agregue una unidad de medida a el tamaño del archivo o carpeta

```shell
ls -lah
```

Pero si en lugar de querer saber qué archivos tenemos en la ubicación actual quiero saber los archivos que tengo en otro lugar, por ejemplo quiero saber qué archivos tengo en la ruta `/home/usr/Documentos` lo indico así

```shell
ls /home/usr/Documentos
```

> Para generalizar estas indicaciones desde ahora en adelante vamos a usar la siguiente notación
>
> ```shell
> ls <ruta relativa o absoluta>
> ```

Igual le podemos pasar una bandera a esta instrucción para indicarle que me los muestre en lista

```shell
ls -l <ruta relativa o absoluta>
```

## Navegación entre directorios

Para desplazarnos entre carpetas se usa el comando `cd` seguido de la ruta a la que queremos desplazarnos

```shell
cd <ruta relativa o absoluta>
```

Si queremos ir un directorio hacia arriba lo indicamos como

```shell
cd ..
```

Si queremos ir al directorio principal del usuario podemos hacerlo de varias formas

```shell
cd ~
```

o simplemente así

```shell
cd
```

## Instrucciones principales

> ```shell
> pwd
> ```
>
> Nos muestra la ubicación actual en la terminal

> ```shell
> cd <ruta relativa o absoluta>
> ```
>
> Ubica la terminal en la ruta indicada

> ```shell
> ls
> ```
>
> Muestra la lista de archivos y directorio que contiene la carpeta en la que estamos ubicados, se >le puede pasar una ruta para que indique el contenido en esa ruta o algunas banderas como:
>
> - `l`: muestra en forma de lista
> - `a`: incluye archivos y directorio ocultos
> - `h`: agrega información que facilita la lectura a humanos

> ```shell
> mkdir <nombre o ruta de la carpeta>
> ```
>
> Crea una nueva carpeta

> ```shell
> touch <nombre o ruta del archivo>
> ```
>
> Crea un nuevo archivo

> ```shell
> rm <nombre o ruta del archivo>
> ```
>
> Elimina el archivo

> ```shell
> rm -r <nombre o ruta de la carpeta>
> ```
>
> Elimina la carpeta y todo su contenido

> ```shell
> cat <nombre o ruta del archivo>
> ```
>
> Muestra el contenido de un archivo de texto plano

> ```shell
> more <nombre o ruta del archivo>
> ```
>
> Muestra el contenido de un archivo de texto plano y además lo pagina, es más adecuado para leer textos largos que `cat`

> ```shell
> less <nombre o ruta del archivo>
> ```
>
> Muestra el contenido de un archivo de texto plano en una interfaz parecida a un editor en la que es fácil navegar, para salir de esa interfaz se usa `q`

> ```shell
> cat > <nombre o ruta del archivo>
> ```
>
> Permite ingresar texto por medio de la terminal para reescribir el archivo que indicamos o crear uno nuevo con ese nombre si no existe

> ```shell
> cat >> <nombre o ruta del archivo>
> ```
>
> Permite ingresar texto por medio de la terminal para agregarlo al texto que ya existe en el archivo que indicamos, si no existe el archivo lo crea

## Ayuda

Cada instrucción puede tener muchas opciones de configuración por medio de banderas o a veces ni siquiera tenemos muy claro qué hace una instrucción, por lo que si usamos `--help` nos mostrará todas las opciones de configuración que tiene.

Por ejemplo

```shell
ls --help
```

Nos muestra la forma en la que podemos usar esta instrucción.

Esta instrucción de ayuda funciona aún cuando necesitamos ayuda más específica como si queremos información sobre un comando y una bandera en específico.
