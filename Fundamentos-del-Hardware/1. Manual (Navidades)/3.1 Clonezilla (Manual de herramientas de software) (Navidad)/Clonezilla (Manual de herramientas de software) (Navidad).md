# Clonezilla (Manual de herramientas de software) (Navidad)

Clonezilla es, básicamente, una herramienta de clonación y copias de seguridad de discos y particiones. Algunas de sus utilidades son:

- Clonar discos duros o SSD
- Hacer copiad de seguridad de Sistemas Operativos
- Restauración de Sistemas
- Desplegar un mismo sistema en muchos ordenadores

### A continuación, voy a usar Clonezilla para clonar un disco de una máquina virtual Kali Linux:

---

# PRIMEROS PASOS

1. **Descripción de mi escenario**
    - Host: Virtual Box
    - VM: Kali Linux
    - Objetivo: clonar un disco completo a otro disco virtual usando Clonezilla Live

### **2. Descargar Clonezilla**

- Descargo Clonezilla Live desde la web: 
[clonezilla.org/downloads.php](https://clonezilla.org/downloads.php)
- Elijo las siguientes características:

![image.png](image.png)

- Guardo la ISO en mi sistema anfitrión

### **3. Preparar mi entorno en Virtual Box**

La VM debe tener al menos dos discos:

- Disco origen (*a clonar*)
- Disco destino (*vacío, destino del clonado*) (recomendable que ocupe más que el origen)

![image.png](image%201.png)

### **4. Montar la ISO en mi VM**

En VirtualBox y con la máquina apagada:

- Configuración > Almacenamiento
- En el controlador IDE/SATA > Unidad óptica
- Monto la ISO de Clonezilla

![image.png](image%202.png)

- No me olvido de configurar el orden de arranque para que la VM se inicie primero desde el CD/DVD:

![image.png](image%203.png)

---

# ARRANCAR CLONEZILLA

- Inicio la Máquina Virtual
- Aparece el menú de Clonezilla por defecto
- Selecciono:

![image.png](image%204.png)

- Idioma: Español
- No cambiar el mapa del teclado
- **Iniciar Clonezilla**

---

# CLONACIÓN

1. **Elijo el modo de clonación**
    - Tipo de operación: Disco a Disco
        
        ![image.png](image%205.png)
        
    - Selecciono el modo Principiante
        
        ![image.png](image%206.png)
        
    - Selecciono el tipo de clonación disk_to_local_disk
        
        ![image.png](image%207.png)
        

1. **Selección de discos**

*¡Asegúrate de seleccionar los discos correctos! Recuerda que todo el contenido del disco de destino **se borrará***

- **Disco origen:** selecciono el disco que quiero clonar:
    
    ![image.png](image%208.png)
    
- **Disco destino:** selecciono el disco donde se copiará el contenido:
    
    *Todo el contenido de este disco será borrado*
    
    ![image.png](image%209.png)
    

1. **Últimas comprobaciones**
    - Es recomendable comprobar el sistema de archivos:
        
        ![image.png](image%2010.png)
        
    - Selecciono las siguientes comprobaciones finales:
        
        ![image.png](image%2011.png)
        
        ![image.png](image%2012.png)
        
        ![image.png](image%2013.png)
        
    - Por último, a medida que continúo Clonezilla me va recordando que **todos los datos del disco de destino se borrarán:**
        
        ![image.png](image%2014.png)
        
2. **Clonación y apagado**
    - Durante el proceso de clonación, irán apareciendo barras de progreso como estas:
        
        ![image.png](image%2015.png)
        
    
    •  Una vez finalizado el proceso (*tarda unos minutos*), apago la máquina:
    
    ![image.png](image%2016.png)
    

---

# COMPROBACIONES FINALES

- Retiro la ISO de Clonezilla para que no arranque desde la misma
    
    ![image.png](image%2017.png)
    
- "Expulso" el disco original para que la VM se ejecute desde el disco clonado
    
    ![image.png](image%2018.png)
    
- Como todo ha ido bien, mi Kali Linux se ha ejecutado como siempre, he tenido que introducir las mismas credenciales y el sistema operativo se ha iniciado correctamente sobre el disco clonado. **¡Bravo!**
    
    ![image.png](image%2019.png)
    
- Además, con el comando lsblk puedo comprobar que el disco tiene el tamaño correcto y las particiones que tiene que tener:
    
    ![image.png](image%2020.png)