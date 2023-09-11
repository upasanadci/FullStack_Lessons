# Relations

There are 3 main types of relations between data items (=Entities):

- One to One
- One to Many
- Many to Many

## One to One

One item has exactly one related other item.

Examples:

- 1 User - 1 Account (one user has exactly one account)
- 1 Order - 1 Delivery Address (one order has exactly one delivery address)

Often NESTING the child data in the parent item is applied.

Example Order - Delivery Address:

```
{
  _id: "12333",
  customer: "John Doe",
  deliveryAddress: {
    street: "Sesame Street",
    nr: 17,
    zipcode: "12345"
  }
}
```

## One to Many

One item can have many, potentially UNLIMITED related items of another one.

Example: A User can have many todos. But each todo only belongs to one user.

Technique: Reference related items by their ID.

We can map a One to Many relation in TWO ways.

### Technique 1: Relation on parent

We can link the parent to its children via an array on the parent item:

User:

```
{
  "user": {
    "_id": "u1"
    "name": "John",
    "todos": [ "t1", "t2", "t3", "t4", "t5 ],
  }
}
```

Implementation in Mongoose (User Schema):

```
todos: [ { type: mongoose.Types.ObjectId, ref: "Todo" } ]
```

### Technique 2: Relation on child

We can link each child item to its parent by placing the ID of the parent on the child.

Todos:

```
[
  { _id: "t1", title: "Wake the dog", user: "u1" },
  { _id: "t2", title: "Clean the dishes", user: "u1" },
  { _id: "t3", title: "Learn Python", user: "u1" },
  { _id: "t5", title: "Learn Relations", user: "u1" },
]
```

Implementation in Mongoose (Todo Schema):

```
user: { type: mongoose.Types.ObjectId, ref: "User" }
```

Which technique to choose?

The easier method to manage related data is to put the parent ID in the CHILD schema. In this case placing the userId in the Todo Schema.

Why?

In case we want to add or delete a todo, we can simply add / remove it into the todo collection. And are done. We do not need to update the user model.

But in case we use the array of related todo IDs on the parent schema (=User), we always need to update the user model too after each creation / deletion of a todo. So this way we always need to do multiple (!) database operations in multiple collections.

So ideally we choose technique 1 in most cases.

## Many to Many

Many to Many: One Item A can have MANY of the other item B AND one item B can have many items of A

Examples:

- Employee Project => one Employee can be in many projects. One projects can have many employees

### Technique 1: Reference items by arrays on both sides

Implementation in Mongoose - Example Employee Projects:

```
 Employee Model:
 projects: [ { type: mongoose.Types.ObjectId, ref: "Project" } ]

 Project Model:
 employees: [ { type: mongoose.Types.ObjectId, ref: "Employee" }]
```

So here we need to create arrays of related items on both directions.

That relationship type is the hardest to manage.

Because on each insertion / deletion of an item, we need to update items in two collections.

Example: We have an employee and want to assign that employee to a project.

Now we need to put the project into the "projects" array of the employee.
And the other way round, we need to put the employee into the "employees" array of the project.

### Technique 2: Create mapping collection

Alternatively we can create another collection where we store MAPPINGS between two items.

Usually we name it by the two related collections.

Example: Project and Employee have a many to many relations. So we create a "ProjectEmployee" Schema which holds mapping between items of both collections.

ProjectEmployeeSchema:

```
project: { type: mongoose.Types.ObjectId, ref: "Project" },
emmployee: { type: mongoose.Types.ObjectId, ref: "Employee }

```

In case we assign an employee to a project, we would create an entry in that mapping table, placing the ID of the project and the ID of the employee in it.

This way we can realize a many to many relationship which is easy to maintain.

In case we wanna remove an employee from a project, we simply delete the entry from the mapping collection.

In case we close a project, we can delete all entries with that project-id from the mappings collection and release all employees this way.

In either way: We just need to touch the mapping table to manage the relations.
