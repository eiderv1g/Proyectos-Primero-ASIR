# EJ03 - Cálculo de hosts

Una empresa dispone de la red

`172.16.0.0/16`

**Necesita subredes para departamentos con hasta 500 hosts cada una.**

1. ¿Qué prefijo (/x) debes usar?
2. ¿Cuál será la máscara decimal?
3. ¿Cuántas subredes puedes obtener?
4. Calcula los datos completos de las **primeras 3 subredes y de la última**:
    - Red
    - Primer host
    - Último host
    - Broadcast

---

#### 1. ¿Qué prefijo (/x) debes usar?

- $2^9-2=510$ hosts
- $32-9=23$ → **/23**

---

#### 2. ¿Cuál será la máscara decimal?

- 23-16=7 bits
- **255.255.254.0**

---

#### 3. ¿Cuántas subredes puedes obtener?

- $2^7=128$ **subredes**

---

#### 4. Calcula los datos completos de las **primeras 3 subredes y de la última**:

- Salto → $256-254 = 2$

| Nº | Dirección de red | Primer host | Último host | Broadcast |
| --- | --- | --- | --- | --- |
| 1 | `172.16.0.0` | `172.16.0.1` | `172.16.1.254` | `172.16.1.255` |
| 2 | `172.16.2.0` | `172.16.2.1` | `172.16.3.254` | `172.16.3.255` |
| 3 | `172.16.4.0` | `172.16.4.1` | `172.16.5.254` | `172.16.5.255` |
| … |  |  |  |  |
| 4 | `172.16.254.0` | `172.16.254.1` | `172.16.255.254` | `172.16.255.255` |