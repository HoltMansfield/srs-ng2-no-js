When typescript needs types we install the corresponding npm package
and the awesome-typescript-loader will pick them up and do it's thing.

@types/core-js = this is for Promise, etc (extremely basic ES6 stuff)

@types/jasmine = this is for describe, it

@types/node = this is for lazy loading with webpack where it somehow moans about require not    being known yet still works
