const texto=document.getElementById('texto')
const formulario=document.getElementById('formulario')
function datosmotero(){
    const nombre=document.getElementById('Nombre')
    const apellido=document.getElementById('Apellido')
    const cedula=document.getElementById('Cedula')
    const correo=document.getElementById('Correo')
    const fecha=document.getElementById('Fecha')

    if (fecha.value<='2005-08-02'){
        return [nombre.value,apellido.value,cedula.value,correo.value,fecha.value]
    }
    else{
        alert('no sos mayor, coja oficio menorcito')
        texto.textContent="No eres mayor de edad. XD"
    }  
}

function datosmoto(){
    const placa=document.getElementById('Placa')
    const cilindraje=document.getElementById('Cilindraje')

    return[placa.value,cilindraje.value]
}

const boton=document.querySelector('.boton')


formulario.addEventListener('submit',(event)=>{
    event.preventDefault();
    const recibir=datosmotero()
    console.log(`nombre motero= ${recibir[0]}`)
    console.log(`apellido motero= ${recibir[1]}`)
    console.log(`cedula motero= ${recibir[2]}`)
    console.log(`correo motero= ${recibir[3]}`)
    console.log(`fecha nacimiento motero= ${recibir[4]}`)

    const recibirmoto=datosmoto()
    console.log(`placa moto= ${recibirmoto[0]}`)
    console.log(`cilindraje moto = ${recibirmoto[1]}`)

    texto.innerHTML=` 
    <center>
    <h1>Datos Motero</h1>

    <ul> 
    <li> Nombre motero: ${recibir[0]} </li>
    <li> Apellido motero: ${recibir[1]} </li>
    <li> Cedula motero: ${recibir[2]} </li>
    <li> Correo motero: ${recibir[3]} </li>
    <li> Fecha nacimiento motero: ${recibir[4]} </li>
    </ul> 
    <br>
    <h1>Datos Moto</h1>
    <ul>
    <li>Placa moto: ${recibirmoto[0]}</li>
    <li>Cilindraje moto: ${recibirmoto[1]}</li>
    </ul>
    </center>
    ` 
})