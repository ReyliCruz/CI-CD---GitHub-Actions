# Informe de Despliegue

## Descripción
Se desarrolló una aplicación web con HTML, CSS y JavaScript que permite registrar nombre y correo de un usuario.

## CI/CD
Se configuró un flujo de trabajo (`ci-cd.yml`) con GitHub Actions para ejecutar pruebas unitarias con Jest y, si pasan, desplegar automáticamente a GitHub Pages.

## Despliegue en la nube
El sitio se hospeda en GitHub Pages y se actualiza con cada `push` a `main`.

## Monitoreo
Se utilizan mensajes de `console.log()` en el navegador para verificar eventos clave como envío de formulario. En una versión futura podría integrarse Sentry para monitoreo más robusto.

## URL del Sitio Web
[https://reylicruz.github.io/CI-CD---GitHub-Actions/](https://reylicruz.github.io/CI-CD---GitHub-Actions/)

## Problemas encontrados
- Fue necesario configurar `jest-environment-jsdom` ya que Jest 28+ no lo incluye por defecto.
- Se tuvieron que ajustar los permisos de GitHub Actions para permitir `push` a `gh-pages`.
