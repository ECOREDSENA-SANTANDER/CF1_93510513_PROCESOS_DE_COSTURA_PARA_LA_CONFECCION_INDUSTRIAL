<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Ficha técnica 

    .row.justify-content-center.mb-3.bg02.g-0(data-aos="zoom-in-left")
      .col-lg-4.p-0
        img.w-100.h-100.d-block.object-fit-cover.d-none.d-lg-block(src='@/assets/curso/temas/t3/img01.png', alt='')
      .col-lg-8
        .row.mb-0.p-5
          .col-lg-2.mb-3.col-4.col-md-3
            img.wid15(src='@/assets/curso/temas/t3/img02.png', alt='')
          .col-lg-12
            p.mb-0 En el entorno productivo de la confección, la documentación técnica constituye uno de los pilares que sostienen la organización y la calidad de los procesos. Dentro de esta documentación, la ficha técnica ocupa un lugar central, ya que concentra en un solo instrumento la información necesaria para que cada etapa de la cadena productiva se ejecute con precisión y coherencia. Comprender su definición, sus tipos y las características que debe reunir permite al diseñador no solo elaborarla correctamente, sino también interpretarla y aplicarla con criterio en diferentes contextos del sector.

    separador
    #t_3_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 3.1 Definición y tipos 

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-7.mb-3
        .row.mb-0
          .col-lg-2.mb-3.col-3.col-md-2
            img(src='@/assets/curso/temas/t3/img04.svg', alt='')
          .col-lg-10
            p La ficha técnica es un documento estructurado que registra de manera sistemática las especificaciones técnicas de una prenda de vestir o de un proceso productivo. Su función principal consiste en garantizar que toda la información necesaria para la producción esté disponible, sea comprensible y pueda consultarse en cualquier etapa del proceso, desde el diseño hasta el control de calidad.
          p En el sector de la confección, la ficha técnica actúa como instrumento de comunicación entre las distintas áreas de la cadena productiva: diseño, patronaje, corte, ensamble y calidad. Su correcta elaboración reduce los márgenes de error, facilita la estandarización de los procesos y permite la trazabilidad del producto a lo largo de su desarrollo. De acuerdo con su propósito, se clasifican así:
      .col-lg-5.col-10.col-md-9
        img(src='@/assets/curso/temas/t3/img03.png', alt='')

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-4.mb-3.col-7.col-md-6
        img(src='@/assets/curso/temas/t3/img05.png', alt='')
      .col-lg-8 
        .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
          h5 Tabla 22.
          span Tipos de fichas técnicas en el sector de la confección

        .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
          table
            thead
              tr
                th.izqtext.bg5 Tipo de ficha técnica
                th.izqtext.bg5 Descripción
            tbody
              tr
                td #[b Ficha técnica de diseño]
                td Registra las características estéticas y conceptuales de la prenda: boceto, paleta de color, materiales propuestos y temporada.

              tr
                td #[b Ficha técnica de producción]
                td Detalla las especificaciones operativas para la fabricación: materiales, insumos, medidas, márgenes de costura y secuencia de ensamble.

              tr
                td #[b Ficha técnica de materiales e insumos]
                td Describe las características técnicas de cada material utilizado: composición, peso, rendimiento y condiciones de uso.

              tr
                td #[b Ficha técnica de calidad]
                td Establece los criterios de aceptación o rechazo del producto terminado: tolerancias, puntos de revisión y estándares aplicables.

              tr
                td #[b Ficha técnica de maquinaria]
                td Contiene la información técnica de los equipos utilizados en el proceso: referencia, tipo de puntada, calibración y mantenimiento.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
          h3.bg03.py-2.w-card-text Características y aplicación

    p No toda ficha técnica cumple su función. Un documento mal estructurado, desactualizado o con datos imprecisos puede generar más problemas que soluciones en la línea de producción. Para que la ficha sea realmente útil, debe reunir cinco características esenciales:

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-7.mb-4
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Precisión")
            .col-md-12.mb-4.mb-md-0
              p Cada dato registrado debe ser exacto y verificable. Medidas, referencias de materiales y tipos de puntada no admiten ambigüedad.
          .row(numero="2" titulo="Completitud")
            .col-md-12.mb-4.mb-md-0
              p Debe contener toda la información necesaria para ejecutar el proceso sin recurrir a fuentes adicionales.
          .row(numero="3" titulo="Claridad")
            .col-md-12.mb-4.mb-md-0
              p Información organizada lógicamente, en lenguaje comprensible para todos los roles que intervienen.
          .row(numero="4" titulo="Actualización")
            .col-md-12.mb-4.mb-md-0
              p Debe reflejar siempre la versión vigente; toda modificación queda registrada con fecha, responsable y descripción del cambio.
          .row(numero="5" titulo="Trazabilidad")
            .col-md-12.mb-4.mb-md-0
              p Permite reconstruir el historial del producto o proceso, facilitando la revisión y corrección de desviaciones.     
      .col-lg-5.col-10.col-md-9
        img(src="@/assets/curso/temas/t3/IMG06.png")

    p.mb-5 En la práctica, la ficha técnica acompaña cada etapa del proceso productivo con un rol distinto:


    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-3.mb-3.col-7.col-md-6
        img(src='@/assets/curso/temas/t3/img07.png', alt='')
      .col-lg-8
        .titulo-sexto.color-acento-botones(data-aos='fade-right').mb-4
          h5 Tabla 23.
          span Etapas del proceso de confección y la ficha técnica

        .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
          table
            thead
              tr
                th.izqtext.w-25 Etapa del proceso
                th.izqtext Aplicación de la ficha técnica
            tbody
              tr
                td #[b Diseño]
                td Consolida la propuesta creativa y define los parámetros técnicos iniciales de la prenda.

              tr
                td #[b Patronaje]
                td Orienta la construcción del patrón base a partir de las medidas y especificaciones registradas.

              tr
                td #[b Corte]
                td Indica la cantidad de piezas, el sentido del hilo, los márgenes de costura y el tipo de material.

              tr
                td #[b Ensamble]
                td Guía la secuencia de unión de piezas, los tipos de costura y los acabados requeridos.

              tr
                td #[b Control de calidad]
                td Sirve como referencia para verificar que el producto terminado cumple con las especificaciones establecidas.

    p.bg04.p-4 En entornos de producción industrial, la ficha técnica es un documento oficial que forma parte del sistema de gestión documental de la empresa. Su elaboración, aprobación y archivo deben seguir los procedimientos establecidos por cada organización.

    p Con el propósito de fortalecer la comprensión de la ficha técnica como documento fundamental en los procesos de confección industrial, se invita a consultar el siguiente video, en el cual se presentan su estructura, principales elementos y utilidad para orientar la fabricación de prendas de vestir.

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-4           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/5YOLIDHLiCw?si=bPLbdwVe4zfI85_e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Introducción a la ficha tecnica

















</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
