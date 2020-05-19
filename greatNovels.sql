create database greatNovels;

-- create user 'greatNovels'@'localhost' identified with mysql_native_password by 'b00kw0rm';

grant all on greatNovels.* to 'greatNovels'@'localhost';

use greatNovels;

create table authors (
id INT auto_increment,
firstName varchar(225) not null,
lastName varchar(225) not null,
createdAT datetime default current_timestamp,
updatedAT datetime default current_timestamp on update current_timestamp,
deletedAT datetime,
primary key(id)
);

create table novels (
id INT auto_increment,
title varchar(225) not null,
authorId int,
createdAT datetime default current_timestamp,
updatedAT datetime default current_timestamp on update current_timestamp,
deletedAT datetime,
primary key(id),
FOREIGN KEY(authorId) REFERENCES authors(id)
);

create table genres (
id INT auto_increment,
genre varchar(225) not null,
createdAT datetime default current_timestamp,
updatedAT datetime default current_timestamp on update current_timestamp,
deletedAT datetime,
primary key(id)
);

create table novelGenres (
genreId INT,
novelID INT,
createdAT datetime default current_timestamp,
updatedAT datetime default current_timestamp on update current_timestamp,
deletedAT datetime,
primary key(genreId, novelId),
foreign key(genreId) REFERENCES genres(id),
foreign key(novelId) REFERENCES novels(id)
);

insert into authors (firstName, lastName) values ('Bram', 'Stoker');
insert into authors (firstName, lastName) values ('Oscar', 'Wilde');
insert into authors (firstName, lastName) values ('Alice', 'Walker');
insert into authors (firstName, lastName) values ('leo', 'Tolstoy');
insert into authors (firstName, lastName) values ('Charles', 'Dickens');
insert into authors (firstName, lastName) values ('Arthur', 'Miller');
insert into authors (firstName, lastName) values ('Alexandre', 'Dumas');
insert into authors (firstName, lastName) values ('Arthur Conan', 'Doyle');
insert into authors (firstName, lastName) values ('Robert Louis', 'Stevenson');
insert into authors (firstName, lastName) values ('Fyodor', 'Dostoyevsky');
insert into authors (firstName, lastName) values ('Agatha', 'Christie');
insert into authors (firstName, lastName) values ('Ray', 'Bradbury');
insert into authors (firstName, lastName) values ('George', 'Orwell');
insert into authors (firstName, lastName) values ('H.G.', 'Wells');
insert into authors (firstName, lastName) values ('Chinua', 'Achebe');

insert into novels (title, authorId) values ('Dracula', '1');
insert into novels (title, authorId) values ('The Picture of Dorian Gray', '2');
insert into novels (title, authorId) values ('The Color Purple', '3');
insert into novels (title, authorId) values ('War and Peace', '4');
insert into novels (title, authorId) values ('A Tale of Two Cities', '5');
insert into novels (title, authorId) values ('The Cruicible', '6');
insert into novels (title, authorId) values ('The Three Musketeers', '7');
insert into novels (title, authorId) values ('The Hound of Baskervilles', '8');
insert into novels (title, authorId) values ('The Strange Case of Dr.Jekyll and Mr.Hyde', '9');
insert into novels (title, authorId) values ('Crime and Punishment', '10');
insert into novels (title, authorId) values ('Murder on the Orient Express', '11');
insert into novels (title, authorId) values ('Farenhiet 451', '12');
insert into novels (title, authorId) values ('Animal Farm', '13');
insert into novels (title, authorId) values ('The Time Machine', '14');
insert into novels (title, authorId) values ('Things Fell Apart', '15');

insert into genres (genre) values ('Fiction');
insert into genres (genre) values ('Horror');
insert into genres (genre) values ('Historical');
insert into genres (genre) values ('Mystery');
insert into genres (genre) values ('Russian Literature');
insert into genres (genre) values ('Science Fiction');
insert into genres (genre) values ('Historical Fiction');
insert into genres (genre) values ('Fantasy');
insert into genres (genre) values ('Gothic');
insert into genres (genre) values ('War');
insert into genres (genre) values ('Drama');
insert into genres (genre) values ('plays');
insert into genres (genre) values ('Adventure');
insert into genres (genre) values ('French Literature');
insert into genres (genre) values ('Crime');
insert into genres (genre) values ('Thriller');
insert into genres (genre) values ('Dystopia');
insert into genres (genre) values ('Time Travel');
insert into genres (genre) values ('African Literature');

insert into novelGenres (novelId, genreId) values ('1', '1');
insert into novelGenres (novelId, genreId) values ('1', '2');
insert into novelGenres (novelId, genreId) values ('1', '8');
insert into novelGenres (novelId, genreId) values ('2', '1');
insert into novelGenres (novelId, genreId) values ('2', '2');
insert into novelGenres (novelId, genreId) values ('2', '9');
insert into novelGenres (novelId, genreId) values ('2', '8');
insert into novelGenres (novelId, genreId) values ('3', '1');
insert into novelGenres (novelId, genreId) values ('3', '7');
insert into novelGenres (novelId, genreId) values ('4', '1');
insert into novelGenres (novelId, genreId) values ('4', '7');
insert into novelGenres (novelId, genreId) values ('4', '10');
insert into novelGenres (novelId, genreId) values ('4', '5');
insert into novelGenres (novelId, genreId) values ('5', '1');
insert into novelGenres (novelId, genreId) values ('5', '7');
insert into novelGenres (novelId, genreId) values ('6', '1');
insert into novelGenres (novelId, genreId) values ('6', '7');
insert into novelGenres (novelId, genreId) values ('6', '11');
insert into novelGenres (novelId, genreId) values ('6', '12');
insert into novelGenres (novelId, genreId) values ('7', '1');
insert into novelGenres (novelId, genreId) values ('7', '7');
insert into novelGenres (novelId, genreId) values ('7', '13');
insert into novelGenres (novelId, genreId) values ('7', '14');
insert into novelGenres (novelId, genreId) values ('8', '1');
insert into novelGenres (novelId, genreId) values ('8', '4');
insert into novelGenres (novelId, genreId) values ('8', '15');
insert into novelGenres (novelId, genreId) values ('8', '16');
insert into novelGenres (novelId, genreId) values ('9', '1');
insert into novelGenres (novelId, genreId) values ('9', '4');
insert into novelGenres (novelId, genreId) values ('9', '6');
insert into novelGenres (novelId, genreId) values ('9', '2');
insert into novelGenres (novelId, genreId) values ('10', '1');
insert into novelGenres (novelId, genreId) values ('10', '5');
insert into novelGenres (novelId, genreId) values ('10', '4');
insert into novelGenres (novelId, genreId) values ('11', '1');
insert into novelGenres (novelId, genreId) values ('11', '4');
insert into novelGenres (novelId, genreId) values ('12', '1');
insert into novelGenres (novelId, genreId) values ('12', '6');
insert into novelGenres (novelId, genreId) values ('12', '17');
insert into novelGenres (novelId, genreId) values ('13', '1');
insert into novelGenres (novelId, genreId) values ('13', '6');
insert into novelGenres (novelId, genreId) values ('13', '17');
insert into novelGenres (novelId, genreId) values ('14', '1');
insert into novelGenres (novelId, genreId) values ('14', '6');
insert into novelGenres (novelId, genreId) values ('14', '18');
insert into novelGenres (novelId, genreId) values ('15', '1');
insert into novelGenres (novelId, genreId) values ('15', '7');
insert into novelGenres (novelId, genreId) values ('15', '19');