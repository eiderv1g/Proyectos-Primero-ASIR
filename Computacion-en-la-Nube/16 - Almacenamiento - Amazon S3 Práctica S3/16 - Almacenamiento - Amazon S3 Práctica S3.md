# 16 - Almacenamiento - Amazon S3. Práctica S3

# 1. AMAZON S3 (AMAZON SIMPLE STORAGE SERVICE)

![image.png](16%20-%20Almacenamiento%20-%20Amazon%20S3%20Pr%C3%A1ctica%20S3/image.png)

**Amazon S3** es un servicio de almacenamiento en la nube de AWS que guarda datos como **objetos dentro de contenedores llamados buckets**. Es altamente escalable, seguro y diseñado para almacenar cualquier tipo de archivo

---

## 1.1 SITUACIONES TÍPICAS DE USO

- 💾 **Copias de seguridad y almacenamiento** → guardar datos de forma segura
- 🌐 **Alojamiento de aplicaciones** → servir archivos para apps
- 🎥 **Alojamiento de medios** → imágenes, videos, audio
- 📦 **Entrega de software** → distribución de archivos descargables

S3 también se conecta con Instancias EC2, Aplicaciones y Usuarios finales

---

## 1.2 INFO GENERAL

- Los datos se guardan como **objetos dentro de buckets**
- **Almacenamiento casi ilimitado**
- Tamaño máximo por objeto: **5 TB**
- **Alta durabilidad (99.999999999%)**
- Control de acceso detallado (permisos por objeto/bucket)

---

## 1.3 CLASES DE ALMACENAMIENTO

S3 ofrece diferentes tipos según uso:

- **S3 Standard** → acceso frecuente
- **S3 Intelligent-Tiering** → ajusta automáticamente el costo
- **S3 Standard-IA** → acceso poco frecuente
- **S3 One Zone-IA** → más barato pero menos redundante
- **S3 Glacier** → archivado barato
- **S3 Glacier Deep Archive** → almacenamiento muy económico a largo plazo

Eliges entre **rendimiento vs costo**

---

## 1.4 URL DE LOS BUCKETS

Para acceder a los datos en S3 hay dos formas:

1. **Estilo ruta (Path-style)**

```
https://s3.region.amazonaws.com/bucket-name
```

1. **Estilo virtual-hosted**

```
https://bucket-name.s3.region.amazonaws.com
```

La segunda es la más usada actualmente

---

## 1.5 REDUNDANCIA DE LOS DATOS

![image.png](16%20-%20Almacenamiento%20-%20Amazon%20S3%20Pr%C3%A1ctica%20S3/image%201.png)

Los archivos se replican automáticamente, se almacenan en **múltiples instalaciones (AZs)** dentro de una región y si una falla, los datos siguen disponibles

Esto garantiza **alta disponibilidad y durabilidad**

---

## 1.6 PRECIOS EN AMAZON S3

El modelo de pago es de **pago por uso**:

### ✔️ Pagas por:

- Almacenamiento (GB/mes)
- Transferencia de datos **saliente**
- Operaciones (PUT, GET, COPY, etc.)

### ❌ No pagas por:

- Transferencias **entrantes**
- Transferencias dentro de la misma región (ej. S3 → EC2 o CloudFront)

---

# 2. PRÁCTICA EN S3

### 1. ARCHIVOS PASADOS POR IGNACIO

- En el siguiente Drive, tenemos todos estos archivos:

https://tinyurl.com/MUP5DM4F

![image.png](16%20-%20Almacenamiento%20-%20Amazon%20S3%20Pr%C3%A1ctica%20S3/image%202.png)

---

### 2. CREACIÓN DE UN BUCKET

- En el **laboratorio para el alumnado** entro en Amazon S3.
- Vamos a crear un bucket → Buckets / Crear bucket → Le pongo el nombre `prueba-bucket-mopc`dejando todas las opciones de configuración por defecto.
- Bucket creado:

![image.png](16%20-%20Almacenamiento%20-%20Amazon%20S3%20Pr%C3%A1ctica%20S3/image%203.png)

---

### 3. MODIFICANDO PERMISOS Y POLÍTICAS

- Arrastrándolos, cargo los ficheros del drive en el bucket:

![image.png](16%20-%20Almacenamiento%20-%20Amazon%20S3%20Pr%C3%A1ctica%20S3/image%204.png)

- Podemos bichear y ver los detalles de los archivos (quién es el propietario, ver la URL del objeto…)
- ¡Vamos a pulsar en la URL del objeto! → ACCESO DENEGADO. Vamos a cambiar esto…

![image.png](16%20-%20Almacenamiento%20-%20Amazon%20S3%20Pr%C3%A1ctica%20S3/image%205.png)

- Selecciono el bucket y voy a la pestaña de permisos → En la pestaña de **Bloquear acceso público**, desactivo esta opción para que todo el mundo pueda ver los ficheros:

![image.png](16%20-%20Almacenamiento%20-%20Amazon%20S3%20Pr%C3%A1ctica%20S3/image%206.png)

- También tengo que establecer una política para que se pueda acceder a estos objetos: entramos en la política del Bucket.
- Abrimos el fichero JSON de Ignacio, copiamos su contenido y lo pegamos en la política:
- OJO, acuérdate de cambiar el “Resource” del código por el nombre de tu bucket (**ARN del Bucket:**

![image.png](16%20-%20Almacenamiento%20-%20Amazon%20S3%20Pr%C3%A1ctica%20S3/image%207.png)

- Ahora, si abro la URL de un objeto de nuestro Bucket, podremos visualizarlo:

![¡ÉXITO!](16%20-%20Almacenamiento%20-%20Amazon%20S3%20Pr%C3%A1ctica%20S3/image%208.png)

¡ÉXITO!