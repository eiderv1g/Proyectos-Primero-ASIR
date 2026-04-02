# 06 - Learner Lab e Intro a redes

# 1. LEARNER LAB

Asignaturas → AWS Academy Learner Lab → Contenidos → Laboratorio para el alumnado de AWS Academy → **Lanzamiento**

*No lo llegamos a hacer en esta clase, lo haremos en otra más adelante*

---

# 2. REDES

![image.png](06%20-%20Learner%20Lab%20e%20Intro%20a%20redes/image.png)

## 2.1 QUÉ ES UNA RED

Una **red** es un conjunto de **dispositivos conectados entre sí** (como ordenadores, servidores o móviles) que pueden **comunicarse y compartir información**.

---

## 2.2 DIRECCIONES IP

Una **dirección IP (Internet Protocol)** es un **identificador único** que se asigna a cada dispositivo dentro de una red para poder **identificarlo y comunicarse**.

### TIPOS DE DIRECCIONES IP

**IPv4**

- 32 bits
- Formato: 4 números separados por puntos
- Ejemplo: `192.168.1.1`
- Más común

**IPv6**

- 128 bits
- Formato: números y letras separados por “:”
- Ejemplo: `2001:0db8:85a3::8a2e:0370:7334`
- Diseñada para reemplazar IPv4 (más direcciones disponibles)

### CLASIFICACIÓN

- **IP pública**: visible en internet
- **IP privada**: usada dentro de redes internas (ej: casa, empresa)

---

## 2.3 PUERTOS

Un **puerto** es un **número lógico** que identifica un servicio o aplicación dentro de un dispositivo en una red. Permite que los datos lleguen al programa correcto (por ejemplo, web, correo, etc.). Tienen las siguientes funciones:

- Dirigir el tráfico a la aplicación correcta
- Permitir múltiples servicios en un mismo dispositivo
- Controlar accesos (firewalls, seguridad)

**Ejemplos de puertos comunes:**

- **80** → HTTP (web)
- **443** → HTTPS (web segura)
- **22** → SSH (acceso remoto)
- **25** → SMTP (correo)

**Rangos de puertos**

- **0 – 1023** → Puertos bien conocidos
- **1024 – 49151** → Registrados
- **49152 – 65535** → Dinámicos o privados

---

## 2.4 PROTOCOLOS

Un **protocolo** es un **conjunto de reglas** que permite que los dispositivos se comuniquen entre sí en una red. Define **cómo se envían, reciben e interpretan los datos**.

- Es como un “idioma” que usan los dispositivos
- Si ambos usan el mismo protocolo, pueden comunicarse correctamente

**Ejemplos de protocolos comunes**

- **HTTP** → para páginas web
- **HTTPS** → web segura
- **FTP** → transferencia de archivos
- **SMTP** → envío de correos
- **TCP/IP** → base de internet

---

## 2.5 CÓMO TRABAJAN JUNTOS

1. La **IP** dirige el mensaje al dispositivo correcto
2. El **puerto** lo envía a la aplicación correcta
3. El **protocolo** asegura que la comunicación sea entendida

---

# 3. MÁSCARAS DE RED

## 3.1 ENRUTAMIENTO ENTRE DOMINIO SIN CLASES

**CIDR (Classless Inter-Domain Routing)** es una forma de **dividir y organizar direcciones IP** de manera más eficiente. Permite separar una IP en la **red** y el **host**.

```json
192.0.2.0 /24
```

- **/24** → indica que **24 bits son para la red**
- Los **8 bits restantes** son para los hosts
- Los primeros **3 números (192.0.2)** → identifican la red
- El último número → identifica los dispositivos dentro de esa red
- 24 bits → fijos (red)
- 8 bits → variables (hosts) | 2⁸ = 256 direcciones (254 utilizables)