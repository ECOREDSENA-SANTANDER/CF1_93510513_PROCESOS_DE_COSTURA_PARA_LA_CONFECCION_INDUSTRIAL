<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Seguridad y salud en el puesto de trabajo

    .row.justify-content-center.mb-5.bg02.g-0(data-aos="zoom-in-left")
      .col-lg-4.p-0
        img.w-100.h-100.d-block.object-fit-cover.d-none.d-lg-block(src='@/assets/curso/temas/t4/img01.png', alt='')
      .col-lg-8
        .row.mb-0.p-5
          .col-lg-2.mb-3.col-4.col-md-3
            img.wid15(src='@/assets/curso/temas/t4/img02.png', alt='')
          .col-lg-12
            p.mb-0 La seguridad y salud en el trabajo constituye un eje transversal de la actividad productiva en el sector de la confección. Su incorporación en los procesos no responde únicamente a obligaciones normativas, sino a la necesidad de garantizar condiciones laborales que protejan la integridad física y mental de quienes participan en la cadena de producción. El conocimiento de los factores de riesgo presentes en el entorno de confección, así como la aplicación de medidas preventivas y protocolos de actuación ante eventos adversos, forma parte de las competencias esenciales del técnico en este campo.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
          h3.bg03.py-2.w-card-text Tipos de riesgos laborales, de postura y de movimientos 

    p Los riesgos laborales en el entorno de confección se clasifican según su naturaleza y el mecanismo a través del cual afectan la salud. Su identificación sistemática es el punto de partida de cualquier estrategia de prevención eficaz dentro del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST).

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
          h3.bg03.py-2.w-card-text Riesgos físicos

    p Los riesgos físicos se originan en las condiciones ambientales del lugar de trabajo y actúan sobre el organismo sin necesidad de contacto directo con la fuente. En los puestos de confección, los de mayor prevalencia son los siguientes:

    .row.justify-content-center.cursor-pointer.mb-5(data-aos="zoom-in-left")
        .col-xl-4.col-md-7.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t4/1.png", alt="")
            .crd_hover_txt--body
              h4.mb-4.d-flex.align-items-center
                span.icono-circulo.me-3
                  span.flecha
                | Ruido
              p.mb-0 Las máquinas de coser industriales generan niveles sonoros que, ante exposición prolongada sin protección auditiva adecuada, producen deterioro auditivo de carácter progresivo e irreversible. La normativa colombiana establece un límite de 85 decibeles para exposición continua durante una jornada de ocho horas, tal como lo dispone la Resolución 8321 de 1983 del Ministerio de Salud.
        
        .col-xl-4.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t4/2.png", alt="")
            .crd_hover_txt--body
              h4.mb-4.d-flex.align-items-center
                span.icono-circulo.me-3
                  span.flecha
                | Iluminación deficiente
              p.mb-0 La insuficiencia lumínica en el puesto de trabajo incrementa la probabilidad de errores en la costura, genera fatiga visual acumulada y aumenta el riesgo de accidentes. Cada puesto debe contar con iluminación localizada sobre el área de costura, complementaria a la iluminación general del espacio.
        
        .col-xl-4.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t4/3.png", alt="")
            .crd_hover_txt--body
              h4.mb-4.d-flex.align-items-center
                span.icono-circulo.me-3
                  span.flecha
                | Temperatura
              p.mb-0 Las condiciones térmicas inadecuadas (tanto la exposición a calor excesivo como a corrientes de aire frío) afectan la capacidad de concentración y pueden desencadenar afecciones musculoesqueléticas en trabajadores expuestos de forma continua.
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
          h3.bg03.py-2.w-card-text Riesgos mecánicos

    p Los riesgos mecánicos se derivan del contacto directo o indirecto con la maquinaria, las herramientas de corte y los materiales del proceso productivo. Los eventos de mayor frecuencia en el sector son:

    .fondo01.p-5.mb-4(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center.mb-2
        .col-lg-12.bg06.p-5
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-3
              ul.lista-ul
                li.d-flex.mb-3
                  i.fas.fa-angle-right2
                  | Contacto de los dedos con la aguja en movimiento, asociado a pérdida de concentración o adopción de posturas inadecuadas frente al equipo.
                li.d-flex.mb-3
                  i.fas.fa-angle-right2
                  | Atrapamiento de extremidades o prendas de vestir en las partes móviles de la maquinaria.
                li.d-flex.mb-3
                  i.fas.fa-angle-right2
                  | Cortes producidos por tijeras, cortadores rotativos o cuchillas utilizadas en la mesa de corte.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Golpes o lesiones por caída de objetos de peso considerable, como rollos de tejido o equipos almacenados de forma incorrecta.
            .col-lg-4.col-md-8
              img(src="@/assets/curso/temas/t4/img04.svg")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
          h3.bg03.py-2.w-card-text Riesgos ergonómicos

    p Los riesgos ergonómicos representan la categoría de mayor impacto acumulativo en el sector de la confección. Se originan en la interacción entre las características físicas del trabajador, las condiciones del puesto y las exigencias de la tarea, y sus efectos sobre la salud se manifiestan de forma gradual. Los factores de riesgo ergonómico más frecuentes en el puesto de costura son:

 
    .tarjeta.fondo02.p-4.pb-0.mb-4(data-aos="zoom-in-left")
      SlyderE.pb-lg-5.pb-3(tipo="a")
        .row.justify-content-center.align-items-center.my-lg-4.mb-5.text-white
          .col-lg-4.mb-4.mb-md-0
            h4 Posturas estáticas prolongadas
            p Mantener una misma posición corporal durante períodos extensos sin interrupciones genera tensión muscular acumulada, con mayor incidencia en cuello, hombros y región lumbar.
          .col-lg-5.col-md-8
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 18.  
              span Riesgo por postura estática o prolongada
            figure
              img(src='@/assets/curso/temas/t4/fig18.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4.mb-5.text-white
          .col-lg-4.mb-4.mb-md-0
            h4 Posturas forzadas
            p La inclinación sostenida del tronco hacia adelante y la rotación cervical mantenida sobrecargan la columna vertebral y la musculatura del cuello.
          .col-lg-5.col-md-8
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 19.  
              span Riesgo por postura forzada
            figure
              img(src='@/assets/curso/temas/t4/fig19.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4.mb-5.text-white
          .col-lg-4.mb-4.mb-md-0
            h4 Movimientos repetitivos
            p Operaciones como guiar el material, accionar el pedal y cortar hilos, ejecutadas de manera continua durante la jornada, generan lesiones por sobreuso en muñecas, antebrazos y codos.
          .col-lg-5.col-md-8
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 20.  
              span Riesgo por movimientos repetitivos
            figure
              img(src='@/assets/curso/temas/t4/fig20.png', alt='')

        .row.justify-content-center.align-items-center.my-lg-4.mb-5.text-white
          .col-lg-4.mb-4.mb-md-0
            h4 Aplicación de fuerza excesiva
            p La manipulación de cargas pesadas (rollos de tejido, equipos de trabajo) sin la técnica adecuada impone cargas mecánicas elevadas sobre la columna lumbar y la cintura escapular.
          .col-lg-5.col-md-8
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 21.  
              span Riesgo por fuerza excesiva
            figure
              img(src='@/assets/curso/temas/t4/fig21.png', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
          h3.bg03.py-2.w-card-text Riesgos psicosociales

    p La exposición a ritmos de producción intensivos, la presión asociada al cumplimiento de metas y la ausencia de pausas regulares son factores que generan fatiga mental, reducen la capacidad de atención y elevan la probabilidad de error o accidente en el puesto de trabajo.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
      h5 Tabla 24.
      span Lesiones musculoesqueléticas en el puesto de trabajo

    .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
      table
        thead
          tr
            th.izqtext.bg5 Lesión
            th.izqtext.bg5.w-25 Zona afectada
            th.izqtext.bg5 Causa principal
        tbody
          tr
            td
              p #[b Síndrome del túnel carpiano]
              .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-3
                h5 Figura 22.
                span Síndrome del túnel carpiano
              img(src="@/assets/curso/temas/t4/fig22.png" alt="")

            td Muñeca y mano.
            td Movimientos repetitivos sostenidos.

          tr
            td
              p #[b Tendinitis]
              .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-3
                h5 Figura 23.
                span Tendinitis
              img(src="@/assets/curso/temas/t4/fig23.png" alt="")

            td Codo y hombro.
            td Sobreesfuerzo muscular repetido.

          tr
            td
              p #[b Lumbalgia]
              .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-3
                h5 Figura 24.
                span Lumbalgia
              img(src="@/assets/curso/temas/t4/fig24.png" alt="")

            td Zona lumbar.
            td Postura estática prolongada sin soporte adecuado.

          tr
            td
              p #[b Cervicalgia]
              .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-3
                h5 Figura 25.
                span Cervicalgia
              img(src="@/assets/curso/temas/t4/fig25.png" alt="")

            td Cuello.
            td Postura forzada hacia adelante de manera sostenida.

          tr
            td
              p #[b Fatiga visual]
              .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-3
                h5 Figura 26.
                span Fatiga visual
              img(src="@/assets/curso/temas/t4/fig26.png" alt="Fatiga visual")

            td Ojos.
            td Iluminación insuficiente o trabajo de precisión prolongado.

    separador
    #t_4_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 4.1 Técnicas de ergonomía aplicadas al puesto de trabajo 

    p La ergonomía es la disciplina que estudia la relación entre las personas y los entornos en que desarrollan su actividad, con el propósito de adaptar las condiciones del puesto a las capacidades y límites del organismo humano. Su aplicación en el sector de la confección se concreta en ajustes técnicos del mobiliario, la postura y la organización del trabajo que reducen la carga física y contribuyen a la sostenibilidad del desempeño a lo largo de la jornada.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
          h3.bg03.py-2.w-card-text Ajuste del puesto de trabajo

    p La configuración correcta del puesto de costura parte de la alineación entre las dimensiones corporales del operario y las características físicas del equipo:

    SlyderF(columnas="col-lg-6 col-xl-4").mb-5(data-aos="zoom-in-left")
      .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7.col-md-4.col-lg-5
              figure
                img(src='@/assets/curso/temas/t4/01.png', alt='')
          h4.text-center Altura de la silla
          p.text-center Los pies deben apoyarse completamente sobre el suelo o sobre el pedal de la máquina, con las rodillas formando un ángulo aproximado de 90°. Cuando la silla no dispone de mecanismo de regulación, se recomienda el uso de un reposapiés para compensar la diferencia.

      .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7.col-md-4.col-lg-5
              figure
                img(src='@/assets/curso/temas/t4/02.png', alt='')
          h4.text-center Altura de la máquina
          p.text-center Los codos deben ubicarse ligeramente por encima del plano de trabajo, de modo que los antebrazos descansen de forma natural sin necesidad de elevar los hombros.

      .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7.col-md-4.col-lg-5
              figure
                img(src='@/assets/curso/temas/t4/03.png', alt='')
          h4.text-center Distancia a la máquina
          p.text-center El operario debe mantener proximidad con el equipo, con los codos cerca del tronco, de manera que el alcance al material y a los controles no requiera extensión forzada de los miembros superiores.
        
      .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7.col-md-4.col-lg-5
              figure
                img(src='@/assets/curso/temas/t4/04.png', alt='')
          h4.text-center Posición de la cabeza
          p.text-center La dirección de la mirada hacia el área de costura debe implicar una inclinación cervical que no supere los 20°. La flexión del cuello por encima de ese ángulo, mantenida durante períodos prolongados, genera tensión muscular progresiva en la región cervical.
      
      .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7.col-md-4.col-lg-5
              figure
                img(src='@/assets/curso/temas/t4/05.png', alt='')
          h4.text-center Respaldo de la silla
          p.text-center El respaldo debe ofrecer soporte a la región lumbar. La ausencia de soporte adecuado acelera la aparición de fatiga muscular y dolor en la zona baja de la espalda.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 27.
          span Postura correcta en la máquina de coser
        img(src='@/assets/curso/temas/t4/figura27.svg', alt='Esquema de persona sentada frente a una mesa de trabajo con antebrazos apoyados sobre la superficie, espalda recta y ángulos aproximados de noventa a ciento diez grados en rodillas y asiento.')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
          h3.bg03.py-2.w-card-text Pausas activas

    p Las pausas activas son interrupciones programadas de la actividad laboral, con una duración recomendada de entre cinco y diez minutos cada dos horas, durante las cuales se realizan ejercicios de movilidad articular y estiramiento muscular orientados a recuperar el estado funcional de los grupos musculares implicados en la tarea. Los ejercicios recomendados para el puesto de costura incluyen:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-8.mb-3
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center(titulo="Cuello")
            .col-lg-11.mb-4.mb-md-0
              p Rotaciones suaves en ambas direcciones e inclinaciones laterales llevando la oreja hacia el hombro, sin forzar el rango de movimiento.
          .row.justify-content-center(titulo="Hombros")
            .col-lg-11.mb-4.mb-md-0
              p Elevación simultánea de ambos hombros hacia las orejas, manteniendo la posición cinco segundos y liberando la tensión de forma controlada. Se recomienda repetir cinco veces.

          .row.justify-content-center(titulo="Muñecas")
            .col-lg-11.mb-4.mb-md-0
              p Extensión del miembro superior al frente con los dedos dirigidos hacia arriba, manteniendo diez segundos; seguida de la misma posición con los dedos dirigidos hacia abajo, otros diez segundos.

          .row.justify-content-center(titulo="Espalda")
            .col-lg-11.mb-4.mb-md-0
              p Flexión suave del tronco hacia adelante con los miembros superiores en reposo; incorporación progresiva segmento por segmento desde la región lumbar hasta la cervical.

          .row.justify-content-center(titulo="Ojos")
            .col-lg-11.mb-4.mb-md-0
              p Fijación de la mirada en un punto distante durante veinte segundos, con el fin de contrarrestar la fatiga visual acumulada por el trabajo de precisión sostenido.
      .col-lg-4.col-7.col-md-6
        img(src="@/assets/curso/temas/t4/img05.png")

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 28.
      span Pausas activas en el puesto de trabajo
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-10.col-10.col-md-8
        img(src='@/assets/curso/temas/t4/fig28.svg', alt='Conjunto de esquemas de personas que realizan diferentes movimientos de estiramiento del cuerpo, incluyendo brazos, espalda, cuello y piernas, en un entorno de trabajo con mesa, silla y elementos de oficina.')

    p.bg07.p-4.mb-4 #[b Nota:] la evidencia disponible en el campo de la salud ocupacional indica de manera consistente que la práctica regular de pausas activas reduce el ausentismo por enfermedad laboral de origen musculoesquelético y contribuye al mantenimiento del rendimiento productivo durante toda la jornada.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
          h3.bg03.py-2.w-card-text Técnicas de manipulación de cargas

    p La manipulación manual de cargas en el entorno de confección, que incluye el traslado de rollos de tejido, cajas de insumos y equipos, constituye un factor de riesgo de lesión osteomuscular aguda cuando no se aplica la técnica correcta. El procedimiento recomendado es el siguiente:

    .fondo03.p-5.mb-4(data-aos="zoom-in-left")
      .row.justify-content-center.align-items-center.mb-2
        .col-lg-12.bg08.p-5
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-3
              ul.lista-ul
                li.d-flex.mb-3
                  i.fas.fa-angle-right2
                  | Aproximarse al objeto antes de proceder a su levantamiento, evitando extender el tronco desde una posición alejada.
                li.d-flex.mb-3
                  i.fas.fa-angle-right2
                  | Flexionar las rodillas hasta descender al nivel del objeto, manteniendo la columna en posición neutra.
                li.d-flex.mb-3
                  i.fas.fa-angle-right2
                  | Sujetar el objeto con ambas manos y mantenerlo próximo al cuerpo durante todo el desplazamiento.
                li.d-flex.mb-3
                  i.fas.fa-angle-right2
                  | Realizar la incorporación mediante la extensión de los miembros inferiores, sin transferir la carga a la musculatura de la espalda.
                li.d-flex
                  i.fas.fa-angle-right2
                  | Cuando sea necesario cambiar de dirección, ejecutar el giro desplazando los pies, sin rotar el tronco mientras se sostiene la carga.
            .col-lg-4.col-10.col-md-6
              img(src="@/assets/curso/temas/t4/img06.svg")

    separador
    #t_4_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 4.2 Procedimiento de reporte de incidentes: tipos de movimientos y de lesiones

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-8.mb-3
        p En el marco del Sistema de Gestión de Seguridad y Salud en el Trabajo, la distinción entre incidente y accidente tiene implicaciones operativas concretas. Un incidente de trabajo es un suceso no deseado que ocurre en el contexto laboral y que, si bien no produce lesión ni daño material, presenta el potencial de haberlo generado. Un accidente de trabajo, en cambio, es el evento que efectivamente ocasiona una lesión, enfermedad o muerte como consecuencia directa de la actividad laboral. Ambos eventos deben ser reportados de manera sistemática, ya que su registro y análisis constituyen insumos fundamentales para la mejora continua de las condiciones de seguridad.
        p.bg01.p-4 El marco normativo que regula este proceso en Colombia comprende el Decreto 1072 de 2015 (Decreto Único Reglamentario del Sector Trabajo) y la Resolución 0312 de 2019, que establece los estándares mínimos del SG-SST.
      .col-lg-4.d-flex.justify-content-center.align-items-stretch.col-7.col-md-6
        img(src="@/assets/curso/temas/t4/img07.png" alt="" style="height: 100%; width: auto; max-width: 100%;")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
          h3.bg03.py-2.w-card-text Pasos del reporte

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-8.mb-3
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Paso 1. Atención inmediata")
            p.mb-0 Ante la presencia de una persona lesionada, la atención médica o de primeros auxilios tiene carácter prioritario sobre cualquier trámite administrativo. En caso de lesión grave, se activa el protocolo de emergencias y se contacta a los servicios de urgencias de manera inmediata.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Paso 2. Preservación de la escena")
            p.mb-0 Los elementos involucrados en el evento no deben moverse ni alterarse hasta que el responsable del SG-SST haya realizado la inspección del lugar, con el fin de preservar las condiciones necesarias para la identificación de causas.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Paso 3. Notificación verbal")
            p.mb-0 El responsable del SG-SST debe ser informado verbalmente del evento de forma inmediata. Los accidentes graves o mortales deben reportarse a la Administradora de Riesgos Laborales (ARL) dentro de los dos días hábiles siguientes a su ocurrencia.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Paso 4. Registro escrito")
            p.mb-0 Se diligencia el formato de reporte establecido por la organización, incorporando: fecha, hora y lugar del evento; identificación y cargo de la persona involucrada; descripción detallada de lo ocurrido; causa probable; testigos presentes; y medidas de atención adoptadas.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Paso 5. Investigación")
            p.mb-0 El responsable del SG-SST y el jefe inmediato realizan el análisis de causas mediante metodologías reconocidas, como el análisis de causas raíz, con el propósito de formular medidas correctivas y preventivas pertinentes.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Paso 6. Seguimiento")
            p.mb-0 Se verifica la implementación efectiva de las medidas correctivas dentro de los plazos establecidos y se evalúa su eficacia mediante indicadores definidos.
      .col-lg-4.col-8.col-md-6
        img(src="@/assets/curso/temas/t4/img08.png")

    p.bg09.p-4.mb-4(data-aos="zoom-in-left") #[b Nota:] el Decreto 1072 de 2015 prohíbe expresamente que el empleador adopte medidas disciplinarias contra un trabajador por reportar de buena fe la existencia de un peligro o la ocurrencia de un incidente. El reporte oportuno es tanto un derecho del trabajador como una obligación institucional dentro del SG-SST.








</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
