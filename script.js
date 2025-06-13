document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registerForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    console.log("Formulario enviado");
    console.log("Nombre:", name);
    console.log("Correo:", email);

    if (name && email) {
      document.getElementById('message').textContent = `Gracias por registrarte, ${name}.`;
      console.log("Registro exitoso");
    } else {
      document.getElementById('message').textContent = 'Por favor llena todos los campos.';
      console.warn("Formulario incompleto");
    }
  });
});
