-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Temps de generació: 02-06-2020 a les 22:30:03
-- Versió del servidor: 10.4.11-MariaDB
-- Versió de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de dades: `proyectofinal`
--

-- --------------------------------------------------------

--
-- Estructura de la taula `asignaturas`
--

CREATE TABLE `asignaturas` (
  `idasignatura` int(11) NOT NULL,
  `nombreasignatura` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Bolcament de dades per a la taula `asignaturas`
--

INSERT INTO `asignaturas` (`idasignatura`, `nombreasignatura`, `image`) VALUES
(1, 'Matemáticas', 'assets/matematicas.png'),
(2, 'Química', 'assets/quimica.png'),
(3, 'Lengua castellana', 'assets/castellano.png'),
(4, 'Llengua catalana', 'assets/petalos.png'),
(5, 'Biología', 'assets/cell.png');

-- --------------------------------------------------------

--
-- Estructura de la taula `preguntas`
--

CREATE TABLE `preguntas` (
  `idpregunta` int(11) NOT NULL,
  `pregunta` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `opciones` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `solucion` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `idtest` int(11) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Bolcament de dades per a la taula `preguntas`
--

INSERT INTO `preguntas` (`idpregunta`, `pregunta`, `opciones`, `solucion`, `idtest`, `image`) VALUES
(1, 'Qué es un polinomio homogéneo?', 'A. Es aquel polinomio que tiene todos sus coeficientes nulos.|B. Es aquel polinomio en el que todos sus términos o monomios son del mismo grado.|C. Es aquel polinomio en el que no todos sus términos no son del mismo grado.', 'B. Es aquel polinomio en el que todos sus términos o monomios son del mismo grado.', 1, ''),
(2, 'Cuándo se considera semejantes a dos polinomios?', 'A. Cuando se verifican que tienen la misma parte literal.|B. Cuando los dos polinomios tienen el mismo grado.|C. Las opciones A y B son correctas. ', 'A. Cuando se verifican que tienen la misma parte literal.', 1, ''),
(3, 'Qué es un polinomio completo?', 'A. Es aquel polinomio que no tiene todos los términos desde el término independiente hasta el término de mayor grado.|B. Es aquel polinomio que tiene todos los términos desde el término independiente hasta el término de mayor grado.|C. Es aquel polinomio que tiene todos sus coeficientes nulos.', 'B. Es aquel polinomio que tiene todos los términos desde el término independiente hasta el término de mayor grado.', 1, ''),
(4, 'Es posible que un compuesto sea una sustancia pura?', 'A. Sí.|B. No.', 'A. Sí.', 2, ''),
(5, 'Qué es un coloide?', 'A. Una mezcla heterogénea que necesita un microscopio para separar sus componentes.|B. La unión de varias sustancias puras.|C. Un tipo de disolución.', 'A. Una mezcla heterogénea que necesita un microscopio para separar sus componentes.', 2, 'assets/coloide.jpg'),
(6, 'Cuándo se considera que una disolución es diluida?', 'A. Cuando la proporción de soluto es considerable.|B. Cuando no se pueden disolver más sustancias.|C. Cuando la proporción de soluto es reducida.', 'C. Cuando la proporción de soluto es reducida.', 2, 'assets/diluida.jpg'),
(7, 'Cuál es la intención del emisor en una función apelativa?', 'A. El emisor sólo pretende transmitir una información concreta y objetiva.|B. El emisor comprueba si el canal de comunicación funciona.|C. El emisor pretende influir en la conducta del receptor.', 'C. El emisor pretende influir en la conducta del receptor.', 4, ''),
(8, 'Cuál es la intención del emisor en una función fática?', 'A. El emisor expresa sus emociones o sus opiniones personales.|B. El emisor comprueba si el canal de comunicación funciona.|C. El emisor pretende influir en la conducta del receptor.', 'B. El emisor comprueba si el canal de comunicación funciona.', 4, ''),
(9, 'A que término corresponde la siguiente definición: Soporte material por\r\nel que circula el mensaje.', 'A. Canal.|B. Código.|C. Emisor.', 'A. Canal.', 4, ''),
(10, 'En qué consiste la función metalingüística?', 'A. En informar o transmitir un contenido.|B. Expresar un mensaje de forma bella teniendo en cuenta el código y sus recursos.|C. En explicar y aclarar aspectos referidos al código, es decir, a la propia lengua.', 'C. En explicar y aclarar aspectos referidos al código, es decir, a la propia lengua.', 4, ''),
(11, 'Qué es una columna?', 'A. Espacio fijo del periódico reservado para que un periodista, escritor o personalidad publique de forma periódica sus opiniones sobre diferentes temas.|B. Artículo que aparece sin firma y recoge la opinión común de toda la redacción de un periódico.|C. Textos escritos por los lectores del periódico escribiendo su opinión sobre cualquier tema.', 'A. Espacio fijo del periódico reservado para que un periodista, escritor o personalidad publique de forma periódica sus opiniones sobre diferentes temas.', 5, ''),
(12, 'Quién suele ser el autor de un editorial?', 'A. La dirección del medio de comunicación.|B. Personaje reconocido por los lectores.|C. Lectores de la publicación.', 'A. La dirección del medio de comunicación.', 5, ''),
(13, 'Cuáles son las partes principales de una noticia?', 'A. Introducción, nudo y desenlace.|B. Título, entrada y cuerpo.|C. Las noticias no se pueden dividir en partes.', 'B. Título, entrada y cuerpo.', 5, ''),
(14, 'Cuál de las siguientes afirmaciones corresponde a la ley de Boyle?', 'A. La presión de un gas en un recipiente cerrado es inversamente proporcional al volumen del recipiente, cuando la temperatura es constante.|B. La presión de un gas en un recipiente cerrado es inversamente proporcional al volumen del recipiente, a cualquier temperatura.|C. La presión de un gas en un recipiente cerrado es directamente proporcional al volumen del recipiente, cuando la temperatura es constante.', 'A. La presión de un gas en un recipiente cerrado es inversamente proporcional al volumen del recipiente, cuando la temperatura es constante.', 6, ''),
(15, 'Cuál de las siguientes afirmaciones corresponde a la ley de Gay-Lussac?', 'A. A cualquier presión, el volumen de una masa de gas es directamente proporcional a su temperatura absoluta.|B. A presión constante, el volumen de una masa de gas es directamente proporcional a su temperatura absoluta.|C. El volumen de una masa de gas es inversamente proporcional a su temperatura absoluta', 'B. A presión constante, el volumen de una masa de gas es directamente proporcional a su temperatura absoluta.', 6, 'assets/gay.png'),
(16, 'A cuántos grados Kelvin corresponden 0 grados Celsius?', 'A. 180.|B. 273.|C. -273.', 'B. 273.', 6, ''),
(17, 'Cuál de las siguientes afirmaciones se corresponde con la ley de Avogadro?', 'A. Volúmenes iguales de gases diferentes medidos en iguales condiciones de presión y temperatura contienen el mismo número de moléculas.|B. Volúmenes diferentes de gases iguales medidos en iguales condiciones de presión y temperatura contienen el mismo número de moléculas.|C. Volúmenes iguales de gases diferentes medidos\r\nen iguales condiciones de presión y temperatura contienen distintos números de moléculas', 'A. Volúmenes iguales de gases diferentes medidos en iguales condiciones de presión y temperatura contienen el mismo número de moléculas.', 6, ''),
(18, 'Cuál de los siguientes cambios no es un cambio físico?', 'A. Calentamiento.|B. Deformación.|C. Combustión.', 'C. Combustión.', 7, ''),
(19, 'Qué es una reacción química?', 'A. Proceso en el que, a partir de unas sustancias iniciales, denominadas reactivos, se forman otras nuevas llamadas productos.|B. Proceso en el que, a partir de unas sustancias iniciales, denominadas productos, se forman otras nuevas llamadas reactivos.', 'A. Proceso en el que, a partir de unas sustancias iniciales, denominadas reactivos, se forman otras nuevas llamadas productos.', 7, 'assets/reaccion.jpg'),
(20, 'Qué se considera un cambio químico?', 'A. Proceso que no altera la naturaleza de las sustancias\r\nimplicadas en él.|B. Proceso en el que las sustancias que intervienen se transforman y se forman nuevas sustancias que no existían antes del cambio.', 'B. Proceso en el que las sustancias que intervienen se transforman y se forman nuevas sustancias que no existían antes del cambio.', 7, ''),
(21, 'Els pronoms febles em, et, es, el, la, en s’apostrofen davant dels verbs començats en vocal o h', 'A. Vertader.|B. Fals', 'A. Vertader.', 8, ''),
(22, 'Seleccciona l\'opció correcta', 'A. La ira.|B. L\'ira.', 'A. La ira.', 8, ''),
(23, 'Seleccciona l\'opció correcta', 'A. La indústria.|B. L\'indústria.', 'A. La indústria.', 8, ''),
(24, 'Seleccciona l\'opció correcta', 'A. La ungla.|B. L\'ungla.', 'B. L\'ungla.', 8, ''),
(25, 'Seleccciona l\'opció correcta', 'A. El armari.|B. L\'armari.', 'B. L\'armari.', 8, ''),
(26, 'Quina és la funció del determinants demostratius?', 'A. Indiquen la proximitat o la llunyania, en el temps, en l’espai o en el discurs, del nom que acompanyen.|B. Indiquen la relació de possessió, pertinença o parentiu entre el nom que acompanyen i algú o alguna cosa.|C. Acompanyen el nom o l’individualitzen.', 'A. Indiquen la proximitat o la llunyania, en el temps, en l’espai o en el discurs, del nom que acompanyen.', 9, ''),
(28, 'Quin dels següents determinants indica llunyania?', 'A. Aquest.|B. Aqueix.|C. Aquell.', 'C. Aquell.', 9, ''),
(29, 'Que indiquen els determinants numerals cardinals', 'A. Expressen una quantitat exacta.|B. Expressen ordre.|C. Indiquen fraccions', 'A. Expressen una quantitat exacta.', 9, ''),
(30, 'Como se denominan los animales que nos son capaces de regular su temperatura corporal?', 'A. Endotérmicos.|B. Ectotérmicos.|C. Exotérmicos', 'B. Ectotérmicos.', 11, 'assets/pez.jpg'),
(31, 'Qué es un animal oviparo?', 'A. Aquel cuyas crías nacen de huevos.|B. Aquel que nace del vientre de su progenitor.', 'A. Aquel cuyas crías nacen de huevos.', 11, ''),
(32, 'Cuál de las siguientes clases de animales no forma parte del reino de los animales vertebrados?', 'A. Insectos.|B. Peces.|C. Anfibio', 'A. Insectos.', 11, ''),
(33, 'En qué ha de terminar un número para ser divisible entre dos?', 'A. En impar.|B. En par.|C. En zero.', 'B. En par.', 12, ''),
(34, 'En qué ha de terminar un número para ser divisible entre 10?', 'A. En 5.|B. En par.|C. En 0.', 'C. En 0.', 12, ''),
(35, 'Indica la afirmación falsa sobre los criterios de divisibilidad', 'A. El número 750 no es divisible entre 6.|B. El número 616 es divisible entre 11.|C. El número 165 es divisible entre 6.', 'A. El número 750 no es divisible entre 6.', 12, '');

-- --------------------------------------------------------

--
-- Estructura de la taula `resultados`
--

CREATE TABLE `resultados` (
  `idusuario` int(11) NOT NULL,
  `idtest` int(11) NOT NULL,
  `nota` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Bolcament de dades per a la taula `resultados`
--

INSERT INTO `resultados` (`idusuario`, `idtest`, `nota`) VALUES
(1, 1, 10),
(1, 2, 6.67),
(1, 4, 2.5),
(1, 5, 6.67),
(1, 6, 5),
(1, 7, 6.67),
(1, 12, 10),
(3, 1, 6.67),
(3, 6, 2.5),
(3, 7, 6.67),
(4, 2, 6.67),
(4, 4, 2.5),
(4, 5, 0),
(4, 6, 5),
(4, 7, 0),
(6, 2, 6.67),
(6, 6, 5),
(6, 7, 3.33),
(23, 1, 6.67),
(23, 12, 0);

-- --------------------------------------------------------

--
-- Estructura de la taula `tests`
--

CREATE TABLE `tests` (
  `idtest` int(11) NOT NULL,
  `nombretest` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idasignatura` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Bolcament de dades per a la taula `tests`
--

INSERT INTO `tests` (`idtest`, `nombretest`, `idasignatura`) VALUES
(1, 'Polinomios', 1),
(2, 'Sustancias y mezclas', 2),
(4, 'Funciones del lenguaje', 3),
(5, 'Medios de comunicación', 3),
(6, 'Leyes de los gases', 2),
(7, 'La materia', 2),
(8, 'L\'apòstrof', 4),
(9, 'Els determinants', 4),
(10, 'La célula', 5),
(11, 'Animales vertebrados', 5),
(12, 'Divisibilidad', 1);

-- --------------------------------------------------------

--
-- Estructura de la taula `usuarioasignatura`
--

CREATE TABLE `usuarioasignatura` (
  `idusuario` int(11) NOT NULL,
  `idasignatura` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Bolcament de dades per a la taula `usuarioasignatura`
--

INSERT INTO `usuarioasignatura` (`idusuario`, `idasignatura`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 2),
(3, 1),
(3, 2),
(4, 1),
(4, 2),
(4, 3),
(4, 4),
(6, 1),
(6, 2),
(6, 3),
(23, 1);

-- --------------------------------------------------------

--
-- Estructura de la taula `usuarios`
--

CREATE TABLE `usuarios` (
  `idusuario` int(11) NOT NULL,
  `nombreusuario` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contrasena` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rol` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Bolcament de dades per a la taula `usuarios`
--

INSERT INTO `usuarios` (`idusuario`, `nombreusuario`, `contrasena`, `email`, `rol`, `nombre`, `apellidos`) VALUES
(1, 'fernando', '1234', 'feviro24@gmail.com', 'alumno', 'Fernando', 'Viedma Rodríguez'),
(2, 'estela', '1234', 'estela@gmail.com', 'profesor', 'Estela', 'Simón'),
(3, 'jose', '1234', 'jose@gmail.com', 'alumno', 'José', 'Pérez Pérez'),
(4, 'alex', '1234', 'alex@gmail.com', 'alumno', 'Alejandro', 'López Giménez'),
(6, 'guillem', '1234', 'guillem@gmail.com', 'alumno', 'Guillem', 'Suárez Hernández'),
(8, 'sergi', '1234', 'sergi@gmail.com', 'administrador', 'Sergi', 'Grau'),
(23, 'Javi', '1234', 'javi@gmail.com', 'alumno', 'Javier', 'Giménez');

--
-- Índexs per a les taules bolcades
--

--
-- Índexs per a la taula `asignaturas`
--
ALTER TABLE `asignaturas`
  ADD PRIMARY KEY (`idasignatura`),
  ADD UNIQUE KEY `nombreasignatura` (`nombreasignatura`);

--
-- Índexs per a la taula `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`idpregunta`),
  ADD KEY `idtest` (`idtest`);

--
-- Índexs per a la taula `resultados`
--
ALTER TABLE `resultados`
  ADD PRIMARY KEY (`idusuario`,`idtest`),
  ADD KEY `idtest` (`idtest`);

--
-- Índexs per a la taula `tests`
--
ALTER TABLE `tests`
  ADD PRIMARY KEY (`idtest`),
  ADD UNIQUE KEY `nombretest` (`nombretest`),
  ADD KEY `idasignatura` (`idasignatura`);

--
-- Índexs per a la taula `usuarioasignatura`
--
ALTER TABLE `usuarioasignatura`
  ADD PRIMARY KEY (`idusuario`,`idasignatura`),
  ADD KEY `idasignatura` (`idasignatura`);

--
-- Índexs per a la taula `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idusuario`),
  ADD UNIQUE KEY `nombreusuario` (`nombreusuario`);

--
-- AUTO_INCREMENT per les taules bolcades
--

--
-- AUTO_INCREMENT per la taula `asignaturas`
--
ALTER TABLE `asignaturas`
  MODIFY `idasignatura` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT per la taula `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `idpregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT per la taula `tests`
--
ALTER TABLE `tests`
  MODIFY `idtest` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT per la taula `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- Restriccions per a les taules bolcades
--

--
-- Restriccions per a la taula `preguntas`
--
ALTER TABLE `preguntas`
  ADD CONSTRAINT `preguntas_ibfk_1` FOREIGN KEY (`idtest`) REFERENCES `tests` (`idtest`) ON DELETE CASCADE;

--
-- Restriccions per a la taula `resultados`
--
ALTER TABLE `resultados`
  ADD CONSTRAINT `resultados_ibfk_1` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`idusuario`) ON DELETE CASCADE,
  ADD CONSTRAINT `resultados_ibfk_2` FOREIGN KEY (`idtest`) REFERENCES `tests` (`idtest`) ON DELETE CASCADE;

--
-- Restriccions per a la taula `tests`
--
ALTER TABLE `tests`
  ADD CONSTRAINT `tests_ibfk_1` FOREIGN KEY (`idasignatura`) REFERENCES `asignaturas` (`idasignatura`) ON DELETE CASCADE;

--
-- Restriccions per a la taula `usuarioasignatura`
--
ALTER TABLE `usuarioasignatura`
  ADD CONSTRAINT `usuarioasignatura_ibfk_1` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`idusuario`) ON DELETE CASCADE,
  ADD CONSTRAINT `usuarioasignatura_ibfk_2` FOREIGN KEY (`idasignatura`) REFERENCES `asignaturas` (`idasignatura`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
