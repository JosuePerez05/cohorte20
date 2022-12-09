/* joins */

SELECT * FROM productos;
SELECT * FROM categoria;


SELECT * FROM productos,categoria
where idCategoria =id;

select p.nombre,p.precio,p.existencia,c.nombre from productos as p inner JOIN categoria as c 
on p.idCategoria = c.id;