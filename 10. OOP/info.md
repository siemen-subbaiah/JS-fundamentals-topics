## Constructor

- A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword.

- When a constructor gets invoked in JavaScript, the following sequence of operations take place:

  - A new empty object gets created.
  - 'this' keyword will then refer to the empty object which is being created.

## Prototype

- Prototype is being used to add in new properties and methods to the constructor

- Properties and methods gets added to the [[Prototype]]

## Inheritance (Using constructors)

- In javascript, inheriting the properties of one object to another object is called inheritance

- A parent object's prototype can also be inherited by any other object

- While inheriting, it does not go to the [[Prototype]]

## Class

- In JavaScript the usage of classes is syntactical sugar for constructors and prototypes.

- No need to explictly declare methods using the prototype, al the methods created inside the class can be directly found in the prototype object

## Inheritance (Using classes)

- This can be achieved using the extends and the super keyword using the class.
