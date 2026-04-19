
# 🏗️ Diagrama Visual – Arquitectura Page Object Model (POM)  
**Proyecto:** OpenCart – Cypress E2E + API + SQL  
**Autor:** Eduardo José Parra Perdomo  
**Fecha:** 17/04/2026  

---

## 🎯 Objetivo del Diagrama

Representar visualmente la arquitectura del framework de automatización basado en **Page Object Model (POM)**, mostrando cómo interactúan:

- Test Runner  
- Test Scripts  
- Page Objects  
- Selectores  
- Aplicación Web  
- API  
- Base de Datos  

Este diagrama forma parte de la documentación técnica del proyecto.

---

## 🧩 Diagrama General de Arquitectura POM

```
                         ┌──────────────────────────────┐
                         │        TEST RUNNER            │
                         │           Cypress             │
                         └───────────────┬──────────────┘
                                         │
                                         │ ejecuta
                                         ▼
                         ┌────────────────────────────────┐
                         │        TEST SCRIPTS (E2E)       │
                         │  /cypress/e2e/tests/*.cy.js     │
                         └───────────────┬────────────────┘
                                         │
                                         │ llaman métodos de
                                         ▼
                    ┌────────────────────────────────────────────┐
                    │           PAGE OBJECTS (POM)                │
                    │        /cypress/e2e/pages/*.js              │
                    ├────────────────────────────────────────────┤
                    │ MenuPage.js                                │
                    │ ProductPage.js                             │
                    │ CartPage.js                                │
                    │ LoginPage.js                               │
                    │ RegisterPage.js                            │
                    │ CheckoutPage.js                            │
                    │ SearchPage.js                              │
                    │ WishlistPage.js                            │
                    └───────────────┬────────────────────────────┘
                                    │
                                    │ interactúan con
                                    ▼
                    ┌────────────────────────────────────────────┐
                    │        SELECTORES / ELEMENTOS UI           │
                    │ (get, contains, find, data-testid, etc.)   │
                    └───────────────┬────────────────────────────┘
                                    │
                                    │ ejecutan acciones sobre
                                    ▼
                    ┌────────────────────────────────────────────┐
                    │              APLICACIÓN WEB                 │
                    │         (OpenCart Demo Abstracta)           │
                    └────────────────────────────────────────────┘
```

---

## 🔌 Integración con API

```
                         ┌──────────────────────────────┐
                         │        TEST RUNNER            │
                         └───────────────┬──────────────┘
                                         │
                                         ▼
                         ┌────────────────────────────────┐
                         │     TESTS API (cy.request)     │
                         └───────────────┬────────────────┘
                                         │
                                         ▼
                         ┌────────────────────────────────┐
                         │          API REST               │
                         │   Productos / Carrito / Totales │
                         └────────────────────────────────┘
```

---

## 🗄️ Integración con SQL

```
                         ┌──────────────────────────────┐
                         │        TEST RUNNER            │
                         └───────────────┬──────────────┘
                                         │
                                         ▼
                         ┌────────────────────────────────┐
                         │     TESTS SQL (MySQL Client)   │
                         └───────────────┬────────────────┘
                                         │
                                         ▼
                         ┌────────────────────────────────┐
                         │            BASE DE DATOS        │
                         │ oc_order / oc_product / totals  │
                         └────────────────────────────────┘
```

---

## 🌐 Vista Global del Framework

```
TESTS (UI + API + SQL)
        │
        ▼
PAGE OBJECTS (POM)
        │
        ▼
SELECTORES / ACCIONES
        │
        ▼
APLICACIÓN WEB  ←→  API REST  ←→  BASE DE DATOS
```

---

## 📝 Notas Técnicas

- La arquitectura POM permite **mantenibilidad**, **escalabilidad** y **reutilización**.  
- Los tests UI, API y SQL están **separados**, pero pueden integrarse.  
- El framework está preparado para crecer hacia CI/CD, Allure y Docker.  

 

