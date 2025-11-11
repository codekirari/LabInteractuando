// mis variables globales
    let totalItems = 0;
    let totalPrecio = 0;
    let productosAgregados = [];

    // Función para agregar productos
    function agregarAlCarrito(nombre, precio) {
      totalItems++;
      totalPrecio += precio;
      productosAgregados.push(nombre);

      // Actualizar los contadores
      document.getElementById('total-items').textContent = totalItems;
      document.getElementById('total-precio').textContent = totalPrecio;

      // alert si supera los 50
      if (totalPrecio > 50) {
        alert('¡Envío gratis aplicado!');
      }

      console.log('Productos en el carrito:', productosAgregados);
    }

    // Función para boton vaciar el carrito
    function vaciarCarrito() {
      totalItems = 0;
      totalPrecio = 0;
      productosAgregados = [];

      // Actualizar los valores
      document.getElementById('total-items').textContent = totalItems;
      document.getElementById('total-precio').textContent = totalPrecio;

      alert('Carrito vaciado');
      console.log('Carrito vacío.');
    }