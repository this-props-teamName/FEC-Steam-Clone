DROP TABLE IF EXISTS game CASCADE;
DROP TABLE IF EXISTS gameInfo;
DROP TABLE IF EXISTS carousel;
DROP TABLE IF EXISTS min;
DROP TABLE IF EXISTS req;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS logIn;



CREATE TABLE game (
    id SERIAL PRIMARY KEY,
    game_id INTEGER UNIQUE
);

CREATE TABLE gameInfo (
    id SERIAL PRIMARY KEY,
    prepur_offer TEXT,
    dd_edition TEXT,
    dd_img TEXT,
    about TEXT,
    game_id INTEGER REFERENCES game(game_id)
);

CREATE TABLE carousel (
    id SERIAL PRIMARY KEY,
    img_url TEXT,
    developer TEXT,
    publisher TEXT,
    release_date TEXT,
    tags TEXT,
    title TEXT,
    game_id INTEGER REFERENCES game(game_id)
);

CREATE TABLE min (
    id SERIAL PRIMARY KEY,
    required TEXT,
    os TEXT,
    processor TEXT,
    memory TEXT,
    graphics TEXT,
    directX TEXT,
    storage TEXT,
    additional_notes TEXT,
    game_id INTEGER REFERENCES game(game_id)
);

CREATE TABLE req (
    id SERIAL PRIMARY KEY,
    required TEXT,
    os TEXT,
    processor TEXT,
    memory TEXT,
    graphics TEXT,
    directX TEXT,
    storage TEXT,
    additional_notes TEXT,
    game_id INTEGER REFERENCES game(game_id)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    username TEXT,
    description TEXT,
    review_num SERIAL,
    recommended TEXT,
    time TIMESTAMP,
    replay TEXT,
    game_id INTEGER REFERENCES game(game_id)
);

CREATE TABLE logIn (
    id SERIAL,
    username TEXT
);