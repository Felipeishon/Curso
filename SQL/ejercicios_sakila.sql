-- 1. ¿Qué consulta ejecutarías para obtener todos los clientes dentro de city_id = 312? 
-- Su consulta debe devolver el nombre, apellido, correo electrónico y dirección del cliente.

select * from customer;
select * from address;

select * from address
where city_id = 312
;

select * from customer
where address_id in (256,517)
;

select first_name, last_name, email from customer
inner join address ON address.address_id = customer.address_id
where address.address_id in (256,517)
and address.city_id = 312
;

-- 2. ¿Qué consulta harías para obtener todas las películas de comedia?
-- SUconsulta debe devolver el título de la película, la descripción, el año de estreno,
-- a calificación, las características especiales y el género (categoría).

select * from category;
select * from film;

select title,description,release_year,rating, special_features, category.name Genero from film
inner join film_category on film_category.film_id = film.film_id
inner join category on category.category_id = film_category.category_id 
where category.category_id = 5;


-- 3. ¿Qué consulta harías para obtener todas las películas unidas por actor_id = 5?
-- Su consulta debe devolver la identificación del actor, el nombre del actor, 
-- el título de la película, la descripción y el año de lanzamiento.

select * from actor; -- ID de Actor (actor_id) y el nombre (first_name) 
select * from film; -- Titulo de la pelicula (title), descripcion (description), el año de lanzamiento (release_year)
select * from film_actor; -- (actor_id) y (film_id)

select actor.actor_id, actor.first_name from actor
inner join film_actor on actor.actor_id = film_actor.actor_id
inner join film on film.film_id = film_actor.film_id;



