// console.log('so')


// function ini (recibir){
// let nombre = prompt('sisas?')

// return (`sisas ${nombre}`)

// }

// function recibir (ini){


// }


// const saludo=(nombre)=>{
//     return `Hola ${nombre}`
// }

// console.log(saludo('so'))




// function getUsuarioActivo(nombre){
//     return{
//         uid:'ABC678',
//         username:nombre
//     }
// }

// const usuarioActivo=getUsuarioActivo('Javier Lozada')
// console.table(usuarioActivo)


// const getUsuarioActivo=(nombre)=>
//     ({
//         uid:'ABC678',
//         username:nombre
//     });

// console.table(getUsuarioActivo('si'))




// const usuario={
//         nombre:'se',
//         apellido:'xo',
//         genero:'que'
//     }




// const retornaUser=({nombre,apellido})=>{
//      console.table(nombre,apellido)
// }

// retornaUser(usuario)





// const motero ={
//     nombre:'MotoYecid',
//     color:'transparente',
//     placa:'1369',
//     detalles:{
//         sexo:'no :c',
//         pqno:'pq no'
//     }
// }


// const retornaValor= ({nombre,color,placa,pensamientosSuicidas=true, detalles:{sexo,pqno}})=>{
//     console.table(nombre,color,placa, pensamientosSuicidas,{sexo,pqno})
// }


// retornaValor(motero)



// const retornaValor= ({nombre,color,placa,pensamientosSuicidas=true, detalles:{sexo,pqno}})=>{
//     return{
//         nom:nombre,
//         col:color,
//         pla:placa,
//         pensa:pensamientosSuicidas=true,
//         detalles:{sexo, pqno}
//     }
// }

// const {nom,col,pla,pensa, detalles:{sexo,pqno}}=retornaValor(motero)
// console.log(nom, sexo)



// const useState=(nombre)=>{
//     return[nombre,()=>{console.log(`el usuario esta activo`)}]
// }

// const arr=useState('Cristian')

// console.log(arr[0])
// arr[1]();

// const [nombre,setNombre]=useState('Javier')
// console.log(nombre)
// setNombre();

document.addEventListener("DOMContentLoaded", function(){
    let usuario=document.getElementById('usuario')
    console.log(usuario)
    
    let formulario=document.getElementById('formulario')
    
    let contraseña=document.getElementById('contraseña')
    console.log(contraseña)
    
    // let boton = document.getElementById('boton')
    
    let body=document.getElementById('body')
    console.log(body)
    
    
formulario.addEventListener('submit',(event)=>{
    event.preventDefault();
        body.style.backgroundColor='red'
        if (usuario.value === "admin@gmail.com" && contraseña.value==="12345678"){
            body.style.backgroundColor='blue'
        }
      
    })

 
})









    


