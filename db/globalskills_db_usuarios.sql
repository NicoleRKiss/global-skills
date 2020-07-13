CREATE TABLE categorias (
	id  INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    descripcion VARCHAR(255),
    subcategorias VARCHAR(255),
    cursos VARCHAR (255) -- Aca falta un foreign KEY juntando el precio y descripcion del curso
);


CREATE TABLE cursos (
	id  INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    descripcion VARCHAR(255),
    precio SMALLINT
)
