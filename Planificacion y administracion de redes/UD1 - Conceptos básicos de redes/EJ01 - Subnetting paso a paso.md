# EJ01 - Subnetting paso a paso I

# ENUNCIADO

Tenemos la red **tipo C** `192.168.1.0`. Obtén:

- 4 subredes
- Máscara original
- Máscara nueva
- Nº de hosts por subred
- Rango de subredes, red y broadcast

---

# EJERCICIO GUIADO

### PASO 1 → VER MÁSCARA ORIGINAL

- La red es → `192.168.1.0 /24` y tipo C
- El CIDR `/24` significa → 24 bits para la red | 8 bits para hosts (*Recuerda que d. ID = 32 bits*)
- **La máscara original es →** `255.255.255.0 /24`

---

### PASO 2 → CUÁNTAS SUBREDES QUIERO

- Quiero → 4 subredes
- ¿Qué potencia da 4? → $2^2 =4$  → ¡2!
- **Entonces necesito → 2 bits**

---

### PASO 3 → CREAR LA NUEVA MÁSCARA

- CIDR original → `/24`
- CIDR nuevo → $24 + 2 =$ `/26`
- Binario-Decimal → 2 bits = 11000000 = 192
- **Nueva máscara →** `255.255.255.192 /26`

---

### PASO 4 → CALCULAR HOSTS POR SUBRED

- Hemos usado 2 bits de los 8 restantes → $8-2=6$
- La fórmula dice que $2^x-2=hosts$ → $2^6-2=62$
- **Tenemos → 62 hosts por subred**

---

### PASO 5 → CALCULAR EL SALTO

- La fórmula dice que → $256 - último nº de la máscara = salto$
- Por lo tanto → $256-192=64$
- **El salto es de → 64**

---

### PASO 6 → SACAR SUBREDES, RANGO PARA HOSTS Y BROADCAST

- **Empiezo en 0 y voy sumando 64 para sacar las 4 subredes →**
    - `192.168.1.0`
    - `192.168.1.64`
    - `192.168.1.128`
    - `192.168.1.192`
- **Para las direcciones de difusión →**
    - `192.168.1.63`
    - `192.168.1.127`
    - `192.168.1.191`
    - `192.168.1.255`
- Para disponibles para equipos →
    - `192.168.1.1` - `192.168.1.62`
    - `192.168.1.65` - `192.168.1.126`
    - `192.168.1.129` - `192.168.1.190`
    - `192.168.1.193` - `192.168.1.254`