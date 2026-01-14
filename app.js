function lanzarDados(){
  console.log("lanzarDados")
  let dado1 = Math.floor(Math.random()* 6) + 1
  let dado2 = Math.ceil(Math.random()* 6) 
  document.getElementById('dado1').innerText = dado1
  document.querySelector('#dado2').textContent = dado2
}

lanzarDados()

const botonDados = document.getElementById('botonDados')
botonDados.addEventListener(
  "click",
  ()=>lanzarDados()
);

