// Función  precio aleatorio 
function generarPrecioAleatorio(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // Articulos
  const articulos = {
    Remera: {
      colores: ["negro", "gris", "blanco"],
      talles: ["s", "m", "l", "xl"],
    },
    Buzo: {
      colores: ["negro", "gris", "blanco"],
      talles: ["s", "m", "l", "xl"],
    },
    Pantalon: {
      colores: ["negro", "gris", "blanco"],
      talles: ["s", "m", "l", "xl"],
    },
    Zapatilla: {
      colores: ["negro", "gris", "blanco"],
      talles: ["s", "m", "l", "xl"],
    },
    Campera: {
      colores: ["negro", "gris", "blanco"],
      talles: ["s", "m", "l", "xl"],
    },
  };
  
  // Función para buscar un artículo
  function buscarArticulo(articulo) {
    const nombreArticulo = articulo.charAt(0).toUpperCase() + articulo.slice(1).toLowerCase();
    if (articulos[nombreArticulo]) {
      return nombreArticulo;
    } else {
      return false;
    }
  }
  
  // Función Carrito
  function agregarArticulos() {
    let totalPrecio = 0;
    let listaArticulos = [];
  
    while (true) {
      let articulo = prompt("Ingrese el artículo que desea agregar: Remera - Buzo - Pantalon - Zapatilla - Campera");
      let nombreArticulo = buscarArticulo(articulo);
  
      if (nombreArticulo) {
        let color = prompt(`Ingrese el color para el artículo ${nombreArticulo}: Blanco - Gris - Negro`);
        let talle = prompt(`Ingrese el talle ( S al XL) para el artículo ${nombreArticulo}:`);
  
        if (articulos[nombreArticulo].colores.includes(color) && articulos[nombreArticulo].talles.includes(talle)) {
          let precioAleatorio = generarPrecioAleatorio(5000, 20000);
          totalPrecio += precioAleatorio;
          listaArticulos.push({
            articulo: nombreArticulo,
            color: color,
            talle: talle,
            precio: precioAleatorio.toFixed(2),
          });
  
          console.log(`Artículo agregado: ${nombreArticulo}`);
          console.log(`Color: ${color}`);
          console.log(`Talle: ${talle}`);
          console.log(`Precio: $${precioAleatorio.toFixed(2)}`);
        } else {
          console.log(
            "El artículo ingresado no está disponible en el color y talle seleccionados. Intente nuevamente."
          );
        }
      } else {
        console.log("Artículo no válido. Intente con otro artículo.");
      }
  
      const agregarOtro = prompt("¿Desea agregar otro artículo? (s/n)");
  
      if (agregarOtro.toLowerCase() !== "s") {
        break;
      }
    }
  
    console.log(`\nArtículos seleccionados:`);
    listaArticulos.forEach((articulo) => {
      console.log(`- ${articulo.articulo}, Color: ${articulo.color}, Talle: ${articulo.talle}, Precio: $${articulo.precio}`);
    });
    console.log(`Total a pagar: $${totalPrecio.toFixed(2)}`);
  }
  
  
  agregarArticulos();



  



