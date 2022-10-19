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
