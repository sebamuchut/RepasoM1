function saludar (saludo) {
  return function(nombre) {
      console.log(saludo + " " + nombre);
  }
}
