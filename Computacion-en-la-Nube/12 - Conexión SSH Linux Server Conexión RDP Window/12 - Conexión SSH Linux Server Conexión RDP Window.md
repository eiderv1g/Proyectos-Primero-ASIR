# 12 - Conexión SSH Linux Server. Conexión RDP Windows Server

En esta clase aprenderé a conectarme por diferentes vías a mis instancias:

- Creo la instancia
- Consigo las credenciales para conectarme según la vía (PuTTY o RDP)
- **Me conecto** 😊

# PRÁCTICA DE CONEXIÓN SSH A UN AMAZON LINUX SERVER

### 1. ACCEDEMOS AL LEARNER LAB

- En el panel de control, selecciono el AWS Academy Learner Lab > Contenidos > **Lanzamiento del laboratorio para el alumnado de AWS**
- Como siempre, le doy a **Start Lab** y espero a que el circulito se ponga verde para acceder
- Ya estamos en la consola

---

### 2. CREACIÓN DE UNA NUEVA INSTANCIA

- Vamos a **EC2** y le damos a lanzar instancia
- Configuramos de la siguiente manera:
    - **Nombre** → linux_server
    - **AMI** → Amazon Linux | Arquitectura 64 bits (x86)
    - **Tipo de instanci**a → t3.micro (*está por defecto*)
    - **Par de claves** → vockey
    - **Configuraciones de red** → Check Crear grupo de seguridad | Permitir el tráfico de SSH desde cualquier lugar
    - **Almacenamiento** → 8GB (*está por defecto así*)
    - **Detalles avanzados** → no toco nada
- Lanzamos instancia

![image.png](12%20-%20Conexi%C3%B3n%20SSH%20Linux%20Server%20Conexi%C3%B3n%20RDP%20Window/4e4c929e-b1ef-4074-8d12-68d82560a198.png)

---

### 3. CONECTARME A LA NUEVA INSTANCIA

- Ahora quiero conectarme de alguna manera a mi nueva instancia. Para ello, necesito una dirección IP, concretamente la **IP pública:**

![image.png](12%20-%20Conexi%C3%B3n%20SSH%20Linux%20Server%20Conexi%C3%B3n%20RDP%20Window/image.png)

- Podemos conectarnos directamente desde la consola dándole a **conectar** y de esta forma accederemos a la instancia desde el propio navegador.

![image.png](12%20-%20Conexi%C3%B3n%20SSH%20Linux%20Server%20Conexi%C3%B3n%20RDP%20Window/image%201.png)

![image.png](12%20-%20Conexi%C3%B3n%20SSH%20Linux%20Server%20Conexi%C3%B3n%20RDP%20Window/image%202.png)

- Sin embargo, lo normal no es conectarse por esta vía, sino vía terminal o vía SSH (PuTTY). **Voy a hacerlo vía PuTTY.** Para ello voy a necesitar:
    - Dirección IP (*ya la tenemos*) → `3.229.118.7`
    - Usuario (*ya lo tenemos*) → `ec2-user`
    - Contraseña (*???*)
- VAMOS A CONSEGUIR ESA CONTRASEÑA:
    1. Volvemos a la pantalla de inicio del laboratorio
    2. Vamos a AWS Details
    3. Le damos a SSHKey → descargo el archivo `.ppk`
- Sigo estas instrucciones: https://labs.vocareum.com/web/4526203/5102333.0/ASNLIB/public/docs/lang/en-us/README.html?vockey=4a2d725e2384b64593f62d4804dd3ec48452dfe073f669a4e153ae402d67877b#sshwindows

![image.png](12%20-%20Conexi%C3%B3n%20SSH%20Linux%20Server%20Conexi%C3%B3n%20RDP%20Window/image%203.png)

- Me logueo con el usuario → **¡EXITO!**

![image.png](12%20-%20Conexi%C3%B3n%20SSH%20Linux%20Server%20Conexi%C3%B3n%20RDP%20Window/image%204.png)

---

# PRÁCTICA DE CONEXIÓN RDP A UN WINDOWS SERVER

### 1. CREO LA INSTANCIA WS

- Lanzo la nueva instancia con estas configuraciones:
    - **Nombre** → windows_server
    - **AMI** → Windows Server Base | Arquitectura 64 bits (x86)
    - **Tipo de instanci**a → t3.micro (*está por defecto*)
    - **Par de claves** → vockey
    - **Configuraciones de red** → Check Crear grupo de seguridad | Permitir el tráfico de RDP (*Remote Desktop Protocol*) desde cualquier lugar
    - **Almacenamiento** → 30GB (*está por defecto así*)
    - **Detalles avanzados** → no toco nada
- Lanzamos instancia

---

### 2. CONEXIÓN VIA RDP

- Para conectarnos vía RDP hay que tener un software específico para hacerlo. Este nos sirve:
https://support.microsoft.com/es-es/windows/c%C3%B3mo-usar-escritorio-remoto-5fe128d5-8fb1-7a23-3b8a-41e636865e8c

![image.png](12%20-%20Conexi%C3%B3n%20SSH%20Linux%20Server%20Conexi%C3%B3n%20RDP%20Window/image%205.png)

- Ahora… ¿Dónde están las claves para acceder a nuestro windows server? Nos vamos a:
**Instancias → Acciones → Seguridad → Obtener la contraseña de Windows**

![Vale pero… ¿Qué pongo aquí?](12%20-%20Conexi%C3%B3n%20SSH%20Linux%20Server%20Conexi%C3%B3n%20RDP%20Window/image%206.png)

Vale pero… ¿Qué pongo aquí?

- En ese recuadro tenemos que poner nuestra clave privada (En AWS details) (copy/paste) → **Descifrar contraseña**

![image.png](12%20-%20Conexi%C3%B3n%20SSH%20Linux%20Server%20Conexi%C3%B3n%20RDP%20Window/image%207.png)

- Nos aparecen las credenciales:

![image.png](12%20-%20Conexi%C3%B3n%20SSH%20Linux%20Server%20Conexi%C3%B3n%20RDP%20Window/image%208.png)

- **¡ÉXITO!**

![image.png](12%20-%20Conexi%C3%B3n%20SSH%20Linux%20Server%20Conexi%C3%B3n%20RDP%20Window/image%209.png)

---

## ANEXO: IPS ELÁSTICAS

Ahora, si detengo la instancia, al volver a iniciarla se le asignará una nueva ip pública y habrá que volver a buscarla en los detalles de la instancia para introducirla correctamente en PuTTY. **Para ahorrarnos esto,** podemos asignarle una **ip elástica**. , de manera que, cada vez que inicie una máquina, esta **tendrá siempre la misma ip.** 

![image.png](12%20-%20Conexi%C3%B3n%20SSH%20Linux%20Server%20Conexi%C3%B3n%20RDP%20Window/image%2010.png)