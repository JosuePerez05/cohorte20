/* joins */

SELECT * FROM productos;
SELECT * FROM categoria;

SELECT * FROM productos,categoria
where idCategoria =id;

select p.nombre,p.precio,p.existencia,c.nombre from productos as p inner JOIN categoria as c 
on p.idCategoria = c.id;

select p.nombre,p.precio,p.existencia,t.nombre from productos as p left JOIN temp as t 
on p.idCategoria = t.id;


select p.nombre,p.precio,p.existencia,t.nombre from productos as p right JOIN temp as t 
on p.idCategoria = t.id;

SELECT * FROM categoria UNION 
SELECT * FROM proveedores;

SELECT * FROM categoria UNION 
SELECT nombre, precio FROM productos;
