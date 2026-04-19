# 📄 **TC-Flujo-Wishlist.md**  
### **Flujo Completo de Wishlist – OpenCart E2E (UI)**  
**Autor:** Eduardo José Parra Perdomo  
**Fecha:** 17/04/2026  

---

# 📘 **Índice**

1. Objetivo del Flujo  
2. Alcance  
3. Precondiciones  
4. Casos de Prueba UI  
   - TC‑01 – Acceso a Wishlist  
   - TC‑02 – Agregar producto desde categoría  
   - TC‑03 – Agregar producto desde página de detalle  
   - TC‑04 – Validar producto en Wishlist  
   - TC‑05 – Eliminar producto de Wishlist  
   - TC‑06 – Wishlist vacía  
   - TC‑07 – Agregar producto sin estar logueado  
5. Notas de Negocio  
6. Evidencias  

---

# 🎯 **1. Objetivo del Flujo**

Validar que un usuario puede:

- Agregar productos a la Wishlist  
- Visualizar la Wishlist  
- Eliminar productos  
- Ver comportamiento cuando no está logueado  

---

# 📌 **2. Alcance**

- Wishlist desde categoría  
- Wishlist desde detalle de producto  
- Validación de mensajes  
- Validación de estado de sesión  
- Validación de integridad visual de datos  

---

# 🔧 **3. Precondiciones**

- Usuario registrado  
- Usuario autenticado (excepto casos negativos)  
- Producto disponible en catálogo  
- Wishlist visible en el header (si aplica en la demo)  

---

# 🧪 **4. Casos de Prueba UI**

---

## 🟦 **TC‑01 – Acceso a Wishlist**

**Objetivo:** Validar que el usuario puede acceder a la Wishlist desde el header.

**Pasos:**

1. Iniciar sesión  
2. Hacer clic en **Wish List (0)**  

**Validaciones:**

- Título: *My Wish List*  
- Tabla visible  
- Contador correcto  

---

## 🟦 **TC‑02 – Agregar producto a Wishlist desde categoría**

**Objetivo:** Validar que se puede agregar un producto desde la vista de categoría.

**Pasos:**

1. Navegar a **Desktops**  
2. Hacer clic en el ícono de corazón ❤️  

**Validaciones:**

- Mensaje verde: *Success: You have added…*  
- Contador incrementa  
- Producto aparece en la lista  

---

## 🟦 **TC‑03 – Agregar producto desde página de detalle**

**Objetivo:** Validar que se puede agregar desde la página del producto.

**Pasos:**

1. Abrir un producto  
2. Hacer clic en **Add to Wish List**  

**Validaciones:**

- Mensaje de éxito  
- Wishlist incrementa  

---

## 🟦 **TC‑04 – Validar producto en Wishlist**

**Objetivo:** Confirmar que el producto aparece correctamente.

**Validaciones:**

- Nombre del producto  
- Precio  
- Stock  
- Botón **Add to Cart**  
- Botón **Remove**  

---

## 🟦 **TC‑05 – Eliminar producto de Wishlist**

**Objetivo:** Validar que el usuario puede eliminar productos.

**Pasos:**

1. Acceder a Wishlist  
2. Hacer clic en el ícono de eliminar  

**Validaciones:**

- Producto eliminado  
- Mensaje de éxito  
- Contador decrementa  

---

## 🟦 **TC‑06 – Wishlist vacía**

**Objetivo:** Validar comportamiento cuando no hay productos.

**Validaciones:**

- Mensaje: *Your wish list is empty*  
- No hay productos listados  

---

## 🟦 **TC‑07 – Agregar producto sin estar logueado**

**Objetivo:** Validar que el sistema exige login.

**Pasos:**

1. Cerrar sesión  
2. Intentar agregar un producto a Wishlist  

**Validaciones:**

- Redirección a Login  
- Mensaje: *You must login or create an account to save…*  

---

# 🧾 **5. Notas de Negocio**

- Wishlist es un flujo de retención, no afecta stock  
- Requiere usuario autenticado  
- No afecta totales del carrito  
- No genera registros en BD en tu demo  
- No tiene API en tu entorno  

---

# 📸 **6. Evidencias**

