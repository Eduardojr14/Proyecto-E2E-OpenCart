# 📄 **TC-Flujo-Login.md**  
### **Flujo de Login (Inicio de Sesión) – OpenCart E2E (UI)**  
**Proyecto:** OpenCart – Cypress E2E  
**Autor:** Eduardo José Parra Perdomo  
**Fecha:** 17/04/2026  

---

# 📘 **Índice**

1. Objetivo del Flujo  
2. Alcance  
3. Precondiciones  
4. Casos de Prueba UI  
   - TC‑01 – Acceso a la pantalla de Login  
   - TC‑02 – Login exitoso  
   - TC‑03 – Login con contraseña incorrecta  
   - TC‑04 – Login con usuario inexistente  
   - TC‑05 – Validación de campos obligatorios  
   - TC‑06 – Logout desde Login (flujo combinado)  
5. Notas de Negocio  
 

---

# 🎯 **1. Objetivo del Flujo**

Validar que un usuario existente puede iniciar sesión correctamente en OpenCart, que el sistema maneja errores de autenticación y que la sesión se mantiene activa para flujos posteriores como:

- Checkout  
- Wishlist  
- Historial de pedidos  
- Validaciones UI  

---

# 📌 **2. Alcance**

- Acceso a la pantalla de Login  
- Validación de credenciales  
- Manejo de errores  
- Persistencia de sesión  
- Logout (flujo combinado)  

---

# 🔧 **3. Precondiciones**

- Usuario existente registrado previamente  
- Acceso a OpenCart Demo  
- Cookies limpias  
- Navegador funcional  

---

# 🧪 **4. Casos de Prueba UI**

---

## 🟦 **TC‑01 – Acceso a la pantalla de Login**

**Objetivo:** Validar que el usuario puede acceder a la pantalla de inicio de sesión.

**Pasos:**

1. Abrir la página principal  
2. Seleccionar **My Account**  
3. Seleccionar **Login**  

**Validaciones:**

- Título *Account Login* visible  
- Formulario de email y password visible  

---

## 🟦 **TC‑02 – Login exitoso**

**Objetivo:** Validar que un usuario existente puede iniciar sesión correctamente.

**Pasos:**

1. Ingresar email válido  
2. Ingresar contraseña válida  
3. Hacer clic en **Login**  

**Validaciones:**

- Redirección a *My Account*  
- Nombre del usuario visible  
- Menú de opciones disponible (Orders, Downloads, etc.)  

---

## 🟦 **TC‑03 – Login con contraseña incorrecta**

**Objetivo:** Validar que el sistema rechaza credenciales inválidas.

**Pasos:**

1. Ingresar email válido  
2. Ingresar contraseña incorrecta  
3. Hacer clic en **Login**  

**Validaciones:**

- Mensaje rojo: *Warning: No match for E-Mail Address and/or Password.*  
- No inicia sesión  
- Permanece en pantalla de Login  

---

## 🟦 **TC‑04 – Login con usuario inexistente**

**Objetivo:** Validar que el sistema maneja correctamente usuarios no registrados.

**Pasos:**

1. Ingresar email inexistente  
2. Ingresar cualquier contraseña  
3. Hacer clic en **Login**  

**Validaciones:**

- Mensaje de error  
- No inicia sesión  

---

## 🟦 **TC‑05 – Validación de campos obligatorios**

**Objetivo:** Validar que el sistema exige email y contraseña.

**Casos:**

- Email vacío  
- Contraseña vacía  
- Ambos vacíos  

**Validaciones:**

- Mensajes de error  
- No permite continuar  

---

## 🟦 **TC‑06 – Logout desde Login (flujo combinado)**

**Objetivo:** Validar que el usuario puede cerrar sesión correctamente después de iniciar sesión.

**Pasos:**

1. Iniciar sesión  
2. Seleccionar **My Account**  
3. Seleccionar **Logout**  

**Validaciones:**

- Mensaje: *You have been logged off*  
- Botón **Continue** visible  
- No permite acceder a páginas protegidas  

---

# 🧾 **5. Notas de Negocio**

- El login es obligatorio para completar checkout  
- El sistema debe proteger datos sensibles  
- Los mensajes de error deben ser claros  
- La sesión debe persistir correctamente  
- Intentos fallidos pueden bloquear temporalmente al usuario (según configuración)  

---


