/*
The sum of a range
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:
console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from
start up to and including end.
Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program
and see whether it does indeed return 55.
As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value
used when building the array. If no step is given, the elements should go up by increments of one, corresponding to the
old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also works with negative
step values so that range(5, 2, -1) produces [5,4, 3, 2].
 */
function rangeFunc(start, end, step){
    let retArr = [];
    if (step<0){
        for (let i = end; i >= start; i= i + step){
            retArr.push(i)
        }
    } else {
        for (let i = start; i <= end; i= i + step){
            retArr.push(i)
        }
    }
    return retArr
}
function arrSum(arr){
    let retSum = 0;
    for (let i of arr){
        retSum += i;
    }
    return retSum;
}

/*
Reversing an array
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this
exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should take an array as
its argument and produce a new array that has the same elements in the inverse order. The second, reverseArrayInPlace,
should do what the reverse method does: modify the array given as its argument by reversing its elements. Neither may
use the standard reverse method.
Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect
to be useful in more situations? Which one runs faster?
 */
function reverseArray(arr){
    let retArr = [];
    for(let i = arr.length - 1; i>=0; i--){
        retArr.push(arr[i]);
    }
    return retArr
}

function reverseArrayInPLace(arr){
    for(let i = 0; i<=arr.length - 1; i++){
        arr.push(arr[i])
        arr.unshift(arr[i])
    }
}
/*
A list
As generic blobs of values, objects can be used to build all sorts of data structures. A common data structure is the
list (not to be confused with arrays). A list is a nested set of objects, with the first object holding a reference to
the second, the second to the third, and so on:
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
                value: 3,
                rest: null
            }
        }
};
The resulting objects form a chain, as shown in the following diagram:
A nice thing about lists is that they can share parts of their structure. For example, if I create two new values
{value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both
independent lists, but they share the structure that makes up their last three elements. The original list is also still
a valid three-element list. Write a function arrayToList that builds up a list structure like the one shown when given
[1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Add the helper functions
prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list,
and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring
to the first element) or undefined when there is no such element. If you haven’t already, also write a recursive version
of nth.
 */

function linker(element, other_element){
    element.rest = other_element;
    return element
}
function nth(index, list, passed_elements=0){
    let ret = list;
    if(!ret || passed_elements===index){
        return ret;
    }
    else{
        return nth(index, list, passed_elements + 1);
    }
}
function arrayToList(arr){
    if(arr.length === 1){
        return {
            value:arr[0],
            rest:null
        };
    } else{
     return linker({
         value: arr[0]
     },
         arrayToList(arr.slice(1)));
    }
}

/*
Deep comparison
The == operator compares objects by identity, but sometimes you’d prefer to compare the values of their actual
properties. Write a function deepEqual that takes two values and returns true only if they are the same value or are
objects with the same properties, where the values of the properties are equal when compared with a recursive call to
deepEqual.
To find out whether values should be compared directly (using the === operator for that) or have their
properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep
comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also
produces "object".
The Object.keys function will be useful when you need to go over the properties of objects to compare them.
 */
function deepEqual(firstValue, secondValue){
    if((!firstValue && secondValue)||(firstValue && ! secondValue)){
        return false;
    }
    if(Object.keys(firstValue).toString()!==Object.keys(secondValue).toString()){
        return false;
    }
    else{
        for(let key of Object.keys(firstValue)){
            if(typeof(firstValue[key]) === "object"){
                if(deepEqual(firstValue[key], secondValue[key])){
                    continue;
                } else{
                    return false;
                }
            }
            else if(firstValue[key] !== secondValue[key]){
                return false;
            }
        }
        return true;
    }
}

console.log(deepEqual({
    a:1,
    b:2
},
    {
        a:1,
        b:2,
    }))


console.log(deepEqual(
    {a:1, b:2, c: {d:3, e:4}},
{
        a:1,
        b:2,
    }))

console.log(deepEqual(
    {a:1, b:2, c: {d:3, e:4}},
    {
        a:1,
        b:2, c:{d:3, e:4}
    }))

console.log(deepEqual(
    {a:1, b:2, c: {d:3, e:4}},
    {
        a:1,
        b:2, c:null
    }))