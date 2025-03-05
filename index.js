// receivesAFunction takes a function as an argument and calls it.
function receivesAFunction(callback) {
  callback();
}

// returnsANamedFunction returns a named function.
function returnsANamedFunction() {
  // Here, the inner function is explicitly named "namedFunction".
  return function namedFunction() {
    // This function could have its own logic.
    return "I am a named function";
  };
}

// returnsAnAnonymousFunction returns an anonymous function.
function returnsAnAnonymousFunction() {
  // An anonymous function (without a name) is returned.
  return function () {
    return "I am an anonymous function";
  };
}

// Export the functions for testing
module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction,
};
