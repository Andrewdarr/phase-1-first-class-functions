function receivesAFunction(callback) {
    callback();
  }
  function receivesAFunction(callback) {
    callback();
  }
function returnsANamedFunctio() {
return function namedFunction() {
    console.log("this is a named function");
};
}
function returnsAnAnonymousFunction() {
return () => console.log("this is an anonymous function");
}