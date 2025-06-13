document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM cargado correctamente ✅');

  const form = document.getElementById('registerForm');
  if (!form) {
    console.warn('Formulario no encontrado ❌');
    return;
  }

  console.log('Formulario encontrado 🧾');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    console.log('Formulario enviado 🚀');
    console.log('Nombre:', name);
    console.log('Correo:', email);

    if (name && email) {
      const mensaje = `Gracias por registrarte, ${name}.`;
      document.getElementById('message').textContent = mensaje;
      console.log('✅ Registro exitoso:', mensaje);
    } else {
      const advertencia = 'Por favor llena todos los campos.';
      document.getElementById('message').textContent = advertencia;
      console.warn('⚠️ Formulario incompleto:', advertencia);
    }
  });
});
