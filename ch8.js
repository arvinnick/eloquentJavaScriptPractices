/*
Retry
Say you have a function primitiveMultiply that in 20 percent of cases multiplies two numbers and in the other 80 percent
of cases raises an exception of type MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
keeps trying until a call succeeds, after which it returns the result. Make sure you handle only the exceptions you are
trying to handle.
 */
function primitiveMultiplyWrapper(primitiveMultiply){
    let ret;
    try {
        ret = primitiveMultiply();
    } catch (e) {
        if (e instanceof MultiplicatorUnitFailure)
        {
            ret = primitiveMultiplyWrapper(primitiveMultiply);
        } else {
            throw e;
        }
    }
    return ret;
}

/*
The locked box
Consider the following (rather contrived) object:
 */
const box = new class {
    locked = true;
    #content = [];

    unlock() {
        this.locked = false;
    }

    lock() {
        this.locked = true;
    }

    get content() {
        if (this.locked) throw new Error("Locked!");
        return this.#content;
    }
};
/*
It is a box with a lock. There is an array in the box, but you can get at it only when the box is unlocked.
Write a function called withBoxUnlocked that takes a function value as argument, unlocks the box, runs the function, and
then ensures that the box is locked again before returning, regardless of whether the argument function returned
normally or threw an exception.
For extra points, make sure that if you call withBoxUnlocked when the box is already unlocked, the box stays unlocked.
 */

function withBoxUnlocked(callable){
    let lockAtTheEnd;
    lockAtTheEnd = box.locked;
    box.unlock();
    try {
        callable();
    } catch (e) {throw e} finally {
        if (lockAtTheEnd){
            box.lock();
        }
    }
}