- Proyecto desarrollado con **Angular** V13.2.5 para ejecutar el proyecto es necesario tener instaladas las siguientes tecnologias:

-   Para **ejecutar la aplicacion** basta con ubicarse en el directorio raiz de la aplicación y ejecutar los siguientes comandos:
    -   npm install
    -   ng serve
        -  La aplicación corre por defecto en el puerto 4200, en dado caso de que el puerto 4200 se encuentre ocupado, puede moficarlo con el siguiente comando
            -   ng serve --port=4200

-   **Explicación de la solución**
    -  Se desarrollo la lista de Pokémon's en Cards y se muestra el nombre del mismo, también contiene un botón el cual muestra otra vista con los detalles del Pokémon como imagen, nombre y habilidades;
    -  Para obtener el nombre, la imagen y las habilidades fue necesario realizar tres funciones diferentes que consumían diferentes web service.
    -  Se creó una función primeramente para obtener los nombres del Pokémon's una vez que se obtuvo se almacenaron en un arreglo para ir creando la Card de cada uno.
    -  Una vez terminado, se creó otro componente de detalles para obtener la imagen y las habilidades fue necesario pasar por parametro el nombre y de esta manera se creó una vista de detalles para cada Pokémon la cual se muestra cuando presionas el botón de "Más detalles"
    -  en esta vista se agrego tambien un boton para poder regresar a la lista y poder ver los detalles de otro Pokémon 

    **¿Cómo se mejoraría la solución propuesta?**
    -  Primeramente crearía un carrusel con los Pokémon´s nuevos, adicional a esto pondría un botón que me muestre otra vista con todos los Pokémon´s haciendo uso de Cards.
    -  Las Cards tendrían la imagen y el nombre del Pokémon para que sea más fácil identificarlos, pondría una animación en el hover de la Card que atraiga la atención del usuario, la cual muestra información básica del Pokemón, adicional agregaría un botón que me muestre un modal en la misma página que muestre toda la información o detalles del Pokémon para evitar que el usuario navegue a otra pagina para poder ver los detalles y tenga una mejor experiencia ya que cuando se cierra el modal puede fácilmente ver los detalles de otro Pokémon a comparación de la otra solucion que se tenia que poner un boton en la otra pagina para regresar a ver más Pokemo's.

