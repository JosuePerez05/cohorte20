/*like */

SELECT * from productos
where nombre Like 'limonada';

SELECT * from productos
where nombre Like 'limon%';

SELECT * from productos
where nombre Like '%limon';

SELECT * from productos
where nombre Like '%limon%';
/*not like*/
SELECT * from productos
where nombre not Like '%limon%';