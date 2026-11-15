# ValoVibes_by_CodeHeroes


> 🌐 **Deploy oficial:** [https://valovibes.vercel.app/](https://valovibes.vercel.app/)


> 📁 **Repositorio:** [https://github.com/nilattac/ValoVibes_by_CodeHeroes](https://github.com/nilattac/ValoVibes_by_CodeHeroes)


Landing page del TP3 de la materia Desarrollo de Sistemas Web (Front End) - IFTS29


### Grupo 17:
* Artine Marcos Leonel
* Alcaraz Marisol
* Cardozo Paredes Anahi Angelica
* Cattalín Ezequiel Ignacio
* Vargas Nancy


## Consigna Asignada por el Docente


**ASIGNACIÓN DOCENTE · SORTEO · S12-B**  
**ValoVibes**  
**Videojuegos y comunidades**  


### Objetivo de la startup
Búsqueda de compañeros de Valorant compatibles y coordinación de invitaciones.


### Bloque: Invitaciones


#### FRASE 1 · R3
Si un jugador sigue habilitado y hay compañeros compatibles con su rango, rol y horario en una sesión sin revisión por reporte grave pendiente, el sistema le muestra una propuesta de grupo.


#### FRASE 2 · R4
Si el jugador acepta una propuesta que sigue disponible, continúa habilitado y la sesión no tiene una revisión por reporte grave pendiente, el sistema reserva su lugar, confirma su incorporación y muestra la información para unirse.


---


## Utilización de IA


* **Entorno de desarrollo agéntico:** Google Antigravity IDE
* **Modelo de inteligencia artificial:** Gemini 3.8 Flash y Claude Sonnet 4.6
* **Alcance de la asistencia con IA:**
  * **Análisis y Especificación de Reglas:** Desglose lógico de las sentencias asignadas (Frases R3 y R4), identificando datos de entrada, condiciones concurrentes y consecuencias del sistema.


  * **Arquitectura de Agentes Autónomos:** Propuesta de agentes inteligentes para emparejamiento, verificación de moderación, reserva atómica de cupos y coordinación de invitaciones.


  * **Modelado Visual y Diagramas:** Creación y estilización temática de diagramas de flujo interactivos con Mermaid.js.


  * **Desarrollo Front-End:** Maquetación semántica en HTML5, diseño responsivo y estética gamer en CSS3, e interactividad con JavaScript.


  * **Generación y Optimización de Activos:**
    * Generación del logo en alta resolución.
    * Optimización de imágenes en formato `.webp`.
    * Generación de cursor personalizado tipo mira de Valorant.


* **Resumen de iteración:**
  * En primera instancia se realizó el analisis requerido de cada frase y luego se solicitó al agente la generación de los diagramas correspondientes con Mermaid.js y el almacenado de todo temporariamente en el ReadMe.
     
      * Se corrigieron detalles del desarrollo.


  * Posteriormente se solicitó el diagramado de la LandingPage con la estructura y la estetica deseada.
 
    * Se solicitó corregir el diseño de los gráficos para hacerlos más pequeños y estéticos.


    * Se solicitó completar información obviada en las propuestas


    * Se solicitó corregir otras pequeñas errores de información.
 
  * Luego se procedió a solicitar features deseados como el cambio a imagen HD del logo de la startup, el cursor personalizado tipo mira de Valorant y los efectos hover sobre los elementos de los gráficos.
   
    * Se solicitó la eliminación de un banner inferior que indicaba que al hacer hover cambiaba la imagen.
 
  * Posteriormente se solicitó la inclusión de las imágenes del equipo de desarrollo
   
    * Se solicitó la eliminación de información innecesaria.
 
  * A continuación se solicitó elaborar el Conversation Log con todos los prompts utilizados.
 
  * Finalmente se solicitó la inclusión del link a GitHub y otro para visualizar el ReadMe.


* **Comentarios:**
  * **Tokens:** Se utilizó Gemini 3.8 flash hasta agotar su cupo de tokens gratuitos y luego se continuó con Claude Sonnet 4.6.


  * **Prompt de conversión de imagen:** En el afán de realizar todo con agentes, se solicitó la conversión de una imagen, generada por IA, de formato `.jpg` a `.webp`.
  Este pedido tardó mucho y el agente intentó varios métodos, consumiendo muchos tokens.
 
    Pasos:
    * Intenta usar Python Pillow❌.
    * Revisa que esté instalado node✔️, ffmpeg❌ y magick❌.
    * Analiza el package.json
    * Prueba si cwebp está instalado❌.
    * Revisa que esté instalado Python❌.
    * Quiere usar sharp-cli pero se equivoca en el comando.❌
    * Revisa la versión de npm.
    * Quiere usar el mismo comando pero desde cmd.❌
    * Corrige el comando y ejecuta desde cmd✔️.
    * Analiza la imagen.
    * Analiza el index.html
    * Edita el index.html
    * Borra la JPG anterior.


  * **Promt de extraccion de imagenes de pagina web:** Se solicitó al agente a que entre a la paguina web del grupo https://los-heroes-del-codigo-tp2.vercel.app/ y saque las 5 fotos que figuran en "Integrantes Los héroes del código" para luego agregarlas a esta landing.


    Para realizarlo utilizó un sub agente 'Web Page Inspector' y analizó las imágenes. Luego del análisis como nota final aclara


    `“Dado que el repositorio fuente de dicha web se encuentra clonado localmente en c:\Users\usuario\source\repos\los-heroes-del-codigo-tp2, las imágenes webp originales de alta resolución pueden copiarse directamente“.`
   
    Así que el agente solicitó una serie de permisos para acceder a los archivos y extrajo directamente las tarjetas completas (con información de más).
---


## Conclusión


El desarrollo del Trabajo Práctico 3 a través de un enfoque basado en Ingeniería de Prompts y Entornos Agénticos (Google Antigravity IDE) demostró ser una metodología altamente eficiente para la traducción de reglas de negocio complejas en productos de software funcionales y con identidad visual propia.
 
La experiencia nos permite extraer los siguientes aprendizajes clave:


  * Poder de la Abstracción Lógica: El desglose de las Frases R3 y R4 facilitó que Gemini 3.8 Flash interpretara con precisión restricciones críticas de concurrencia y validación (rango, rol, reportes de moderación y atomicidad en las reservas).


  * Iteración y Refinamiento Estético: Aunque las herramientas generativas crearon la base del código de manera casi instantánea, el rol humano de supervisión y diseño fino fue indispensable. Ajustar la escala de los diagramas de Mermaid.js, corregir omisiones de datos, incorporar elementos inmersivos de la estética gamer y limpiar la interfaz, requirieron un proceso cíclico e iterativo de refinamiento.
 
  * Desafíos en la Automatización Operativa: El bucle de intentos del agente al convertir imágenes entre formatos expone las limitaciones actuales de los entornos agénticos cuando se enfrentan a restricciones de dependencias del sistema operativo (comandos fallidos, falta de binarios instalados). Asimismo, el comportamiento del 'Web Page Inspector' al resolver la extracción mediante el acceso a rutas locales evidenció una capacidad de "atajo lógico" o resolución pragmática avanzada, aunque requiriese supervisión en los permisos de sobreescritura de datos.
 
En definitiva, ValoVibes_by_CodeHeroes cumple con creces los objetivos del TP3, logrando una Landing Page responsive, moderna y fiel a la consigna. Este proyecto consolida nuestra capacidad para colaborar con Inteligencias Artificiales de vanguardia, entendiéndolas no solo como herramientas de autocompletado, sino como co-pilotos activos en el ciclo completo de desarrollo de sistemas web.
