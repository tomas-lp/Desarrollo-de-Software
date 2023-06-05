import React, { useEffect, useState } from 'react';

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/productos')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error al obtener los productos desde la vista:', error));
  }, []);

  const renderProductos = () => {
  const productosOrdenados = productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
  const productosRenderizados = [];

  let nombreActual = '';
  productosOrdenados.forEach(producto => {
    if (producto.nombre !== nombreActual) {
      // Mostrar nombre y descripción
      productosRenderizados.push(
        <li key={producto.id}><strong>{producto.nombre}</strong></li>
      );
      productosRenderizados.push(
        <div key={producto.id}> - {producto.descripcion}</div>
      );
      nombreActual = producto.nombre;
    } else {
      // Mostrar solo la descripción
      productosRenderizados.push(
        <div key={producto.id}> - {producto.descripcion}</div>
      );
    }
  });

  return productosRenderizados;
};

return (
  <div>
    <h1>Productos</h1>
    <ul>
      {renderProductos()}
    </ul>
  </div>
);
}

export default App;
