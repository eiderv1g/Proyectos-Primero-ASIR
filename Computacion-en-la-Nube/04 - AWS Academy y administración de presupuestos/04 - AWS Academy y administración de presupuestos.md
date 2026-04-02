# 04 - AWS Academy y administración de presupuestos en AWS

# 1. AWS Academy

Es un **programa educativo oficial de Amazon Web Services (AWS)** diseñado para **instituciones académicas**, que ofrece cursos, laboratorios prácticos y recursos para aprender **computación en la nube**.

---

## 1.1  AWS Academy Cloud Foundations

![image.png](04%20-%20AWS%20Academy%20y%20administraci%C3%B3n%20de%20presupuestos%20/image.png)

Usaremos este curso para trabajar durante la asignatura. Hay que entrar a través del enlace que ha mandado Ignacio a vuestro correo.

Es un curso **oficial de nivel inicial** que enseña:

- Fundamentos del cloud computing
- Servicios básicos de AWS
- Arquitectura en la nube
- Seguridad y buenas prácticas

---

Me logueo y llego a una pantalla como esto:

![image.png](04%20-%20AWS%20Academy%20y%20administraci%C3%B3n%20de%20presupuestos%20/image%201.png)

---

# 2. DOCUMENTACIÓN AWS

https://docs.aws.amazon.com/

![image.png](04%20-%20AWS%20Academy%20y%20administraci%C3%B3n%20de%20presupuestos%20/image%202.png)

**AWS Documentation** es la documentación oficial que proporciona instrucciones, ejemplos y referencias para usar los servicios de AWS. Incluye:

- Guías paso a paso (tutoriales)
- Manuales de servicios (EC2, S3, etc.)
- Ejemplos de código
- Referencias de API
- Buenas prácticas y arquitectura

---

# 3. FACTURACIÓN Y ECONOMÍA EN LA NUBE

## 3.1 Factores fundamentales de costo con AWS:

1. **Cómputo:** se carga por hora (o segundo en caso de Linux)
2. **Almacenamiento:** normalmente se cobra por GB
3. **Transferencia de datos:** se agrega y se cobra la salida, la entrada no tiene cargo salvo excepciones y normalmente va por GB.

---

## 3.2 Modelos de precios en AWS

![image.png](04%20-%20AWS%20Academy%20y%20administraci%C3%B3n%20de%20presupuestos%20/image%203.png)

| Modelo | Compromiso | Pago inicial | Flexibilidad | Precio | Uso recomendado |
| --- | --- | --- | --- | --- | --- |
| Free Tier | No | No | Alta | Gratis | Pruebas y aprendizaje |
| On-Demand | No | No | Muy alta | Alto | Cargas variables |
| Spot Instance | No | No | Baja | Muy bajo | Tareas tolerantes a fallos |
| Reserved Instance | 1 o 3 años | Opcional | Media | Medio | Uso predecible |
| Savings Plans | 1 o 3 años | Opcional | Alta | Bajo | Uso continuo y flexible |

---

## 3.3 Instancias Reservadas (IR)

En AWS puedes ahorrar dinero usando **Instancias Reservadas (RI)** de Amazon EC2. Consiste en **comprometerte a usar recursos durante un tiempo (1 o 3 años)** a cambio de un descuento.

Existen varios tipos:

### A) NURI (No Upfront Reserved Instances)

- ❌ No pagas nada al inicio
- 💸 Pagas mes a mes
- 🔻 Menor descuento

### B) PURI (Partial Upfront Reserved Instances)

- ⚖️ Pagas una parte al inicio
- 💸 Resto mensual
- 🔸 Descuento medio

### C) AURI (All Upfront Reserved Instances)

- 💳 Pagas todo al inicio
- 🔻 Máximo descuento (hasta ~75%)

---

### Nivel gratuito de AWS (Free Tier)

- Obtener **experiencia práctica sin coste**
- Probar servicios reales de AWS
- Aprender sin necesidad de inversión inicial
- No todo es gratis → hay **límites de uso**
- Si los superas, **te cobran**
- Algunos servicios son “siempre gratis” y otros solo por 12 meses

---

## 3.4 Calculadora de precios de AWS

![image.png](04%20-%20AWS%20Academy%20y%20administraci%C3%B3n%20de%20presupuestos%20/image%204.png)

https://calculator.aws/#/

Es una herramienta que permite **estimar cuánto costará usar servicios en la nube antes de implementarlos**. Sirve para: 

- **Calcular costos mensuales** de una solución
- **Identificar formas de ahorrar dinero**
- **Diseñar arquitecturas antes de crearlas**
- Ver el detalle de precios y estimaciones
- Elegir tipos de instancias y configuraciones adecuadas
- Organizar presupuestos por servicios