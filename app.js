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

function changeSize(){
  const inputHeight = document.querySelector('#height').value.trim()
  const inputWidth = document.querySelector('#width').value.trim()
  document.querySelector('#dado1').style.height = inputHeight + 'px'
  document.querySelector('#dado1').style.width = `${inputWidth}px`
  document.querySelector('#dado2').style.height = inputHeight + 'px'
  document.querySelector('#dado2').style.width = `${inputWidth}px`
}

let btnChangeSize = document.querySelector('#btnChangeSize')
btnChangeSize.addEventListener('click',changeSize);

setInterval(lanzarDados,3000);
