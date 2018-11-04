function greeter(greeting) {
  return name => `${greeting} ${name}`;
}

// útbúum tvö föll sem heilsa með "hello" og "hi"
const hello = greeter('hello');
const hi = greeter('hi');

console.log(hello('world')); // "hello world"

console.log(hi('world')); // "hi world"
