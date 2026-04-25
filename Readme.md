# ⭐ Proyecto de Automatización E2E + API + SQL con Cypress  
### Plataforma: OpenCart (E-Commerce Demo)

![Cypress](https://img.shields.io/badge/Cypress-E2E%20Testing-brightgreen)  
![Node.js](https://img.shields.io/badge/Node.js-JavaScript-yellow)  
![MySQL](https://img.shields.io/badge/MySQL-SQL-blue)  
![CI/CD](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-success)  
![Estado](https://img.shields.io/badge/Estado-Completado-brightgreen)

---

## 📌 1. Objetivo del Proyecto  
Desarrollo de un **framework de automatización híbrido** (UI + API + DB) para validar la integridad de flujos críticos en un e-commerce. Este proyecto no solo valida que los botones funcionen, sino que asegura que los datos sean consistentes en el backend y que el sistema responda bajo estándares de seguridad y performance profesional.

### Key Highlights:
- **Cobertura 360°**: Pruebas en tres capas (Interfaz, API y Base de Datos).
- **Resiliencia Técnica**: Manejo de aserciones dinámicas para entornos de prueba inestables.
- **Calidad Profesional**: Pipeline automatizado con reportes detallados de ejecución.

---

## 🧩 2. Tecnologías y Metodologías

| Tecnología | Uso / Aplicación |
|-----------|-----|
| **Cypress** | Core de automatización para UI y API Testing. |
| **JavaScript (ES6+)** | Lógica de programación y scripts de soporte. |
| **Page Object Model (POM)** | Arquitectura de código para máxima mantenibilidad. |
| **GitHub Actions** | Orquestación de CI/CD (Ejecución automática en cada Push). |
| **Mochawesome** | Reportes HTML dinámicos con capturas de evidencia. |
| **SQL Intelligence** | Diseño de consultas para auditoría de integridad financiera. |

---

## 🏗️ 3. Arquitectura del Framework (Estructura de Carpetas)

```bash
PROYECTO-E2E-OPENCART/
├── .github/workflows/    # Configuración del Pipeline CI/CD
├── cypress/
│   ├── e2e/              # Suites de prueba (Smoke, API, E2E)
│   ├── pages/            # Objetos del modelo POM
│   ├── fixtures/         # Datos de prueba (JSON)
│   ├── support/          # Comandos personalizados y utilidades
├── reports/              # Reportes generados tras ejecuciones
├── docs/                 # Estrategia de pruebas, Plan de QA y Diagramas
└── cypress.config.js     # Configuración global del framework
```

---

## 🧪 4. Estrategia de Pruebas Implementada

### A. Smoke Testing (Sanity Check) 🟢
- Validación rápida de carga del sitio y elementos críticos (`test-smoke.cy.js`).

### B. E2E UI Testing (User Journeys) 🛒
- **Flujos Críticos**: Registro de usuarios, Búsqueda avanzada, Gestión de Wishlist.
- **Proceso de Compra**: Flujo completo de Carrito y Checkout con validación de mensajes de éxito.

### C. API Testing Suite (Backend Quality) 🔌
- **CRUD Operacional**: Gestión de productos y carritos vía REST.
- **Performance**: Validación de tiempos de respuesta (SLA < 500ms).
- **Seguridad**: Pruebas de acceso no autorizado y validación de API Keys inválidas.
- **Resiliencia**: Manejo de respuestas 404/200 con validación de cuerpo JSON (manejo de *Notices* de PHP).

### D. Data Integrity (SQL) 🗄️
*Documentación técnica de consultas para verificar:*
- Persistencia de pedidos en `oc_order`.
- Descuento de stock en `oc_product` tras la compra.
- Historial de estados de orden en `oc_order_history`.

---

## 🚀 5. Pipeline CI/CD y Reportes
El proyecto corre automáticamente en **GitHub Actions** en cada actualización, garantizando que el código en el repositorio sea siempre funcional.

1. **Ejecución Headless**: Cypress corre en contenedores Linux optimizados.
2. **Generación de Artefactos**: Los reportes HTML y videos de los fallos se guardan automáticamente.
3. **Mantenimiento**: El pipeline asegura que ningún cambio rompa los flujos existentes.

---

## 🛠️ 6. Ejecución Local

```bash
# 1. Clonar el proyecto e instalar dependencias
npm install

# 2. Correr todos los tests en la terminal (Modo CI)
npx cypress run

# 3. Abrir la interfaz interactiva para desarrollo
npx cypress open
```

---

## 💡 7. Desafíos Técnicos Superados
Durante el desarrollo, se implementó una **lógica de validación híbrida** en la suite de API para manejar comportamientos inconsistentes del servidor de pruebas (como el retorno de estados `200 OK` con mensajes de error en el cuerpo). Esto garantiza que el pipeline se mantenga en verde sin generar falsos positivos, demostrando una capacidad de resolución de problemas avanzada en QA Automation.

---

## 👨‍💻 Autor
**Eduardo José Parra Perdomo** *QA Functional Analyst | QA Automation Specialist* [LinkedIn Profile](https://www.linkedin.com/in/eduardo-j-parra-p/)

---

