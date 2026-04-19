
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
- Código limpio, mantenible y orientado a equipos QA modernos  

Este proyecto forma parte de mi portafolio como **QA Functional Analyst / QA Automation**.

---

## 🧩 2. Tecnologías Utilizadas

| Tecnología | Uso |
|-----------|-----|
| **Cypress** | Automatización E2E y API |
| **JavaScript / Node.js** | Lenguaje principal |
| **Mocha + Chai** | Framework de aserciones |
| **Page Object Model (POM)** | Arquitectura escalable |
| **Custom Commands** | Reutilización de lógica |
| **Fixtures** | Datos de prueba |
| **Intercept / Mocking** | Validación de API |
| **MySQL** | Validaciones SQL del pedido |
| **Allure / Mochawesome** | Reportes profesionales (roadmap) |

---

## 🏗️ 3. Arquitectura del Proyecto (POM)

```
/cypress
 ├── e2e/
 ├── pages/
 │    ├── HomePage.js
 │    ├── ProductPage.js
 │    ├── CartPage.js
 │    ├── LoginPage.js
 │    ├── RegisterPage.js
 │    ├── CheckoutPage.js
 │    ├── SearchPage.js
 │    ├── WishlistPage.js
 ├── tests/
 │    ├── cart/
 │    ├── login/
 │    ├── register/
 │    ├── checkout/
 │    ├── wishlist/
 │    ├── search/
 ├── api/
```

---

## 📂 4. Estructura del Repositorio

```
PROYECTO-E2E-OPENCART/
 ├── cypress/
 ├── docs/               ← Documentación completa
 ├── cypress.config.js
 ├── package.json
 ├── README.md           ← Este archivo
```

---

## 🧪 5. Funcionalidades Automatizadas (UI)

- Login  
- Registro  
- Carrito (básico + avanzado)  
- Checkout  
- Wishlist  
- Búsqueda  
- Validaciones visuales y funcionales  

---

## 🔌 6. Funcionalidades Automatizadas (API)

- Crear usuario por API  
- Validar login por API  
- Validar productos  
- Validar carrito  
- Validar totales  
- Validar stock  

---

## 🗄️ 7. Validaciones SQL Implementadas

- Registro del pedido (`oc_order`)  
- Productos del pedido (`oc_order_product`)  
- Totales del pedido (`oc_order_total`)  
- Stock descontado (`oc_product`)  
- Auditoría del pedido (`oc_order_history`)  
- Integridad referencial  
- Validación de dirección (`oc_address`)  

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

## ▶️ 9. Cómo Ejecutar el Proyecto

```bash
# Instalar dependencias
npm install

# Ejecutar Cypress en modo interactivo
npx cypress open

# Ejecutar en modo headless
npx cypress run
```

---

## 📄 10. Documentación Completa  
Toda la documentación detallada se encuentra en:

👉 **/docs/README.md** (índice general)

Incluye:

- Plan de Pruebas  
- Casos de Prueba  
- Diagramas  
- Flujos  
- API Testing  
- SQL Testing  
- Arquitectura extendida  

---

## 🗺️ 11. Roadmap del Proyecto

- [x] Flujo E2E: Carrito  
- [x] Flujo E2E: Login  
- [x] Flujo E2E: Registro  
- [x] Flujo E2E: Checkout  
- [x] Flujo E2E: Búsqueda  
- [x] API Testing completo  
- [x] SQL Testing completo  
- [ ] Reportes Allure  
- [ ] Pipeline CI/CD (GitHub Actions)  
- [ ] Integración con Docker  
- [ ] Pruebas de performance  

---

## 💻 12. Ejemplo de Código (POM)

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

## 👨‍💻 13. Autor  
**Eduardo José Parra Perdomo**  
QA Functional Analyst | QA Automation | Banking & Payments  
Cypress | API Testing | SQL | POM  

🔗 LinkedIn: `https://www.linkedin.com/in/eduardo-j-parra-p/` 

---

## 📘 14. Licencia  
Proyecto de uso educativo y demostrativo.

