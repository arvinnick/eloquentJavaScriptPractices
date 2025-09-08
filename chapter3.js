/*
Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can write a
function like that ourselves now. Define the function min that takes two arguments and returns their minimum.
 */
function min(number1, number2){
    if (number1 <= number2){
        return number1
    }
    else{
        return number2
    }
}
/*
We’ve seen that we can use % (the remainder operator) to test whethera number is even or odd by using % 2 to see whether
 it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The function should accept a single parameter
(a positive, whole number) and return a Boolean. Test it on 50 and 75. See how it behaves on -1. Why? Can you think of
 a way to fix this?
 */
function isEven(number){
    if (number === 0){
        return "even"
    }
    else if (number === 1){
        return "odd"
    }
    else{
        return isEven(number - 2)
    }
}

/*
You can get the N th character, or letter, from a string by writing [N] after the string (for example, string[2]). The
resulting value will be a string containing only one character (for example, "b"). The first character has position 0,
which causes the last one to be found at position string.length - 1. In other words, a two-character string has length
2, and its characters have positions 0 and 1. Write a function called countBs that takes a string as its only argument
 and returns a number that indicates how many uppercase B characters there are in the string. Next, write a function
 called countChar that behaves like countBs, except it takes a second argument that indicates the character that
is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.
 */
function constBs(inputString){
    return countChar(inputString, "B");
}

function countChar(inputString, countingChar){
    function constBs(inputString){
        let bNumber = 0;
        for (let i=0; i<inputString.length; i++){
            if (inputString[i] === countingChar){
                bNumber++;
            }
        }
        return bNumber
    }
}

// console.log(constBs("KD"))