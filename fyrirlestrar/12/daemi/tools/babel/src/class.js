class Foo {
  constructor() {
    this.foo = 1;
  }

  bar() {
    return this.foo;
  }
}

const foo = new Foo();

console.log(foo.bar());
