Este es un proyecto donde se realizó la ACT-7 para la materia Desarrollo de Software - UTN FRRe, donde se tuvo que realizar una aplicación con funcionalidad básica usando el patron de diseño MVC y nodeJS. Tambien usamos React y MySQL para la Base de Datos.

# Para ejecutar este proyecto se debe hacer lo siguiente: 

## En la terminal ejecutar estos comandos:
```console
    npm install express body-parser
    npm install mysql
    npm install react-scripts@latest 
```

## Tener creada una base de datos "desarrollo-7" con los siguientes datos:   
```javascript
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'desarrollo-7',
    port: '3307'
```

**Nota: Para crear la base de datos y gestionarla usamos XAMPP y PHPmyAdmin en el puerto 3307, si se desea levantarla en otro puerto cambiar el port**

## Crear en la BD una tabla "productos" con los atributos "id","nombre" y "descripcion":
```python
    CREATE TABLE productos (
        id INT PRIMARY KEY,
        nombre VARCHAR(50),
        descripcion TEXT
    )
```

## Insertar datos en la tabla, por ejemplo:
```python
    INSERT INTO `productos`(`id`, `nombre`, `descripcion`) VALUES (2, 'Campera', 'Campera de friza negra');
    INSERT INTO `productos`(`id`, `nombre`, `descripcion`) VALUES (3, 'Pantalón', 'Pantalón de mezclilla azul');
    INSERT INTO `productos`(`id`, `nombre`, `descripcion`) VALUES (4, 'Remera', 'Remera de algodón blanca');
    INSERT INTO `productos`(`id`, `nombre`, `descripcion`) VALUES (5, 'Vestido', 'Vestido de verano estampado');
    INSERT INTO `productos`(`id`, `nombre`, `descripcion`) VALUES (6, 'Zapatillas', 'Zapatillas deportivas negras');
    INSERT INTO `productos`(`id`, `nombre`, `descripcion`) VALUES (7, 'Bufanda', 'Bufanda de lana a cuadros');
    INSERT INTO `productos`(`id`, `nombre`, `descripcion`) VALUES (8, 'Gorro', 'Gorro de punto negro');
    INSERT INTO `productos`(`id`, `nombre`, `descripcion`) VALUES (9, 'Chaqueta', 'Chaqueta de cuero marrón');
    INSERT INTO `productos`(`id`, `nombre`, `descripcion`) VALUES (10, 'Blusa', 'Blusa de seda rosa');
    INSERT INTO `productos`(`id`, `nombre`, `descripcion`) VALUES (11, 'Shorts', 'Shorts deportivos negros');
```

## Ahora ya con la BD levantada, para inicializar el servidor o "controlador.js" en la terminal ejecutar el comando:
```console
    node controlador.js (si la ruta actual es ../src)
```

## Finalmente, para iniciar el proyecto de React, en una NUEVA terminal ejecutar el comando: 
```console
    npm start (si la ruta actual es ../src)
```
