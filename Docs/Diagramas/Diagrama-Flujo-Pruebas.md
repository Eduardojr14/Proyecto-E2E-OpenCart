# 🧪 **Diagrama Visual – Flujo de Pruebas (UI + API + SQL)**  
**Proyecto:** OpenCart – Cypress E2E + API + SQL  
**Autor:** Eduardo José Parra Perdomo  
**Fecha:** 17/04/2026  

---

## 🎯 **Objetivo del Diagrama**

Representar cómo se ejecutan las pruebas del proyecto a través de las **tres capas principales**:

- **UI (E2E)**  
- **API REST (módulos reales)**  
- **SQL (integridad financiera)**  

Este flujo refleja la arquitectura completa del framework y cómo Cypress coordina la ejecución de cada capa.

---

## 🧪 **Diagrama del Flujo de Pruebas**

```
                     ┌──────────────────────────┐
                     │      TEST RUNNER          │
                     │         Cypress            │
                     └───────────────┬───────────┘
                                     │
                                     ▼
                ┌────────────────────────────────────┐
                │        TESTS AUTOMATIZADOS         │
                │  UI (E2E) + API + SQL + Smoke      │
                └───────────────┬────────────────────┘
                                │
                                ▼
                ┌────────────────────────────────────┐
                │      PAGE OBJECT MODEL (POM)       │
                │  pages/*.js (acciones y métodos)   │
                └───────────────┬────────────────────┘
                                │
                                ▼
                ┌────────────────────────────────────┐
                │       SELECTORES / ELEMENTOS        │
                │  get(), contains(), data-testid     │
                └───────────────┬────────────────────┘
                                │
                                ▼
                ┌────────────────────────────────────┐
                │           APLICACIÓN WEB            │
                │           (OpenCart Demo)           │
                └───────────────┬────────────────────┘
                                │
                                ▼
    ┌──────────────────────────────────────────────────────────┐
    │                      INTEGRACIÓN API                      │
    │  cy.request() → Productos / Carrito / Totales / Stock    │
    └───────────────┬──────────────────────────────────────────┘
                    │
                    ▼
    ┌──────────────────────────────────────────────────────────┐
    │                      VALIDACIÓN SQL                       │
    │  oc_order / oc_order_product / oc_order_total / stock    │
    └──────────────────────────────────────────────────────────┘
```

---

## 📝 **Notas Técnicas**

- Cypress ejecuta primero los **tests UI**, que interactúan con la aplicación mediante POM.  
- Los tests pueden incluir validaciones **API** para asegurar consistencia entre UI y backend.  
- Finalmente, se ejecutan validaciones **SQL** para confirmar integridad financiera y trazabilidad.  
- Este flujo es el estándar profesional para proyectos QA modernos con integración completa.  

---
