# 11 - Intro Amazon EC2

# 1. AMAZON EC2 (ELASTIC COMPUTE CLOUD)

![image.png](image.png)

**Servicio de computación en la nube de AWS** que permite crear y ejecutar máquinas virtuales (**instancias**) bajo demanda. Ofrece escalabilidad, pago por uso y control total del sistema operativo y recursos (CPU, memoria, almacenamiento y red).

Se llama “Elastic” porque Amazon EC2 permite ajustar los recursos de forma dinámica, según la demanda:

- Puedes aumentar o reducir instancias en minutos.
- Escalas automáticamente cuando sube o baja el tráfico.
- Pagas solo por los recursos que usas.
- No necesitas infraestructura fija.

En resumen, elastic significa flexible y escalable bajo demanda.

*Puede usarse para servidores web, bases de datos, servidores de juegos, servidores de correo, streaming o contenido multimedia, almacenamiento de archivos, procesamiento de dato (cómputo)…)*

### Características

- **Máquinas virtuales (instancias EC2):** servidores en la nube listos para usar.
- **Control total:** puedes instalar el sistema operativo (Linux o Windows) y configurarlo como quieras.
- **Disponibilidad global:** puedes lanzar instancias en distintas regiones del mundo.
- **Plantillas (AMI):** usas imágenes preconfiguradas para crear servidores rápidamente.
- **Rápido despliegue:** en minutos puedes tener tu servidor funcionando.
- **Control del tráfico:** gestionas quién accede y cómo (redes y seguridad).

---

## 1.1 INSTANCIAS

![image.png](image%201.png)

Una instancia es un servidor virtual que puedes crear, configurar y usar para ejecutar aplicaciones. En Amazon EC2, las instancias son máquinas virtuales que se ejecutan en la nube.

Las instancias incluyen:

- Sistema operativo (Linux, Windows, etc.)
- CPU, memoria y almacenamiento configurables
- Dirección IP y conexión de red

### Los tipos de instancia

Un tipo de instancia define las características de hardware de una instancia. Incluye:

- Cantidad de CPU
- Memoria RAM
- Rendimiento de red
- Tipo de almacenamiento

---

## 1.2 LAS AMI

Una **AMI (Amazon Machine Image)** es una plantilla en Amazon EC2 que contiene todo lo necesario para crear una instancia. Incluye:

- Sistema operativo
- Software preinstalado
- Configuración básica del sistema
Permite lanzar rápidamente instancias idénticas de forma consistente

**Puedes crear plantillas a partir de una instancia**
Instancias > Acciones > Imagen y plantillas > crear plantilla a partir de instancia