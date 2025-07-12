create table user(id int primary key,
username varchar(50) unique,
email varchar(50)unique,
password varchar(10) unique not null);