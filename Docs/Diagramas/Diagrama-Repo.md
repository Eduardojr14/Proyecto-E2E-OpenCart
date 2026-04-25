# 🗂️ **Diagrama Visual del Repositorio – Proyecto OpenCart (Cypress E2E + API + SQL)**  
**Autor:** Eduardo José Parra Perdomo  
**Fecha:** 17/04/2026  
**Versión:** 1.2 (Actualizada)

---

## 🎯 **Objetivo del Diagrama**

Representar visualmente la **estructura completa del repositorio**, mostrando:

- Organización del framework Cypress  
- Arquitectura Page Object Model (POM)  
- Ubicación de tests UI, API y validaciones SQL  
- Carpeta de reportes (Mochawesome)  
- Pipeline CI/CD  
- Documentación técnica  
- Archivos raíz del proyecto  

Este diagrama permite entender de forma rápida cómo está construido el proyecto y cómo se relacionan sus componentes.

---

## 🗂️ **Diagrama del Repositorio (Actualizado)**

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
│   │   └── api/                     ← Tests API reales (productos, carrito, totales, stock, pedidos)
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
│   │   └── e2e.js                   ← Configuración global
│   │
│   └── api/                         ← Requests API (cy.request)
│
├── reports/                         ← Reportes automáticos (CI/CD)
│   ├── mochawesome/                 ← JSON individuales por test
│   ├── final-html/                  ← Reporte HTML final (reporte-final.html)
│   └── full-report.json             ← Merge de todos los JSON
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
├── .github/
│   └── workflows/
│       └── cypress.yml              ← Pipeline CI/CD (GitHub Actions)
│
├── cypress.config.js                ← Configuración Cypress + Mochawesome
├── package.json                     ← Dependencias + scripts
└── README.md                        ← README principal del proyecto
```

---

## 📝 **Notas Técnicas (Actualizadas)**

- La estructura sigue el estándar profesional de **Cypress + POM + API Testing**.  
- Los tests están organizados por **módulos funcionales**, facilitando escalabilidad.  
- Los Page Objects encapsulan la lógica de interacción para mejorar mantenibilidad.  
- La carpeta `reports/` contiene:
  - JSON individuales  
  - Merge (`full-report.json`)  
  - Reporte HTML final  
- El pipeline CI/CD ejecuta:
  - Cypress headless  
  - Merge de reportes  
  - Generación HTML  
  - Publicación de artefactos  
- La carpeta `docs/` contiene toda la documentación funcional, técnica y visual.  
- Este diagrama es ideal para presentaciones, entrevistas técnicas y portafolio profesional.  

---