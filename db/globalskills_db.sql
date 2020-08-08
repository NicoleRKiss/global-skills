-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-08-2020 a las 16:51:47
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `globalskills_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(10) UNSIGNED NOT NULL,
  `usuarioId` int(10) UNSIGNED NOT NULL,
  `productoId` int(10) UNSIGNED NOT NULL,
  `productoNombre` varchar(400) DEFAULT NULL,
  `precio` smallint(6) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `subcategorias` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `descripcion`, `subcategorias`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Marketing Digital', 'Aprender sobre las herramientas más importantes dentro del mundo del marketing digital', 'Community Management', '2020-07-17 11:08:15', '2020-07-24 19:21:55', NULL),
(2, 'Gestion y Management', 'Conocer los diferentes conceptos que se relacionan e interrelacionan con el concepto de sustentabilidad y  formarse en los distintos tipos de organizaciones en las que pueden aplicarse las acciones en post del nuevo modelo de negocios de triple impacto.', 'Responsabilidad Social', '2020-07-17 12:28:23', NULL, NULL),
(3, 'Comunicación Efectiva Global', 'Reconocer la importancia de expresarse con claridad de forma oral y escrita. • Conocer herramientas de Comunicación eficiente, para lograr comunicar lo que realmente se espera.', 'Negocios', '2020-07-17 12:31:06', '2020-07-24 19:25:28', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idiomas`
--

CREATE TABLE `idiomas` (
  `id` int(10) UNSIGNED NOT NULL,
  `idioma` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `idiomas`
--

INSERT INTO `idiomas` (`id`, `idioma`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Español', '2020-07-15 11:56:48', NULL, NULL),
(2, 'Inglés', '2020-07-15 11:56:48', '2020-07-15 12:02:47', NULL),
(3, 'Francés', '2020-07-15 11:56:48', NULL, NULL),
(4, 'Portugués', '2020-07-15 12:03:37', NULL, NULL),
(5, 'Alemán', '2020-07-15 12:04:01', NULL, NULL),
(6, 'italiano', '2020-07-17 10:55:37', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planes`
--

CREATE TABLE `planes` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombrePlan` varchar(255) DEFAULT NULL,
  `idiomaId` int(10) UNSIGNED NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `planes`
--

INSERT INTO `planes` (`id`, `nombrePlan`, `idiomaId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'plan Marketing', 0, '2020-07-17 12:09:44', NULL, NULL),
(2, 'plan Marketing', 1, '2020-07-17 12:11:12', NULL, NULL),
(3, 'plan Gestion & Management', 1, '2020-07-17 13:29:51', NULL, NULL),
(4, 'plan Comunicacion efectiva Global', 1, '2020-07-17 13:30:18', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(400) NOT NULL,
  `descripcion` text NOT NULL,
  `planId` int(10) UNSIGNED NOT NULL,
  `idiomaId` int(10) UNSIGNED NOT NULL,
  `precio` smallint(6) NOT NULL,
  `categoriaId` int(10) UNSIGNED NOT NULL,
  `profesorId` int(10) UNSIGNED NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `planId`, `idiomaId`, `precio`, `categoriaId`, `profesorId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(10, 'Curso de Community Management I', 'Este curso es una introducción al manejo de las redes sociales, en el cual podrás aprender a controlar las principales redes sociales y algunas de sus herramientas.', 2, 1, 2500, 1, 1, '2020-07-17 19:25:55', '2020-08-07 14:06:19', NULL),
(11, 'Curso de Google Adwords y posicionamiento en Google', 'Aprende a crear, configurar, implementar y optimizar una campaña en Google Ads a través de la red de búsqueda y display. Publicita productos o servicios en el buscador más importante. Haz conocer tu marca en millones de sitios web, incrementá el tráfico hacia tu sitio web y aumentá tus ventas. Desarrollá campañas de remarketing y dentro de Youtube.', 2, 1, 4000, 1, 2, '2020-07-17 19:25:57', NULL, NULL),
(12, 'Curso de Marketing Online - Programa Integral', 'Aprendé a desarrollar estrategias de Marketing Digital.', 2, 1, 5000, 1, 2, '2020-07-17 19:26:00', NULL, NULL),
(13, 'Curso de Introducción al Marketing Online', 'Domina los principales conceptos del Marketing Digital y el Inbound Marketing para llevar a cabo estrategias de comunicación eficientes.', 2, 1, 3500, 1, 2, '2020-07-17 19:26:02', NULL, NULL),
(14, 'Programa Ejecutivo de Marketing Online', 'Este curso busca brindar las herramientas para el inicio de una gestión estratégica y ordenada en plataformas sociales (principalmente Facebook y Twitter).', 2, 1, 4000, 1, 2, '2020-07-17 19:26:04', NULL, NULL),
(15, 'Curso de e-Commerce', 'En este curso aprenderas a reconocer los distintos pasos por los cuales atraviesan tus clientes para poder generar estrategias que aumenten tu caudal de ventas.', 2, 1, 5000, 1, 2, '2020-07-17 19:26:07', NULL, NULL),
(16, 'Curso de Marketing de Contenidos', 'En este curso aprenderas a evaluar cuales contenidos son los más relevantes para tu negocio, qué comounicar, cuando, de qué manera y a través de qué medio, para que seá más eficiente el resultado obtenido.', 2, 1, 5000, 1, 2, '2020-07-17 19:26:09', '2020-07-31 13:34:01', NULL),
(17, 'Curso de MercadoLibre: Como aumentar las ventas', 'Este curso buscá enseñar como tu presencia en MercadoLibre potenciará los resultados de tu negocio, siempre que sepas manejar algunas variables a tu favor: entre ellas cómo posicionar tus productos, cómo crear ofertas que se destaquen, y un buen servicio post-venta que te garantice la recomendación de tus compradores en la plataforma.', 2, 1, 3000, 1, 2, '2020-07-17 19:26:11', NULL, NULL),
(18, 'Curso de responsabilidad social, empresarial y sustentabilidad', 'Conocer los diferentes conceptos que se relacionan e interrelacionan con el concepto de sustentabilidad y  formarse en los distintos tipos de organizaciones en las que pueden aplicarse las acciones en post del nuevo modelo de negocios de triple impacto.', 3, 1, 3000, 2, 3, '2020-07-17 19:37:24', '2020-07-24 13:44:30', NULL),
(19, 'Curso de Control de Gestión y Tablero de comando', 'Descubrir las mejoras sustantivas derivadas de comprender el alcance de los procesos de planificación y análisis de gestión en cualquier tipo de organización. Comprender la importancia de trasladar la visión de la organización hacia objetivos estratégicos completos. Aprender a transformar los objetivos en guías para el proceso de planificación.', 3, 1, 3000, 2, 3, '2020-07-17 19:37:27', '2020-07-24 13:44:30', NULL),
(20, 'Curso de Gestión y Gerenciamiento de Entidades Deportiva', 'Este curso apunta a la adquisición de conocimientos y estrategias que posibiliten tomar las decisiones más adecuadas en las diferentes situaciones y circunstancias que nos plantea el futuro en las instituciones educativas y deportivas de hoy.', 3, 1, 3000, 2, 3, '2020-07-17 19:37:30', '2020-07-24 13:44:30', NULL),
(21, 'Curso de Teletrabajo. Optimización de tiempos y tareas en el trabajo', 'El curso proporciona una introducción a una nueva forma de trabajar a través de la metodología de teletrabajo. Apuntado a  aquellas personas que desean iniciarse como teletrabajadores.', 3, 1, 2500, 2, 3, '2020-07-17 19:37:32', '2020-07-24 13:44:30', NULL),
(22, 'Curso de Gestión de Pequeñas, Medianas Empresas', 'Este curso expone en forma global los temas imprescindibles que deben conocer quiénes forman parte de las Pymes como dueños, mandos medios o aspiran a cargos directivos. incorporar los conocimientos relativos a las diversas áreas que componen una unidad de negocios: la gestión de los recursos humanos, la comunicación organizacional, la definición de la identidad empresaria y la imagen corporativa, el estudio de mercado, la gestión comercial, y por último las técnicas de ventas.', 3, 1, 4000, 2, 3, '2020-07-17 19:37:34', '2020-07-24 13:44:30', NULL),
(23, 'Curso de Planificación Estratégica', 'En este curso aprenderan eué es un Plan Estratégico y por qué es tan importante en la empresa, cuáles son las fases principales en su elaboración, qué factores determinan el éxito o no de una planificación estratégica, entre otras cosas.', 3, 1, 4000, 2, 3, '2020-07-17 19:37:36', '2020-07-24 13:44:30', NULL),
(24, 'Curso de Gestión Gastronómica', 'A través de este curso adquirirarn las nociones principales y específicas que permite desarrollar desde una idea/microemprendimiento un establecimiento gastronómico. Aprenderan a desenvolverse en las áreas de alimentos y bebidas con conocimientos específicos. Conceptos para administrar y gestionar un establecimiento gastronómico y comprender la actividad en toda su magnitud.', 3, 1, 4000, 2, 3, '2020-07-17 19:37:38', '2020-07-24 13:44:30', NULL),
(25, 'Curso de Control Financiero - Gestión Económico Financiero', 'El objetivo de este curso es desarrollar una visión global, en términos económicos financieros. Brindar conocimientos y herramientas que permitan optimizar la gestión económico financiera de la empresa y comprender como impacta la gestión propia en los resultados.', 2, 1, 4000, 2, 2, '2020-07-17 19:37:39', '2020-07-24 13:44:30', NULL),
(26, 'Curso Integral para Empresas Familiares', 'Los objetos de este curson son aprender herramientas para resolver los principales desafíos de toda empresa familiar, diseño e implementación de procesos sucesorios. Se enseñara la construcción de acuerdos familiares que ayuden a la continuidad y la profesionalización de la empresa.', 2, 1, 4000, 2, 2, '2020-07-17 19:37:41', '2020-07-24 13:44:30', NULL),
(27, 'Curso Ejecutivo de Control de Gestión, Presupuestos y Costos', 'En este curso aprenderán de la mano de expertos como realizar presupuestos, gestionar costos. El fin del objetivo aprender herramientas para poder mantener lo aprendido actualizado.', 2, 1, 4800, 2, 2, '2020-07-17 19:37:42', '2020-07-24 13:44:30', NULL),
(28, 'Curso de Negocios - Programa Integral', 'En este curso aprenderas sobre la información y herramientas más importantes de los negocios en Ingles, Portugues, Italiano y Francés.', 4, 1, 2000, 3, 4, '2020-07-17 19:42:54', '2020-07-24 13:46:22', NULL),
(29, 'Curso Económico: Vocabulario Económico, Bancario, Contable, de Finanzas y Tributos', 'En este curso aprenderas el vocabulario economico en Inglés, Portugués, Italiano y Francés', 4, 1, 2000, 3, 4, '2020-07-17 19:42:58', '2020-07-24 13:46:22', NULL),
(75, 'Curso Nuevo', 'En este curso aprenderas sobre.', 4, 1, 2000, 1, 4, '2020-08-04 20:14:05', NULL, NULL),
(76, 'Curso Nuevo', 'En este curso aprenderas sobre.', 4, 1, 2000, 1, 4, '2020-08-04 20:14:07', NULL, NULL),
(77, 'Curso Nuevo', 'En este curso aprenderas sobre.', 4, 1, 2000, 1, 4, '2020-08-04 20:14:09', NULL, NULL),
(78, 'Curso Nuevo', 'En este curso aprenderas sobre.', 4, 1, 2000, 1, 4, '2020-08-04 20:14:10', NULL, NULL),
(79, 'Curso Nuevo', 'En este curso aprenderas sobre.', 4, 1, 1000, 1, 4, '2020-08-04 20:14:11', '2020-08-07 15:03:55', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE `profesores` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`id`, `nombre`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Maria Perez', '2020-07-17 11:27:50', NULL, NULL),
(2, 'Sergio Fernandez', '2020-07-17 13:28:35', NULL, NULL),
(3, 'Alejandro Dominguez', '2020-07-17 13:28:39', NULL, NULL),
(4, 'Marcela Fernandez', '2020-07-17 13:28:41', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `temas`
--

CREATE TABLE `temas` (
  `id` int(10) UNSIGNED NOT NULL,
  `tema` varchar(255) NOT NULL,
  `PlanId` int(10) UNSIGNED NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `temas`
--

INSERT INTO `temas` (`id`, `tema`, `PlanId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(2, 'Temas de  Marketing', 2, '2020-07-17 13:35:10', NULL, NULL),
(3, 'Temas de GEstion & Management ', 3, '2020-07-17 13:35:13', NULL, NULL),
(4, 'Temas de Comunicacion Efectiva Global', 4, '2020-07-17 13:35:14', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(300) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deletedAt` datetime DEFAULT NULL,
  `admin` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `password`, `createdAt`, `updatedAt`, `deletedAt`, `admin`) VALUES
(1, 'Juan', 'Sanchez', 'csanchez@wordpress.com', 'carlitos123', '2020-07-15 11:56:48', '2020-07-31 18:17:50', NULL, NULL),
(2, 'Talbert', 'Buckleigh', 'tbuckleigh1@comcast.net', 'RcaWyIVGv', '2020-07-15 11:56:48', NULL, NULL, NULL),
(3, 'Kasper', 'Spivey', 'kspivey2@yahoo.co.jp', '12GHLkH', '2020-07-15 11:56:48', NULL, NULL, NULL),
(4, 'Wes', 'McLellan', 'wmclellan3@ask.com', 'huU20HFkZnXx', '2020-07-15 11:56:48', NULL, NULL, NULL),
(5, 'Louise', 'Ludron', 'lludron4@comsenz.com', 'lwPLpw', '2020-07-15 11:56:48', NULL, NULL, NULL),
(6, 'Gwenni', 'Brannon', 'gbrannon5@toplist.cz', 'YUxrISKrOgS', '2020-07-15 11:56:48', NULL, NULL, NULL),
(7, 'Adelaide', 'Vedeshkin', 'avedeshkin6@nyu.edu', 'zqt79F0', '2020-07-15 11:56:48', NULL, NULL, NULL),
(8, 'Irv', 'Oxterby', 'ioxterby7@trellian.com', '0UjoT3qM6', '2020-07-15 11:56:48', NULL, NULL, NULL),
(9, 'Car', 'Middlemiss', 'cmiddlemiss8@fda.gov', 'gx4ELo05', '2020-07-15 11:56:48', NULL, NULL, NULL),
(10, 'Alwin', 'Stubbley', 'astubbley9@unc.edu', 'SZUzgxlOF', '2020-07-15 11:55:54', NULL, NULL, NULL),
(11, 'Oscar', 'Baez', 'oscar@gmail.com', '$2a$10$mOVIOyWgxWIdpgt3F2FrxePYkuQCnB1AxVxr.jG/iwtAqoy8.PICG', '2020-08-05 16:08:52', '2020-08-05 16:08:52', NULL, NULL),
(12, 'Ariel', 'Ortega', 'aortega@gmail.com', '$2a$10$qJvC/rEDqw5JcuI38250au2NM0/Wv4yYYxkBZalOovojPRlmdFQxW', '2020-08-05 16:19:16', '2020-08-05 16:19:16', NULL, NULL),
(13, 'Leonalrdo', 'Ponzio', 'leo@gmail.com', '$2a$10$1DmfR.faHM.03vLPZpt9A.zuNgNNn9v1DD8k6u0Q9IxCC4OvFo6pq', '2020-08-07 11:30:31', '2020-08-07 11:30:31', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `idiomas`
--
ALTER TABLE `idiomas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `planes`
--
ALTER TABLE `planes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoriaId` (`categoriaId`),
  ADD KEY `planId` (`planId`),
  ADD KEY `idiomaId` (`idiomaId`),
  ADD KEY `profesorId` (`profesorId`);

--
-- Indices de la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `temas`
--
ALTER TABLE `temas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PlanId` (`PlanId`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `idiomas`
--
ALTER TABLE `idiomas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `planes`
--
ALTER TABLE `planes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT de la tabla `profesores`
--
ALTER TABLE `profesores`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `temas`
--
ALTER TABLE `temas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoriaId`) REFERENCES `categorias` (`id`),
  ADD CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`planId`) REFERENCES `planes` (`id`),
  ADD CONSTRAINT `productos_ibfk_3` FOREIGN KEY (`idiomaId`) REFERENCES `idiomas` (`id`),
  ADD CONSTRAINT `productos_ibfk_4` FOREIGN KEY (`profesorId`) REFERENCES `profesores` (`id`);

--
-- Filtros para la tabla `temas`
--
ALTER TABLE `temas`
  ADD CONSTRAINT `temas_ibfk_1` FOREIGN KEY (`PlanId`) REFERENCES `planes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
