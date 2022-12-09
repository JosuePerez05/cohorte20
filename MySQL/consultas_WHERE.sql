/*listas*/

SELECT * FROM productos;

SELECT * FROM productos
WHERE precio
in (5,6,7,8,9,10);

SELECT * FROM productos
WHERE precio
NOT in (5,6,7,8,9,10);
/*Saber la fecha */
SELECT * FROM productos
WHERE date(fecha_alta)
between '2015-01-01' and '2016-07-24';


SELECT * FROM productos
WHERE precio = 20-2;

SELECT nombre, AVG(precio) AS promedio_precios FROM productos WHERE idCategoria=1 group by nombre;