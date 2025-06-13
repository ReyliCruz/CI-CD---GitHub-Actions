document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name && email) {
    document.getElementById('message').textContent = `Gracias por registrarte, ${name}.`;
  } else {
    document.getElementById('message').textContent = 'Por favor llena todos los campos.';
  }
});
