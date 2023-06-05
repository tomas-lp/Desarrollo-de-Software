# Para ejecutar este proyecto se debe hacer lo siguiente: 

# En la terminal ejecutar estos comandos:
    npm install express body-parser
    npm install mysql
    npm install react-scripts@latest 

# Tener creada una base de datos "desarrollo-7" en el puerto 3307 con los siguientes datos:   
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'desarrollo-7',
    port: '3307'

**Nota: Para crear la base de datos y gestionarla usamos XAMPP y PHPmyAdmin en el puerto 3307, si se desea levantarla en otro puerto cambiar el port en ./src/modelo.js**

# Crear en la BD una tabla "productos" con los atributos "id","nombre" y "descripcion":
    CREATE TABLE productos (
        id INT PRIMARY KEY,
        nombre VARCHAR(50),
        descripcion TEXT
    );

# Insertar datos en la tabla, por ejemplo:
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

# Ahora con la BD lista y ejecutandose en el puerto 3307, para inicializar el servidor o "controlador.js" en la temrinal ejecutar el comando:
    node controlador.js (si la ruta actual es ../src)

# Finalmente, para iniciar el proyecto de React, en una NUEVA terminal ejecutar el comando: 
    npm start (si la ruta actual es ../src)
