# 13 - Linux. Trabajando con instancias y gestión de discos. Lab Learner

Hoy hemos abierto el Learner Lab en AWS Academy para abrir el **Lanzamiento del Laboratorio para el Alumnado de AWS**. Lo inicio…

# PRÁCTICA: GESTIÓN DE DISCOS DUROS EN INSTANCIAS LINUX

### 1. LANZO NUEVA INSTANCIA AMAZON LINUX

- Voy a EC2 y en el menú de la izqda. me fijo en en **Elastic Block Store → este apartado trata sobre todo lo que tiene que ver con volúmenes, almacenamiento, etc.**

![¡Ojo! Si no tienes creada ninguna instancia, esto no se verá](13%20-%20Linux%20Trabajando%20con%20instancias%20y%20gesti%C3%B3n%20de%20/image.png)

¡Ojo! Si no tienes creada ninguna instancia, esto no se verá

- Ahora lanzo una nueva instancia:
    - **Nombre** → linux_discos
    - **AMI** → Amazon Linux | Arquitectura 64 bits (x86)
    - **Tipo de instanci**a → t3.micro (*está por defecto*)
    - **Par de claves** → vockey
    - **Configuraciones de red** → Check Crear grupo de seguridad | Permitir el tráfico de SSH desde cualquier lugar
    - **Almacenamiento** → 8GB (*está por defecto así*)
    - **Detalles avanzados** → no toco nada

---

### 2. ME CONECTO A LA INSTANCIA

- En los detalles de almacenamiento de la instancia, me voy a la pestaña de **almacenamiento**. Aquí me aparece  un identificador (*vol-0123…*) que es el nombre de mi volumen.

![image.png](13%20-%20Linux%20Trabajando%20con%20instancias%20y%20gesti%C3%B3n%20de%20/image%201.png)

- Voy a Elastic Block Store y lo busco en el listado del apartado del **Volúmenes**

![image.png](13%20-%20Linux%20Trabajando%20con%20instancias%20y%20gesti%C3%B3n%20de%20/image%202.png)

- Ahora me conecto a la instancia. Puedo hacerlo vía PuTTY, o también vía navegador.
*Para esta práctica voy a hacerlo via navegador para ir más rápido*

![¡Éxito!](13%20-%20Linux%20Trabajando%20con%20instancias%20y%20gesti%C3%B3n%20de%20/image%203.png)

¡Éxito!

---

### 3. CREACIÓN DE UN NUEVO VOLUMEN Y LO ASOCIO A LA INSTANCIA

- Uso `df -m`para ver el espacio disponible en el sistema de archivos y que me lo muestre en megas. Así echo un vistazo al filesystem.

![image.png](13%20-%20Linux%20Trabajando%20con%20instancias%20y%20gesti%C3%B3n%20de%20/image%204.png)

- Vuelvo a la consola y en el apartado de volúmenes de EBS le doy a **Crear volumen**
- Dejo la configuración tal y cono está y le pongo nombrecito:

![¡Me aseguro de que la zona de disponibilidad coincida con la de la instancia!)](13%20-%20Linux%20Trabajando%20con%20instancias%20y%20gesti%C3%B3n%20de%20/image%205.png)

¡Me aseguro de que la zona de disponibilidad coincida con la de la instancia!)

![image.png](13%20-%20Linux%20Trabajando%20con%20instancias%20y%20gesti%C3%B3n%20de%20/image%206.png)

- Ahora asocio el volumen a mi instancia `linux_discos`

![image.png](13%20-%20Linux%20Trabajando%20con%20instancias%20y%20gesti%C3%B3n%20de%20/image%207.png)

---

### 4. MONTO EL NUEVO VOLUMEN

- Vuelvo al terminal de la instancia y si repito el comando `df -m`… ¡no nos aparece! ¿por qué? Si se lo he asociado… **Claro, porque nos falta montar el volumen.**
- Fíjate que si escribo el comando `lsblk`me aparece el disco, **pero no me sale montado en ningún sitio**:

![image.png](13%20-%20Linux%20Trabajando%20con%20instancias%20y%20gesti%C3%B3n%20de%20/image%208.png)

- Para montarlo, igual que en **ISO**, usaré una serie de comandos:

```bash
sudo mkfs.ext4 /dev/nvme1n1   #le doy formato al disco
sudo mkdir /data   #creo el directorio /data en el que montaré el disco   
sudo mount /dev/nvme1n1 /data   # monto el disco ya formateado en el nuevo directorio
df -m
lsblk #con estos dos últimos comandos compruebl que el disco está listo
```

![¡ÉXITO!](13%20-%20Linux%20Trabajando%20con%20instancias%20y%20gesti%C3%B3n%20de%20/image%209.png)

¡ÉXITO!

---

### MINI-ANEXO I

- Voy a detener la instancia de `linux_discos`

![image.png](13%20-%20Linux%20Trabajando%20con%20instancias%20y%20gesti%C3%B3n%20de%20/image%2010.png)

- ¡OJO! Me dice que se facturarán los recursos asociados aunque la instancia esté detenida, ¿por qué? Porque los volúmenes siguen ahí, **no desaparecen por detener la instancia**.

---

### MINI-ANEXO II

En AWS, los volúmenes de las instancias funcionan como discos extraíbles que en cualquier momento puedo extraer o montar, es decir, **son desacoplables.** 

**Esto trae consigo una serie de grandes ventajas:**

- Portabilidad de datos entre instancias
- Recuperación rápida ante fallos
- Creación sencilla de backups (snapshots)
- Escalabilidad (aumentar tamaño o rendimiento)
- Flexibilidad para montar/desmontar volúmenes
- Análisis y mantenimiento sin afectar la instancia original
- Separación entre sistema y datos
- Reutilización de volúmenes en diferentes instancias