# EJ05 - Direcciones IPv6

## ABREVIACIÓN

**Comprime las siguientes direcciones IPv6 según las reglas de compresión del protocolo:**

- 0000:0000:0000:0000:7cd8:1e15:c90f:ae1b
- 241c:8bb2:a902:dc92:1333:4bfb:0000:56c3
- ec1f:2794:38cd:0000:e5f8:0000:c2cc:898c
- 86a3:f3ec:0000:0000:0000:c93a:b47c:0000
- 0000:c570:e19b:681a:0615:0000:0000:0000
- 0000:dc4e:0000:0000:0000:0000:0000:8ffd
- 0000:021d:64f1:df12:e8ac:0000:489f:75a0

#### Soluciones:

- 0000:0000:0000:0000:7cd8:1e15:c90f:ae1b
→ `::7cd8:1e15:c90f:ae1b`
- 241c:8bb2:a902:dc92:1333:4bfb:0000:56c3
→ `241c:8bb2:a902:dc92:1333:4bfb:0:56c3`
- ec1f:2794:38cd:0000:e5f8:0000:c2cc:898c
→ `ec1f:2794:38cd:0:e5f8:0:c2cc:898c`
- 86a3:f3ec:0000:0000:0000:c93a:b47c:0000
→ `86a3:f3ec::c93a:b47c:0`
- 0000:c570:e19b:681a:0615:0000:0000:0000
→ `0:c570:e19b:681a:0615::`
- 0000:dc4e:0000:0000:0000:0000:0000:8ffd
→ `0:dc4e::8ffd`
- 0000:021d:64f1:df12:e8ac:0000:489f:75a0
→ `:0:021d:64f1:df12:e8ac:0:489f:75a0`

---

## TIPO

**Define el tipo de las siguientes direcciones IPv6:**

- feab:e7b8:6626:0:a16e:0:6efe:995f
- fdf6:22e5:e01:0:9af6::
- fd53:a56e:0:950d:4bc::3c92
- ff22:a6f1::933c:ff7b:f150
- fea3:0:d97a::eac:bbb1:c90b

#### Soluciones:

`feab:e7b8:6626:0:a16e:0:6efe:995f`
→ **tipo unicast local en enlace** porque empieza por `fe`. Las direcciones que comienzan dentro del rango `fe80::/10` se utilizan únicamente para comunicación dentro de la red local y no pueden salir a Internet mediante routers. 
*Este tipo de dirección se genera normalmente de forma automática y permite que dispositivos de la misma red se comuniquen entre sí.*

`fdf6:22e5:e01:0:9af6::`
→ **tipo unicast local único** porque comienza por `fd`. Las direcciones que empiezan por `fc` o `fd` pertenecen al rango `fc00::/7`, reservado para redes privadas en IPv6. 
*Son equivalentes a las direcciones privadas IPv4, como `192.168.x.x` o `10.x.x.x`, y se utilizan dentro de organizaciones o redes internas.*

`fd53:a56e:0:950d:4bc::3c92`
→ **unicast local único** porque igualmente comienza por `fd`, por lo que pertenece al mismo rango de direcciones privadas IPv6.

`ff22:a6f1::933c:ff7b:f150`
→ **tipo multicast** porque empieza por `ff`. Las direcciones multicast se utilizan para enviar información a varios dispositivos al mismo tiempo. 
*En IPv6 sustituyen al broadcast de IPv4 y son muy utilizadas en descubrimiento de servicios, videoconferencias o transmisión multimedia.*

`fea3:0:d97a::eac:bbb1:c90b`
→ **unicast local en enlace** porque comienza por `fe` y pertenece al rango `fe80::/10`. Esto significa que solo sirve para comunicación local dentro de la misma red y no puede ser enrutada hacia Internet.