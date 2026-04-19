🧪 Casos de Prueba – Flujo de Registro (Crear Usuario Nuevo)
Proyecto: OpenCart – Cypress E2E + API
Autor: Eduardo José Parra Perdomo
Fecha: 17/04/2026

📘 Índice
Objetivo del Flujo

Alcance

Precondiciones

Casos de Prueba UI

TC-01 – Acceso a la pantalla de Registro

TC-02 – Registro exitoso

TC-03 – Registro con email duplicado

TC-04 – Validación de campos obligatorios

TC-05 – Validación de formato de email

TC-06 – Validación de políticas de privacidad

TC-07 – Registro sin completar campos opcionales

Casos de Prueba API

Casos de Prueba SQL

Notas de Negocio

Evidencias

🎯 Objetivo del Flujo
Validar que un usuario nuevo puede registrarse correctamente en OpenCart, que el sistema maneja errores como email duplicado o campos inválidos, y que el registro queda correctamente almacenado en la base de datos.

📌 Alcance
Acceso a la pantalla de registro

Validación de campos obligatorios

Validación de email duplicado

Validación de políticas de privacidad

Registro exitoso

Validación API (si aplica)

Validación SQL del nuevo usuario

🔧 Precondiciones
Acceso a OpenCart Demo

Navegador funcional

Cookies limpias

Email válido no registrado previamente

Acceso a API REST (si se validará creación vía API)

Acceso a base de datos MySQL

🧪 Casos de Prueba UI
🟦 TC-01 – Acceso a la pantalla de Registro
Objetivo: Validar que el usuario puede acceder a la pantalla de creación de cuenta.

Pasos
Abrir la página principal

Seleccionar “My Account”

Seleccionar “Register”

Validaciones
Título “Register Account” visible

Formulario completo visible

🟦 TC-02 – Registro exitoso
Objetivo: Validar que un usuario nuevo puede registrarse correctamente.

Pasos
Completar todos los campos obligatorios

Aceptar políticas de privacidad

Hacer clic en “Continue”

Validaciones
Mensaje: Your Account Has Been Created!

Redirección a la página de éxito

Usuario autenticado automáticamente

🟦 TC-03 – Registro con email duplicado
Objetivo: Validar que el sistema no permite registrar un email ya existente.

Pasos
Completar formulario con un email ya registrado

Aceptar políticas

Hacer clic en “Continue”

Validaciones
Mensaje rojo: Warning: E-Mail Address is already registered!

No crea cuenta nueva

🟦 TC-04 – Validación de campos obligatorios
Objetivo: Validar que el sistema exige completar los campos requeridos.

Campos obligatorios
First Name

Last Name

Email

Telephone

Password

Confirm Password

Validaciones
Mensajes de error por campo vacío

No permite continuar

🟦 TC-05 – Validación de formato de email
Objetivo: Validar que el sistema detecta emails inválidos.

Casos
email sin @

email sin dominio

email con caracteres inválidos

Validaciones
Mensaje de error

No permite continuar

🟦 TC-06 – Validación de políticas de privacidad
Objetivo: Validar que el usuario debe aceptar las políticas para registrarse.

Pasos
Completar formulario

NO marcar la casilla de privacidad

Hacer clic en “Continue”

Validaciones
Mensaje: Warning: You must agree to the Privacy Policy!

No permite continuar

🟦 TC-07 – Registro sin completar campos opcionales
Objetivo: Validar que el sistema permite registrar usuario sin campos no obligatorios.

Validaciones
Registro exitoso

No se requieren campos opcionales

🧪 Casos de Prueba API
(OpenCart Demo no siempre expone endpoint de registro, pero documentamos el estándar profesional.)

🟦 API-TC-01 – Crear usuario vía API (si disponible)
Validaciones

Código 201/200

Usuario creado correctamente

Email único

Respuesta contiene ID del usuario

🟦 API-TC-02 – Validar email duplicado vía API
Validaciones

Código 400/409

Mensaje de error

No crea usuario duplicado

🧪 Casos de Prueba SQL
🟦 SQL-TC-01 – Validar creación del usuario
sql
SELECT * 
FROM oc_customer 
WHERE email = '{EMAIL}';
Validar:

firstname

lastname

email

telephone

status = 1

date_added correcta

🟦 SQL-TC-02 – Validar dirección por defecto (si aplica)
sql
SELECT * 
FROM oc_address 
WHERE customer_id = {CUSTOMER_ID};
Validar:

country_id

zone_id

firstname/lastname coinciden

🟦 SQL-TC-03 – Validar integridad del registro
sql
SELECT c.customer_id, a.address_id
FROM oc_customer c
LEFT JOIN oc_address a ON c.address_id = a.address_id
WHERE c.email = '{EMAIL}';
Validar:

No existan registros huérfanos

address_id asignado correctamente

🧾 Notas de Negocio
El email debe ser único

La contraseña debe cumplir requisitos mínimos

El usuario debe aceptar políticas de privacidad

El registro debe crear un customer_id único

El usuario debe quedar autenticado tras registrarse

📸 Evidencias