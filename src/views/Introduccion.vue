<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-right")
      .col-lg-5.mb-3.col-11.col-md-9
        img(src='@/assets/curso/temas/intro/img01.png', alt='')
      .col-lg-7
        .row.justify-content-center
          .col-lg-2.mb-2.col-4.col-md-3
            img(src='@/assets/curso/temas/intro/img02.svg', alt='')
          .col-lg-10
            p El componente formativo Maquinaria y tipología de prendas brinda las bases necesarias para comprender cómo se integran los diferentes elementos que intervienen en los procesos de confección industrial. A lo largo de este recorrido, el aprendiz reconocerá la relación existente entre las prendas de vestir, los textiles, la maquinaria, la ficha técnica y las condiciones de seguridad requeridas para desarrollar cada operación con calidad y eficiencia. De esta manera, comprenderá que una costura exitosa no depende únicamente del manejo de la máquina, sino también de la adecuada identificación de los materiales, los componentes de la prenda y las especificaciones técnicas que orientan su elaboración.
        p Inicialmente, se abordan los procesos de costura industrial y las principales tipologías de prendas de vestir, junto con los componentes que las conforman, como bolsillos, cuellos, tapetas, puños y sistemas de cierre. Posteriormente, se estudian las gamas de mercado y los universos del vestuario, permitiendo relacionar las características de cada prenda con su finalidad, el tipo de usuario y las exigencias propias del proceso de confección.

    p(data-aos="fade-right").bg01.p-3 El componente también desarrolla el reconocimiento de los textiles, sus fibras, hilos, tejidos y principales características, conocimientos indispensables para seleccionar adecuadamente agujas, hilos, accesorios, aditamentos y maquinaria. Esta comprensión favorece la prevención de defectos en la confección, optimiza el uso de los materiales y contribuye a mejorar la calidad del producto final. Asimismo, se estudian los diferentes tipos de maquinaria de confección industrial, sus aplicaciones, técnicas básicas de manejo, insumos asociados y actividades de mantenimiento preventivo.
    p Se presenta la ficha técnica como una herramienta fundamental para planificar y controlar el proceso de confección, junto con los principios básicos de seguridad y salud en el trabajo que deben aplicarse durante la operación de los equipos. Al finalizar este componente, el aprendiz contará con los conocimientos necesarios para reconocer materiales, interpretar especificaciones técnicas, preparar adecuadamente los recursos del proceso y desarrollar sus actividades con criterio técnico, calidad y compromiso con la seguridad en el entorno productivo.

    .row.justify-content-center.align-items-center(data-aos="fade-right")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/w11pqlHKU9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        Figcaption Video. Maquinaria y tipología de prendas

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
