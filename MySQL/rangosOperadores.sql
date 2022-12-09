/*Operadores*/
SELECT * FROM productos;
SELECT * FROM productos where (idCategoria>=1 and  idCategoria<=3)and precio = 10 and (existencia>10 and existencia <20);
SELECT * FROM productos where idCategoria =1 or precio =10;
/*
!= diferente
<>diferente 
*/
SELECT* from  productos where idCategoria <> 3;

/*los null y not null*/
SELECT * FROM productos where precio is not null;
/*between and*/
SELECT * FROM productos
where precio
between 5 and 10;

SELECT * FROM productos
where precio
not between 5 and 10;