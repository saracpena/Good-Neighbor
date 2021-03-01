DROP TABLE IF EXISTS cities;
CREATE TABLE cities(id serial PRIMARY KEY, name VARCHAR(255));

DROP TABLE IF EXISTS neighbors;
CREATE TABLE neighbors(id serial PRIMARY KEY, name VARCHAR(255), address1 VARCHAR(255), address2 VARCHAR(255), city VARCHAR(255), state VARCHAR(255), zip VARCHAR(255), phone VARCHAR(255));

DROP TABLE IF EXISTS disclaimer;
CREATE TABLE disclaimer(id serial PRIMARY KEY, header VARCHAR(255), body VARCHAR(800));