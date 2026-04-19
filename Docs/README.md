# 📚 **Documentación del Proyecto – Carpeta `/docs`**

Este directorio contiene **toda la documentación funcional, técnica y de validación** del proyecto **OpenCart – Cypress E2E + API + SQL**.

Cada flujo está documentado en formato profesional, incluyendo:

- **Objetivo**
- **Alcance**
- **Precondiciones**
- **Casos de prueba UI**
- **Casos de prueba API**
- **Casos de prueba SQL**
- **Notas de negocio**
- **Evidencias**
- **Riesgos y consideraciones**
- **Criterios de aceptación**

Además, aquí se encuentra el **Plan de Pruebas completo**, que define la estrategia QA del proyecto.

---

# 📘 **Índice General de Documentación**

---

## 🧪 **1. Flujos Funcionales (UI)**  
Documentación de los flujos principales del e‑commerce.

- **Flujo: Login (Inicio de Sesión)**  
  👉 `/docs/TC-Flujo-Login.md`

- **Flujo: Registro de Usuario Nuevo**  
  👉 `/docs/TC-Flujo-Registro.md`

- **Flujo: Carrito de Compras (Básico)**  
  👉 `/docs/TC-Flujo-Desktops-Cameras.md`

- **Flujo: Carrito de Compras (Avanzado – UI + API + SQL)**  
  👉 `/docs/TC-Flujo-Desktops-Cameras-Advanced.md`

- **Flujo: Checkout Completo**  
  👉 `/docs/TC-Flujo-Checkout.md`

- **Flujo: Wishlist (Lista de Deseos)**  
  👉 `/docs/TC-Flujo-Wishlist.md`

- **Flujo: Búsqueda de Productos**  
  👉 `/docs/TC-Flujo-Busqueda.md`

---

## 🔌 **2. Flujos de API Testing**  
Validación completa de endpoints REST, integridad de datos y consistencia con UI.

- **Flujo: API Testing Completo (Productos, Carrito, Totales, Pedidos)**  
  👉 `/docs/TC-Flujo-API-Testing.md`

---

## 🗄️ **3. Validaciones SQL (Integridad Financiera)**  
Validación de tablas internas, totales, stock y trazabilidad del pedido.

- **Flujo: SQL del Pedido (Validación Financiera Completa)**  
  👉 `/docs/TC-Flujo-SQL-Pedido.md`

---

## 📝 **4. Plan de Pruebas (Test Plan)**  
Documento maestro que define:

- Estrategia de pruebas  
- Alcance y exclusiones  
- Tipos de pruebas  
- Criterios de entrada y salida  
- Roles y responsabilidades  
- Ambientes  
- Riesgos  
- Métricas  
- Herramientas  
- Artefactos QA  

👉 **`/docs/Plan-de-Pruebas.md`**

---

## 🧩 **5. Documentación Técnica (Opcional / Expandible)**  


- Arquitectura POM del Proyecto  
- Estructura de Carpetas Cypress  
- Guía de Instalación y Ejecución  
- Buenas Prácticas QA Automation  
- Roadmap Técnico  
- Diagramas de flujo  
- Diagramas de arquitectura  

---

# 🏗️ **Estructura Recomendada del Directorio `/docs`**

```
/docs
│
├── Plan-de-Pruebas.md
│
├── TC-Flujo-Login.md
├── TC-Flujo-Registro.md
├── TC-Flujo-Desktops-Cameras.md
├── TC-Flujo-Desktops-Cameras-Advanced.md
├── TC-Flujo-Checkout.md
├── TC-Flujo-API-Testing.md
├── TC-Flujo-SQL-Pedido.md
├── TC-Flujo-Busqueda.md
├── TC-Flujo-Wishlist.md
│
└── README.md   ← (este índice)
```


