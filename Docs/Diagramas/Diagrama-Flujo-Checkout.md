
# 🧭 **Diagrama Visual – Flujo Completo de Checkout (OpenCart)**  
**Proyecto:** OpenCart – Cypress E2E + API + SQL  
**Autor:** Eduardo José Parra Perdomo  
**Fecha:** 17/04/2026  

---

## 🧩 **Mapa Visual del Flujo de Checkout**

```
                           ┌──────────────────────────┐
                           │      INICIO CHECKOUT      │
                           │   Usuario en el carrito   │
                           └───────────────┬───────────┘
                                           │
                                           ▼
                           ┌──────────────────────────┐
                           │ ¿Usuario autenticado?     │
                           └───────────────┬───────────┘
                                   NO      │      SÍ
                                           │
                     ┌─────────────────────┘
                     ▼
        ┌──────────────────────────────┐
        │   Paso 1: LOGIN / REGISTER   │
        │  - Email                     │
        │  - Password                  │
        └───────────────┬─────────────┘
                        │
                        ▼
        ┌──────────────────────────────┐
        │   Paso 2: BILLING DETAILS    │
        │  - Nombre / Apellido         │
        │  - Dirección                 │
        │  - Ciudad / Código Postal    │
        │  - País / Provincia          │
        └───────────────┬─────────────┘
                        │
                        ▼
        ┌──────────────────────────────┐
        │   Paso 3: DELIVERY DETAILS   │
        │  - Seleccionar dirección     │
        │  - O crear nueva dirección   │
        └───────────────┬─────────────┘
                        │
                        ▼
        ┌──────────────────────────────┐
        │   Paso 4: DELIVERY METHOD    │
        │  - Método de envío           │
        │  - Coste                     │
        └───────────────┬─────────────┘
                        │
                        ▼
        ┌──────────────────────────────┐
        │   Paso 5: PAYMENT METHOD     │
        │  - Método de pago            │
        │  - Aceptar términos          │
        └───────────────┬─────────────┘
                        │
                        ▼
        ┌──────────────────────────────┐
        │   Paso 6: CONFIRM ORDER      │
        │  - Productos                 │
        │  - Cantidades                │
        │  - Subtotal                  │
        │  - Impuestos                 │
        │  - Total final               │
        └───────────────┬─────────────┘
                        │
                        ▼
        ┌──────────────────────────────┐
        │   CREAR PEDIDO (UI + API)    │
        │  - Generar order_id          │
        │  - Registrar en BD           │
        └───────────────┬─────────────┘
                        │
                        ▼
        ┌──────────────────────────────┐
        │   VALIDACIÓN SQL (opcional)  │
        │  - oc_order                  │
        │  - oc_order_product          │
        │  - oc_order_total            │
        │  - Stock descontado          │
        └───────────────┬─────────────┘
                        │
                        ▼
        ┌──────────────────────────────┐
        │   ORDER SUCCESS PAGE         │
        │  “Your order has been placed”│
        └──────────────────────────────┘
```

---

## 🎯 **Qué representa este diagrama**

- Flujo completo del Checkout real de OpenCart  
- Decisiones clave (login vs no login)  
- Pasos obligatorios del proceso  
- Validaciones de negocio  
- Integración UI → API → SQL  
- Trazabilidad del pedido  



