const express = require('express');
const path = require('path');
const app = express();




const port = 5000;
app.use(
    "/css",
    express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
  )

app.get('/', (req, res) => {   

   res.sendFile('index.html', {
        root: __dirname
    });

});

app.get('/result', (request, res) => {
    let tipoBillete = request.query.billete;
	let cantidad = request.query.cantidad;
  let iva = request.query.iva;
  let precio=0;
  let ivaValor=0;
  let precioTotal=0;
  

  if(tipoBillete == "ida" ) {
      precio = cantidad * 30;
  }else {
    precio = cantidad * 50;
  }

  precioTotal = precio;
  if(!iva) {
    ivaValor = precio * 0.21;
    precioTotal = precio+ivaValor;
  }

  res.send("<p>Total sin IVA: "+ precio+"</p><p>IVA: " + ivaValor+ "</p><p>Total con IVA: " + precioTotal + "</p>")
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
