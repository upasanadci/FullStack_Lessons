## POSTMAN API

## API is for intercting with webpage API.

## POSTMAN is an API Platform for developers to design,build,test and iterate their API

## Link ![https://linuxize.com/post/how-to-install-postman-on-ubuntu-20-04/]

## (sudo snap install postman)

# Simple API

Make an Object of Books that has following properties:-
id
book name:
author:
description:

### Status

GET `/status`

Returns the status of the API.

### Get a single book

POST `/books/:bookId`

Retrieve detailed information about a book with ID.

### Add detail of new book

POST `/newbook`

Add a new data for book.

Reject duplicate entry(set an error message)
