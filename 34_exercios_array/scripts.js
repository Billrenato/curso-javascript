const calculadora = {

  somar: function(a,b){
    return a + b;
  },
  subtrair: function(a,b){
    return a - b;
  },
  multi: function(a,b){
    return a * b;
  },
  dividir: function(a,b){
    return a / b;
  },
  portcen: function(a,b){
    return a % b;
  }
}

console.log(calculadora.somar(10,10));
console.log(calculadora.subtrair(10,10));
console.log(calculadora.multi(10,10));
console.log(calculadora.dividir(10,10));
console.log(calculadora.portcen(100,10));



