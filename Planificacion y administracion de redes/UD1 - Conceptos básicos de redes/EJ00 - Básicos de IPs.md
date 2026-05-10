# EJ00 - Básicos  de IPs

## PRÁCTICA I - CONVERSIÓN Y CLASES

Convierte las siguientes IPs a binario e indica las clases:

- `10.0.3.2`
    
    → 0001010 . 00000000 . 00000011 . 00000010 | Clase A
    
- `128.45.7.1`
    
    → 10000000 . 00101101 . 00000111 . 00000001 | Clase B
    
- `192.200.5.4`
    
    → 11000000 . 11001000 . 00000101 . 00000100 | Clase C
    
- `151.23.32.50`
    
    → 10010111 . 00010111 . 00100000 . 00110010 | Clase B
    
- `47.50.3.2`
    
    → 00101111 . 00110010 . 100000011 . 00000010 | Clase A
    
- `100.90.80.70`
    
    → 01100100 . 01011010 . 01010000 . 01000110 | Clase A
    
- `124.45.6.1`
    
    → 01111100 . 00101101 . 00000110 . 00000001 | Clase A
    

---

## PRÁCTICA II - ANÁLISIS DE UNA IP

De la siguiente IP → 145.32.59.24

1. Convierte a binario
2. Identifica la clase
3. Identifica la máscara de red asociada
4. Dirección de red
5. Dirección de broadcast
6. Nº máximo de hosts

1. **10010001.00100000 .00111011.00011000**
2. **Clase B**
3. **255.255.0.0 /16**
4. `145.32.0.0`
5. `145.32.255.255`
6. $2^16-2=65534$

---

## PRÁCTICA III - DIRECCIONES ESPECIALES

Teniendo en cuenta que estamos en la red `192.168.5.65` con la máscara 255.255.255.0, define el propósito de las siguientes direcciones especiales:

- `0.0.0.0` → El propio equipo, o “sin dirección/desconocido”
- `0.0.0.29` → se correspondería con `192.168.5.29`
- `192.168.67.0` → simplemente, se trata de otra red
- `255.255.255.255` → el broadcast de nuestra red
- `192.130.10.255` → el broadcast de otra red
- `127.0.0.0` → “loopback” o “hable consigo mismo”. Equivalente a `192.168.5.65`

---

## PRÁCTICA IV - REDES Y BROADCAST

Obtén la red y la red de difusión a partir de estas IPs y de sus máscaras:

- **`190.33.109.133 | 255.255.255.128`**
    - Red → `190.33.109.128`
    - Broadcast → `190.33.109.255`
- **`192.168.20.25 | 255.255.255.240`**
    - Red → `192.168.20.16`
    - Broadcast → `192.168.20.31`
- **`192.168.20.25 | 255.255.255.224`**
    - Red → `192.168.20.0`
    - Broadcast → `192.168.20.31`
- **`192.168.20.25 | 255.255.255.192`**
    - Red → `192.168.20.0`
    - Broadcast → `192.168.20.63`
- **`140.190.20.10 | 255.255.192.0`**
    - Red → `140.190.0.0`
    - Broadcast → `140.190.63.255`
- **`140.190.130.10 | 255.255.192.0`**
    - Red → `140.190.128.0`
    - Broadcast → `140.190.191.255`
- **`140.190.220.10 | 255.255.192.0`**
    - Red → `140.190.192.0`
    - Broadcast → `140.190.255.255`