# 📄 **TC-Flujo-Registro.md**  
### **Flujo de Registro (Crear Usuario Nuevo) – OpenCart E2E (UI + SQL)**  
**Autor:** Eduardo José Parra Perdomo  
**Fecha:** 17/04/2026  

---

# 📘 **Índice**

1. Objetivo del Flujo  
2. Alcance  
3. Precondiciones  
4. Casos de Prueba UI  
   - TC‑01 – Acceso a la pantalla de Registro  
   - TC‑02 – Registro exitoso  
   - TC‑03 – Registro con email duplicado  
   - TC‑04 – Validación de campos obligatorios  
   - TC‑05 – Validación de formato de email  
   - TC‑06 – Validación de políticas de privacidad  
   - TC‑07 – Registro sin completar campos opcionales  
5. Casos de Prueba SQL  
6. Notas de Negocio  
7. Evidencias  

---

# 🎯 **1. Objetivo del Flujo**

Validar que un usuario nuevo puede registrarse correctamente en OpenCart, que el sistema maneja errores como email duplicado o campos inválidos, y que el registro queda correctamente almacenado en la base de datos.

---

# 📌 **2. Alcance**

- Acceso a la pantalla de registro  
- Validación de campos obligatorios  
- Validación de email duplicado  
- Validación de políticas de privacidad  
- Registro exitoso  
- Validación SQL del nuevo usuario  

---

# 🔧 **3. Precondiciones**

- Acceso a OpenCart Demo  
- Navegador funcional  
- Cookies limpias  
- Email válido no registrado previamente  
- Acceso a base de datos MySQL  

---

# 🧪 **4. Casos de Prueba UI**

---

## 🟦 **TC‑01 – Acceso a la pantalla de Registro**

**Objetivo:** Validar que el usuario puede acceder a la pantalla de creación de cuenta.

**Pasos:**

1. Abrir la página principal  
2. Seleccionar **My Account**  
3. Seleccionar **Register**  

**Validaciones:**

- Título *Register Account* visible  
- Formulario completo visible  

---

## 🟦 **TC‑02 – Registro exitoso**

**Objetivo:** Validar que un usuario nuevo puede registrarse correctamente.

**Pasos:**

1. Completar todos los campos obligatorios  
2. Aceptar políticas de privacidad  
3. Hacer clic en **Continue**  

**Validaciones:**

- Mensaje: *Your Account Has Been Created!*  
- Redirección a la página de éxito  
- Usuario autenticado automáticamente  

---

## 🟦 **TC‑03 – Registro con email duplicado**

**Objetivo:** Validar que el sistema no permite registrar un email ya existente.

**Pasos:**

1. Completar formulario con un email ya registrado  
2. Aceptar políticas  
3. Hacer clic en **Continue**  

**Validaciones:**

- Mensaje rojo: *Warning: E-Mail Address is already registered!*  
- No crea cuenta nueva  

---

## 🟦 **TC‑04 – Validación de campos obligatorios**

**Objetivo:** Validar que el sistema exige completar los campos requeridos.

**Campos obligatorios:**

- First Name  
- Last Name  
- Email  
- Telephone  
- Password  
- Confirm Password  

**Validaciones:**

- Mensajes de error por campo vacío  
- No permite continuar  

---

## 🟦 **TC‑05 – Validación de formato de email**

**Objetivo:** Validar que el sistema detecta emails inválidos.

**Casos:**

- Email sin @  
- Email sin dominio  
- Email con caracteres inválidos  

**Validaciones:**

- Mensaje de error  
- No permite continuar  

---

## 🟦 **TC‑06 – Validación de políticas de privacidad**

**Objetivo:** Validar que el usuario debe aceptar las políticas para registrarse.

**Pasos:**

1. Completar formulario  
2. NO marcar la casilla de privacidad  
3. Hacer clic en **Continue**  

**Validaciones:**

- Mensaje: *Warning: You must agree to the Privacy Policy!*  
- No permite continuar  

---

## 🟦 **TC‑07 – Registro sin completar campos opcionales**

**Objetivo:** Validar que el sistema permite registrar usuario sin campos no obligatorios.

**Validaciones:**

- Registro exitoso  
- No se requieren campos opcionales  

---

# 🗄️ **5. Casos de Prueba SQL**

---

## 🟦 **SQL‑TC‑01 – Validar creación del usuario**

```sql
SELECT * 
FROM oc_customer 
WHERE email = '{EMAIL}';
```

**Validar:**

- firstname  
- lastname  
- email  
- telephone  
- status = 1  
- date_added correcta  

---

## 🟦 **SQL‑TC‑02 – Validar dirección por defecto (si aplica)**

```sql
SELECT * 
FROM oc_address 
WHERE customer_id = {CUSTOMER_ID};
```

**Validar:**

- country_id  
- zone_id  
- firstname / lastname coinciden  

---

## 🟦 **SQL‑TC‑03 – Validar integridad del registro**

```sql
SELECT c.customer_id, a.address_id
FROM oc_customer c
LEFT JOIN oc_address a ON c.address_id = a.address_id
WHERE c.email = '{EMAIL}';
```

**Validar:**

- No existan registros huérfanos  
- `address_id` asignado correctamente  

---

# 🧾 **6. Notas de Negocio**

- El email debe ser único  
- La contraseña debe cumplir requisitos mínimos  
- El usuario debe aceptar políticas de privacidad  
- El registro debe crear un `customer_id` único  
- El usuario debe quedar autenticado tras registrarse  

---

# 📸 **7. Evidencias**



