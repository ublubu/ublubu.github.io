/*
 * LESSON 2: Defining Functions
 */

// Now that you know how to use functions, it's time to make your own.

// The first thing you need is a better way to write down your code.
// Typing directly into the console is fine for simple stuff,
// but it gets to be a pain for anything longer than a single line.

// I might come up with a better solution in the future, but let's try this for now:

/*
 * I might come up with a better solution in the future, but let's try this for now:
 *
 * > File - Save Page As -> Webpage Complete (NOT html only)
 * > Your browser should save a file called "index.html" and a folder called something like "index_files"
 * > open `index_files/script.js` in your favorite text editor (notepad works)
 * > open `index.html` in your browser, then open the developer console
 *
 * Now you can make changes to `script.js`, save them, and refresh the page in your web browser.
 * If your changes cause any errors, you will see error messages in the developer console.
 *
 * This is pretty much how I worked at my last job.
 *
 *** If you don't have a favorite text editor, look up http://www.sublimetext.com/3 .
 *** It's free to use, and it should work on your computer. I used to do all my coding in it.
 */

// Let's have a look at `f` from the previous lesson.
/*
function f(x) {
    return 2 * x + 1;
}
*/

// If the definition of `f` above is still commented out, this expression is invalid because `f` is not defined.
f(1); // error!
// Use your text editor to "uncomment" the definition of `f`. Then reload the page in your browser.

// Now try changing `f` to be a different mathematical formula. How about `f(x) = x * x`?
// Try typing `f(1)`, `f(2)`, `f(3)`, etc in the console to see if the function you wrote behaves the way you expect.
// How about negative numbers as the argument? Decimals?

// If `f` above is the JavaScript version of `f(x) = 2x + 1`, what would be the Javascript version of `g(x) = -x`?
// >> Try writing it out yourself. If you get stuck, go ahead and look at Lesson 1. I defined it there. =D

/* Put your definition of `g` right after this line. (or anywhere else in this file)
 * Then try `g(5)` etc in your console to see how `g` behaves.
 */

// Okay, these simple functions are kinda boring.
// What if you want a function `max` that returns (evaluates to) the larger of its two arguments?

// Is this it?
function max_a(x, y) { // NOPE
    return x;
}
function max_b(x, y) { // Still NOPE
    return y;
}
// NOPE
function max_c(x, y) { // STAHP
    return x + y;
}

// Clearly we need something that lets us make a choice between `x` and `y`
function max(x, y) {
    return (x > y) ? x : y; // What is this weird syntax?
}
// Expressions of the form `b ? x : y` are evaluated as `x` if `b` is true and `y` if `b` is false.
// In this case, `b` is `x > y`. Does this function behave the way "max" should?

// I've been using stuff like `+` and `*` and `-` like it's obvious that you can use them in JavaScript.
// These are called "operators", which essentially means functions with special syntax.
// Note that `+` is basically the same thing as `sum2` from Lesson 1.
// >> It just accepts arguments in the pattern `x [function name] y` instead of `[function name](x, y)`.
// Other languages let you define your own operators, but we aren't so lucky in JavaScript.
// Here are some built-in JavaScript (henceforth referred to as "JS") operators:
// + - * / && || === !==
//
// If you want to look up what they do (or what other operators JS provides), here's a good resource:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
//
// The `[true or false] ? [value for true] : [value for false]` a.k.a `?:` operator is called the "conditional" operator.
// The conditional operator lets you make a choice based on a "condition" that is either true or false.
// It's also called the "ternary" operator because it's the only operator that takes 3 arguments.

/*
 * Remember the "order of operations" from basic algebra? It applies in JS as well.
 *
 * Consider `x + 2 * y`, `(x + 2) * y`, and `x + (2 * y)`
 * Since `*` has higher priority than `+`, the middle expression is different from the other two.
 *
 */

// Try making a function that evaluates to "yes" or "no" depending on whether 3 numbers can be the lengths of the sides of a triangle.
// Remember, no side of a triangle can have a length greater than the sum of the lengths of the other two sides.
// Here are some building blocks you'll need:

// This checks if one side is too short to be part of a triangle with two other sides.
function sideTooShort(side, otherSide, anotherSide) {
    return side < otherSide + anotherSide;
}

// This combines three separate conditions into one. It evaluates to `true` iff ANY of its arguments are `true`.
// >> "iff" means "if and only if"
function any3(conditionA, conditionB, conditionC) {
    // Here's a new operator! It's a boolean OR. Check out Mozilla's guide to see what it does.
    return conditionA || conditionB || conditionC;
}
// How can you put together these two functions and the ternary operator to make a function called `isTriangle`?
/*
function isTriangle(a, b, c) {
    // What goes here?????????????
}
*/
// Also, if you don't know how to make a function evaluate to a string, I did exactly that in Lesson 1's `with5things`.
// >> A `string` is a "string" of characters. Strings look like this:
"blah blah blah blah blah. i am a string";

// Did you get it? How about if you try to use this `all3` function instead of `any3`.

// This function returns `true` iff ALL of its arguments are `true`.
function all3(conditionA, conditionB, conditionC) {
    // Here's a new operator! It's a boolean AND. Check out Mozilla's guide to see what it does.
    return conditionA && conditionB && conditionC;
}
// There's one more piece you might need: `!`
!true; // This expression evaluates to `false`. `!` is the boolean NOT operator.
!false; // true
!(1 > 0); // false
!(2 <= -5); // How about this one? Try typing it in the console if you aren't sure. =D

// Now try writing an `isTriangle_` function that doesn't use `any3` or `all3`.
// You can pretty much replace every `any3(x, y, z)` with `(x || y || z)`, etc.
/*
function isTriangle_(a, b, c) {
    // What goes in here??
}
*/

// When you're done, try changing `isTriangle_` so it doesn't use `sideTooShort` either.
// Compare your code for `isTriangle` with `isTriangle_`. Which one do you like more?

// In real life, people may use your code in ways you didn't expect. This means you have to change your code to accomodate them.
//
// Note that if we have three sides `a`, `b`, and `c`, `a === b + c` means that our triangle has zero area.
// >> Try drawing it out on paper. It just looks like a line segment. The sides are on top of each other.
// Let's say we don't want that. Instead of checking 'a < b + c', let's check 'a <= b + c'.
// >> This way our triangles will always have a little bit of area at least.
/*
 * e.g. `isTriangle(1, 1, 2)` used to be "yes". It should be "no", because that triangle looks like a line.
 */

// Try modifying `isTriangle` to match our new requirements. (HINT: You are allowed to change `sideTooShort`.)
// Now try modifying `isTriangle_` to do the same. Which change was easier to make?

