# 📄 **TC-Flujo-Logout.md**  
### **Flujo de Logout (Cerrar Sesión) – OpenCart E2E (UI)**  
**Proyecto:** OpenCart – Cypress E2E  
**Autor:** Eduardo José Parra Perdomo  
**Fecha:** 17/04/2026  

---

# 📘 **Índice**

1. Objetivo del Flujo  
2. Alcance  
3. Precondiciones  
4. Casos de Prueba UI  
   - TC‑01 – Acceso a Logout  
   - TC‑02 – Logout exitoso  
   - TC‑03 – Validar mensaje de cierre de sesión  
   - TC‑04 – Validar acceso restringido tras logout  
   - TC‑05 – Validar comportamiento del carrito  
5. Notas de Negocio  

---

# 🎯 **1. Objetivo del Flujo**

Validar que un usuario autenticado puede cerrar sesión correctamente y que el sistema:

- Limpia la sesión  
- Muestra el mensaje correcto  
- Evita el acceso a páginas protegidas  
- Mantiene o limpia el carrito según la configuración del sitio  

---

# 📌 **2. Alcance**

- Cierre de sesión desde el menú  
- Validación de mensaje  
- Validación de redirecciones  
- Validación de acceso restringido  
- Validación del estado del carrito  

---

# 🔧 **3. Precondiciones**

- Usuario registrado  
- Usuario autenticado  
- Acceso a OpenCart Demo  

---

# 🧪 **4. Casos de Prueba UI**

---

## 🟦 **TC‑01 – Acceso a Logout**

**Objetivo:** Validar que el usuario puede acceder a la opción de Logout.

**Pasos:**

1. Iniciar sesión  
2. Hacer clic en **My Account**  
3. Seleccionar **Logout**  

**Validaciones:**

- Redirección a página de Logout  
- Título: *Account Logout*  

---

## 🟦 **TC‑02 – Logout exitoso**

**Objetivo:** Validar que el cierre de sesión se realiza correctamente.

**Validaciones:**

- Mensaje: *You have been logged off your account.*  
- Botón **Continue** visible  
- Header cambia a estado no autenticado  

---

## 🟦 **TC‑03 – Validar mensaje de cierre de sesión**

**Objetivo:** Confirmar que el mensaje es claro y correcto.

**Validaciones:**

- Mensaje visible  
- No aparecen datos del usuario  

---

## 🟦 **TC‑04 – Validar acceso restringido tras logout**

**Objetivo:** Validar que el usuario no puede acceder a páginas que requieren autenticación.

**Pasos:**

Intentar acceder a:

- `/index.php?route=account/account`  
- `/index.php?route=account/order`  
- `/index.php?route=account/wishlist`  

**Validaciones:**

- Redirección a Login  
- No muestra datos del usuario  

---

## 🟦 **TC‑05 – Validar comportamiento del carrito tras logout**

**Objetivo:** Validar si el carrito se mantiene o se limpia según la configuración.

**Validaciones:**

- Carrito vacío **o** carrito persiste (según demo)  
- No genera errores  
- No muestra datos del usuario  

---

# 🧾 **5. Notas de Negocio**

- Logout debe ser inmediato  
- No debe dejar datos sensibles en memoria  
- No debe permitir acceso a páginas protegidas  
- Debe mostrar mensaje claro  

---






