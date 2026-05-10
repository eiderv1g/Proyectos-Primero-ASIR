# EJ04 - Más subnetting

# ENUNCIADO I

- Dirección IP: `10.0.0.0`
- Tipo: A
- Nº de redes: 6

---

#### IDENTIFICA LA MÁSCARA DE RED POR DEFECTO

- Clase A → **255.0.0.0**
- CIDR → **/8**

#### CONVIERTE LA MÁSCARA A CÓDIGO BINARIO Y DIVIDE EN RED / HOST

- Binario → **11111111.00000000.00000000.00000000**
- Porción para red → **11111111**
- Porción para host → **00000000.00000000.00000000**

#### IDENTIFICA  LA NUEVA MÁSCARA

- $2^n=6$ *¿qué ha de ser n para acercarse lo más posible a 6?*
- $2^3=8$  → **3 bits prestados**
- Nueva máscara en binario → 11111111.11100000.00000000.00000000
- Nueva máscara en decimal → **255.224.0.0**
- Nuevo CIDR → **/11**

#### CALCULA EL Nº DE HOSTS POR SUBRED

- Fórmula → #Host = $2^m-2$ (*siendo m los bits de la porción del host*)
- $2^21-2=2097150$ **hosts por subred**

#### DETERMINA EL RANGO DE SUBREDES

- $256-224=32$ **de salto**

#### DETERMINA D. DE RED, BROADCAST Y RANGO DE IPs UTILIZABLES

| Nº | Dirección de red | Primer host | Último host | Broadcast |
| --- | --- | --- | --- | --- |
| 1 | `10.0.0.0` | `10.0.0.1` | `10.31.255.254` | `10.31.255.255` |
| 2 | `10.32.0.0` | `10.32.0.1` | `10.63.255.254` | `10.63.255.255` |
| 3 | `10.64.0.0` | `10.64.0.1` | `10.95.255.254` | `10.95.255.255` |
| 4 | `10.96.0.0` | `10.96.0.1` | `10.127.255.254` | `10.127.255.255` |
| 5 | `10.128.0.0` | `10.128.0.1` | `10.159.255.254` | `10.159.255.255` |
| 6 | `10.160.0.0` | `10.160.0.1` | `10.191.255.254` | `10.191.255.255` |
| 7 | `10.192.0.0` | `10.192.0.1` | `10.223.255.254` | `10.223.255.255` |
| 8 | `10.224.0.0` | `10.224.0.1` | `10.255.255.254` | `10.255.255.255` |

---

# ENUNCIADO II

- Dirección IP: `132.18.0.0`
- Tipo: B
- Nº de redes: al menos 50
- Host por subred: al menos 1000

#### IDENTIFICA LA MÁSCARA DE RED POR DEFECTO

- Clase A → **255.255.0.0**
- CIDR → **/16**

#### CONVIERTE LA MÁSCARA A CÓDIGO BINARIO Y DIVIDE EN RED / HOST

- Binario → **11111111.11111111.00000000.00000000**
- Porción para red → **11111111.11111111**
- Porción para host → **00000000.00000000**

#### IDENTIFICA  LA NUEVA MÁSCARA

*¡Ojo a las 50 redes deseadas!*

- $2^6=64$ → **6 bits prestados**
- Nueva máscara y CIDR → **255.255.252.0 /22**

#### CALCULA EL Nº DE HOSTS POR SUBRED

*Ojo a los 1000 hosts deseados!*

- Fórmula → 1000 = $2^m-2$ (*siendo m los bits de la porción del host*)
- $2^10-2=1022$ **hosts por subred**

#### DETERMINA EL RANGO DE SUBREDES

- $256-252=4$ **de salto**

#### DETERMINA D. DE RED, BROADCAST Y RANGO DE IPs UTILIZABLES

| Nº subred | Dirección de red | Primer host | Último host | Broadcast |
| --- | --- | --- | --- | --- |
| 1 | `132.18.0.0/22` | `132.18.0.1` | `132.18.3.254` | `132.18.3.255` |
| 2 | `132.18.4.0/22` | `132.18.4.1` | `132.18.7.254` | `132.18.7.255` |
| 3 | `132.18.8.0/22` | `132.18.8.1` | `132.18.11.254` | `132.18.11.255` |
| 4 | `132.18.12.0/22` | `132.18.12.1` | `132.18.15.254` | `132.18.15.255` |
| 5 | `132.18.16.0/22` | `132.18.16.1` | `132.18.19.254` | `132.18.19.255` |
| 6 | `132.18.20.0/22` | `132.18.20.1` | `132.18.23.254` | `132.18.23.255` |
| 7 | `132.18.24.0/22` | `132.18.24.1` | `132.18.27.254` | `132.18.27.255` |
| 8 | `132.18.28.0/22` | `132.18.28.1` | `132.18.31.254` | `132.18.31.255` |
| 9 | `132.18.32.0/22` | `132.18.32.1` | `132.18.35.254` | `132.18.35.255` |
| 10 | `132.18.36.0/22` | `132.18.36.1` | `132.18.39.254` | `132.18.39.255` |
| … | … | … | … | … |
| 50 (última) | `132.18.252.0/22` | `132.18.252.1` | `132.18.255.254` | `132.18.255.255` |

---

# ENUNCIADO III

La escuela de arte digital VIGNEMALE ha adquirido la dirección **192.168.1.0 /24** y se necesitan crear subredes para ofrecer seguridad de bajo nivel y control de broadcast en LAN. La LAN está compuesta de la siguiente manera, requiriendo cada uno de los componentes su propia subred:

- Aula nº1 → 28 pcs
- Aula nº2 → 22 pcs
- Laboratorio de prácticas → 30 pcs
- Instructores → 12 pcs
- Administración → 10 pcs

#### ¿CUÁNTAS SUBREDES SE NECESITARÁN?

Tal y como indica el enunciado, cada componente necesita una subred → **5 subredes**

#### ¿CUÁL ES LA MÁSCARA DE SUBRED DE ESTA RED?

- $2^3=8$ → se toman prestados 3 bits
- **255.255.255.224 /27**

#### ¿CUÁNTOS HOSTS UTILIZABLES HAY EN CADA SUBRED?

- Hemos usado 3 de los 8 hosts disponibles → 5
- $2^5-2=30$ **hosts utilizables**

#### MUESTRA UNA TAMBLA CON: REDES, DIFUSIÓN Y RANGOS

- Salto → $256-224=32$

| Departamento | Subred | Dirección de red | Primer host | Último host | Broadcast |
| --- | --- | --- | --- | --- | --- |
| Aula nº1 (28 PCs) | 1 | `192.168.1.0/27` | `192.168.1.1` | `192.168.1.30` | `192.168.1.31` |
| Aula nº2 (22 PCs) | 2 | `192.168.1.32/27` | `192.168.1.33` | `192.168.1.62` | `192.168.1.63` |
| Laboratorio (30 PCs) | 3 | `192.168.1.64/27` | `192.168.1.65` | `192.168.1.94` | `192.168.1.95` |
| Instructores (12 PCs) | 4 | `192.168.1.96/27` | `192.168.1.97` | `192.168.1.126` | `192.168.1.127` |
| Administración (10 PCs) | 5 | `192.168.1.128/27` | `192.168.1.129` | `192.168.1.158` | `192.168.1.159` |

---