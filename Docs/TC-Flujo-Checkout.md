🧪 Casos de Prueba – Flujo de Checkout Completo
Proyecto: OpenCart – Cypress E2E + API + SQL
Autor: Eduardo José Parra Perdomo
Fecha: 17/04/2026

📘 Índice
Objetivo del Flujo

Alcance

Precondiciones

Casos de Prueba UI

TC-01 – Acceso al Checkout

TC-02 – Login desde Checkout

TC-03 – Billing Details

TC-04 – Delivery Details

TC-05 – Delivery Method

TC-06 – Payment Method

TC-07 – Confirm Order

TC-08 – Validación de página de éxito

Casos de Prueba API

Casos de Prueba SQL

Notas de Negocio

Evidencias

🎯 Objetivo del Flujo
Validar que un usuario autenticado puede completar el proceso de compra desde el carrito hasta la confirmación del pedido, asegurando:

Integridad de datos

Cálculo correcto de totales

Flujo completo sin errores

Registro correcto del pedido en la base de datos

Consistencia entre UI, API y SQL

📌 Alcance
Login desde Checkout

Validación de datos de facturación

Validación de datos de envío

Selección de métodos de envío y pago

Confirmación del pedido

Validación de totales

Validación API del pedido

Validación SQL del pedido

🔧 Precondiciones
Usuario registrado

Usuario con capacidad de iniciar sesión

Carrito con al menos 1 producto

Acceso a API REST

Acceso a base de datos MySQL

Cookies limpias

🧪 Casos de Prueba UI
🟦 TC-01 – Acceso al Checkout
Objetivo: Validar que el usuario puede acceder al checkout desde el carrito.

Pasos
Agregar productos al carrito

Abrir el carrito

Hacer clic en “Checkout”

Validaciones
Título: Checkout

Pasos 1 a 6 visibles

🟦 TC-02 – Login desde Checkout
Objetivo: Validar que un usuario puede iniciar sesión desde el paso 1 del checkout.

Pasos
Ingresar email

Ingresar contraseña

Hacer clic en “Login”

Validaciones
Avanza automáticamente a Billing Details

Usuario autenticado

🟦 TC-03 – Billing Details
Objetivo: Validar que el usuario puede completar los datos de facturación.

Validaciones
Campos obligatorios visibles

Validación de formato

Botón Continue habilitado

🟦 TC-04 – Delivery Details
Objetivo: Validar que el usuario puede seleccionar o ingresar dirección de envío.

Validaciones
Dirección existente visible

Opción de nueva dirección disponible

Continue habilitado

🟦 TC-05 – Delivery Method
Objetivo: Validar que el usuario puede seleccionar método de envío.

Validaciones
Métodos disponibles

Costos correctos

Continue habilitado

🟦 TC-06 – Payment Method
Objetivo: Validar que el usuario puede seleccionar método de pago.

Validaciones
Métodos disponibles

Checkbox de términos obligatorio

Continue habilitado

🟦 TC-07 – Confirm Order
Objetivo: Validar que el resumen del pedido es correcto.

Validaciones
Productos correctos

Cantidades correctas

Subtotal correcto

Impuestos correctos

Total final correcto

🟦 TC-08 – Validación de página de éxito
Objetivo: Validar que el pedido se completa correctamente.

Validaciones
Mensaje: Your order has been placed!

Order ID visible

Botón Continue visible

🧪 Casos de Prueba API
🟦 API-TC-01 – Validar creación del pedido vía API
Validaciones

Código 200/201

order_id generado

Totales correctos

Productos correctos

🟦 API-TC-02 – Validar totales del pedido
Validaciones

Subtotal

Tax

Total

Coincidencia con UI

🟦 API-TC-03 – Validar productos del pedido
Validaciones

product_id

quantity

price

total

🧪 Casos de Prueba SQL
🟦 SQL-TC-01 – Validar registro del pedido
sql
SELECT * 
FROM oc_order 
WHERE order_id = {ORDER_ID};
Validar:

total

payment_method

currency

status

🟦 SQL-TC-02 – Validar productos del pedido
sql
SELECT * 
FROM oc_order_product 
WHERE order_id = {ORDER_ID};
Validar:

product_id

name

price

quantity

total

🟦 SQL-TC-03 – Validar totales financieros
sql
SELECT * 
FROM oc_order_total 
WHERE order_id = {ORDER_ID};
Validar:

Subtotal

Tax

Shipping

Total

🟦 SQL-TC-04 – Validar integridad referencial
sql
SELECT o.order_id, op.product_id
FROM oc_order o
LEFT JOIN oc_order_product op ON o.order_id = op.order_id
WHERE o.order_id = {ORDER_ID};
Validar:

No existan productos huérfanos

No existan totales sin pedido

No existan pedidos sin productos

🧾 Notas de Negocio
El checkout es el flujo más crítico del e‑commerce

Los totales deben coincidir entre UI, API y SQL

El pedido debe quedar registrado correctamente

El usuario debe recibir confirmación clara

La integridad financiera es obligatoria

📸 Evidencias
