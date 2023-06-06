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
    console.log(productosOrdenados);
    const productosRenderizados = [];

    let tempProducto = []; //Guarda un arreglo con los productos de un mismo tipo
    let prodActual = '';
    productosOrdenados.forEach(element => {
      if (element.nombre !== prodActual){
        if (prodActual !== ''){ //Si encuentra un nuevo tipo de producto, hago render de los productos del tipo anterior.
          productosRenderizados.push( 
            renderProducto(tempProducto)
          );
        }
        tempProducto = [];
        tempProducto.push(element);
        prodActual = element.nombre;
      } else {
        tempProducto.push(element);
      }
    });

    return productosRenderizados;
  };

  return (
    <div className='divProductos'>
      <h1 className='titulo'>Productos</h1>
      <ul className='listaProductos'>
        {renderProductos()}
      </ul>
    </div>
  );
}

function renderProducto(arrayProducto){
  let render = [];
  render.push( //Agrego el titulo (tipo de producto)
    <li className='tituloProd' key={arrayProducto[0].id}>{arrayProducto[0].nombre}</li>
  );
  render.push( //Agrego la descripcion
    <div className='descProd' key={arrayProducto[0].id}>{arrayProducto[0].descripcion}</div>
  );
  arrayProducto.shift() //Quito ese primer elemento del arreglo

  arrayProducto.forEach(element =>{ //Para todos los demas, solo agrego la descripcion
    render.push(
      <div className='descProd' key={element.id}>{element.descripcion}</div>
    );
  });

  return( //Encierra a cada grupo de productos en un div
    <div className='producto'>
      {render}
    </div>
  );
}


export default App;
