let formulario = document.querySelector('form')

formulario.addEventListener('submit',enviarFormulario)

function enviarFormulario(elementForm){
    elementForm.preventDefault();
    console.log(elementForm.target);
    let nombre = document.querySelector('#nombre');
    let edad = document.querySelector('#edad');
    let password = document.querySelector('#password');

    let informacion={
        nombre:nombre.value,
        edad : edad.value,
        password: password.value
    }
}
