show columns from productos;
INSERT INTO productos(nombre, precio,fecha_alta, idCategoria,existencia) 
VALUES ('chicle',1,curdate(),15,100) ; 

UPDATE productos SET nombre='chilindrina', precio = 10.50, existencia=2 
WHERE idProducto=23;
alter table productos add column marca varchar(20) not null;
UPDATE productos SET marca='Trident' 
WHERE idProducto=30;

SELECT* FROM categoria;
SELECT* FROM productos;

INSERT INTO categoria VALUES (NULL, "Dulces");
INSERT INTO categoria (nombre) VALUES ( "Refrescos");

INSERT INTO productos(nombre, precio,fecha_alta, idCategoria,existencia,marca) 
VALUES ('ariel blanco',25,curdate(),15,100,'Ariel') ; 

update productos SET precio=3 where idProducto=29;

SET SQL_SAFE_UPDATES = 0;
update productos set precio =replace (precio, 3, 13);

select * from productos;
DELETE from productos WHERE idProducto =23;

select * from categoria;
show columns from detalle_producto_proveedor;
delete from  categoria where id=15;
set foreign_key_checks=0;
truncate table categoria;
set foreign_key_checks=1;
select * from categoria where id<9;
INSERT INTO productos(nombre, precio,fecha_alta, idCategoria,existencia,marca) 
VALUES ('Ariel color ',25,curdate(),10,60,'Ariel') ;
 select count( idProducto) from productos group by idCategoria;
 
insert into categoria (nombre) values('Dulces');
select * from categoria;
SELECT COUNT(idProducto) AS cantidad, idCategoria FROM productos GROUP BY idCategoria;

