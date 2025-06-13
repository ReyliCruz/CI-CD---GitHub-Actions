test('Simula un registro exitoso', () => {
  document.body.innerHTML = `
    <form id="registerForm">
      <input type="text" id="name" />
      <input type="email" id="email" />
      <button type="submit">Registrarse</button>
      <p id="message"></p>
    </form>
  `;
  require('../script.js');
  document.getElementById('name').value = 'Juan';
  document.getElementById('email').value = 'juan@example.com';
  document.getElementById('registerForm').dispatchEvent(new Event('submit'));

  expect(document.getElementById('message').textContent)
    .toBe('Gracias por registrarte, Juan.');
});
