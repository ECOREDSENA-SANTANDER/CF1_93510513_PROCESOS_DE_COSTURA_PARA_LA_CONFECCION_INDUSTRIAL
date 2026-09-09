export default {
  global: {
    Name: 'Maquinaria y tipología de prendas',
    Description:
      'El componente formativo de maquinaria y tipología de prendas está orientado al reconocimiento de prendas, textiles, maquinaria, insumos, ficha técnica y condiciones de seguridad requeridas en los procesos de costura industrial. Su desarrollo permite al aprendiz identificar tipologías de prendas, componentes, gamas de mercado, fibras, tejidos, máquinas de confección, agujas, accesorios, aditamentos y parámetros básicos de operación, con el fin de alistar correctamente los recursos necesarios para el proceso productivo.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Procesos de costura industrial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipologías de prendas de vestir',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Gamas de mercado',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Textiles',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Maquinaria de confección industrial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas de manejo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Usos y aplicaciones',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Insumos: guías, accesorios y agujas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Mantenimiento preventivo',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ficha técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Definición y tipos',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Seguridad y salud en el puesto de trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Técnicas de ergonomía aplicadas al puesto de trabajo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Procedimiento de reporte de incidentes: tipos de movimientos y de lesiones',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Accesorio',
      significado:
        'elemento complementario utilizado en la prenda o en el proceso de confección para cumplir funciones de cierre, ajuste, refuerzo, acabado o decoración.',
    },
    {
      termino: 'Aditamento',
      significado:
        'dispositivo auxiliar empleado en la máquina de confección para guiar, doblar, ubicar o controlar el material durante una operación específica.',
    },
    {
      termino: 'Aguja industrial',
      significado:
        'componente metálico intercambiable que perfora el material textil y conduce el hilo durante la formación de la puntada.',
    },
    {
      termino: 'Aprovechamiento textil',
      significado:
        'relación entre el material utilizado y el material disponible durante el trazo, tendido y corte, con el propósito de reducir desperdicios.',
    },
    {
      termino: 'Botonadora',
      significado:
        'máquina especializada empleada para fijar botones en prendas mediante ciclos de costura programados o regulados.',
    },
    {
      termino: 'Componente de prenda',
      significado:
        'pieza, material o insumo que conforma la estructura externa, interna o funcional de una prenda de vestir.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'disciplina aplicada al puesto de trabajo que busca adecuar posturas, mobiliario, movimientos y condiciones operativas a las capacidades del trabajador.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'documento que registra especificaciones de materiales, medidas, maquinaria, operaciones, puntadas, acabados y criterios de calidad de una prenda.',
    },
    {
      termino: 'Fileteadora',
      significado:
        'máquina industrial utilizada para sobrehilar, unir o pulir bordes textiles mediante puntadas de seguridad o acabado.',
    },
    {
      termino: 'Gama de mercado',
      significado:
        'clasificación de productos de moda según nivel de exclusividad, producción, precio, calidad, circulación comercial y público objetivo.',
    },
    {
      termino: 'Insumo de confección',
      significado:
        'material complementario requerido para elaborar una prenda, como hilos, botones, cierres, elásticos, etiquetas, agujas o fornituras.',
    },
    {
      termino: 'Maquinaria de confección industrial',
      significado:
        'conjunto de equipos especializados utilizados para ejecutar operaciones de costura, ensamble, acabado, refuerzo y aplicación de detalles.',
    },
    {
      termino: 'Mantenimiento preventivo',
      significado:
        'conjunto de acciones programadas de limpieza, lubricación, revisión y ajuste orientadas a conservar el funcionamiento de la maquinaria.',
    },
    {
      termino: 'Textil',
      significado:
        'material formado por fibras, hilos o estructuras tejidas, no tejidas o de punto, utilizado como base para la elaboración de prendas.',
    },
    {
      termino: 'Tipología de prenda',
      significado:
        'clasificación técnica de las prendas según ubicación corporal, estructura, función, uso y componentes de confección.',
    },
  ],
  referencias: [
    {
      referencia:
        'Gutiérrez Rengifo, L. A., Moncayo Velazco, A. X., Tanaka, K., Kimura, F., y Moreno Brand, D. (2011). Manual de patronaje básico e interpretación de diseños. Servicio Nacional de Aprendizaje (SENA); Agencia de Cooperación Internacional del Japón (JICA).',
      link: '',
    },
    {
      referencia: 'Gilewska, T. (2009). Patronaje: las bases. Gustavo Gili.',
      link: '',
    },
    {
      referencia:
        'Kawamura, Y. (2005). Fashion-ology: an introduction to fashion studies. Berg Publishers.',
      link: '',
    },
    {
      referencia:
        'Lorenzo, M. R. (2017). Patronaje industrial en textil y piel. Videocinco Editorial.',
      link: '',
    },
    {
      referencia:
        'Nakamichi, T. (2012). Pattern magic, vol. 1: la magia del patronaje. Gustavo Gili.',
      link: '',
    },
    {
      referencia:
        'Norton, K., y Eston, R. (Eds.). (2019). Kinanthropometry and exercise physiology (4.ª ed.). Routledge.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2011). Manual de patronaje básico e interpretación de diseños. Regional Distrito Capital, Centro de Manufactura en Textiles y Cuero.',
      link: '',
    },
    {
      referencia:
        'Smith, A. (2014). El gran libro de la costura (Nueva ed.). Blume.',
      link: '',
    },
    {
      referencia:
        'Smith, A. (2023). Corte y confección: prendas de vestir a medida. Penguin Libros / DK.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional grado 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <i>full-stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora y vinculadora de recursos educativos digitales  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
