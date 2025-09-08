/*
    Looping a triangle
    Write a loop that makes seven calls to console.log to output the fol-
    lowing triangle:
    #
    ##
    ###
    ####
    #####
    ######
    #######
    It may be useful to know that you can find the length of a string by
    writing .length after it.
        let abc = "abc";
    console.log(abc.length);
    // → 3
*/
let printableHashes = "#"
for (let numberOfHashes = 1; numberOfHashes <= 7; numberOfHashes += 1){
    console.log(printableHashes);
    printableHashes += "#"
}


/*
    FizzBuzz
    Write a program that uses console.log to print all the numbers from 1
    to 100, with two exceptions. For numbers divisible by 3, print "Fizz"
    instead of the number, and for numbers divisible by 5 (and not 3), print
    "Buzz" instead.
    When you have that working, modify your program to print "FizzBuzz
    " for numbers that are divisible by both 3 and 5 (and still print "Fizz"
    or "Buzz" for numbers divisible by only one of those).
    (This is actually an interview question that has been claimed to weed
    out a significant percentage of programmer candidates. So if you solved
    it, your labor market value just went up.)
 */

for (let number = 1; number <= 100; number += 1){
    if (number % 3 === 0 && number % 5 !== 0){
        console.log("Fizz");
    } else if (number % 5 === 0 && number % 3 !== 0){
        console.log("Buzz")
    } else if (number % 5 === 0 && number % 3 === 0){
      console.log("FizzBuzz")
    } else {
        console.log(number);
    }
}

/*
    Chessboard
    Write a program that creates a string that represents an 8×8 grid, using
    newline characters to separate lines. At each position of the grid there
    is either a space or a "#" character. The characters should form a
    chessboard.
    Passing this string to console.log should show something like this:
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
     # # # #
    # # # #
     # # # #
    When you have a program that generates this pattern, define a bind-
    ing size = 8 and change the program so that it works for any size,
    outputting a grid of the given width and height.
 */

let previousCell = " ";
let row = "";
let size = 8;
for (let rowNumber = 0; rowNumber < size; rowNumber += 1){
    if (previousCell === " "){
        row = "#";
        previousCell = "#";
    } else {
        row = " ";
        previousCell = " ";
    }
    for (let columnNumber = 0; columnNumber < size; columnNumber += 1){
        if (previousCell === " "){
            row += "#";
            previousCell = "#";
        }
        else if (previousCell === "#"){
            row += " ";
            previousCell = " ";
        }
    }
    // row += "\n";
    console.log(row);
}