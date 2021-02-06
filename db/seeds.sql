use developmenttest_db;


INSERT INTO Products (instName, descr, img, audio, createdAt, updatedAt) VALUES ('El Primero', "This violin is exceptional in many ways", "href for img", "audio", now(), now());
INSERT INTO Products (instName, descr, img, audio, createdAt, updatedAt) VALUES ('Vincento', "This cello has that girthy sound maaannn", "href for img", "audio", now(), now());
INSERT INTO Products (instName, descr, img, audio, createdAt, updatedAt) VALUES ('Vincento number 2', "Hey this cello pretty good too", "href for img", "audio", now(), now());
INSERT INTO Products (instName, descr, img, audio, createdAt, updatedAt) VALUES ('Little Timmy', "this one is actually a POS", "href for img", "audio", now(), now());
INSERT INTO Products (instName, descr, img, audio, createdAt, updatedAt) VALUES ('Vincento Number 3', "Revenge of the vincentoooo", "href for img", "audio", now(), now());

-- --------------------

use developmenttest_db;

INSERT INTO Admins (username, email, password, createdAt, updatedAt) VALUES ('bigmoney', 'generic@mail.com', 'bigsafepassword', now(), now());

