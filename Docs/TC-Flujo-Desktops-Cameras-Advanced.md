
🧪 Casos de Prueba Avanzados – Flujo Carrito de Compra
Proyecto: OpenCart – Cypress E2E + API + SQL
Autor: Eduardo José Parra Perdomo
Fecha: 17/04/2026

📘 Índice
Objetivo del Flujo

Alcance

Precondiciones

Casos de Prueba UI

TC-01 a TC-09 (básicos)

TC-10 a TC-15 (avanzados)

Casos de Prueba API

Casos de Prueba SQL

Notas de Negocio

Evidencias

🎯 Objetivo del Flujo
Validar el proceso completo de agregar productos al carrito, verificar cálculos financieros, validar integridad de datos vía API y asegurar consistencia en base de datos para transacciones de e‑commerce.

📌 Alcance
Navegación por categorías

Selección de productos

Agregar al carrito

Validación de totales

Persistencia del carrito

Validación API de productos, carrito y totales

Validación SQL de integridad financiera

🔧 Precondiciones
Acceso a OpenCart Demo

Navegador funcional

Cookies limpias

Usuario no autenticado

Acceso a API REST

Acceso a base de datos MySQL

🧪 Casos de Prueba UI
Los primeros 9 casos corresponden al archivo original del flujo.
Aquí agregamos los casos avanzados.

🟦 TC-10 – Actualizar cantidad de productos en el carrito
Objetivo: Validar que el sistema recalcula correctamente los totales al modificar cantidades.

Pasos
Agregar HP LP3065 al carrito

Cambiar cantidad de 1 → 2

Validaciones
Subtotal = precio * cantidad

VAT recalculado

Total recalculado

Mensaje de actualización correcto

🟦 TC-11 – Eliminar producto del carrito
Objetivo: Validar que el carrito se actualiza correctamente al eliminar un producto.

Validaciones
Producto eliminado

Totales recalculados

Carrito vacío si no quedan productos

🟦 TC-12 – Persistencia del carrito al refrescar
Objetivo: Validar que el carrito mantiene los productos tras refrescar la página.

Pasos
Agregar producto

Refrescar navegador

Validaciones
Productos siguen visibles

Totales correctos

🟦 TC-13 – Validación de límites de cantidad
Objetivo: Validar que el sistema maneja correctamente cantidades inválidas.

Casos
Cantidad = 0

Cantidad negativa

Cantidad con texto

Cantidad extremadamente alta

Validaciones
Mensajes de error

No rompe el carrito

No permite cantidades inválidas

🟦 TC-14 – Producto sin stock
Objetivo: Validar que el sistema no permite agregar productos sin stock.

Validaciones
Mensaje de error

Botón Add to Cart deshabilitado

🟦 TC-15 – Validación de opciones obligatorias
Objetivo: Validar que el sistema exige seleccionar opciones antes de agregar al carrito.

Validaciones
Mensaje de error

No agrega producto sin seleccionar opción

🧪 Casos de Prueba API
🟦 API-TC-01 – Obtener productos por API y validar contra UI
Objetivo: Validar que los productos mostrados en UI coinciden con los devueltos por la API.

Validaciones
Nombre

Precio

Tax Class

Stock

Reward Points

🟦 API-TC-02 – Crear carrito por API y validar en UI
Flujo híbrido:

Crear carrito vía API

Agregar producto vía API

Abrir UI

Validar que el carrito contiene el producto

🟦 API-TC-03 – Validar cálculo de totales por API
Validaciones

Subtotal

Tax

Total

Coincidencia con UI

🟦 API-TC-04 – Validar stock por API antes de agregar al carrito
Validaciones

Stock API = stock UI

No permite agregar más cantidad que el stock

🟦 API-TC-05 – Crear pedido por API y validar en UI
Validaciones

Pedido aparece en Order History

Totales coinciden

Productos coinciden

🧪 Casos de Prueba SQL
🟦 SQL-TC-01 – Validar registro del carrito
sql
SELECT * 
FROM oc_cart 
WHERE customer_id = {ID};
Validar:

product_id

quantity

price

tax_class_id

🟦 SQL-TC-02 – Validar creación del pedido
sql
SELECT * 
FROM oc_order 
WHERE order_id = {ORDER_ID};
Validar:

total

payment_method

currency

status

🟦 SQL-TC-03 – Validar productos del pedido
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

🟦 SQL-TC-04 – Validar totales financieros
sql
SELECT * 
FROM oc_order_total 
WHERE order_id = {ORDER_ID};
Validar:

Subtotal

Tax

Shipping

Total

🟦 SQL-TC-05 – Validar integridad referencial
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
El cálculo de impuestos debe ser consistente entre UI, API y SQL

Los totales deben coincidir en todas las capas

La integridad financiera es crítica en e‑commerce

Los pedidos deben tener trazabilidad completa