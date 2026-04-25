# ⭐ Proyecto de Automatización E2E + API + SQL con Cypress  
### Plataforma: OpenCart (Demo)

`https://img.shields.io/badge/Cypress-E2E%20Testing-brightgreen`  
`https://img.shields.io/badge/Node.js-JavaScript-yellow`  
`https://img.shields.io/badge/MySQL-SQL-blue`  
`https://img.shields.io/badge/Arquitectura-POM-orange`  
`https://img.shields.io/badge/Estado-En%20Desarrollo-success`

---

## 📌 1. Objetivo del Proyecto  
Construir un **framework profesional de automatización** que valide funcionalidades críticas de un e‑commerce real (OpenCart), integrando:

- Pruebas **End‑to‑End (UI)**  
- Pruebas **API REST**  
- Validaciones **SQL** para integridad financiera  
- Integración **UI + API + SQL**  
- Arquitectura escalable basada en **Page Object Model (POM)**  
- Pipeline **CI/CD con GitHub Actions**

> **Nota:** Las validaciones SQL se presentan como evidencia del diseño de pruebas de backend e integridad de datos en flujos complejos de e‑commerce.

Este proyecto forma parte de mi portafolio como **QA Functional Analyst / QA Automation**.

---

## 🧩 2. Tecnologías Utilizadas

| Tecnología | Uso |
|-----------|-----|
| **Cypress** | Automatización UI + API |
| **JavaScript / Node.js** | Lenguaje principal |
| **Mocha + Chai** | Aserciones |
| **Page Object Model (POM)** | Arquitectura escalable |
| **Custom Commands** | Reutilización de lógica |
| **Fixtures** | Datos de prueba |
| **Intercept / Mocking** | Validación de API |
| **MySQL** | Validaciones SQL del pedido |
| **Mochawesome** | Reportes profesionales |
| **GitHub Actions** | Pipeline CI/CD |

---

## 🏗️ 3. Arquitectura del Proyecto (POM)

```
/cypress
 ├── e2e/
 ├── pages/
 ├── tests/
 ├── api/
 ├── fixtures/
 └── support/
```

---

## 📂 4. Estructura del Repositorio

```
PROYECTO-E2E-OPENCART/
│
├── cypress/
│   ├── e2e/
│   ├── pages/
│   ├── fixtures/
│   ├── support/
│   └── api/
│
├── reports/
│   ├── mochawesome/
│   ├── final-html/
│   └── full-report.json
│
├── docs/
│   ├── Plan-de-Pruebas.md
│   ├── Casos de Prueba
│   ├── Diagramas
│   └── README.md
│
├── .github/workflows/cypress.yml
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🧪 5. Funcionalidades Automatizadas (UI)

- Login  
- Registro  
- Logout  
- Búsqueda  
- Wishlist  
- Carrito (básico + avanzado)  
- Checkout  
- Validaciones visuales y funcionales  

---

## 🔌 6. Funcionalidades Automatizadas (API)

- Obtener productos  
- Validar stock  
- Crear carrito  
- Agregar/eliminar productos  
- Validar totales  
- Crear pedido  
- Validar pedido vía API  

---

## 🗄️ 7. Validaciones SQL Implementadas

- Registro del pedido (`oc_order`)  
- Productos del pedido (`oc_order_product`)  
- Totales del pedido (`oc_order_total`)  
- Stock descontado (`oc_product`)  
- Auditoría del pedido (`oc_order_history`)  
- Validación de dirección (`oc_address`)  
- Validación de usuario registrado (`oc_customer`)  

### 📝 Nota sobre las Validaciones SQL e Integridad de Datos  
*"Las validaciones de base de datos (SQL) incluidas en este proyecto han sido diseñadas y documentadas siguiendo la lógica de negocio de OpenCart.  
Dado que el entorno de pruebas es una demo pública, no se cuenta con credenciales de acceso directo al servidor MySQL externo.

Sin embargo, se han estructurado los casos de prueba SQL para demostrar el dominio técnico en la verificación de integridad financiera, persistencia de registros de clientes y auditoría de pedidos.  
En un entorno corporativo (Staging/Dev), estas consultas se integrarían directamente en el pipeline mediante comandos de Cypress o tareas de Node.js para un chequeo de calidad 360° (UI + API + DB)."*

---

## 🧼 8. Buenas Prácticas Implementadas

- Page Object Model  
- Selectores estables  
- Tests independientes  
- Limpieza de sesión  
- Custom Commands  
- Validación de API con `cy.request()`  
- Esperas inteligentes con `cy.intercept()`  
- Código limpio y mantenible  

---

## 🚀 9. Pipeline CI/CD (GitHub Actions)

El proyecto incluye un pipeline completo que ejecuta:

- Cypress en modo headless  
- Generación de reportes Mochawesome  
- Merge de JSON  
- Generación de HTML  
- Publicación de artefactos descargables  

Archivo: `.github/workflows/cypress.yml`

---

## ▶️ 10. Cómo Ejecutar el Proyecto

```bash
# Instalar dependencias
npm install

# Ejecutar Cypress en modo interactivo
npx cypress open

# Ejecutar en modo headless
npx cypress run
```

---

## 📄 11. Documentación Completa

Toda la documentación detallada se encuentra en:

👉 **/docs/README.md**

Incluye:

- Plan de Pruebas  
- Casos de Prueba  
- Diagramas  
- Flujos  
- API Testing  
- SQL Testing  
- Arquitectura extendida  

---

## 🗺️ 12. Roadmap del Proyecto

- [x] Flujo E2E: Carrito  
- [x] Flujo E2E: Login  
- [x] Flujo E2E: Registro  
- [x] Flujo E2E: Checkout  
- [x] Flujo E2E: Búsqueda  
- [x] Wishlist  
- [x] API Testing  
- [x] SQL Testing  
- [x] Pipeline CI/CD (GitHub Actions)  
- [ ] Reportes Allure  
- [ ] Integración con Docker  
- [ ] Pruebas de performance  

---

## 💻 13. Ejemplo de Código (POM)

```javascript
class ProductPage {
  selectProduct(name) {
    cy.contains(name).click()
  }

  addToCart() {
    cy.get('#button-cart').click()
  }

  validateSuccessMessage(productName) {
    cy.get('.alert-success')
      .should('contain', 'Success')
      .and('contain', productName)
  }
}
```

---

## 👨‍💻 14. Autor  
**Eduardo José Parra Perdomo**  
QA Functional Analyst | QA Automation | Banking & Payments  
Cypress | API Testing | SQL | POM  

🔗 LinkedIn: [https://www.linkedin.com/in/eduardo-j-parra-p/]

---

## 📘 15. Licencia  
Proyecto de uso educativo y demostrativo.

---
