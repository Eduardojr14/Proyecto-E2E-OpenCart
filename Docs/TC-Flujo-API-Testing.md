# 📄 **TC-Flujo-API-Testing.md**  
### **Flujo de API Testing Completo – OpenCart (Productos, Carrito, Totales, Stock, Pedidos)**  
**Proyecto:** OpenCart – Cypress API Testing  
**Autor:** Eduardo José Parra Perdomo  
**Fecha:** 17/04/2026  

---

# 📘 **Índice**

1. Objetivo del Flujo  
2. Alcance  
3. Precondiciones  
4. Casos de Prueba API  
   - Sección 1 – Productos  
   - Sección 2 – Carrito  
   - Sección 3 – Totales  
   - Sección 4 – Stock  
   - Sección 5 – Pedidos  
   - Sección 6 – Casos Negativos  
   - Sección 7 – Performance  
   - Sección 8 – Seguridad  
5. Notas de Negocio  
6. Evidencias  

---

# 🎯 **1. Objetivo del Flujo**

Validar la funcionalidad completa de la API REST de OpenCart, asegurando:

- Integridad de datos  
- Correcto funcionamiento de endpoints  
- Cálculo correcto de totales  
- Manejo de errores  
- Validación de stock  
- Creación de pedidos  
- Consistencia entre API, UI y SQL  

---

# 📌 **2. Alcance**

- Validación de endpoints de productos  
- Validación de endpoints de carrito  
- Validación de totales  
- Validación de stock  
- Creación de pedidos  
- Validaciones negativas  
- Validaciones de performance  
- Validaciones de seguridad  

---

# 🔧 **3. Precondiciones**

- API Key válida  
- URL base configurada  
- Usuario autenticado (si aplica)  
- Productos existentes en catálogo  
- Base de datos accesible (para validaciones SQL posteriores)  

---

# 🧪 **4. Casos de Prueba API**

---

# 🟩 **Sección 1 – Productos**

---

## 🟦 **API‑TC‑01 – Obtener lista de productos**

**Objetivo:** Validar que el endpoint devuelve productos correctamente.

**Validaciones:**

- Código 200  
- Lista no vacía  
- Campos obligatorios:  
  - `product_id`  
  - `name`  
  - `price`  
  - `tax_class_id`  
  - `quantity`  

---

## 🟦 **API‑TC‑02 – Obtener producto por ID**

**Objetivo:** Validar que un producto específico se obtiene correctamente.

**Validaciones:**

- Código 200  
- `product_id` correcto  
- Precio correcto  
- Stock correcto  

---

## 🟦 **API‑TC‑03 – Validar consistencia UI vs API**

**Objetivo:** Validar que los datos del producto coinciden entre UI y API.

**Validaciones:**

- Nombre  
- Precio  
- Tax Class  
- Stock  
- Reward Points  

---

# 🟩 **Sección 2 – Carrito**

---

## 🟦 **API‑TC‑04 – Crear carrito vacío**

**Objetivo:** Validar que se puede crear un carrito nuevo.

**Validaciones:**

- Código 200/201  
- `cart_id` generado  

---

## 🟦 **API‑TC‑05 – Agregar producto al carrito**

**Objetivo:** Validar que un producto puede agregarse vía API.

**Validaciones:**

- Código 200  
- Cantidad correcta  
- Producto correcto  

---

## 🟦 **API‑TC‑06 – Obtener contenido del carrito**

**Objetivo:** Validar que el carrito contiene los productos agregados.

**Validaciones:**

- Lista de productos  
- Cantidades  
- Precios  

---

## 🟦 **API‑TC‑07 – Eliminar producto del carrito**

**Objetivo:** Validar que se puede eliminar un producto vía API.

**Validaciones:**

- Código 200  
- Producto eliminado  
- Totales actualizados  

---

# 🟩 **Sección 3 – Totales**

---

## 🟦 **API‑TC‑08 – Validar cálculo de totales**

**Objetivo:** Validar que la API calcula correctamente:

- Subtotal  
- Eco Tax  
- VAT  
- Total  

**Validaciones:**

- Totales correctos  
- Coincidencia con UI  
- Coincidencia con SQL  

---

# 🟩 **Sección 4 – Stock**

---

## 🟦 **API‑TC‑09 – Validar stock antes de agregar al carrito**

**Objetivo:** Evitar agregar más cantidad que el stock disponible.

**Validaciones:**

- Stock API = stock UI  
- No permite agregar más cantidad que el stock  

---

## 🟦 **API‑TC‑10 – Validar stock después de crear pedido**

**Objetivo:** Validar que el stock disminuye correctamente.

**Validaciones:**

- Stock inicial  
- Stock final  
- Diferencia = cantidad comprada  

---

# 🟩 **Sección 5 – Pedidos**

---

## 🟦 **API‑TC‑11 – Crear pedido vía API**

**Objetivo:** Validar que se puede crear un pedido completo.

**Validaciones:**

- Código 200/201  
- `order_id` generado  
- Totales correctos  
- Productos correctos  

---

## 🟦 **API‑TC‑12 – Obtener pedido por ID**

**Objetivo:** Validar que el pedido se recupera correctamente.

**Validaciones:**

- `order_id`  
- Productos  
- Totales  
- Estado  

---

## 🟦 **API‑TC‑13 – Validar consistencia API vs SQL**

**Objetivo:** Validar integridad financiera.

**Validaciones:**

- Totales  
- Productos  
- Impuestos  
- Shipping  
- Status  

---

# 🟩 **Sección 6 – Casos Negativos**

---

## 🟦 **API‑TC‑14 – Agregar producto inexistente**

**Validaciones:**

- Código 400/404  
- Mensaje de error  

---

## 🟦 **API‑TC‑15 – Crear pedido sin productos**

**Validaciones:**

- Código 400  
- Mensaje de error  

---

## 🟦 **API‑TC‑16 – Carrito sin stock**

**Validaciones:**

- Código 409  
- Mensaje de error  

---

# 🟩 **Sección 7 – Performance**

---

## 🟦 **API‑TC‑17 – Tiempo de respuesta de productos**

**Validaciones:**

- < 500 ms  

---

## 🟦 **API‑TC‑18 – Tiempo de respuesta de totales**

**Validaciones:**

- < 300 ms  

---

# 🟩 **Sección 8 – Seguridad**

---

## 🟦 **API‑TC‑19 – Acceso sin API Key**

**Validaciones:**

- Código 401/403  
- Acceso denegado  

---

## 🟦 **API‑TC‑20 – Acceso con API Key inválida**

**Validaciones:**

- Código 401/403  
- Mensaje de error  

---

# 🧾 **5. Notas de Negocio**

- La API debe ser consistente con UI y SQL  
- Los totales deben coincidir en todas las capas  
- El stock debe actualizarse correctamente  
- Los pedidos deben tener trazabilidad completa  
- Los errores deben ser claros y consistentes  

---


