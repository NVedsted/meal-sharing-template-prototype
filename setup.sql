create table meal
(
    id               serial
        constraint meals_pk
            primary key,
    title            text      not null,
    description      text      not null,
    location         text      not null,
    start            timestamp not null,
    max_reservations integer   not null,
    price            numeric   not null,
    created          timestamp not null
);

create table reservation
(
    id                  serial
        constraint reservation_pk
            primary key,
    meal_id             integer   not null
        constraint reservation_meal_id_fk
            references meal,
    number_of_guests    integer   not null,
    created             timestamp not null,
    contact_phonenumber text      not null,
    contact_name        text      not null,
    contact_email       text      not null
);

create table review
(
    id          serial
        constraint review_pk
            primary key,
    meal_id     integer   not null
        constraint review_meal_id_fk
            references meal,
    title       text      not null,
    description text      not null,
    stars       integer   not null,
    created     timestamp not null
);
