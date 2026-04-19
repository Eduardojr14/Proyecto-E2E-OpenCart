# 🗂️ **Diagrama Visual del Repositorio – Proyecto OpenCart (Cypress E2E + API + SQL)**  
**Autor:** Eduardo José Parra Perdomo  
**Fecha:** 17/04/2026  

---

## 🎯 **Objetivo del Diagrama**

Representar visualmente la **estructura completa del repositorio**, mostrando:

- Organización del framework Cypress  
- Arquitectura Page Object Model (POM)  
- Ubicación de tests UI, API y SQL  
- Carpeta de reportes (Mochawesome / Allure)  
- Documentación técnica  
- Archivos raíz del proyecto  

Este diagrama permite entender de forma rápida cómo está construido el proyecto y cómo se relacionan sus componentes.

---

## 🗂️ **Diagrama del Repositorio**

```
PROYECTO-E2E-OPENCART/
│
├── cypress/
│   ├── e2e/                         ← Tests automatizados (UI + API)
│   │   ├── login/
│   │   ├── register/
│   │   ├── search/
│   │   ├── wishlist/
│   │   ├── cart/
│   │   ├── checkout/
│   │   └── api/
│   │
│   ├── pages/                       ← Page Object Model (POM)
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   ├── RegisterPage.js
│   │   ├── ProductPage.js
│   │   ├── CartPage.js
│   │   ├── CheckoutPage.js
│   │   ├── SearchPage.js
│   │   └── WishlistPage.js
│   │
│   ├── fixtures/                    ← Datos de prueba
│   ├── support/
│   │   ├── commands.js              ← Custom Commands
│   │   └── e2e.js
│   │
│   └── api/                         ← Requests API (cy.request)
│
├── reports/                         ← Reportes automáticos
│   ├── mochawesome-report/          ← HTML + JSON
│   ├── allure-results/              ← Resultados Allure
│   └── allure-report/               ← Reporte final Allure
│
├── docs/                            ← Documentación completa
│   ├── README.md                    ← Índice general
│   ├── Plan-de-Pruebas.md
│   ├── TC-Flujo-Login.md
│   ├── TC-Flujo-Registro.md
│   ├── TC-Flujo-Busqueda.md
│   ├── TC-Flujo-Wishlist.md
│   ├── TC-Flujo-Carrito.md
│   ├── TC-Flujo-Checkout.md
│   ├── TC-Flujo-API-Testing.md
│   └── Diagramas/
│       ├── Diagrama-POM.md
│       ├── Diagrama-Checkout.md
│       ├── Diagrama-Flujo-Pruebas.md
│       └── Diagrama-Repo.md         ← Este archivo
│
├── cypress.config.js
├── package.json
└── README.md                        ← README principal
```

---

## 📝 **Notas Técnicas**

- La estructura sigue el estándar profesional de Cypress + POM.  
- Los tests están organizados por **módulos funcionales**.  
- Los Page Objects encapsulan la lógica de interacción.  
- La carpeta `reports/` permite integrar CI/CD y publicar reportes.  
- La carpeta `docs/` contiene toda la documentación del proyecto.  
- El diagrama es ideal para incluir en presentaciones o entrevistas técnicas.  

---
