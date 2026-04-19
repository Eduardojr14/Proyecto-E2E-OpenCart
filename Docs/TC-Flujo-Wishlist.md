📄 TC-Flujo-Wishlist.md
Flujo completo de Wishlist – OpenCart E2E (UI + API + SQL)
Autor: Eduardo José Parra Perdomo
Fecha: 17/04/2026

📘 Índice
Objetivo del Flujo

Alcance

Precondiciones

Casos de Prueba UI

TC-01 – Acceso a Wishlist

TC-02 – Agregar producto desde categoría

TC-03 – Agregar producto desde página de detalle

TC-04 – Validar producto en Wishlist

TC-05 – Eliminar producto de Wishlist

TC-06 – Wishlist vacía

TC-07 – Agregar producto sin estar logueado

Casos de Prueba API

Casos de Prueba SQL

Notas de Negocio

Evidencias

🎯 Objetivo del Flujo
Validar que un usuario puede:

Agregar productos a la Wishlist

Visualizar la Wishlist

Eliminar productos

Ver comportamiento cuando no está logueado

Validar consistencia entre UI, API y SQL (si aplica)

📌 Alcance
Wishlist desde categoría

Wishlist desde detalle de producto

Validación de mensajes

Validación de estado de sesión

Validación de integridad de datos

🔧 Precondiciones
Usuario registrado

Usuario autenticado (excepto casos negativos)

Producto disponible en catálogo

Wishlist visible en el header

🧪 Casos de Prueba UI
🟦 TC-01 – Acceso a Wishlist
Objetivo: Validar que el usuario puede acceder a la Wishlist desde el header.

Pasos
Iniciar sesión

Hacer clic en Wish List (0)

Validaciones
Título: My Wish List

Tabla visible

Contador correcto

🟦 TC-02 – Agregar producto a Wishlist desde categoría
Objetivo: Validar que se puede agregar un producto desde la vista de categoría.

Pasos
Navegar a Desktops

Hacer clic en el ícono de corazón ❤️ en un producto

Validaciones
Mensaje verde: Success: You have added…

Contador de Wishlist incrementa

Producto aparece en la lista

🟦 TC-03 – Agregar producto desde página de detalle
Objetivo: Validar que se puede agregar desde la página del producto.

Pasos
Abrir un producto

Hacer clic en Add to Wish List

Validaciones
Mensaje de éxito

Wishlist incrementa

🟦 TC-04 – Validar producto en Wishlist
Objetivo: Confirmar que el producto aparece correctamente.

Validaciones
Nombre del producto

Precio

Stock

Botón Add to Cart

Botón Remove

🟦 TC-05 – Eliminar producto de Wishlist
Objetivo: Validar que el usuario puede eliminar productos.

Pasos
Acceder a Wishlist

Hacer clic en el ícono de eliminar

Validaciones
Producto eliminado

Mensaje de éxito

Contador decrementa

🟦 TC-06 – Wishlist vacía
Objetivo: Validar comportamiento cuando no hay productos.

Validaciones
Mensaje: Your wish list is empty

No hay productos listados

🟦 TC-07 – Agregar producto sin estar logueado
Objetivo: Validar que el sistema exige login.

Pasos
Cerrar sesión

Intentar agregar un producto a Wishlist

Validaciones
Redirección a Login

Mensaje: You must login or create an account to save…

🧪 Casos de Prueba API
(Solo si tu demo expone endpoints de Wishlist. Si no, este bloque queda como referencia profesional.)

🟦 API-TC-01 – Agregar producto a Wishlist vía API
Validaciones
Código 200

Producto agregado

Wishlist actualizada

🟦 API-TC-02 – Obtener Wishlist vía API
Validaciones
Lista de productos

Precios

Stock

🧪 Casos de Prueba SQL
(Depende de si tu versión guarda Wishlist en BD. Algunas sí, otras no.)

🟦 SQL-TC-01 – Validar registro en tabla wishlist
sql
SELECT * 
FROM oc_customer_wishlist 
WHERE customer_id = {ID};
Validaciones
product_id correcto

date_added correcta

🧾 Notas de Negocio
Wishlist es un flujo de retención, no afecta stock

Requiere usuario autenticado

No afecta totales del carrito

Es un flujo clave para e‑commerce real

📸 Evidencias