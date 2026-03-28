window.addEventListener('load', function () {
  const formularioRegistro = document.getElementById('loginForm');

  formularioRegistro.addEventListener('submit', function (event) {
      
      event.preventDefault(); 
      
      const correo = formularioRegistro.querySelector('input[type="email"]');
      const clave = formularioRegistro.querySelector('input[type="password"]');

      let esValido = true;
      let mensajeError = "";

      
      if (correo.value.trim() === '' || clave.value.trim() === '') {
          mensajeError += "hay campos de inicio vacios.\n";
          esValido = false;
      }

      if (correo.value.trim() !== '' && !correo.value.includes("@")) {
          mensajeError += "Correo inválido. Debe contener un '@'.\n";
          esValido = false;
      }

      if (clave.value.trim() !== '' && clave.value.length < 6) {
          mensajeError += "Contraseña incorrecta (mayor a seis digitos).\n";
          esValido = false;
      }

      if (esValido) {
          alert("¡Sea bienvenido! \nSerás redirigido a la página principal.");
          window.location.href = "principal.html";
      } else {
          alert("Errores de inicio de sesion:\n" + mensajeError);
      }
  });
});