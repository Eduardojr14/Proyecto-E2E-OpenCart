🧪 Casos de Prueba – Flujo de Logout (Cerrar Sesión)
Proyecto: OpenCart – Cypress E2E
Autor: Eduardo José Parra Perdomo
Fecha: 17/04/2026

📘 Índice
Objetivo del Flujo

Alcance

Precondiciones

Casos de Prueba UI

TC-01 – Acceso a Logout

TC-02 – Logout exitoso

TC-03 – Validar mensaje de cierre de sesión

TC-04 – Validar que no se puede acceder a páginas protegidas

TC-05 – Validar que el carrito persiste o se limpia (según configuración)

Casos de Prueba API (si aplica)

Casos de Prueba SQL (si aplica)

Notas de Negocio

Evidencias

🎯 Objetivo del Flujo
Validar que un usuario autenticado puede cerrar sesión correctamente y que el sistema:

Limpia la sesión

Muestra el mensaje correcto

Evita el acceso a páginas protegidas

Mantiene o limpia el carrito según la configuración del sitio

📌 Alcance
Cierre de sesión desde el menú

Validación de mensaje

Validación de redirecciones

Validación de acceso restringido

🔧 Precondiciones
Usuario registrado

Usuario autenticado

Acceso a OpenCart Demo

🧪 Casos de Prueba UI
🟦 TC-01 – Acceso a Logout
Objetivo: Validar que el usuario puede acceder a la opción de Logout.

Pasos
Iniciar sesión

Hacer clic en My Account

Seleccionar Logout

Validaciones
Redirección a página de Logout

Título: Account Logout

🟦 TC-02 – Logout exitoso
Objetivo: Validar que el cierre de sesión se realiza correctamente.

Validaciones
Mensaje: You have been logged off your account.

Botón Continue visible

Header cambia a estado no autenticado

🟦 TC-03 – Validar mensaje de cierre de sesión
Objetivo: Confirmar que el mensaje es claro y correcto.

Validaciones
Mensaje visible

No aparecen datos del usuario

🟦 TC-04 – Validar que no se puede acceder a páginas protegidas
Objetivo: Validar que el usuario no puede acceder a páginas que requieren autenticación.

Pasos
Intentar acceder a:

/index.php?route=account/account

/index.php?route=account/order

/index.php?route=account/wishlist

Validaciones
Redirección a Login

No muestra datos del usuario

🟦 TC-05 – Validar comportamiento del carrito tras logout
Objetivo: Validar si el carrito se mantiene o se limpia según la configuración.

Validaciones
Carrito vacío o

Carrito persiste (según demo)

No genera errores

🧪 Casos de Prueba API
(Solo si tu demo expone endpoint de logout)

🟦 API-TC-01 – Logout vía API
Validaciones
Código 200

Token invalidado

No permite acceder a endpoints protegidos

🧪 Casos de Prueba SQL
(Solo si existe tabla de sesiones o auditoría)

🟦 SQL-TC-01 – Validar cierre de sesión
sql
SELECT * 
FROM oc_customer_login 
WHERE customer_id = {ID}
ORDER BY date_added DESC;
Validaciones
Registro de logout (si aplica)

IP correcta

Fecha correcta

🧾 Notas de Negocio
Logout debe ser inmediato

No debe dejar datos sensibles en memoria

No debe permitir acceso a páginas protegidas

Debe mostrar mensaje claro

📸 Evidencias