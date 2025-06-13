describe('Formulario de Registro', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <form id="registerForm">
        <input type="text" id="name" />
        <input type="email" id="email" />
        <button type="submit">Registrarse</button>
        <p id="message"></p>
      </form>
    `;
    require('../script.js');
  });

  test('Muestra mensaje de éxito si se llenan todos los campos', () => {
    document.getElementById('name').value = 'Juan';
    document.getElementById('email').value = 'juan@example.com';

    document.getElementById('registerForm')
      .dispatchEvent(new Event('submit', { bubbles: true }));

    expect(document.getElementById('message').textContent)
      .toBe('Gracias por registrarte, Juan.');
  });

  test('Muestra advertencia si hay campos vacíos', () => {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';

    document.getElementById('registerForm')
      .dispatchEvent(new Event('submit', { bubbles: true }));

    expect(document.getElementById('message').textContent)
      .toBe('Por favor llena todos los campos.');
  });
});
