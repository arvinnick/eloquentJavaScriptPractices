/*
A vector type
Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), that it
saves to properties of the same name.
Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector
that has the sum or difference of the two vectors’ (this and the parameter) x and y values. Add a getter property length
to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).
 */

class Vec{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    plus(vec){
        return new Vec(this.x + vec.x, this.y + vec.y);
    }
    minus(vec){
        return new Vec(this.x - vec.x, this.y - vec.y);
    }
    get length(){
        return Math.sqrt(this.x^2 + this.y^2);
    }
}

// let vec = new Vec(5,4);
// let veca = new Vec(3,2);
// console.log(vec.minus(veca).length)


/*
Groups
The standard JavaScript environment provides another data structure called Set. Like an instance of Map, a set holds a
collection of values. Unlike Map, it does not associate other values with those—it just tracks which values are part of
the set. A value can be part of a set only once—adding it again doesn’t have any effect. Write a class called Group
(since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add
adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was
a member), and has returns a Boolean value indicating whether its argument is a member of the group.
Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same. Give the
class a static from method that takes an iterable object as its argument and creates a group that contains all the
values produced by iterating over it.
 */
class Group{
    constructor(){
        this.self = [];
    }
    add(x){
        if (!this.has(x)){
            this.self.push(x);
        }
    }
    delete(x){
        if (this.has(x)){
            this.self = this.self.filter(item => item !== x);
        }
    }
    has(x){
        return !(this.self.indexOf(x) === -1);
    }
    static from(iterableObject){
        let g = new Group();
        for (let item of iterableObject){
            g.add(item);
        }
        return g;
    }
    [Symbol.iterator](){
        let idx = -1;
        let self = this;
        return{
                next(){
                    return (idx <= self.self.length - 1) ? {value:self.self[idx++]} : {done:true};
                }
            }
    }
}

let g = Group.from([1,2,3,4,5])
for (let i of g) {
    console.log(i)
}