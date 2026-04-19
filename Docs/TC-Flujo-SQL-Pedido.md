# 🧪 **Casos de Prueba – Flujo SQL del Pedido (Validación Financiera Completa)**  
**Proyecto:** OpenCart – SQL Testing + Integridad Financiera  
**Autor:** Eduardo José Parra Perdomo  
**Fecha:** 17/04/2026  

---

# 📘 **Índice**

1. Objetivo del Flujo  
2. Alcance  
3. Precondiciones  
4. Tablas involucradas  
5. Casos de Prueba SQL  
   - SQL‑TC‑01 – Validar registro del pedido  
   - SQL‑TC‑02 – Validar productos del pedido  
   - SQL‑TC‑03 – Validar totales financieros  
   - SQL‑TC‑04 – Validar integridad referencial  
   - SQL‑TC‑05 – Validar stock descontado  
   - SQL‑TC‑06 – Validar auditoría del pedido  
   - SQL‑TC‑07 – Validar dirección de facturación  
   - SQL‑TC‑08 – Validar dirección de envío  
6. Notas de Negocio  
7. Evidencias  

---

# 🎯 **1. Objetivo del Flujo**

Validar que un pedido generado desde el checkout queda correctamente registrado en la base de datos, asegurando:

- Integridad financiera  
- Consistencia entre UI, API y SQL  
- Trazabilidad completa del pedido  
- Cálculo correcto de totales  
- Descuento correcto de stock  
- Relación correcta entre tablas  

---

# 📌 **2. Alcance**

- Validación de tablas principales del pedido  
- Validación de productos asociados  
- Validación de totales financieros  
- Validación de stock  
- Validación de direcciones  
- Validación de auditoría  

---

# 🔧 **3. Precondiciones**

- Pedido generado desde UI o API  
- `order_id` disponible  
- Acceso a base de datos MySQL  
- Usuario autenticado  
- Productos existentes en catálogo  

---

# 🗂 **4. Tablas involucradas**

| Tabla | Descripción |
|-------|-------------|
| `oc_order` | Datos generales del pedido |
| `oc_order_product` | Productos del pedido |
| `oc_order_total` | Totales financieros |
| `oc_product` | Información del producto |
| `oc_product_description` | Nombre y descripción |
| `oc_customer` | Datos del cliente |
| `oc_address` | Dirección de envío/facturación |
| `oc_order_history` | Auditoría del pedido |

---

# 🧪 **5. Casos de Prueba SQL**

---

## 🟦 **SQL‑TC‑01 – Validar registro del pedido**

**Objetivo:** Confirmar que el pedido se registró correctamente en `oc_order`.

```sql
SELECT * 
FROM oc_order 
WHERE order_id = {ORDER_ID};
```

**Validaciones:**

- `order_id` existe  
- `total` correcto  
- `payment_method` correcto  
- `currency` correcto  
- `customer_id` correcto  
- `status` correcto  
- `date_added` correcta  

---

## 🟦 **SQL‑TC‑02 – Validar productos del pedido**

**Objetivo:** Validar que los productos del pedido se registraron correctamente.

```sql
SELECT * 
FROM oc_order_product 
WHERE order_id = {ORDER_ID};
```

**Validaciones:**

- `product_id` correcto  
- `name` correcto  
- `price` correcto  
- `quantity` correcta  
- `total = price * quantity`  

---

## 🟦 **SQL‑TC‑03 – Validar totales financieros**

**Objetivo:** Validar que los totales coinciden con UI y API.

```sql
SELECT * 
FROM oc_order_total 
WHERE order_id = {ORDER_ID};
```

**Validaciones:**

- Subtotal  
- Eco Tax  
- VAT  
- Shipping  
- Total final  
- Orden correcto de los totales  

---

## 🟦 **SQL‑TC‑04 – Validar integridad referencial**

**Objetivo:** Validar que no existan registros huérfanos.

```sql
SELECT o.order_id, op.product_id
FROM oc_order o
LEFT JOIN oc_order_product op ON o.order_id = op.order_id
WHERE o.order_id = {ORDER_ID};
```

**Validaciones:**

- Cada pedido tiene productos  
- Cada producto pertenece a un pedido  
- No existen totales sin pedido  

---

## 🟦 **SQL‑TC‑05 – Validar stock descontado**

**Objetivo:** Validar que el stock se reduce correctamente tras el pedido.

```sql
SELECT quantity 
FROM oc_product 
WHERE product_id = {PRODUCT_ID};
```

**Validaciones:**

- `stock_final = stock_inicial - cantidad_comprada`  

---

## 🟦 **SQL‑TC‑06 – Validar auditoría del pedido**

**Objetivo:** Validar que el pedido tiene historial correcto.

```sql
SELECT * 
FROM oc_order_history 
WHERE order_id = {ORDER_ID}
ORDER BY date_added DESC;
```

**Validaciones:**

- Estado inicial correcto  
- Estado final correcto  
- Comentarios (si aplica)  
- `date_added` correcto  

---

## 🟦 **SQL‑TC‑07 – Validar dirección de facturación**

```sql
SELECT * 
FROM oc_address 
WHERE address_id = (
  SELECT payment_address_id 
  FROM oc_order 
  WHERE order_id = {ORDER_ID}
);
```

**Validaciones:**

- `firstname` / `lastname`  
- `address_1`  
- `city`  
- `country_id`  
- `zone_id`  

---

## 🟦 **SQL‑TC‑08 – Validar dirección de envío**

```sql
SELECT * 
FROM oc_address 
WHERE address_id = (
  SELECT shipping_address_id 
  FROM oc_order 
  WHERE order_id = {ORDER_ID}
);
```

**Validaciones:**

- `firstname` / `lastname`  
- `address_1`  
- `city`  
- `country_id`  
- `zone_id`  

---

# 🧾 **6. Notas de Negocio**

- Los totales deben coincidir entre UI, API y SQL  
- El stock debe descontarse correctamente  
- El pedido debe tener trazabilidad completa  
- No deben existir registros huérfanos  
- La integridad financiera es crítica en e‑commerce  

---

# 📸 **7. Evidencias**


