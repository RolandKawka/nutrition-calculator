BEGIN TRANSACTION;

CREATE TABLE hello (
    id  serial PRIMARY KEY,
    hello text NOT NULL
);

COMMIT;