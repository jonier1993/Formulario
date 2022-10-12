document.querySelector('#btnLogin').addEventListener('click', validacion)
function validacion (event) {
    
    let usuario = document.getElementById('email').value
    let contrasena = document.getElementById("password").value
    if(usuario == "jhonier902@hotmail.com") {
        if (contrasena == "jonier123") {
            alert("Datos correctos")            
        }
        else {
            alert("Contraseña incorrecta")
            event.preventDefault()
        }
    }
    else {
        alert("Usuario incorrecto")
        event.preventDefault()
    }
}