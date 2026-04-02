# 19 - AWS LAMBDA

# ALGUNAS PREGUNTAS

### ¿Qué diferencia hay entre utilizar Amazon RDS y utilizar EC2 con una BD?

**RDS** → AWS gestiona la base de datos por ti

**EC2 + DB** → tú gestionas todo

### ¿Qué ventajas tiene la configuración de Amazon RDS MultiAZ?

La configuración **Multi-AZ** en Amazon RDS está pensada para **evitar caídas y asegurar que la base de datos siempre esté disponible**.

- Alta disponibilidad
- Failover automático
- Replicación sincrónica (sin pérdida de datos)
- Mayor resiliencia ante fallos
- Mantenimiento con mínima interrupción
- Protección ante fallos de zona de disponibilidad

---

# 1. INTRO A AWS LAMBDA

![image.png](19%20-%20AWS%20LAMBDA/image.png)

AWS Lambda es una opción de cómputo **sin servidor**. Pero, ¿Cómo funciona esta movida?

Cargas el código → 

→ Se convierte en una función Lambda → 

→ Se activa por eventos, *es decir, se ejecuta cuando ocurre algo cono subir un archivo a S3, una petición HTTP, etc* → 

→ Se ejecuta automáticamente →

→ Se paga solo por uso

**Lambda ejecuta tu código automáticamente en respuesta a eventos, sin servidores y pagando solo por el tiempo de ejecución.**

---

## 1.1 EC2 VS LAMBDA

| Aspecto | Arquitectura con Amazon EC2 | Arquitectura Serverless con AWS Lambda |
| --- | --- | --- |
| Gestión de infraestructura | Servidores gestionados por el usuario | AWS gestiona toda la infraestructura |
| Configuración | Debes crear, configurar y mantener instancias (SO, parches, actualizaciones) | Solo subes el código, sin gestionar servidores ni SO |
| Escalado | Manual o semiautomático (requiere configuración) | Automático según eventos |
| Coste | Pagas por el tiempo que la instancia está en ejecución | Pagas solo por invocaciones y tiempo de ejecución real |
| Uso recomendado | Aplicaciones de larga ejecución | Procesos basados en eventos |
| Tipo de carga | Carga estable | Carga variable o impredecible |
| Arquitectura | Control total del entorno | Microservicios y funciones independientes |

---

## 1.3 VENTAJAS DE LAMBDA

- Es compatible con múltiples lenguajes de programación
- Administración totalmente automatizada
- Tolerancia a fallas integrada
- Admite la coordinación de múltiples funciones
- Precios de pago por uso

---

## 1.4 FUENTES DE DEVENTOS DE LAMBDA

Algunos servicios que pueden activar Lambda:

- Amazon S3 → cuando se sube un archivo
- Amazon DynamoDB → cambios en datos
- Amazon SNS → notificaciones
- Amazon SQS → mensajes en cola
- Amazon API Gateway → llamadas HTTP
- Balanceadores de carga → tráfico de aplicaciones

**Ocurre un evento → Se activa la función Lambda → Ejecuta código solo en ese momento**

En cuando al monitoreo, **Amazon Cloudwatch** registra logs, métricas y errores.

---

## 1.5. EJEMPLOS DE FUNCIÓN LAMBDA

Ejemplo de cómo usar **AWS Lambda** para **encender y apagar instancias de Amazon EC2 automáticamente**.

### DETENER INSTANCIAS EC2

- **Evento de Amazon CloudWatch (horario)**
    - Ejemplo: a las 20:00
- **Se activa Lambda**
    - Ejecuta código automáticamente
- **Usa un rol IAM**
    - Permiso para gestionar EC2
- 🛑 **Se detienen las instancias EC2**

### INICIAR INSTANCIAS EC2

- Evento de CloudWatch (otro horario)
    - Ejemplo: a las 08:00
- Lambda se ejecuta
- Usa el rol IAM
- ▶️ **Se inician las instancias EC2**

Apagar servidores por la noche → ahorrar dinero | Encenderlos por la mañana → volver a trabajar

---

## 1.6 DINEROSS

Cuotas de AWS Lambda:

### Límites suaves (por región)

- Ejecuciones simultáneas: **1000**
- Almacenamiento de funciones y capas: **75 GB**

Se pueden aumentar solicitándolo a AWS

### Límites estrictos (por función)

- Memoria máxima: **10 240 MB (≈10 GB)**
- Tiempo máximo de ejecución: **15 minutos**
- Tamaño del paquete (zip descomprimido): **250 MB**
- Tamaño de imagen de contenedor: **10 GB**

Estos límites no se pueden aumentar fácilmente

---