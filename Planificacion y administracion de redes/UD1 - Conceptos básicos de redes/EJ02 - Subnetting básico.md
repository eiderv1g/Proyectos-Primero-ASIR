# EJ02 - Subnetting básico

Se dispone de la siguiente red:

`200.50.25.0/24`

**Crea 4 subredes iguales…**

1. ¿Cuál será la nueva máscara de subred?
2. ¿Cuántos hosts útiles tendrá cada subred?
3. Indica, para cada subred:
    - Dirección de red
    - Primer host
    - Último host
    - Broadcast

---

#### 1. ¿Cuál será la nueva máscara de subred?

- Toma prestados → $2^2=4$ → 2 bits
- Nueva máscara → **255.255.255.192**
- CIDR → **/26**

---

#### 2. ¿Cuántos hosts útiles tendrá cada subred?

- $2^6-2=62$ **hosts disponibles**

---

#### 3. Redes, broadcast y rangos

- Salto → $256-192 = 64$

| Nº | Dirección de red | Primer host | Último host | Broadcast |
| --- | --- | --- | --- | --- |
| 1 | `200.50.25.0` | `200.50.25.1` | `200.50.25.62` | `200.50.25.63` |
| 2 |  `200.50.25.64` | `200.50.25.65` | `200.50.25.126` | `200.50.25.127` |
| 3 | `200.50.25.128` | `200.50.25.129` | `200.50.25.190` | `200.50.25.191` |
| 4 | `200.50.25.192` | `200.50.25.193` | `200.50.25.254` | `200.50.25.255` |