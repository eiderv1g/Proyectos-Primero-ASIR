# 2.6 WSL

# WSL

**WSL (Windows Subsystem for Linux)** es una característica de Windows que permite ejecutar un entorno Linux completo dentro de Windows, sin necesidad de usar una máquina virtual o un arranque dual (*¡qué chulo!*). Así puedes usar comandos, herramientas y aplicaciones de Linux (como Bash, apt, ssh, git, etc.) directamente desde Windows.

Esto tiene unas cuantas ventajas:

- Ejecuta distribuciones Linux como Ubuntu, Debian, Kali, Fedora, etc.
- Permite acceder a los archivos de Windows desde Linux y viceversa
- Piensa que esto es súper útil para programadores, administradores de sistemas o estudiantes que usan ambos sistemas.

---

## **¿Cómo instalo wsl?**

Se puede hacer de dos formas:

- Desde el Power Shell o el CMD y como administrador, ejecutamos el comando **wsl --install** > Reiniciamos > Verificamos que está instalado con **wsl --list --verbose**.
- Abrimos el menú de **Características de Windows** (*está en el Panel de Control*) > Marca las opciones de **Subsistema de Windows para Linux** y **Plataforma de máquina virtual** > Aceptar > Reinicia y verifica.

*Se instala Ubuntu por defecto. En la Windows Store podéis elegir otra distro, o mirar desde el CMD/Power Shell las distros disponibles con **wsl --list --online** y elegir **wsl --install -d <Distro>** v*

![así se ve en mi explorador](image.png)

así se ve en mi explorador