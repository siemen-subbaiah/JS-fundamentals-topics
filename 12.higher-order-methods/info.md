## map

- map method is used to create a new array from existing one by applying a function to each one of the elements of the first array.

- It takes in a callback function and in turn the callback function takes three parameters - current element, index and the array itself

## filter

- filter method is used to create a new array if the conditions set to be true.

- It takes in a callback function and in turn the callback function takes three parameters - current element, index and the array itself

## reduce

- reduce method reduces the given array of values down to just one value.

- It takes in a callback function and an initial value, inside the callback function it takes in accumulator(this is the initial value), current value, index and the array itself

- If there is no initial value then the accumulator will take in the first element of the array

## forEach vs map:

- map method returns a new array but forEach method does not return a new array

- map method does not mutate the existing array, but forEach does mutate the existing array

- using map method, other array methods can be chained, but in forEach this can't be done.

# Spread and Rest Operator

## Spread Operator

- As the name suggests, it will spread the values (from the group, it takes out and makes it individual). For ex:

```
const arr = [1,2,3]
console.log(arr)
console.log(…arr)
```

- so in this case the first console answer would be : [1,2,3] and the second console answer would be 1 2 3

## Rest Operator

- So this is the reverse of what spread operator does. It takes the individual items and then groups it. For ex: it would group 1,2,3 as [1,2,3]
