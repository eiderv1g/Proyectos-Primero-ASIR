# 17 - Práctica Postgresql en EC2

# ALGUNAS PREGUNTAS…

### ¿Cuándo tiene sentido usar s3 y cuándo EBS para el almacenamiento?

### S3 es ideal para:

- Archivos estáticos (imágenes, vídeos, PDFs)
- Backups y copias de seguridad
- Data lakes / big data
- Logs y archivos históricos
- Hosting de contenido estático (webs, assets)

*EJ → Guardar fotos de usuarios o backups diarios de una base de datos*

### EBS es ideal para:

- Bases de datos (MySQL, PostgreSQL, MongoDB)
- Sistemas de archivos
- Aplicaciones que necesitan baja latencia
- Sistemas operativos (boot disk)

*EJ → Ejecutar una base de datos en EC2 que necesita lecturas/escrituras rápidas*

---

### S3 es un servicio global o está en una zona de disponibilidad?

¡Es un servicio global! Por eso nuestro bucket tiene que tener un nombre específico y único.

---

# 1. AWS BASES DE DATOS

## 1.1 AMAZON RDS (RELATIONAL DATABASE SERVICE)

### UN POCO DE HISTORIA…

En amazon tenemos servicios no administrados y servicios administrados:

- **Sin administrar:** administras el escalado, la tolerancia a errores y la disponibilidad. 
→ *Con el tiempo fue surgiendo la necesidad de que Amazon administrara más servicios para dar espacio al usuario a centrarse en otras movidas. Así van surgiendo más servicios administrados…*
- **Administrados:** el escalado, la tolerancia a errores y la disponibilidad suelen estar integrados. Por ejemplo, S3 
→ *los archivos se replican solos de manera global, es decir, Amazon se encarga de administrar eso. Luego, cualquier cosa que instale en EC2, está administrado por nosotros mismos.*

### BASES DE DATOS RELACIONALES

![image.png](17%20-%20Pr%C3%A1ctica%20Postgresql%20en%20EC2/image.png)

Una **base de datos relacional** es un tipo de base de datos que **organiza la información en tablas** (filas y columnas) y **relaciona esas tablas entre sí mediante claves**.

- Cada **tabla** representa una entidad (por ejemplo: usuarios, pedidos).
- Cada **fila** es un registro (un usuario concreto).
- Cada **columna** es un atributo (nombre, edad, etc.).
- Las tablas se conectan mediante:
    - 🔑 **Clave primaria (Primary Key)** → identifica de forma única cada fila
    - 🔗 **Clave foránea (Foreign Key)** → conecta una tabla con otra

### DESAFÍOS DE LAS BASES DE DATOS RELACIONALES

- Mantenimiento del servidor y huella energética
- Instalación y parches de software
- Copias de seguridad y alta disponibilidad de las bases de datos
- Límites de escalabilidad
- Seguridad de los datos
- Instalación y parches del sistema operativo (SO)

### DESDE LAS BASES DE DATOS EN LAS INSTALACIONES A AMAZON RDS

En un entorno **on-premise (instalaciones propias)**, tú te encargas absolutamente de todo: desde el hardware físico hasta la base de datos. Esto incluye instalar servidores, configurar el sistema operativo, aplicar parches, hacer copias de seguridad y garantizar que todo funcione sin caídas. 
→ **Es el modelo con más control, pero también el más costoso y complejo de mantener.**

Cuando migras a **Amazon EC2**, das un primer paso hacia la nube. AWS se encarga de la infraestructura física (servidores, red, energía), pero tú sigues administrando el sistema operativo y la base de datos. 
**→ Es decir, reduces trabajo “físico”, pero aún tienes una gran carga de gestión técnica.**

El siguiente paso es usar servicios gestionados como **Amazon RDS** o **Amazon Aurora**. Aquí AWS asume casi toda la administración: instala la base de datos, aplica parches, realiza backups automáticos y gestiona la alta disponibilidad. 
**→ Tú solo te ocupas de usar la base de datos y optimizar tus consultas. Esto supone una gran simplificación operativa.**

| Tarea / Responsabilidad | On-Premise | Amazon EC2 | Amazon RDS / Amazon Aurora |
| --- | --- | --- | --- |
| Optimización de aplicaciones | Tú | Tú | Tú |
| Escalado | Tú | Tú | AWS (más automatizado) |
| Alta disponibilidad | Tú | Tú | AWS |
| Backups | Tú | Tú | AWS (automáticos) |
| Parches de la base de datos | Tú | Tú | AWS |
| Instalación de la base de datos | Tú | Tú | AWS |
| Parches del sistema operativo | Tú | Tú | AWS |
| Instalación del sistema operativo | Tú | Tú | AWS |
| Mantenimiento del servidor | Tú | AWS | AWS |
| Infraestructura (hardware, red, energía, climatización) | Tú | AWS | AWS |

---

# 2. PRÁCTICA DE HOY

Enlace a las instrucciones de la práctica:
https://tinyurl.com/545karvk

### 1. CREO UNA INSTANCIA UBUNTU

![image.png](17%20-%20Pr%C3%A1ctica%20Postgresql%20en%20EC2/image%201.png)

- **Nombre** → basedatos_mopc
- **AMI** → Ubuntu
- **Tipo de instanci**a → t2.large
- **Par de claves** → vockey
- **Configuraciones de red** → Check Crear grupo de seguridad | Permitir el tráfico de SSH desde cualquier lugar
- **Almacenamiento** → 16GB
- **Detalles avanzados** → no toco nada

### 2. INSTALACIONES

- Me conecto a la instancia (lo hago vía navegador, más rápido)
- Instalo y creo una serie de cosas:

```bash
#POSTGRESQL =========================================================================
sudo apt update -y
sudo apt -y install postgresql postgresql-contrib #instalo postgresql

sudo apt -y install postgresql-client #instalo el cliente para conectarme a la bs

sudo systemctl enable --now postgresql #activo el servicio
sudo systemctl status postgresql --no-pager #reviso que el servicio esté funcionando
sudo -u postgres psql #me coneco al admi postgresql

#BASE DE DATOS SQL ==================================================================
CREATE DATABASE fp_prometeo; #creo la bs
CREATE USER alumno WITH ENCRYPTED PASSWORD 'Alumno123!'; #creo un usuario y contraseña
GRANT ALL PRIVILEGES ON DATABASE fp_prometeo TO alumno; #le doy privilegios

\c fp_prometeo #accedo a la bs
GRANT ALL ON SCHEMA public TO alumno; 
ALTER SCHEMA public OWNER TO alumno; #le doy permisos al usuario "alumno"
\q #salgo y vuelvo a la consola

#CONEXIÓN A LA BS ===================================================================
psql -h localhost -U alumno -d fp_prometeo #me conecto con las credenciales 

```

- ¡Estoy dentro!

![image.png](17%20-%20Pr%C3%A1ctica%20Postgresql%20en%20EC2/image%202.png)

### 3. PROBAR BS

- Ya está todo listo. Ahora voy a comprobar que todo funciona correctamente:

```bash
#CREO UNA TABLA =====================================================================
CREATE TABLE visitas (
  id SERIAL PRIMARY KEY,
  alumno TEXT NOT NULL,
  momento TIMESTAMP NOT NULL DEFAULT now()
);

#INSERTO REGISTROS ==================================================================
INSERT INTO visitas (alumno) VALUES
('Ana'), ('Luis'), ('María');

#LO MUESTRO EN LA CONSOLA ===========================================================
SELECT * FROM visitas ORDER BY id;
```

- Yo he creado una mini-base de datos de montañas:

![image.png](17%20-%20Pr%C3%A1ctica%20Postgresql%20en%20EC2/image%203.png)

---