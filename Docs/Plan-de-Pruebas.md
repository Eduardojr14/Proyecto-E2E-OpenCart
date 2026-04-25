# 🧪 **PLAN DE PRUEBAS – Proyecto OpenCart (Cypress E2E + API + SQL)**  
**Autor:** Eduardo José Parra Perdomo  
**Fecha:** 17/04/2026  
**Versión:** **1.2 (Actualizada con SQL + CI/CD)**

---

## 📌 **1. Objetivo del Plan de Pruebas**

Definir la estrategia, alcance, tipos de pruebas, criterios y recursos necesarios para validar la plataforma OpenCart mediante:

- Pruebas **End-to-End (UI)**  
- Pruebas **API REST** (solo para módulos que realmente exponen endpoints)  
- Validaciones **SQL** (solo para módulos que registran datos en BD)  
- Integración **UI + API + SQL** en flujos críticos  
- Automatización con **Cypress** bajo arquitectura **POM**  
- Ejecución continua mediante **Pipeline CI/CD (GitHub Actions)**  

El objetivo es garantizar la calidad funcional, técnica y financiera del e‑commerce.

---

## 🧭 **2. Alcance**

### ✔ Incluye:
- Validación de flujos críticos del e‑commerce  
- Validación de lógica contable (totales, impuestos, stock)  
- Validación de endpoints API reales (productos, carrito, totales, stock, pedidos)  
- Validación de integridad en base de datos (registro, carrito, pedidos)  
- Automatización completa de los flujos documentados  
- Reportes de ejecución (Mochawesome)  
- Ejecución en CI/CD  

### ❌ No incluye:
- API para Login, Registro, Wishlist o Búsqueda (no existen en la demo)  
- SQL para Wishlist o Búsqueda (no existen registros)  
- Pruebas de performance  
- Pruebas de seguridad avanzadas  
- Pruebas móviles nativas  

---

## 🧩 **3. Funcionalidades a Probar**

### 🔵 **UI (E2E)**
- Registro  
- Login  
- Logout  
- Búsqueda  
- Wishlist  
- Carrito (básico y avanzado)  
- Checkout  
- Validación de totales e impuestos  
- Navegación por categorías  

### 🔵 **API (solo módulos reales)**
- Productos  
- Carrito  
- Totales  
- Stock  
- Pedidos  
- Integración UI + API  

### 🔵 **SQL (solo módulos reales)**
- Registro de usuario  
- Pedido  
- Productos del pedido  
- Totales financieros  
- Stock descontado  
- Auditoría del pedido  

---

## 🧪 **4. Tipos de Pruebas**

- **Funcionales (UI)**  
- **Integración (UI + API)**  
- **Validación de datos (SQL)**  
- **Regresión automatizada**  
- **Smoke Testing**  
- **Validación financiera (totales, impuestos, stock)**  

---

## 🛠 **5. Herramientas**

| Herramienta | Uso |
|-------------|-----|
| Cypress     | Automatización UI + API |
| Node.js     | Entorno de ejecución |
| Mocha + Chai | Aserciones |
| MySQL       | Validaciones SQL |
| Mochawesome | Reportes |
| GitHub Actions | CI/CD |

---

## 🏗 **6. Estrategia de Pruebas**

### ✔ **Automatización basada en POM**
- Separación de lógica  
- Reutilización de componentes  
- Mantenibilidad  

### ✔ **Validación cruzada**
- UI → API → SQL  
- Totales e impuestos validados en 3 capas  

### ✔ **Datos controlados**
- Fixtures para usuarios  
- Datos dinámicos para pedidos  

### ✔ **Ejecución continua**
- Tests independientes  
- Limpieza de sesión  
- Idempotencia  
- Pipeline CI/CD ejecutando en cada push  

---

## 📝 **7. Nota sobre Validaciones SQL e Integridad de Datos**

*"Las validaciones de base de datos (SQL) incluidas en este proyecto han sido diseñadas y documentadas siguiendo la lógica de negocio de OpenCart.  
Dado que el entorno de pruebas es una demo pública, no se cuenta con credenciales de acceso directo al servidor MySQL externo.

Sin embargo, se han estructurado los casos de prueba SQL para demostrar el dominio técnico en la verificación de integridad financiera, persistencia de registros de clientes y auditoría de pedidos.  
En un entorno corporativo (Staging/Dev), estas consultas se integrarían directamente en el pipeline mediante comandos de Cypress o tareas de Node.js para un chequeo de calidad 360° (UI + API + DB)."*

---

## 📊 **8. Estimación de Casos de Pruebas**

| Flujo | Casos |
|-------|-------|
| Login          | 5–7 |
| Registro       | 7–9 |
| Búsqueda       | 8–9 |
| Wishlist       | 6–7 |
| Carrito básico | 8–10 |
| Carrito avanzado | 10–12 |
| Checkout       | 10–12 |
| API Testing    | 6–8 |
| SQL Testing    | 5–6 |

### ⭐ **Total estimado:** **≈ 70 casos de prueba**

---

## 🎯 **9. Criterios de Aceptación**

### ✔ **Inicio**
- Ambiente disponible  
- Datos de prueba cargados  
- Cypress configurado  
- Pipeline CI/CD operativo  

### ✔ **Finalización**
- Todos los tests ejecutados  
- Reportes generados  
- Defectos documentados  
- Validación SQL correcta  
- Totales financieros correctos  

---

## 🟥 **10. Criterios de Salida**

- 0 defectos críticos  
- 0 defectos bloqueantes  
- 95% de casos automatizados ejecutados con éxito  
- Validación SQL correcta  
- Totales financieros correctos  
- Pipeline CI/CD completado sin fallos  

---

## 🟦 **11. Riesgos**

- Cambios en la UI pueden romper selectores  
- Inestabilidad del ambiente demo  
- Datos inconsistentes en API  
- Latencia en BD  
- Limitaciones del entorno demo (sin acceso real a MySQL)  

---

## 🟩 **12. Mitigaciones**

- Selectores estables  
- Retries inteligentes  
- Intercepts para controlar API  
- Validaciones SQL simuladas con lógica real  
- Ejecución en CI/CD para detectar regresiones temprano  

---

## 📁 **13. Entregables**

- Código Cypress  
- Page Objects  
- Tests UI + API + SQL  
- Reportes Mochawesome  
- Pipeline CI/CD  
- Documentación `/docs`  
- Diagramas visuales  
- Plan de Pruebas (este documento)  

---
