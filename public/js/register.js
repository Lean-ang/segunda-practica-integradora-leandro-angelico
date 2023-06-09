console.log('desde js register');

const formRegister = document.querySelector('#formRegister')

if (formRegister instanceof HTMLFormElement) {
  formRegister.addEventListener('submit', async event => {
    event.preventDefault()

    const input_first_name = document.querySelector('#input_first_name')
    const input_last_name = document.querySelector('#input_last_name')
    const input_email = document.querySelector('#input_email')
    const input_age = document.querySelector('#input_age')
    const input_password = document.querySelector('#input_password')
    const input_rol = document.querySelector('#input_rol')
    const input_cart = document.querySelector('#input_cart')

    if (
      input_first_name instanceof HTMLInputElement &&
      input_last_name instanceof HTMLInputElement &&
      input_email instanceof HTMLInputElement &&
      input_age instanceof HTMLInputElement &&
      input_password instanceof HTMLInputElement&&
      input_rol instanceof HTMLInputElement &&
      input_cart instanceof HTMLInputElement
    ) {

      const datosUsuario = {
        first_name: input_first_name.value,
        last_name: input_last_name.value,
        email: input_email.value,
        age: input_age.value,
        password: input_password.value,
        rol: input_rol.value,
        cart: input_cart.value,
      }
console.log(datosUsuario);

const response = await fetch('/api/usuarios', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosUsuario)
  });
  
  if (!response.ok) {
    throw new Error('USER-NOT-FOUND');
  }
  
  const usuarioCreado = await response.json();

      console.log(usuarioCreado)
if (response.ok) {
  window.location.href = 'http://localhost:8080/api/sessions/current'
}
    }


  })
}




// const formRegister = document.querySelector('#formRegister')

// if (formRegister instanceof HTMLFormElement) {
//   formRegister.addEventListener('submit', async event => {
//     event.preventDefault()

//     const input_first_name = document.querySelector('#input_first_name')
//     const input_last_name = document.querySelector('#input_last_name')
//     const input_email = document.querySelector('#input_email')
//     const input_age = document.querySelector('#input_age')
//     const input_password = document.querySelector('#input_password')

//     if (
//       input_first_name instanceof HTMLInputElement &&
//       input_last_name instanceof HTMLInputElement &&
//       input_email instanceof HTMLInputElement &&
//       input_age instanceof HTMLInputElement &&
//       input_password instanceof HTMLInputElement
//     ) {

//       const datosUsuario = {
//         first_name: input_first_name.value,
//         last_name: input_last_name.value,
//         email: input_email.value,
//         age: input_age.value,
//         password: input_password.value,
//       }

//       const usuarioCreado = await fetch('/api/usuarios', {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(datosUsuario)
//       }).then(res => res.json())

//       console.log(usuarioCreado)
//     }
//   })
// }