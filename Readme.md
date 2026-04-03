# 🛒 Proyecto de Automatización E2E + API Testing con Cypress  
### Plataforma: OpenCart (Demo Abstracta)

Este proyecto implementa un framework completo de pruebas automatizadas **End-to-End (E2E)** y **API Testing** utilizando **Cypress**, siguiendo buenas prácticas de automatización, arquitectura escalable y estándares utilizados en equipos QA modernos.

---

## 📌 Objetivo del Proyecto

Construir un framework profesional que permita validar funcionalidades críticas de un e‑commerce real (OpenCart), incluyendo:

- Flujos completos de compra (UI)
- Validación de productos, carrito y checkout
- Pruebas de autenticación
- Validación de API REST de OpenCart
- Integración UI + API (crear por API, validar por UI)
- Arquitectura modular con Page Objects y Custom Commands
- Reportes profesionales

Este repositorio forma parte de mi portafolio como **QA Functional Analyst**.

---

## 🧪 Tecnologías Utilizadas

| Tecnología | Uso |
|-----------|-----|
| **Cypress** | Automatización E2E y API |
| **JavaScript / Node.js** | Lenguaje principal |
| **Mocha + Chai** | Framework de aserciones |
| **Page Object Model (POM)** | Arquitectura escalable |
| **Custom Commands** | Reutilización de lógica |
| **Fixtures** | Datos de prueba |
| **Intercepts** | Mocking y validación de API |
| **Mochawesome / Allure** | Reportes (opcional) |

---

## 🏗️ Arquitectura del Proyecto



### 📁 Descripción de carpetas

- **e2e/tests** → Casos de prueba E2E  
- **e2e/pages** → Page Objects  
- **fixtures** → Datos estáticos (JSON)  
- **support/commands.js** → Comandos personalizados  
- **cypress.config.js** → Configuración global  

---

## 🔥 Funcionalidades Automatizadas (UI)

- Registro de usuario  
- Login  
- Búsqueda de productos  
- Agregar productos al carrito  
- Validación del carrito  
- Checkout completo  
- Validaciones visuales y funcionales  
- Navegación y flujos críticos  

---

## 🔥 Funcionalidades Automatizadas (API)

- Autenticación vía API Key  
- Obtener productos  
- Crear productos (si la demo lo permite)  
- Validar carrito por API  
- Validar pedidos  
- Integración UI + API (flujo híbrido)

---

## 🧱 Buenas Prácticas Implementadas

- Page Object Model  
- Selectores estables (`data-testid` cuando es posible)  
- Tests independientes  
- Limpieza de sesión  
- Reutilización de lógica con Custom Commands  
- Validación de API con `cy.request()`  
- Esperas inteligentes con `cy.intercept()`  
- Código limpio y mantenible  

---

## ▶️ Cómo ejecutar el proyecto

### 1. Instalar dependencias

### 2. Ejecutar Cypress en modo interactivo

### 3. Ejecutar en modo headless


---

## 📸 Evidencias y Reportes

El proyecto puede generar reportes con:

- **Mochawesome**
- **Allure Reports**

*(Se incluirán capturas y reportes en la carpeta `/reports` una vez ejecutadas las pruebas.)*

---

## 👨‍💻 Autor

**Eduardo José Parra Perdomo**  
QA Functional Analyst | Automatización | Banking & Payments | Cypress | API Testing

---

## 📬 Contacto

- GitHub: *[tu enlace aquí]*  
- LinkedIn: *[tu enlace aquí]*  

---

## 📄 Licencia

Este proyecto es de uso educativo y demostrativo.
