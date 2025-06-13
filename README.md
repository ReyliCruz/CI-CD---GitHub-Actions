# CI-CD---GitHub-Actions

# Informe de Despliegue

## Descripción
La aplicación consiste en un formulario de registro simple implementado con HTML, CSS y JavaScript puro. Se configura una pipeline de CI/CD con GitHub Actions.

## CI/CD
- **CI:** Corre pruebas unitarias en cada push a la rama `main`.
- **CD:** Despliegue automático en GitHub Pages.

## Problemas encontrados
- Tuve que configurar correctamente los permisos del token para permitir deploy.
- Se requería un archivo `package.json` con Jest y jsdom para pruebas.

## Monitoreo y Logging
Para esta aplicación estática, el monitoreo se limitará a errores de consola en el navegador.
En una versión futura se puede usar Sentry o LogRocket.