# Formulario Web con CI/CD utilizando GitHub Actions 🚀

Este proyecto es una aplicación web simple que permite a los usuarios registrarse mediante un formulario con validación en el frontend. La solución fue desarrollada utilizando **HTML**, **CSS** y **JavaScript**, y configurada para realizar pruebas automáticas y desplegarse automáticamente en GitHub Pages usando **CI/CD con GitHub Actions**.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**  
- **CSS3**
- **JavaScript (Vanilla)**
- **Jest** para pruebas unitarias
- **GitHub Actions** para CI/CD
- **GitHub Pages** como servidor de despliegue automático

---

## ✨ Funcionalidad

- Formulario con campos de nombre y correo electrónico.
- Validación de campos vacíos.
- Retroalimentación visual directa para el usuario.
- Pruebas automatizadas para asegurar el correcto comportamiento del formulario.

---

## 🧪 Integración Continua (CI)

Se implementó un flujo automatizado de pruebas utilizando **Jest**, el cual se ejecuta **automáticamente en cada push** o pull request a la rama principal (`main`). Este flujo valida:

- Que se muestre un mensaje de éxito si se llenan todos los campos.
- Que se muestre una advertencia si los campos están vacíos.

---

## 🚀 Despliegue Continuo (CD)

El proyecto se despliega de forma automática tras cada push exitoso a `main`. La acción de despliegue:

- Corre las pruebas unitarias con Jest.
- Si todas las pruebas pasan, publica el contenido del sitio.
- Usa el paquete [`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages) para realizar el deploy automático.

El despliegue se hace directamente desde **GitHub Actions**, sin intervención manual.

🔗 **Enlace a la página desplegada:**  
👉 https://reylicruz.github.io/github-actions-test/

---

## 📂 Estructura del Proyecto

```
📦 github-actions-test/
 ┣ 📁 .github/
 ┃ ┗ 📁 workflows/
 ┃   ┗ 📄 deploy.yml     <- Archivo de CI/CD con GitHub Actions
 ┣ 📁 tests/
 ┃ ┗ 📄 form.test.js     <- Pruebas unitarias con Jest
 ┣ 📄 index.html         <- Estructura del formulario
 ┣ 📄 style.css          <- Estilos base del sitio
 ┣ 📄 script.js          <- Lógica de validación del formulario
 ┣ 📄 README.md          <- Este archivo
 ┗ 📄 package.json       <- Configuración del proyecto y dependencias
```

---

## ⚙️ Workflow de GitHub Actions

```yaml
name: build-and-deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout del repositorio
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Instalar dependencias
        run: npm install

      - name: Ejecutar pruebas con Jest
        run: npm test

      - name: Desplegar con GitHub Actions
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .
          publish_branch: gh-pages
```

---

## 📋 Informe de Despliegue

- El flujo de integración y despliegue se ejecuta automáticamente con cada cambio.
- El sistema de logging muestra los mensajes del DOM cargado, validación de formulario y retroalimentación.
- Se agregaron `console.log` y `console.warn` para ayudar a detectar fallos durante pruebas o en producción.
- Las pruebas se ejecutaron correctamente como muestra la siguiente salida de logs:

```
PASS tests/form.test.js
  Formulario de Registro
    ✓ Muestra mensaje de éxito si se llenan todos los campos
    ✓ Muestra advertencia si hay campos vacíos
```

- No se detectaron vulnerabilidades ni errores en el flujo.
- El despliegue fue exitoso en cada intento tras pasar las pruebas.

---

## 📈 Monitoreo y Logging

Se incluyeron logs personalizados para hacer seguimiento del estado del DOM, envío de formulario, y validaciones. Esto facilita el monitoreo desde GitHub Actions y depuración durante desarrollo.

---

## ✅ Conclusión

Este proyecto demuestra cómo una aplicación web básica puede beneficiarse de prácticas profesionales de desarrollo como **CI/CD** y **automatización de pruebas**, incluso sin usar frameworks complejos. Todo el proceso fue automatizado y gestionado eficientemente con **GitHub Actions**, asegurando entregas rápidas, confiables y sin intervención manual.

---

© 2025 Reyli Brayan Cruz Lucas