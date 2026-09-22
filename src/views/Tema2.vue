<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Maquinaria de confección industrial 

    .row.justify-content-center.mb-4.bg10.g-0(data-aos="zoom-in-left")
      .col-lg-4.p-0
        img.w-100.h-100.d-block.object-fit-cover.d-none.d-lg-block(src='@/assets/curso/temas/t2/img01.png', alt='')
      .col-lg-8
        .row.mb-0.p-5
          .col-lg-2.mb-3.col-4.col-md-3
            img.wid15(src='@/assets/curso/temas/t2/img02.png', alt='')
          .col-lg-12
            p.mb-0 En el entorno productivo de la confección industrial, el conocimiento de la maquinaria, los materiales y los insumos disponibles constituye una base indispensable para el desempeño técnico competente del operario. Operar correctamente un equipo, seleccionar el material adecuado para cada prenda e identificar el insumo preciso para cada operación son decisiones que inciden directamente en la calidad del producto terminado, la eficiencia del proceso y la seguridad en el puesto de trabajo. 

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
          h3.bg03.py-2.w-card-text Tipos y características 
    P La maquinaria de confección se clasifica según su capacidad productiva en cuatro grupos principales. Esta clasificación permite identificar las características técnicas de cada equipo y relacionarlas con el contexto de producción en el que se utilizan.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
      h5 Tabla 13.
      span Tipos de máquinas empleadas en el sector de la confección

    .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
      table
        thead
          tr
            th.izqtext.bg5 Tipo de máquina
            th.izqtext.bg5 Velocidad
            th.izqtext.bg5 Características principales
            th.izqtext.bg5 Contexto de uso
        tbody
          tr
            td #[b Doméstica o familiar]
            td 500 a 1.000 rpm.
            td Baja potencia, estructura liviana y portátil, lubricación manual, variedad de puntadas básicas.
            td Uso doméstico, talleres artesanales, aprendizaje inicial.

          tr
            td #[b Semindustrial]
            td Hasta 1.725 rpm.
            td Mayor potencia que la doméstica, permite trabajar más capas de material, lubricación manual o por bomba.
            td Talleres de mediana producción.

          tr
            td #[b Industrial]
            td Hasta 6.000 rpm.
            td Alta potencia, lubricación automática, especializada por tipo de operación.
            td Producción en serie: industria de la confección.

          tr
            td #[b De ciclo]
            td Variable.
            td Ejecuta una operación específica en un ciclo automatizado: ojá, botón, presilla.
            td Operaciones repetitivas de alta precisión.

    p.bg11.p-4.mb-4(data-aos="zoom-in-left") #[b Nota:] rpm significa revoluciones por minuto. Es la unidad que mide la velocidad de rotación del motor de una máquina, indicando cuántas veces completa un ciclo de movimiento en un minuto.
    p Dentro de las máquinas industriales, los tipos más utilizados en la confección de prendas de vestir son los siguientes:

    .row.justify-content-center.align-items-center.mb-3(data-aos='fade-right')
      .col-lg-12
        img(src="@/assets/curso/temas/t2/img03.png")

    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
      h5 Tabla 14.
      span Tipos de máquinas industriales en la confección de prendas de vestir

    .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
      table
        thead
          tr
            th.izqtext.bg5.w-25 Tipo de máquina industrial
            th.izqtext.bg5 Tipo de puntada que produce
            th.izqtext.bg5 Aplicaciones principales
        tbody
          tr
            td #[b Plana de una aguja]
            td Doble pespunte – Serie 300
            td Costuras de ensamble en tejido plano: camisas, pantalones, chaquetas.

          tr
            td #[b Plana de dos agujas]
            td Doble pespunte paralelo – Serie 300
            td Costuras decorativas, trabillas, presillas, vaqueros.

          tr
            td #[b Fileteadora (#[em #[em overlock]])]
            td Sobrehilado – Serie 500
            td Acabado de bordes, unión y fileteo simultáneo en tejido de punto.

          tr
            td #[b Collaretera (recubridora)]
            td Cobertura plana – Serie 600
            td Dobladillos en tejido de punto, ropa deportiva, ropa interior.

          tr
            td #[b Ojaladora]
            td Ciclo automatizado
            td Ojales rectos y en ojo de cerradura en camisas, chaquetas y pantalones.

          tr
            td #[b Botonera]
            td Ciclo automatizado
            td Pegado de botones planos y con pie en todo tipo de prenda.

          tr
            td #[b Presilladora]
            td Ciclo automatizado
            td Refuerzo en puntos de tensión: bolsillos, trabillas, cremalleras.

          tr
            td #[b Máquina de pespunte ciego]
            td Puntada invisible – Serie 300
            td Dobladillos invisibles en pantalones de vestir, faldas y chaquetas.

    p Las siguientes figuras presentan algunas de las principales máquinas empleadas en la confección industrial. Cada una cumple una función específica dentro del proceso de fabricación de prendas de vestir, lo que permite optimizar la calidad, la productividad y la precisión en las operaciones de costura. Conocer sus características, aplicaciones y diferencias resulta fundamental para seleccionar el equipo adecuado según los requerimientos técnicos de cada prenda y garantizar un proceso de confección eficiente.

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-6.mb-3.px-2
        .fondo_a.p-5
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 6.
            span Máquina industrial plana de una aguja
          img(src='@/assets/curso/temas/t2/fig6.png', alt='Máquina de coser industrial plana de una aguja, utilizada para realizar costuras rectas en la confección de prendas y otros productos textiles.')

      .col-lg-6.mb-3.px-2
        .fondo_b.p-5
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 7.
            span Plana de dos agujas
          img(src='@/assets/curso/temas/t2/fig7.png', alt='Máquina de coser industrial con base plana, sistema de aguja frontal, mecanismos de tensión y alimentación de hilo visibles, y panel superior de control electrónico.')

      .col-lg-6.mb-3.px-2
        .fondo_b.p-5
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 8. 
            span Máquina fileteadora industrial
          .row.justify-content-center.align-items-center
            .col-lg-8
              img.mb-0(src='@/assets/curso/temas/t2/fig8.png', alt='Máquina de coser industrial tipo overlock con múltiples tensores de hilo, cuchilla lateral de corte y base metálica para el ensamblaje de costuras en los bordes de la tela.')

      .col-lg-6.mb-3.px-2
        .fondo_b.p-5
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 9. 
            span Máquina industrial collarín
          img.mb-2(src='@/assets/curso/temas/t2/fig9.png', alt='Máquina industrial collarín utilizada para realizar dobladillos, recubrimientos y acabados elásticos en prendas de tejido de punto.')

      .col-lg-6.mb-3.px-2
        .fondo_b.p-5
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 10. 
            span Máquina industrial ojaladora
          .row.justify-content-center.align-items-center
            .col-lg-10
              img.mb-0(src='@/assets/curso/temas/t2/fig10.png', alt='Máquina de coser industrial con base metálica de trabajo, sistema de aguja frontal, mecanismos de alimentación de tela y panel lateral de control electrónico.')
      .col-lg-6.mb-3.px-2
        .fondo_b.p-5
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 11. 
            span Máquina industrial botonera
          .row.justify-content-center.align-items-center
            .col-lg-9
              img.mb-0(src='@/assets/curso/temas/t2/fig11.png', alt='Máquina de coser industrial con base metálica de trabajo, sistema de aguja frontal y mecanismo de costura reforzada para operaciones de confección en prendas.')
      .col-lg-6.mb-3.px-2
        .fondo_b.p-5
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 12. 
            span Máquina industrial presilladora
          .row.justify-content-center.align-items-center
            .col-lg-11
              img.mb-0(src='@/assets/curso/temas/t2/fig12.png', alt='Máquina de coser industrial con base plana, sistema de aguja frontal y mecanismo especializado para operaciones de unión y refuerzo en piezas de confección.')
      .col-lg-6.mb-3.px-2
        .fondo_b.p-5
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 13.
            span  Máquina industrial de pespunte ciego
          .row.justify-content-center.align-items-center
            .col-lg-7
              img.mb-1(src='@/assets/curso/temas/t2/fig13.png', alt='Máquina de coser industrial con base de trabajo amplia, sistema de aguja vertical y mecanismos de control frontal para operaciones específicas de confección.')

    separador
    #t_2_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.1 Técnicas de manejo
    P El manejo adecuado de la maquinaria de confección es determinante para garantizar la calidad de las costuras, la seguridad del operario y la vida útil de los equipos. Las técnicas generales de manejo aplicables a toda la maquinaria de confección son las siguientes:

    SlyderF(columnas="col-lg-6 col-xl-4").mb-5(data-aos="zoom-in-left")
      .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7.col-md-4.col-lg-5
              figure
                img(src='@/assets/curso/temas/t2/01.png', alt='')
          h4.text-center Postura y ubicación
          p.text-center Postura erguida frente a la máquina, pies apoyados completamente en el suelo o sobre el pedal, codos cerca del cuerpo y hombros relajados.
      .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7.col-md-4.col-lg-5
              figure
                img(src='@/assets/curso/temas/t2/02.png', alt='')
          h4.text-center Enhebrado correcto
          p.text-center Seguir siempre la secuencia indicada por el fabricante. Un enhebrado incorrecto altera la tensión y genera roturas de hilo o costuras defectuosas.
      .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7.col-md-4.col-lg-5
              figure
                img(src='@/assets/curso/temas/t2/03.png', alt='')
          h4.text-center Guía del material
          p.text-center Conducir la tela con las manos de forma suave y constante, sin jalar ni empujar. El avance lo controlan los mecanismos de arrastre de la máquina.
      .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7.col-md-4.col-lg-5
              figure
                img(src='@/assets/curso/temas/t2/04.png', alt='')
          h4.text-center Velocidad de operación
          p.text-center Reducir la velocidad en zonas de curva, esquina o detalle para mantener el control de la costura.
      .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7.col-md-4.col-lg-5
              figure
                img(src='@/assets/curso/temas/t2/05.png', alt='')
          h4.text-center Verificación previa
          p.text-center Antes de iniciar, revisar el enhebrado, el estado de la aguja, y los ajustes de tensión y longitud de puntada.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
          h3.bg03.py-2.w-card-text Calibración de puntadas

    P(data-aos='fade-right') La calibración de puntadas es el proceso mediante el cual se ajustan los parámetros de la máquina para obtener una costura con las características técnicas requeridas. 
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 15.
      span Parámetros de calibración de puntada

    .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
      table
        thead
          tr
            th.izqtext.bg5.w-25 Parámetro
            th.izqtext.bg5 Descripción
            th.izqtext.bg5 Efecto de un ajuste incorrecto
        tbody
          tr
            td Longitud de puntada
            td Distancia entre una puntada y la siguiente, en mm o puntadas por cm.
            td Muy larga: costura débil. Muy corta: fruncido del material.

          tr
            td Tensión del hilo superior
            td Fuerza de retención del hilo de la aguja.
            td Alta: hilo inferior visible en la superficie. Baja: hilo superior visible en la parte inferior.

          tr
            td Tensión del hilo inferior
            td Fuerza de retención del hilo de la bobina o canilla.
            td Desequilibrio en el punto de unión de los hilos dentro del tejido.

          tr
            td Presión del prensatelas
            td Fuerza con que el prensatelas presiona el material.
            td Alta: marcas en tejidos delicados. Baja: avance irregular del material.

          tr
            td Altura de los dientes de arrastre
            td Nivel de los dientes que transportan el material.
            td Altura incorrecta: avance desigual o daño en el tejido.

    separador
    #t_2_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.2 Usos y aplicaciones

    p(data-aos='fade-right') Elegir la máquina equivocada para una operación no solo produce costuras deficientes, también puede dañar el material o generar reprocesos costosos. La selección correcta parte de conocer qué hace cada equipo y para qué tipo de prenda o tejido está pensado:

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 16.
      span Tipos de máquina por operación de costura

    .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
      table
        thead
          tr
            th.izqtext.bg5.w-25 Operación
            th.izqtext.bg5 Máquina recomendada
            th.izqtext.bg5 Tipo de prenda o material
        tbody
          tr
            td #[b Unión de piezas en tejido plano]
            td Plana de una aguja.
            td Camisas, pantalones, chaquetas, ropa formal.

          tr
            td #[b Acabado de bordes y unión en tejido de punto]
            td Fileteadora (#[em overlock]).
            td Camisetas, ropa deportiva, ropa interior.

          tr
            td #[b Dobladillo en tejido de punto]
            td Collarina.
            td Camisetas, medias, ropa deportiva.

          tr
            td #[b Costuras decorativas paralelas]
            td Plana de dos agujas.
            td Vaqueros, uniformes, ropa de trabajo.

          tr
            td #[b Fabricación de ojales]
            td Ojaladora.
            td Camisas, chaquetas, pantalones con botones.

          tr
            td #[b Pegado de botones]
            td Botonera.
            td Todo tipo de prenda con cierre de botón.

          tr
            td #[b Dobladillo invisible]
            td Máquina de pespunte ciego.
            td Pantalones de vestir, faldas, chaquetas.

          tr
            td #[b Refuerzo de puntos de tensión]
            td Presilladora.
            td Bolsillos, trabillas, cremalleras.

    separador
    #t_2_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.3 Insumos: guías, accesorios y agujas

    p(data-aos='fade-right') Los insumos son los elementos que, sin formar parte del cuerpo principal de la prenda, hacen posible que la costura se ejecute con precisión. Dentro de esta categoría, guías, accesorios y agujas son los de mayor impacto técnico directo.


    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 17.
      span Guías y accesorios para máquinas de coser

    .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
      table
        thead
          tr
            th.izqtext.bg5.w-25 Accesorio / Guía
            th.izqtext.bg5 Descripción
            th.izqtext.bg5 Aplicación
        tbody
          tr
            td #[b Prensatelas estándar]
            td Pie base de la máquina para costuras rectas generales.
            td Costuras de ensamble en tejido plano.

          tr
            td #[b Prensatelas para cremallera]
            td Permite coser cerca del diente de la cremallera en ambos lados.
            td Instalación de cierres en prendas.

          tr
            td #[b Prensatelas para ojales]
            td Guía automáticamente el ancho y largo del ojal.
            td Fabricación de ojales en máquina plana.

          tr
            td #[b Prensatelas enrollador de dobladillo]
            td Enrolla y dobla el borde del tejido durante la costura.
            td Dobladillos estrechos en blusas y telas livianas.

          tr
            td #[b Guía de costura magnética]
            td Imán ajustable que mantiene un margen de costura constante.
            td Control de márgenes en costuras largas.

          tr
            td #[b Embudos y vivos]
            td Piezas metálicas que doblan y guían tiras de tela para formar ribetes durante la costura.
            td Aplicación de ribetes y vivos en ropa deportiva y lencería.

          tr
            td #[b Guía para pespunte paralelo]
            td Barra ajustable que mantiene una distancia constante respecto a una costura ya realizada.
            td Pespuntes decorativos en camisas y pantalones.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
          h3.bg03.py-2.w-card-text La aguja
    p(data-aos='fade-right') La aguja es un elemento mecánico que sirve para traspasar el material a coser y llevar el hilo hasta un tomador de lazada. Además, es uno de los elementos fundamentales para la invención de la máquina de coser, ya que es alrededor de la aguja como nacen todas las ideas para su desarrollo.

    .bg12.p-4.mb-4(data-aos='fade-right')
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 14. 
        span Set de agujas para máquina industrial
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6
          img(src='@/assets/curso/temas/t2/fig14.svg', alt='Empaque de agujas para máquina de coser industrial que incluye información técnica sobre referencia, sistema de aguja, calibre, fabricante y código de identificación.')
          
    p De la aguja se deben considerar los siguientes aspectos:

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
          h3.bg03.py-2.w-card-text Agujas por tipo de punta


    
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-4.mb-3.col-8.col-md-9
        img(src="@/assets/curso/temas/t2/img06.png")
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 18.
          span Tipos de aguja según punta
        .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
          table
            thead
              tr
                th.izqtext.bg5.w-25 Tipo de punta
                th.izqtext.bg5.w-25 Código
                th.izqtext.bg5 Material recomendado
            tbody
              tr
                td #[b Redonda fina]
                td SUK
                td Tejidos de punto finos: jersey, #[em interlock]. Penetra entre los hilos sin cortarlos.

              tr
                td #[b Redonda media]
                td SES
                td Tejidos de punto medianos: #[em rib], neopreno.

              tr
                td #[b Redonda gruesa]
                td SKF
                td Tejidos de punto gruesos: felpa, tejidos técnicos.

              tr
                td #[b Cortante]
                td R
                td Tejidos planos: algodón, lino, poliéster. Corta el tejido al perforar.

              tr
                td #[b Bola (ball point)]
                td BP
                td Tejidos de punto elásticos y delicados.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
          h3.bg03.py-2.w-card-text Agujas por calibre

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 19.
          span Agujas según calibre

        .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
          table
            thead
              tr
                th.izqtext.bg5 Calibre Nm
                th.izqtext.bg5 Sistema Singer
                th.izqtext.bg5 Equivalencia mm
                th.izqtext.bg5.w-50 Material recomendado
            tbody
              tr
                td 60
                td 8
                td 0,60 mm.
                td Tejidos muy finos: organza, seda, gasa.

              tr
                td 70
                td 10
                td 0,70 mm.
                td Tejidos ligeros: batista, #[em voile], tul.

              tr
                td 80
                td 12
                td 0,80 mm.
                td Tejidos de peso medio: popelina, poliéster.

              tr
                td 90
                td 14
                td 0,90 mm.
                td Tejidos de punto: jersey, #[em interlock].

              tr
                td 100
                td 16
                td 1,00 mm.
                td Tejidos semipesados: gabardina, #[em denim] ligero.

              tr
                td 110
                td 18
                td 1,10 mm.
                td Tejidos pesados: #[em denim], lona.

              tr
                td 120
                td 20
                td 1,20 mm.
                td Materiales muy pesados: cuero natural, telas técnicas.
      .col-lg-4.col-8.col-md-9
        img(src="@/assets/curso/temas/t2/img07.png")

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t3/ico.svg")
          h3.bg03.py-2.w-card-text Agujas por sistema de referencia

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 20.
      span Agujas según sistema de referencia
    .row.justify-content-center.mb-2
      .col-lg-4.mb-4.col-md-9
        img(src="@/assets/curso/temas/t2/img08.png")
      .col-lg-8
        .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
          table
            thead
              tr
                th.izqtext.bg5 Tipo de máquina
                th.izqtext.bg5.w-25 Sistema de aguja
            tbody
              tr
                td #[b Máquina plana industrial – cabo delgado]
                td 16 x 231.

              tr
                td #[b Máquina plana industrial – cabo grueso]
                td 135 x 5.

              tr
                td #[b Máquina recubridora (collarín)]
                td B63.

              tr
                td #[b Máquina de dos agujas]
                td 135 x 5.

              tr
                td #[b Fileteadora (#[em overlock])]
                td B27.

    p.bg10.p-4(data-aos='fade-right') #[b Nota:] Las referencias numéricas son códigos de nomenclatura industrial. Cada código identifica de forma única un tipo de aguja según su combinación de características físicas: el diámetro del cabo, la longitud total, la forma de la ranura, el tipo de punta y la máquina para la que fue diseñada. Por ejemplo, 135 x 5 indica una familia de agujas de cabo grueso para máquinas planas industriales de alta velocidad, mientras que B27 corresponde a la familia estándar para fileteadoras #[em overlock].

    p La aguja debe reemplazarse cada ocho (8) horas de trabajo continuo o al iniciar una nueva referencia de producción, aunque no presente roturas visibles. Una punta desgastada genera perforaciones irregulares, saltos de puntada y deterioro progresivo del tejido.


    separador
    #t_2_4.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.4 Mantenimiento preventivo

    p El mantenimiento preventivo es el conjunto de acciones programadas que se realizan periódicamente sobre la maquinaria para conservar su buen funcionamiento, prevenir averías y prolongar su vida útil. A diferencia del mantenimiento correctivo, que actúa cuando la máquina ya ha fallado, el mantenimiento preventivo reduce los tiempos de parada no planificada y los costos asociados a reparaciones de emergencia.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 21.
      span Mantenimiento de máquinas de confección según su frecuencia

    .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
      table
        thead
          tr
            th.izqtext.bg5 Frecuencia
            th.izqtext.bg5 Actividad
            th.izqtext.bg5.w-50 Descripción
        tbody
          tr
            td #[b Diaria]
            td Limpieza de pelusa y residuos
            td Retirar con brocha los residuos de hilo y pelusa en la zona de la bobina, los dientes de arrastre y el prensatelas.

          tr
            td #[b Diaria]
            td Verificación del enhebrado
            td Comprobar que el hilo esté correctamente enhebrado y sin nudos ni tensión excesiva.

          tr
            td #[b Diaria]
            td Revisión de la aguja
            td Verificar que esté recta, sin desgaste en la punta y correctamente instalada.

          tr
            td #[b Semanal]
            td Lubricación
            td Aplicar aceite especial para máquinas de coser en los puntos indicados por el fabricante, evitando el exceso que podría manchar los materiales.

          tr
            td #[b Semanal]
            td Revisión de tensiones
            td Verificar el equilibrio de tensiones mediante pruebas de costura en retazos.

          tr
            td #[b Mensual]
            td Revisión de correas y poleas
            td Comprobar el estado y la tensión de las correas de transmisión, reemplazando las que presenten desgaste o fisuras.

          tr
            td #[b Mensual]
            td Limpieza profunda
            td Desmontar las piezas accesibles para limpieza detallada de los mecanismos internos.

          tr
            td #[b Semestral o anual]
            td Revisión técnica especializada
            td Inspección general por un técnico especializado: ajuste de mecanismos, revisión eléctrica y calibración general.

    p(data-aos='fade-right') El mantenimiento preventivo no es responsabilidad exclusiva del área técnica. El trabajador que opera la máquina diariamente es el primer eslabón de este proceso, ya que es quien detecta con mayor rapidez cualquier variación en el funcionamiento del equipo. Reportar oportunamente anomalías como ruidos inusuales, variaciones en la tensión o saltos frecuentes de puntada contribuye directamente a la continuidad operativa del proceso productivo.



























</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
