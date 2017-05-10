var productos = [
 {
  nombre: "pijama",
  tipo: "ropa",
 },
 {
  nombre: "asus",
  tipo: "computador",
 },
  {
  nombre: "nevera",
  tipo: "electrodomestico",
 },
 {
  nombre: "macbook",
  tipo: "computador",
 },
 {
  nombre: "sweter",
  tipo: "ropa",
 },
  {
  nombre: "toshiba",
  tipo: "computador"
 }
]

var computadores = [];

for (var i = 0; i < productos.length; i++) {
  if (productos[i].tipo === "computador") {
    computadores.push(productos[i]);
  }
  
}
console.log(computadores);

computadores = productos.filter(function(producto) {
  return producto.tipo === "computador";
});

console.log(computadores);


