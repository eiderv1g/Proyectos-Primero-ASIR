# 6.EXTRA

- Nos descargamos Process Explorer -> [https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer](https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer)
- Nos descargamos RAMMap -> [https://learn.microsoft.com/es-es/sysinternals/downloads/rammap](https://learn.microsoft.com/es-es/sysinternals/downloads/rammap)

### Process Explorer

**Process Explorer** es una herramienta avanzada de Windows que permite ver **qué procesos están ejecutándose en el sistema y qué recursos están usando** (CPU, memoria, archivos, DLL, etc.).

Viene a ser un **súper administrador de tareas**

### RAMMap

**RAMMap** es una herramienta avanzada que permite analizar **cómo está utilizando la memoria RAM Windows en detalle**.

Sirve para ver exactamente **qué tipo de datos están ocupando la memoria física**.

### BICHEO

[https://www.youtube.com/watch?v=E6h40GDmaYo](https://www.youtube.com/watch?v=E6h40GDmaYo)

[https://www.youtube.com/watch?v=dUObtXjpIoc](https://www.youtube.com/watch?v=dUObtXjpIoc)

---

### COMANDOS DE LINUX Y CÓMO PASARLOS A POWERSHELL

`ps aux --no-headers` 

→ Muestra todos los procesos en ejecución sin la línea de encabezado.

`ps aux --no-headers | more`

→ Muestra los procesos paginados, avanzando pantalla por pantalla.

`ps aux --no-headers | wc -l`

→ Cuenta el número total de procesos en ejecución.

`ps aux --sort=%cpu`

→ Muestra los procesos ordenados por uso de CPU (de menor a mayor).

`ps aux --sort=%cpu --`

→ Igual que el anterior; -- indica el fin de opciones (no cambia el resultado aquí).

`ps aux --sort=%cpu --no-headers | head -n 6`

→ Muestra los 6 procesos que menos CPU consumen, sin encabezado.

**AHORA EN POWER SHELL…**

- ps aux → `Get-Process`
- ps aux → `Get-Process | more`
- ps aux --no-headers | wc -l → `(Get-Process).Count`
- ps aux --sort=%cpu -- → No es necesario en PowerShell (no existe equivalente para --).
- ps aux --sort=%cpu --no-headers | head -n 6 → `Get-Process | Sort-Object CPU | Select-Object -First 6`