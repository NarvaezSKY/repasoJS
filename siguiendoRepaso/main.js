document.addEventListener('DOMContentLoaded', ()=>{
alert('que')
})


const texto= document.getElementById('texto')

texto.addEventListener('mouseover',()=>{
   
    texto.style.backgroundColor="black"
    texto.style.color='white'
})

texto.addEventListener('mouseleave',()=>{
    texto.style.backgroundColor="white"
    texto.style.color='black'
    
})

const valor=document.getElementById('valor')
const tecla=document.getElementById('tecla')
tecla.addEventListener('input',(so)=>{
    console.log(so.data)
    valor.textContent=so.data
})
tecla.addEventListener('blur',()=>{
    valor.innerHTML='<h1>Clickeaste fuera del tal</h1>'
    tecla.value=""
})



localStorage.setItem('Nombre', 'Cristian')
sessionStorage.setItem('Mi cara', 'Cuando')

// stopPropagation() para evitar el padre-hijo :v