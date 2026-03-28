Proyecto: Aplicación Web Modularizada - Primer Parcial
Este proyecto consiste en una aplicación web funcional y modularizada, diseñada para demostrar el uso de tecnologías modernas de desarrollo frontend sin el uso de frameworks externos, enfocándose en la reutilización de código y la eficiencia.
1. Implementación del Inicio de Sesión (Login)
El sistema de autenticación se diseñó siguiendo un flujo lógico de validación en el cliente:
Interfaz: Un formulario con campos de usuario y contraseña vinculado a un evento submit en JavaScript.
Validación: Se comparan los datos ingresados con credenciales predefinidas (quemadas) en el código.
Gestión de Flujo: * Si las credenciales coinciden, se utiliza window.location.href para redirigir al usuario al panel principal (index.html).
Si los datos son incorrectos, se manipula el DOM para mostrar un mensaje de alerta o error visual sin recargar la página.
2. Buenas Prácticas Aplicadas
Se siguieron estándares de desarrollo para garantizar un código limpio y profesional:
Semántica HTML5: Uso de etiquetas adecuadas (<header>, <nav>, <main>, <footer>) para mejorar la accesibilidad y el SEO.
Encapsulamiento: Uso de Shadow DOM en Web Components para evitar la fuga de estilos.
Carga Asíncrona: Implementación de la API Fetch con async/await para cargar datos de products.json y fragmentos HTML de forma no bloqueante.
Separación de Responsabilidades (SoC): Organización clara de carpetas separando la lógica (JS), los estilos (CSS), la estructura (HTML) y los datos (JSON).
Diseño Responsivo: Uso de Flexbox o CSS Grid para asegurar que la interfaz se adapte a diferentes dispositivos.
3. Colaboración en GitHub
El desarrollo se realizó de forma colaborativa siguiendo un flujo de trabajo organizado:
Repositorio Central: Uso de un repositorio compartido para integrar los módulos.
Historial de Commits: Se puede evidenciar el progreso mediante mensajes de commit descriptivos que detallan la implementación de cada funcionalidad (ej. "feat: add product template", "fix: login validation").
División de Tareas: El trabajo se repartió equitativamente, donde cada integrante asumió la responsabilidad de módulos específicos (ej. un integrante encargado del Login y otro de la carga dinámica de productos).
Instrucciones para ejecutar el proyecto:
Clonar el repositorio: git clone https://github.com/Yonathan08-C/project.git
Abrir el archivo login.html en un servidor local (se recomienda usar la extensión Live Server en VS Code para que la API Fetch funcione correctamente).
