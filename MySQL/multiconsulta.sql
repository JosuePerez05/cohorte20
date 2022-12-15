/*multi-consulta*/
select p.nombre as nom_producto, p.precio, p.existencia from productos as p;

select idCategoria from productos;
select * from detalle_producto_proveedor;
select * from proveedores;

SELECT p.nombre as nom_producto, c.nombre as nom_categoria, pv.nombre as nom_proveedor
FROM productos AS p 
inner JOIN categoria AS c 
ON p.idCategoria = c.id
inner join detalle_producto_proveedor as det
on p.idProducto=det.idProducto
inner join proveedores as pv
on det.idProveedor = pv.id

