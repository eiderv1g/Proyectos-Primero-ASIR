# 21. AWS DynamoDB

# 0. RECORDANDO COSITAS

## BASES DE DATOS RELACIONALES VS NO RELACIONALES

### RELACIONAL (SQL)

- **Almacenamiento**:
Datos organizados en **filas y columnas** (tablas)
- **Esquema**:**Fijo** → debes definir la estructura antes
- **Consultas**:
Usa **SQL** (lenguaje estructurado)
- **Escalabilidad**:**Vertical** → mejorar el servidor (más CPU, RAM)
- **Ejemplo**:
Tabla con columnas como ISBN, Título, Autor…

### NO RELACIONAL (NoSQL)

- **Almacenamiento**:
Formatos como **clave-valor, documentos o grafos**
- **Esquema**:**Flexible/dinámico**
- **Consultas**:
Orientadas a **documentos** (no SQL clásico)
- **Escalabilidad**: **Horizontal** → añadir más servidores
- **Ejemplo**:
Un objeto tipo JSON:

```json
{
  ISBN: 3111111223439,
  Título: "Profundidades fulminantes",
  Autor: "Jackson, Mateo"
}
```

***Relacional = tablas y estructura fija | No relacional = flexible y escalable***

## API, ¿QUÉ ES?

Una **API (Application Programming Interface)** es un **intermediario** que permite que dos aplicaciones se comuniquen entre sí. Es decir, es la forma en la que un programa le pide datos o acciones a otro programa

---

# 1. ¿QUÉ ES DYNAMODB?

![image.png](image.png)

**Amazon DynamoDB** es un servicio de base de datos **NoSQL** totalmente gestionado por AWS (no relacional). Está diseñado para ofrecer **alto rendimiento, baja latencia y escalabilidad automática**, sin que tengas que preocuparte por servidores o mantenimiento.

- **NoSQL (clave-valor y documentos)**
No usa tablas relacionales tradicionales, sino elementos con claves.
- **Totalmente gestionado**
AWS se encarga de servidores, parches, backups, etc.
- **Escalabilidad automática**
Puede manejar desde pocas peticiones hasta millones por segundo.
- **Alta disponibilidad**
Replica datos automáticamente en varias zonas (Multi-AZ).
- **Baja latencia**
Responde en milisegundos.
- **Pago por uso**
Solo pagas por lo que lees/escribes.

# 2. MINI-PRÁCTICA

### CREAMOS UNA TABLA EN DYNAMODB

- Abrimos el Learner Lab para cacharrear
- Vamos a DynamoDB

![image.png](image%201.png)

- Creamos una tabla

![image.png](image%202.png)

![image.png](image%203.png)

### 2. BICHEAMOS

- Pulsamos en la tabla y podemos ver más info

![image.png](image%204.png)

- Podemos examinar, escanear, consultar…

![image.png](image%205.png)