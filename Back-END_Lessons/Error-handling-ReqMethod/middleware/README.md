Exercise :-

Story: Our client, the record store, would like to be able to update and delete records from their store. Except the records data model, our client would like to have two more data models. One for the users and one for the orders.

Create endpoints for the users and orders models. A user should contain a first name, a last name, an email, a password. An order should contain a record id and a quantity property. We will later on enrich all models with more properties.

Users Model

users -> GET all users
users/:id -> GET a user
users -> POST a user
users/:id -> PUT a user
users/:id -> DELETE a user
Orders Model

orders -> GET all orders
orders/:id -> GET an order
orders -> POST an order
orders/:id -> PUT an order
orders/:id -> DELETE an order

Once we make sure all the above work as they should and that our database is being updated correctly, please write a middleware function that will handle errors during the requests.
