**Scope is where a specific variable can be accessed in a Javascript program**

- Lexical Environment simply means local memory of a function + local memory of the parents function. (Usually JS looks into these lexical environments to find variables if they can be accessed by the present function or not)

```
function run1(){
    var a = 10

    function run2(){
        var b = 20
    }

}
```

- Scope Chain is the chain of all the lexical environments

- Block is a place where multiple js statements can be combined in a group, starts and ends with a bracket

- ## Three types of scopes:

1. Global scope
2. Block scope
3. Function scope

- let and const create block-scoped variables

- Variables created with var are scoped to their nearest function or the global scope

![img](https://miro.medium.com/max/1400/1*KxHwVbB0zhnSVrhrWtT-gg.jpeg)
