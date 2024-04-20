### Descripción

Esta aplicación Angular utiliza Firebase Authentication para proporcionar un sistema de inicio de sesión seguro. Está construida con el framework Angular y ofrece una interfaz de usuario intuitiva para el registro, inicio de sesión y cierre de sesión de usuarios.

### Características
* **Registro de Usuarios**: Permite a los usuarios registrarse con un correo electrónico y contraseña.
* **Inicio de Sesión:** Los usuarios pueden iniciar sesión con sus credenciales registradas.
* **Cierre de Sesión:** Funcionalidad para cerrar sesión de manera segura.
* **Autenticación de Firebase:** Utiliza Firebase Authentication para gestionar la autenticación de usuarios de forma segura.
* **Interfaz de Usuario Intuitiva:** Diseño limpio y amigable para una experiencia de usuario óptima.

### Requisitos Previos
* Node.js y npm instalados en tu sistema.
* Una cuenta de Firebase para configurar el proyecto y obtener las credenciales necesarias.

---
### Configuración
1. Clona este repositorio en tu máquina local:
```
git clone https://github.com/BitzyG/login_fb.git
```
2. Instala las dependencias del proyecto:
```
cd repo-angular-firebase
```
```
npm install
```
3. Crea un proyecto en Firebase (si no tienes uno) y configura la autenticación por correo electrónico y contraseña.
4. Copia las credenciales de Firebase (apiKey, authDomain, etc.) y pégala en el archivo de configuración de Firebase **(src/environments/environment.ts).**
5. Habilita las reglas de seguridad en Firebase para permitir el acceso adecuado a la base de datos y los servicios de autenticación.
---
---
#### Contribución
Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Crea un fork del repositorio.
2. Crea una nueva rama (git checkout -b feature/nueva-caracteristica).
3. Haz tus cambios y realiza un commit (git commit -am 'Añade una nueva característica').
4. Haz push a la rama (git push origin feature/nueva-caracteristica).
5. Crea un nuevo Pull Request.

#### Problemas
Si encuentras algún problema o tienes alguna sugerencia, por favor abre un nuevo issue en este repositorio.

---

¡Gracias por utilizar nuestra aplicación Angular con Firebase Authentication! Esperamos que sea útil para tus proyectos. Si tienes alguna pregunta, no dudes en contactarnos. ¡Feliz codificación!






