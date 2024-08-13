**Object is a data type which has collection of key-value paired variables and functions bundled together**

- The delete keyword can only be used to delete the properties of an object and cannot be used to delete local variables

- Dynamic properties in an object can be assigned by using the '[]' and placing the property name inside square brackets

- for in loop can be used to iterate through an object

- If specific properties of an object needs to be extracted then destructuring can be used

- To copy/clone an object, we can use the spread operator or object.assign property

- Object.keys and Object.values can be used to generate an array of keys and values

- Everything is Objects in JavaScript

```
const fn = function fn(){
      return ‘wassup’
}

fn.addProp = ‘This is a prop’

fn.newFn = function fn(){
       return ‘wassup2’
}
```

---

**In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”**

- Using `__proto__` property we can set methods and other objects to the [[Prototype]] of an exisiting object

- If we do this, then prototype chain forms to access the inbuilt methods of object like `toString`

- parent.`__proto__` !== Object.prototype
- parent.`__proto__`.`__proto__` === Object.prototype

- Here accessing the `__proto__` twice is eventually referred to as prototype chain

- The modern methods to get/set a prototype are:

1. Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.

2. Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.

3. Object.create can also be created

- This [[Prototype]] is an hidden object added to every object literal created, even if it is an empty object this [[Prototype]] object will be present. It will contain some properties like `hasOwnProperty`, `toString` etc

- Similarly, since arrays, dates and functions are objects internally in JavaScript, even they have this [[Prototype]] object with various different methods and properties

- The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype. 

---

### Accessor properties Data properties.

#### Data Properties

- `Object.getOwnPropertyDescriptor` gives the property flags of the properties mentioned. (writable, enumerable, configurable)

- Using `Object.defineProperty` we can change these descriptors

- `Object.seal(obj)` : Forbids adding/removing of properties. Sets configurable: false for all existing properties.

- `Object.freeze(obj)` : Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.

#### Accessor Properties (Property getters and setters)

- Accessor properties are represented by “getter” and “setter” methods. In an object literal they are denoted by get and set:

```
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper
```
