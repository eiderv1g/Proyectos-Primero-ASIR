# 18 - Bases de datos. Amazon RDS

# 1. AWS BASES DE DATOS

## 1.1 INSTANCIAS EN LAS BD DE AMAZON RDS

![image.png](18%20-%20Bases%20de%20datos%20Amazon%20RDS/image.png)

El diagrama explica que cuando creas una base de datos en RDS, debes elegir **3 cosas principales**:

### 1. LA CLASE DE INSTANCIA
Es como elegir qué tan potente será tu base de datos:

- CPU → capacidad de procesamiento
- Memoria (RAM) → rapidez al manejar datos
- Red → velocidad de conexión

Más potencia = más rendimiento (pero también más costo)

### 2. ALACENAMIENTO

Aquí eliges el tipo de disco:

- Magnético (HDD) → más barato, más lento
- SSD → más rápido, uso general
- IOPS provisionadas → alto rendimiento para apps exigentes

Define **qué tan rápido se leen/escriben los datos**

### 3. MOTOR DE BASE DE DATOS (el “software”)

Puedes elegir entre varios motores:

- MySQL
- Amazon Aurora
- PostgreSQL
- Microsoft SQL Server
- MariaDB
- Oracle Database

Es el tipo de base de datos que vas a usar

---

## 1.2 AMAZON RDS EN UNA NUBE VIRTUAL PRIVADA (VPC)

¿Cómo se organiza **Amazon RDS** dentro de una red privada en AWS llamada **Amazon VPC?**

### FLUJO BÁSICO

1.  **Usuarios (internet)**
    - Acceden desde fuera de AWS.
2. **Puerta de enlace de internet (Internet Gateway)**
    - Permite que el tráfico entre desde internet a la VPC.
3. **Subred pública → Amazon EC2**
    - Aquí está el servidor (por ejemplo, una web)
    - Es accesible desde internet
4. **Subred privada → Amazon RDS**
    - Aquí está la base de datos
    - ❌ No es accesible desde internet
    - ✅ Solo EC2 puede conectarse a ella

### IDEA CLAVE DE SEGURIDAD

La base de datos **NO está expuesta a internet**

- Solo el servidor (EC2) puede acceder a RDS
- Los usuarios nunca se conectan directamente a la base de datos

**Los usuarios acceden a una aplicación en EC2 (pública), que a su vez se conecta de forma segura a una base de datos RDS ubicada en una subred privada dentro de la VPC.**

---

## 1.3 ALTA DISPONIBILIDAD (MULTI-AZ) EN AMAZON RDS

Hay **dos copias de la base de datos** en distintas zonas:

- **Principal (M)** → la que usa la aplicación
- **Secundaria (S)** → en espera (backup en otra zona)

La copia es **sincrónica** (los datos se duplican en tiempo real). Si falla la principal → AWS cambia automáticamente a la secundaria (**failover**)

**Alta disponibilidad (evitar caídas), NO mejora rendimiento**

---

## 1.4 RÉPLICAS DE LECTURA

Sirven para **mejorar el rendimiento en lecturas**

- Principal → recibe escritura
- Réplica → solo lecturas

La replicación  es **asíncrona,** es decir, puede haber pequeño retraso.

Se pueden usar para consultas pesadas, escalar la aplicación o promover a principal si falla.

**Mejora rendimiento, NO es para alta disponibilidad estricta**

---

| Característica | Multi-AZ | Read Replicas |
| --- | --- | --- |
| 🎯 Objetivo principal | Alta disponibilidad | Mejorar rendimiento |
| 📍 Ubicación | Otra zona (AZ) | Misma o distinta AZ/región |
| 🔁 Tipo de replicación | Sincrónica | Asíncrona |
| ⚡ Impacto en rendimiento | ❌ No mejora lecturas | ✅ Mejora lecturas |
| 🛠️ Uso principal | Recuperación ante fallos | Escalar consultas |
| 🔄 Failover automático | ✅ Sí | ❌ No automático |
| 👥 Acceso | Solo a la principal | Se puede leer de réplicas |
| 🧠 Consistencia de datos | Alta (en tiempo real) | Puede haber retraso |
| 🔄 Promoción a principal | Automática | Manual (o semiautomática) |

---

## 1.5 DINEROSS

Para la facturación, pagas **solo mientras la base de datos está activa**

- Cobro por hora de uso
- También influye:
    - Motor (MySQL, PostgreSQL…)
    - Tamaño
    - Tipo de instancia (CPU/RAM)

Existen dos formas de compra:

- **Bajo demanda (On-demand)**
    - Pagas por hora
    - Flexible
- **Instancias reservadas**
    - Pagas por adelantado (1 o 3 años)
    - Más barato

**Puedes tener múltiples instancias para soportar más carga**

Para la implementación y la transferencia de datos, los costes dependen de:

**a) Tipo de despliegue**

- Una zona (Single-AZ) → más barato
- Varias zonas (Multi-AZ) → más caro pero más seguro

**b) Transferencia de datos**

- 📥 Entrada → gratis
- 📤 Salida → se paga

**c) Solicitudes**

- Cuantas más consultas hagas → mayor coste

---