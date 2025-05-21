![image](https://github.com/user-attachments/assets/fe00e9bb-af5b-44ca-ad2e-6317d664e0c7)



La entidad Escritor tiene atributos: id, nombre, apellido, nacionalidad y edad.

La entidad Libro tiene atributos: id, nombre, genero, añoPublicacion y authorId que es la llave foránea que referencia a un Escritor.

La relación es de uno a muchos (1:N):
- Un escritor puede escribir muchos libros.
- Cada libro está asociado a un solo escritor.

Llave foránea (authorId):
En la tabla Libro, se incluye authorId para vincular cada libro con su escritor, manteniendo la integridad referencial.

Integrantes :
Leidy Duarte 
Steven Sanchez
Felipe Osorio
