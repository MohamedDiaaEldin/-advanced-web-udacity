/* Replace with your SQL commands */
CREATE TABLE orders (
    id SERIAL PRIMARY KEY, 
    status VARCHAR(60),
    customer_id bigint REFERENCES customer(id)
)