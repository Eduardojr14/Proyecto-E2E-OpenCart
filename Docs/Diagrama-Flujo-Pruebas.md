🧪 1. Diagrama Visual – Flujo de Pruebas (UI + API + SQL)
Este diagrama muestra cómo se ejecutan tus pruebas en las 3 capas del proyecto.

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
