# 📄 **TC-Flujo-Desktops-Cameras.md**  
### *Casos de Prueba – Flujo: Agregar productos al carrito, validar impuestos y navegar al checkout*  
**Proyecto:** OpenCart E2E – Cypress + POM  
**Autor:** Eduardo José Parra Perdomo  

---

## 📘 Índice

1. [TC-01 – Navegación a Desktops → Show All Desktops](#tc-01--navegación-a-desktops--show-all-desktops)  
2. [TC-02 – Selección del producto HP LP3065](#tc-02--selección-del-producto-hp-lp3065)  
3. [TC-03 – Agregar HP LP3065 al carrito](#tc-03--agregar-hp-lp3065-al-carrito)  
4. [TC-04 – Navegación a Cameras](#tc-04--navegación-a-cameras)  
5. [TC-05 – Selección del producto Canon EOS 5D](#tc-05--selección-del-producto-canon-eos-5d)  
6. [TC-06 – Agregar Canon EOS 5D al carrito](#tc-06--agregar-canon-eos-5d-al-carrito)  
7. [TC-07 – Validación de productos en el carrito](#tc-07--validación-de-productos-en-el-carrito)  
8. [TC-08 – Validación de cálculos de impuestos y totales](#tc-08--validación-de-cálculos-de-impuestos-y-totales)  
9. [TC-09 – Validación de la pantalla de Checkout](#tc-09--validación-de-la-pantalla-de-checkout)  

---

## 🟦 **TC-01 – Navegación a Desktops → Show All Desktops**

**Objetivo:** Validar que el usuario puede acceder correctamente a la categoría *Desktops*.  
**Precondiciones:** Estar en la página principal.

### Pasos
1. Abrir la página principal.  
2. Seleccionar “Desktops”.  
3. Seleccionar “Show All Desktops”.

### Validaciones
- La página muestra el título **“Desktops”**.  
- Se listan productos de la categoría.  

---

## 🟦 **TC-02 – Selección del producto HP LP3065**

**Objetivo:** Validar que la página del producto carga correctamente.

### Pasos
1. Seleccionar **HP LP3065** desde la categoría.

### Validaciones
- Nombre del producto: **HP LP3065**  
- Precio: **$122.00**  
- Ex Tax: **$100.00**  
- Disponibilidad: **1000**  
- Reward Points: **300**  

---

## 🟦 **TC-03 – Agregar HP LP3065 al carrito**

**Objetivo:** Validar que el producto se agrega correctamente.

### Pasos
1. Hacer clic en **Add to Cart**.

### Validaciones
- Mensaje verde: *Success: You have added HP LP3065…*  
- Carrito actualizado  

---

## 🟦 **TC-04 – Navegación a Cameras**

**Objetivo:** Validar acceso a la categoría *Cameras*.

### Pasos
1. Seleccionar “Cameras”.

### Validaciones
- Título **“Cameras”** visible  
- Productos listados correctamente  

---

## 🟦 **TC-05 – Selección del producto Canon EOS 5D**

**Objetivo:** Validar que la página del producto carga correctamente.

### Pasos
1. Seleccionar **Canon EOS 5D**

### Validaciones
- Nombre: **Canon EOS 5D**  
- Precio: **$98.00**  
- Reward Points: **200**  
- Opción de color visible  

---

## 🟦 **TC-06 – Agregar Canon EOS 5D al carrito**

**Objetivo:** Validar que el producto se agrega correctamente.

### Pasos
1. Hacer clic en **Add to Cart**

### Validaciones
- Mensaje de éxito visible  
- Carrito actualizado  

---

## 🟦 **TC-07 – Validación de productos en el carrito**

**Objetivo:** Confirmar que ambos productos están presentes en el carrito.

### Validaciones
- HP LP3065 aparece en la tabla  
- Canon EOS 5D aparece en la tabla  
- Cantidad = **1** para ambos  
- Precios unitarios correctos  
- Totales por producto correctos  

---

## 🟦 **TC-08 – Validación de cálculos de impuestos y totales**

**Objetivo:** Validar que el sistema calcula correctamente subtotal, eco tax, VAT y total final.

### Datos esperados
- Subtotal: **$180.00**  
- Eco Tax: **$4.00**  
- VAT (20%): **$36.00**  
- Total: **$220.00**  

### Validaciones
- Subtotal = 122 + 98  
- Eco Tax = valor mostrado por el sistema  
- VAT = 20% del subtotal  
- Total = Subtotal + Eco Tax + VAT  

---

## 🟦 **TC-09 – Validación de la pantalla de Checkout**

**Objetivo:** Confirmar que el checkout carga correctamente.

### Validaciones
- Sección **New Customer** visible  
- Sección **Returning Customer** visible  
- Pasos 2 a 6 visibles:  
  - Billing Details  
  - Delivery Details  
  - Delivery Method  
  - Payment Method  
  - Confirm Order  




