# Sistema de Ventas en JavaScript

Un sistema básico y estructurado desarrollado con Programación Orientada a Objetos (POO) en JavaScript puro. Este proyecto implementa la lógica de backend necesaria para gestionar inventarios de productos y procesar órdenes de compra de un comercio.

## 🚀 Características

- **Gestión de Productos (`Clase Producto`)**: Generación de artículos con identificadores únicos, nombres y precios, encapsulando sus atributos.
- **Procesamiento de Órdenes (`Clase Orden`)**: Agrupación de productos en una factura y cálculo automático del total de ventas.
- **Validaciones Integradas**: Control estricto de capacidad (máximo 5 productos por orden) para simular reglas de negocio reales.
- **Identificadores Estáticos**: Uso de atributos `static` para mantener el conteo global de instancias creadas (IDs autoincrementables).

## 🛠️ Tecnologías

- JavaScript (ES6+)
- Node.js (Para su ejecución en consola)

## 💻 Cómo Ejecutarlo

1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu equipo.
2. Descarga o clona este repositorio.
3. Abre tu terminal y navega hasta la carpeta del proyecto.
4. Ejecuta el archivo principal con el siguiente comando:

```bash
node sistemaDeVentas.js
```
