CREATE TABLE notes
(
    note_id  SERIAL PRIMARY KEY,
    note_name   varchar(30) NOT NULL,
    note_value    varchar(30) NOT NULL
);