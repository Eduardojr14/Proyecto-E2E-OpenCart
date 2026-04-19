# 📄 **TC-Flujo-Busqueda.md**  
### **Flujo de Búsqueda de Productos – OpenCart E2E (UI + API + SQL opcional)**  
**Proyecto:** OpenCart – Cypress E2E  
**Autor:** Eduardo José Parra Perdomo  
**Fecha:** 17/04/2026  

---

# 📘 **Índice**

1. Objetivo del Flujo  
2. Alcance  
3. Precondiciones  
4. Casos de Prueba UI  
   - TC‑01 – Acceso al buscador  
   - TC‑02 – Búsqueda por nombre exacto  
   - TC‑03 – Búsqueda por palabra clave  
   - TC‑04 – Búsqueda parcial  
   - TC‑05 – Búsqueda sin resultados  
   - TC‑06 – Búsqueda con mayúsculas/minúsculas  
   - TC‑07 – Búsqueda con caracteres especiales  
   - TC‑08 – Navegación desde resultados  
   - TC‑09 – Agregar producto al carrito desde resultados  
5. Casos de Prueba API (si aplica)  
6. Casos de Prueba SQL (si aplica)  
7. Notas de Negocio  
8. Evidencias  

---

# 🎯 **1. Objetivo del Flujo**

Validar que el usuario puede buscar productos correctamente utilizando el buscador principal del sitio, asegurando:

- Relevancia de resultados  
- Comportamiento ante búsquedas válidas e inválidas  
- Navegación desde resultados  
- Integración con el carrito  

---

# 📌 **2. Alcance**

- Búsqueda desde el header  
- Validación de resultados  
- Validación de mensajes  
- Validación de navegación  
- Validación de interacción con productos  

---

# 🔧 **3. Precondiciones**

- Acceso a OpenCart Demo  
- Productos disponibles en catálogo  
- Navegador funcional  
- Cookies limpias  

---

# 🧪 **4. Casos de Prueba UI**

---

## 🟦 **TC‑01 – Acceso al buscador**

**Objetivo:** Validar que el buscador está visible y funcional.

**Validaciones:**

- Campo de búsqueda visible  
- Placeholder: *Search*  
- Botón de búsqueda visible  

---

## 🟦 **TC‑02 – Búsqueda por nombre exacto**

**Objetivo:** Validar que un producto aparece cuando se busca por su nombre exacto.

**Pasos:**

1. Escribir: `"iPhone"`  
2. Hacer clic en buscar  

**Validaciones:**

- Producto *iPhone* aparece  
- Imagen visible  
- Precio visible  

---

## 🟦 **TC‑03 – Búsqueda por palabra clave**

**Objetivo:** Validar que la búsqueda devuelve productos relacionados.

**Ejemplos:**

- `"camera"`  
- `"laptop"`  

**Validaciones:**

- Lista de productos relacionados  
- Relevancia aceptable  

---

## 🟦 **TC‑04 – Búsqueda parcial**

**Objetivo:** Validar que el sistema soporta coincidencias parciales.

**Ejemplo:**

- `"cam"` → debería mostrar *Canon EOS 5D*  

**Validaciones:**

- Resultados correctos  
- No muestra productos irrelevantes  

---

## 🟦 **TC‑05 – Búsqueda sin resultados**

**Objetivo:** Validar comportamiento cuando no hay coincidencias.

**Ejemplo:**

- `"xyz123"`  

**Validaciones:**

- Mensaje: *There is no product that matches the search criteria.*  
- No se muestran productos  

---

## 🟦 **TC‑06 – Búsqueda con mayúsculas/minúsculas**

**Objetivo:** Validar que la búsqueda no es case‑sensitive.

**Ejemplos:**

- `"IPHONE"`  
- `"iphone"`  
- `"iPhOnE"`  

**Validaciones:**

- Mismos resultados en todos los casos  

---

## 🟦 **TC‑07 – Búsqueda con caracteres especiales**

**Objetivo:** Validar que el sistema maneja caracteres inválidos.

**Ejemplos:**

- `"@@@"`  
- `"###"`  

**Validaciones:**

- No rompe la UI  
- Mensaje de sin resultados  

---

## 🟦 **TC‑08 – Navegación desde resultados**

**Objetivo:** Validar que el usuario puede abrir un producto desde los resultados.

**Validaciones:**

- Página del producto carga correctamente  
- Nombre correcto  
- Precio correcto  

---

## 🟦 **TC‑09 – Agregar producto al carrito desde resultados**

**Objetivo:** Validar integración búsqueda → carrito.

**Pasos:**

1. Buscar producto  
2. Hacer clic en **Add to Cart**  

**Validaciones:**

- Mensaje de éxito  
- Carrito actualizado  

---

# 🔌 **5. Casos de Prueba API (si aplica)**  
*(Solo si tu demo expone endpoint de búsqueda.)*

---

## 🟦 **API‑TC‑01 – Buscar producto vía API**

**Validaciones:**

- Código 200  
- Lista de productos  
- Coincidencia con UI  

---

## 🟦 **API‑TC‑02 – Validar relevancia de resultados**

**Validaciones:**

- Palabra clave presente en nombre o descripción  
- Orden correcto  

---

# 🗄️ **6. Casos de Prueba SQL (si aplica)**  
*(Solo si quieres validar coincidencias en BD.)*

---

## 🟦 **SQL‑TC‑01 – Validar búsqueda por nombre**

```sql
SELECT * 
FROM oc_product_description 
WHERE name LIKE '%{SEARCH}%';
```

**Validaciones:**

- Coincidencias correctas  
- No devuelve productos irrelevantes  

---

# 🧾 **7. Notas de Negocio**

- La búsqueda es un flujo crítico para conversión  
- Debe ser rápida, relevante y tolerante a errores  
- Debe integrarse con carrito y detalle de producto  

---

# 📸 **8. Evidencias**

