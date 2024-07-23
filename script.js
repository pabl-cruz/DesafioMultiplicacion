function numero(n){
  console.log(`Los multiplos de ${n} son:`);
  for (let i = 1; i <= n; i++){
    if(n > 20){
      console.log('Número fuera del rango');
      break;
    }
    const resultado= i * n;
    let numIncr = i;
    let numBase = n;
    console.log(`${numBase} X ${numIncr} = ${resultado}`);    
  }
  
  console.log(`los resultados de la lista factorial de ${n} llegan hasta:`);

  const factorial = function(n){
    var numFactorial = 1;
    for(let i = 1; i <= n; i++){
      numFactorial = i * numFactorial;
    } 
    return numFactorial;
  }
  //ciclo dentro de otro ciclo
  const listadoFactorial = function(n){
    for(let j = 1; j <= n; j++){
      let texto = `Factorial de ${j} es: ${factorial(j)}` ;
      console.log(texto);
    }
    }
  console.log(listadoFactorial(n))
  }
