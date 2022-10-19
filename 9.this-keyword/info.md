**'this' keyword depends on the context where it is being used!**

## 1. Global Context

```
this.name = 'KR$NA';
console.log(this.name); //KR$NA
```

- 'this' keyword is pointing to the global object

---

## 2. 'this' in normal function

```
this.name = 'KR$NA';
function sayMyName() {
  console.log(this.name);
}
sayMyName(); //KR$NA
```

- 'this' keyword again points to the global object here

---

## 3. 'this' in an object

```
const rapper = {
  firstName: 'Krishna',
  lastName: 'Kaul',
  stageName: 'KR$NA',
  sayMyName: function () {
    console.log(this.firstName);
  },
};

rapper.sayMyName(); //Krishna
```

---

- 'this' keyword points to the parent object of the function and the parent object in this case is the rapper object.

- When a function is invoked with the **dot** notation, the object to the left of the dot is what the 'this' keyword refers.

- This type of function invocation is called **Implicit binding**

---

## 4. 'this' in a nested object

```
const rapper = {
  firstName: 'Krishna',
  lastName: 'Kaul',
  stageName: 'KR$NA',
  newRapper: {
    newName: 'krsna,
    sayMyName: function () {
      console.log(this.newName);
    },
  },
};

rapper.newRapper.sayMyName(); //krsna

```

- 'this' keyword points to the immediate parent object of the function and the immediate parent object in this case is the newRapper object.

- Again even here the `sayMyName` function is being invoked with a dot operator and the object to the left of the dot is what 'this' refers to.

## 5. 'this in an arrow function'

- The 'this' keyword value of the arrow function comes from the parent normal function, if there is no parent normal function then it will point to the global object.

- There are three different scenario's here:

  ### a. When an arrow function is being used outside of an object (basically in the global scope)

  ```
  this.name = 'KR$NA'
  const sayMyName = () => {
  console.log(this.name);
  }
  sayMyName(); //KR$NA
  ```

  - Since there is no parent function, here the 'this' keyword points to the global object.

  ### b. When an arrow function is being used inside an object

  ```
  this.name = 'Krsna'
  const person = {
  firstName: 'Krishna',
  lastName: 'Kaul',
  stageName: 'KR$NA',
  sayMyName: ()=>{
    console.log(this.name);
  },
  };

  person.sayMyName(); //Krsna
  ```

  - Again here the 'this' keyword will point to the global object since there is no parent normal function associated with the arrow function.

  ### c. When an arrow function is being wrapped around a normal function and then being used inside an object.

  ```
  const rapper = {
  firstName: 'Krishna',
  lastName: 'Kaul',
  stageName: 'KR$NA',
  sayMyName: function(){
    const nestedArrow = ()=> console.log(this.firstName);
    nestedArrow()
  },
  };

  person.sayMyName(); //Krishna
  ```

  - Here the 'this' keyword value of the arrow function comes from the parent normal function and the parent normal function's parent is the rapper object.

## 6. 'this' inside a class

```
class Rapper {
     constructor(stageName){
        this.stageName = stageName
     }

     sayMyName(){
        console.log(this.stageName)
     }

}

const rapper1 = new Rapper('KR$NA')
rapper1.sayMyName() //KR$NA

```

- Inside of a class the 'this' keyword points to the object inside of the constructor.

- When a function is invoked using the new keyword, within the function the ‘this’ keyword will always refer to an empty object.

- This type of function invocation is called **new binding**

## 7. 'this' inside call, apply and bind

- Here I will be just showing an example with the call method, the 'this' keyword behaves the same with apply and bind.

```
const rapper = {
  firstName: 'Krishna',
  lastName: 'Kaul',
  stageName: 'KR$NA',
};

function sayMyName() {
  console.log(this.firstName);
}

sayMyName.call(person);

```

- When a function is invoked using the call method (which specifies the context), the first argument of the call method will refer to the ‘this’ keyword.

- This type of function invocation is called **Explicit binding**
