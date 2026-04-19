🧪 Casos de Prueba – Flujo de Login (Inicio de Sesión)
Proyecto: OpenCart – Cypress E2E + API
Autor: Eduardo José Parra Perdomo
Fecha: 17/04/2026

📘 Índice
Objetivo del Flujo

Alcance

Precondiciones

Casos de Prueba UI

TC-01 – Acceso a la pantalla de Login

TC-02 – Login exitoso

TC-03 – Login con contraseña incorrecta

TC-04 – Login con usuario inexistente

TC-05 – Validación de campos obligatorios

TC-06 – Logout exitoso

Casos de Prueba API

Casos de Prueba SQL

Notas de Negocio

Evidencias

🎯 Objetivo del Flujo
Validar que un usuario existente puede iniciar sesión correctamente en OpenCart, que el sistema maneja errores de autenticación y que la sesión se mantiene activa para flujos posteriores como checkout, historial de pedidos y validaciones SQL.

📌 Alcance
Acceso a la pantalla de Login

Validación de credenciales

Manejo de errores

Persistencia de sesión

Logout

Validación API de autenticación (si aplica)

🔧 Precondiciones
Usuario existente registrado previamente

Acceso a OpenCart Demo

Cookies limpias

Navegador funcional

Acceso a API REST (si se validará autenticación vía API)

🧪 Casos de Prueba UI
🟦 TC-01 – Acceso a la pantalla de Login
Objetivo: Validar que el usuario puede acceder a la pantalla de inicio de sesión.

Pasos
Abrir la página principal

Seleccionar “My Account”

Seleccionar “Login”

Validaciones
Título “Account Login” visible

Formulario de email y password visible

🟦 TC-02 – Login exitoso
Objetivo: Validar que un usuario existente puede iniciar sesión correctamente.

Pasos
Ingresar email válido

Ingresar contraseña válida

Hacer clic en “Login”

Validaciones
Redirección a My Account

Nombre del usuario visible

Menú de opciones disponible (Orders, Downloads, etc.)

🟦 TC-03 – Login con contraseña incorrecta
Objetivo: Validar que el sistema rechaza credenciales inválidas.

Pasos
Ingresar email válido

Ingresar contraseña incorrecta

Hacer clic en “Login”

Validaciones
Mensaje rojo: Warning: No match for E-Mail Address and/or Password.

No inicia sesión

Permanece en pantalla de Login

🟦 TC-04 – Login con usuario inexistente
Objetivo: Validar que el sistema maneja correctamente usuarios no registrados.

Pasos
Ingresar email inexistente

Ingresar cualquier contraseña

Hacer clic en “Login”

Validaciones
Mensaje de error

No inicia sesión

🟦 TC-05 – Validación de campos obligatorios
Objetivo: Validar que el sistema exige email y contraseña.

Casos
Email vacío

Contraseña vacía

Ambos vacíos

Validaciones
Mensajes de error

No permite continuar

🟦 TC-06 – Logout exitoso
Objetivo: Validar que el usuario puede cerrar sesión correctamente.

Pasos
Iniciar sesión

Seleccionar “My Account”

Seleccionar “Logout”

Validaciones
Mensaje: You have been logged off

Botón “Continue” visible

No permite acceder a páginas protegidas

🧪 Casos de Prueba API
(OpenCart Demo no siempre expone login vía API, pero documentamos el estándar profesional.)

🟦 API-TC-01 – Validar autenticación vía API (si disponible)
Objetivo: Validar que el endpoint de autenticación responde correctamente.

Validaciones
Código 200 para credenciales válidas

Código 401/403 para credenciales inválidas

Token o session_id generado correctamente

🟦 API-TC-02 – Validar acceso a recursos protegidos
Objetivo: Validar que solo usuarios autenticados pueden acceder a endpoints privados.

Validaciones
Acceso permitido con token válido

Acceso denegado sin token

Acceso denegado con token inválido

🧪 Casos de Prueba SQL
(Aplica solo si el login genera registros de auditoría o sesiones.)

🟦 SQL-TC-01 – Validar registro de sesión (si existe tabla)
sql
SELECT * 
FROM oc_customer_login 
WHERE email = '{EMAIL}'
ORDER BY date_added DESC;
Validar:

Fecha de login

IP

Estado

🟦 SQL-TC-02 – Validar intentos fallidos (si aplica)
sql
SELECT * 
FROM oc_customer_login_attempts 
WHERE email = '{EMAIL}';
Validar:

Número de intentos

Fecha del último intento

🧾 Notas de Negocio
El login es obligatorio para completar checkout

El sistema debe proteger datos sensibles

Los mensajes de error deben ser claros

La sesión debe persistir correctamente

Intentos fallidos pueden bloquear temporalmente al usuario