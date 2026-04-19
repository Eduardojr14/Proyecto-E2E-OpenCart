
________________________________________
🛒 Proyecto de Automatización E2E + API + SQL con Cypress
Plataforma: OpenCart (Demo Abstracta)
________________________________________
📚 Índice
1.	Objetivo del Proyecto
2.	Tecnologías Utilizadas
3.	Arquitectura del Proyecto
4.	Estructura de Carpetas
5.	Funcionalidades Automatizadas (UI)
6.	Funcionalidades Automatizadas (API)
7.	Validaciones SQL Implementadas
8.	Buenas Prácticas Implementadas
9.	Cómo Ejecutar el Proyecto
10.	Documentación de Casos de Prueba
11.	Roadmap del Proyecto
12.	Ejemplos de Código
13.	Autor
14.	Contacto
15.	Licencia
________________________________________
📌 Objetivo del Proyecto
Construir un framework profesional de automatización que valide funcionalidades críticas de un e commerce real (OpenCart), integrando:
•	Pruebas End-to-End (UI)
•	Pruebas API REST
•	Validaciones SQL para integridad financiera
•	Integración UI + API + SQL
•	Arquitectura escalable basada en Page Object Model (POM)
•	Reportes profesionales
•	Código limpio, mantenible y orientado a equipos QA modernos
Este repositorio forma parte de mi portafolio como QA Functional Analyst.
Además, este proyecto valida la lógica contable y administrativa de la plataforma, asegurando integridad en:
•	Cálculo de impuestos
•	Totales financieros
•	Descuentos
•	Stock
•	Registro de pedidos
Evita fugas de ingresos y errores críticos en transacciones.
________________________________________
🧪 Tecnologías Utilizadas
Tecnología	Uso
Cypress	Automatización E2E y API
JavaScript / Node.js	Lenguaje principal
Mocha + Chai	Framework de aserciones
Page Object Model (POM)	Arquitectura escalable
Custom Commands	Reutilización de lógica
Fixtures	Datos de prueba
Intercepts	Mocking y validación de API
Mochawesome / Allure	Reportes profesionales
MySQL	Validaciones SQL del pedido
________________________________________
🏗️ Arquitectura del Proyecto
El proyecto utiliza el patrón Page Object Model (POM) para mantener el código modular, reutilizable y fácil de mantener.
cypress/
 └── e2e/
      ├── pages/
      │     ├── MenuPage.js
      │     ├── ProductPage.js
      │     ├── CartPage.js
      │     ├── LoginPage.js
      │     ├── RegisterPage.js
      │     ├── CheckoutPage.js
      │     ├── SearchPage.js
      │     └── WishlistPage.js
      └── tests/
            ├── cart/
            ├── login/
            ├── register/
            ├── checkout/
            ├── wishlist/
            ├── search/
            └── api/
________________________________________
📁 Estructura de Carpetas
PROYECTO-E2E-OPENCART/
│
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   ├── support/
│
├── docs/
│   ├── README.md                     ← Índice de documentación
│   ├── Diagrama-Arquitectura-POM.md
│   ├── Diagrama-Flujo-Checkout.md
│   ├── TC-Flujo-Login.md
│   ├── TC-Flujo-Registro.md
│   ├── TC-Flujo-Desktops-Cameras.md
│   ├── TC-Flujo-Desktops-Cameras-Advanced.md
│   ├── TC-Flujo-Checkout.md
│   ├── TC-Flujo-API-Testing.md
│   ├── TC-Flujo-SQL-Pedido.md
│   ├── TC-Flujo-Busqueda.md
│   └── TC-Flujo-Wishlist.md
│
├── cypress.config.js
├── package.json
└── README.md                         ← ESTE es el README principal

________________________________________
🔥 Funcionalidades Automatizadas (UI)
•	Registro de usuario
•	Login
•	Logout
•	Búsqueda de productos
•	Wishlist
•	Agregar productos al carrito
•	Validación de precios, impuestos y totales
•	Persistencia del carrito
•	Checkout completo
•	Navegación por categorías
________________________________________
🔥 Funcionalidades Automatizadas (API)
•	Obtener productos
•	Validar carrito por API
•	Validar totales
•	Validar stock
•	Crear pedidos vía API
•	Integración UI + API (crear por API, validar por UI)
________________________________________
🗄️ Validaciones SQL Implementadas
•	Registro del pedido (oc_order)
•	Productos del pedido (oc_order_product)
•	Totales financieros (oc_order_total)
•	Stock descontado (oc_product)
•	Auditoría del pedido (oc_order_history)
•	Integridad referencial
•	Validación de direcciones (oc_address)
________________________________________
🧱 Buenas Prácticas Implementadas
•	Page Object Model
•	Selectores estables
•	Tests independientes
•	Limpieza de sesión
•	Reutilización con Custom Commands
•	Validación de API con cy.request()
•	Esperas inteligentes con cy.intercept()
•	Código limpio y mantenible
•	Separación UI / API / SQL
________________________________________
▶️ Cómo ejecutar el proyecto
1. Instalar dependencias
npm install
2. Ejecutar Cypress en modo interactivo
npx cypress open
3. Ejecutar en modo headless
npx cypress run
________________________________________
📄 Documentación de Casos de Prueba
Toda la documentación detallada se encuentra en:
👉 /docs/README.md (Índice general)
Incluye:
•	Login
•	Registro
•	Carrito (básico + avanzado)
•	Checkout
•	Wishlist
•	Búsqueda
•	API Testing
•	SQL Testing
________________________________________
🛣️ Roadmap del Proyecto
•	[x] Flujo E2E: Carrito
•	[x] Flujo E2E: Login
•	[x] Flujo E2E: Registro
•	[x] Flujo E2E: Checkout
•	[x] Flujo E2E: Wishlist
•	[x] Flujo E2E: Búsqueda
•	[x] API Testing completo
•	[x] SQL Testing completo
•	[ ] Reportes Allure
•	[ ] Pipeline CI/CD (GitHub Actions)
•	[ ] Integración con Docker
•	[ ] Pruebas de performance
________________________________________
🧩 Ejemplos de Código
Ejemplo de Page Object
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
________________________________________
👨‍💻 Autor
Eduardo José Parra Perdomo 
QA Functional Analyst | Automatización | Banking & Payments | Cypress | API Testing | SQL Testing
________________________________________
📬 Contacto
•	LinkedIn: https://www.linkedin.com/in/eduardo-j-parra-p/
________________________________________
📄 Licencia
Este proyecto es de uso educativo y demostrativo.
________________________________________
