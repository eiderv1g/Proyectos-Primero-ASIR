# EJ01-Mini base de datos de alumnos

Crea un ejemplo en papel de una mini base de datos de alumnos:

- Define qué datos guardarías (nombre, edad, correo, curso).
- ¿Qué problemas tendría si solo usaras Excel sin reglas?
- ¿Qué ventajas tendría hacerlo con un SGBD?

---

## 1. Qué datos guardarías

| id_alumno | nombre | edad | correo | curso |
| --- | --- | --- | --- | --- |
| 1 | Ana López | 20 | [ana@gmail.com](mailto:ana@gmail.com) | 1º ASIR |
| 2 | Carlos Ruiz | 22 | [carlos@gmail.com](mailto:carlos@gmail.com) | 2º DAM |
| 3 | Marta Pérez | 19 | [marta@gmail.com](mailto:marta@gmail.com) | 1º DAW |

### Campos definidos:

- **id_alumno** → Clave primaria (identifica a cada alumno)
- nombre
- edad
- correo
- curso

El *id_alumno* es importante para evitar confusiones entre alumnos con el mismo nombre.

---

## 2. Problemas de usar Excel

❌ **Datos duplicados**

*El mismo alumno registrado dos veces.*

❌ **Errores de escritura**

*"1 DAM", "1ºDAM", "Primero DAM" (inconsistencias).*

❌ **Correos repetidos o incorrectos**

❌ **Sin control de claves primarias**

*Podría haber dos alumnos con el mismo ID.*

❌ **Problemas si varias personas editan a la vez** 

❌ **Sin relaciones entre tablas**

*Si luego quieres añadir tabla PROFESORES o NOTAS, sería complicado.*

---

## 3. Ventajas de usar SGBD

✅ **Evita duplicados** (clave primaria única)

✅ **Controla tipos de datos** (edad solo números)

✅ **Permite relaciones** (Alumno ↔ Curso ↔ Notas)

✅ **Búsquedas rápidas con SQL**

```sql
SELECT*FROM alumnosWHERE curso='1º DAM';
```

✅ **Mayor seguridad** (usuarios y permisos)

✅ **Control de concurrencia** (varios usuarios trabajando sin errores)

---

# Conclusiones

- Una base de datos de alumnos debería tener una tabla ALUMNOS con un identificador único.
- Usar solo Excel puede generar duplicados e inconsistencias.
- Un SGBD mejora la integridad, seguridad y rapidez en las consultas.