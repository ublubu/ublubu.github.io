/*
 * LESSON 1: Evaluating Functions
 */

// you may remember functions from a math class. something like `f(x) = 2x + 1`, for example.
// written in javascript: (called a "function definition")
function f(x) {
    return 2 * x + 1;
}
// Here's what the function definition means:
// The function's name is `f`. it accepts one "argument" `x`.
// `return` means "this is what the function evaluates to"

// let's say you want to evaluate function `f` where `x` is 5:
f(5);
// the expression `f(5)` is evaluated as 11!
// try out a few expressions of your own - type them in the console to see what they evaluate to.
// (e.g. type "f(5)" and press <enter>)

// here's a function. its name is "sum2". it takes two arguments `a` and `b`.
function sum2(a, b) {
    return a + b;
}
// functions can accept any number of arguments. e.g.
function with5things(thing1, thing2, thing3, thing4, thing5) {
    // just like a horizontal line, e.g. y = f(x) = 5
    return "the value of this function doesn't depend on its arguments. lol";
}
// you can try out these functions just like you did `f` above.

/*
 * Advance Note: If you try to evaluate the expression `with5things()`, it'll work just fine.
 *   This is because all arguments are optional in JavaScript. For now, let's just ignore this trait.
 */

// I've been using this word "expression". A expression is a piece of code that can be evaluated.
f; // This expression is evaluated as "a function that takes one argument"
5; // This expression is "the number 5".
sum2(2, 3); // This expression is also "the number 5".
// Note that "sum2(2, 3)" follows the same pattern as "sum2(a, b)" in the function definition.
// >> In general, when you evaluate a function, your expression should look like the function definition.

// Now that you know something about expressions, let's have a quick look at one way to
// combine simple expressions into more complicated constructs.
sum2(2, 3); // Here's one expression...
//   ^  ^   <- Look at this! There are two more expressions nested inside it.
// What happens if we replace those expressions of `2` and `3` with something more interesting?
sum2(sum2(2, 3), sum2(4, 5)); // This works!
// Do you remember function composition from math? Let's say we have a `g(x) = -x` in addition to `f`.
function g(x) {
    return -x;
}
// In math, we can write this: `f(g(x))`. It means "evaluate function g at x and then use the result to evaluate function f".
f(g(1)); // Here's what it looks like in JavaScript. In this case, `x` is `1`.
/*
 * Advanced Note: If you want to read `f(g(x))` in English, you can say this: "F composed with G"
 *     However, some branches of math do function composition in the opposite order: "F composed with G" = `g(f(x))`
 *     Therefore, it is safest to actually say this: "F after G", because `f` is evaluated AFTER `g`
 *   I just learned about this last week. LOL
 */
// What we did with `sum2(sum2(2, 3), sum2(4, 5))` was also function composition.
// The function `sum2` just takes two arguments (inputs) instead of just one.

// Try composing `f` and `g` in different combinations to see what happens. Try combining them with `sum2` too.
f(f(f(f(f(sum2(1,1)))))); // Here's one to get you started.

/*
 * Note: I'm in the habit of putting semicolons at the end of each line.
 *       In the "expression" examples above, the semicolons (;) are not actually part of the expressions.
 *       >> The semicolons actually mark the boundary between expressions.
 */

// Now you know how to evaluate and compose functions! These are the basics of Functional Programming a.k.a. FP.
