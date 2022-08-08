CREATE DATABASE  IF NOT EXISTS `teme` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `teme`;

/**********************tabla categoria**********************/

CREATE TABLE `categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` varchar(50),  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
insert into teme.categoria values(1,"Bicicletas Eléctricas"),(2,"Monopatines"),(3,"Skateboards"),(4,"Hoverboards"),(5,"Accesorios");

/************************************compra **********************************************/

CREATE TABLE `teme`.`compras` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `precio` FLOAT NULL,
  `descripcion` VARCHAR(100) NULL,
  `fechacompra` DATE NULL,
  `metododepado_id` INT NOT NULL,
  `envio_id` INT NOT NULL,
  PRIMARY KEY (`id`),  
  FOREIGN KEY (envio_id) REFERENCES envios(id));

/**********************compraproductos ******************************/
CREATE TABLE `teme`.`compraproductos` (
  `id` INT NOT NULL,
  `compra_id` INT NULL,
  `producto_id` INT NULL,
  PRIMARY KEY (`id`));
  
/***********************envio *************************************************/

CREATE TABLE `teme`.`envios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `calle` VARCHAR(10) NULL,
  `cp` VARCHAR(10) NULL,
  `numero` VARCHAR(10) NULL,
  `piso` VARCHAR(10) NULL,
  `apartamento` VARCHAR(10) NULL,
  `fechaEntrega` DATE NULL,
  `provincia` VARCHAR(50) NULL,
  `localidad` VARCHAR(50) NULL,
  `municipio` VARCHAR(50) NULL,
  PRIMARY KEY (`id`));
 
/**************************metodo de pago*************************************/
CREATE TABLE `metododepagos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50),  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
insert into teme.metododepagos values(1,"Efectivo"),(2,"Tarjeta de Debito"),(3,"Tarjeta de Credito"),(4,"Transferencia");

/*********************************producto ****************************/
select * from  `teme`.`producto`;
CREATE TABLE `teme`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NULL,
  `price` FLOAT NULL,
  `description` VARCHAR(200) NULL,
  `image` VARCHAR(100) NULL,
  `categoria_id` INT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (categoria_id) REFERENCES categorias(id));
 
insert into teme.producto values(1,"Bicicleta Eléctrica Cortina",120000,"Batería: LG 36 V/10.4 AH | 374 W. Motor: Bafang 350 W con sensor de velocidad. Autonomía: 35 km. Rodado: 28. Accesorios: Guardabarros | Portaequipajes | Bocina ","bici-electrica-cortina.jpg",1),
(2,"Bicicleta Eléctrica Montañera",60000,"Batería: LG 36 V/10.4 AH | 468 W. Motor: Bafang 350 W con sensor de velocidad. Autonomía: 45 km. Rodado: 29. Accesorios: Grip con mancuernas.","bici-electrica-mountain-bike.jpg",1),
(3,"Bicicleta Eléctrica Tourism",50000,"Batería: LG 9.6 AH | 465 W. Motor: Bafang 350 W con sensor de velocidad. Autonomía: 35 km. Rodado: 27. Accesorios: Bocina.","bici-electrica-tourism.jpg",1),
(4,"Hoverboard Blanco",40000,"Batería: Extra Premium Litio | Duración: 6hs. Luces: LED. Velocidad Máxima: 10 km/h . Capacidad Máxima: 100 km. Motor: 350W","hoverboard.jpg",4),
(5,"Hoverboard Verde",47000,"Batería: Extra Premium Litio | Duración: 12hs. Velocidad Máxima: 12 km/h . Capacidad Máxima: 120 km. Motor: 500W","hoverboard2.jpg",4),
(6,"Hoverboard KANY",50000,"Batería: Extra Premium Litio. Velocidad Máxima: 15 km/h . Capacidad Máxima: 150 km. Motor: 500W","hoverboard3.jpg",4),
(7,"Monopatín Eléctrico Uno",47000,"Batería: 36 V/13 AH | 468 W. Cuadro: Aleación de aluminio | Plegable. Velocidad Máxima: 25 km/h. Motor: 350W ","mono-electrico.jpg",2),
(8,"Monopatín Eléctrico Blanco",45000,"Batería: 36 V/13 AH | 468 W. Cuadro: Aleación de aluminio | Plegable. Velocidad Máxima: 25 km/h. Motor: 350W ","mono-blanco.jpg",2),
(9,"Monopatín Eléctrico Infantil",40000,"Batería: 19.2 V/2 AH. Cuadro: Aleación de aluminio | Plegable. Velocidad Máxima: 10 km/h. Motor: 60W ","monopatin-infantil.jpg",2),
(10,"Skateboard #1",8000,"Tabla: Cóncava con doble cola | 7 láminas de madera. Lija: Completa para el agarre grip tape 80 AB. Bujes: 95 A | Rulemanes Abec 9. Ruedas: Uretano 54 mm ","skate1.jpg",3),
(11,"Skateboard #2",8000,"Tabla: Cóncava con doble cola | 7 láminas de madera. Lija: Completa para el agarre grip tape 80 AB. Bujes: 95 A | Rulemanes Abec 9. Ruedas: Uretano 54 mm ","skate2.jpg",3),
(12,"Skateboard #3",8000,"Tabla: Maple chino | 6 láminas de madera. Bujes: 95 A | Rulemanes Abec 9. Ruedas: Uretano 54 mm ","skateboard_solo.jpg",3),
(13,"Ruedas para skate",2800,"Material: Uretano | Tamaño: 54mm | Colores: Amarillo, Azul, Negro, Verde y Rojo","skateboard_accesorios1.jpg",5),
(14,"Rulemanes",1000,"Unidades: 8 | Tipo: Abec 3 608rs","rulemanes.jpg",5),
(15,"Kit de protección",4000,"Incluye: 1 Casco | 2 rodilleras | 2 muñequeras ","kit-proteccion.jpg",5),
(16,"bici",20000,"Bicicleta de prueba con velocidad","faltaimg.jpg",1);
  
  
  
/**************************rol*************************************/
CREATE TABLE `rols` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50),  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
insert into teme.rol values(1,"admin"),(2,"cliente"),(3,"proveedor");

/*************************usuario*****************************************/
drop table `teme`.`usuario`;
CREATE TABLE `teme`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NULL,
  `user` VARCHAR(20) NULL,
  `email` VARCHAR(50) NULL,
  `password` VARCHAR(100) NULL,
  `imagen` VARCHAR(50) NULL,
  `rol_id` INT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (rol_id) REFERENCES rols(id));
  
  insert into teme.usuarios values(1,"pedro perez","pepito","pepito@gmail.com","$2a$10$Lt2eO8cb.UV9t7tZ4wMOzOrGrB0BG92zcyzTlgSjdcPX6/FI2cjeO","faltaimg.jpg",2);

/*************************usuario compra**************************************************/
CREATE TABLE `teme`.`usuariocompras` (
  `id` INT NOT NULL,
  `usuario_id` INT NULL,
  `compra_id` INT NULL,
  PRIMARY KEY (`id`));
      