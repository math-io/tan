Tangent
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the [tangent][tangent] of a number.

The [tangent][tangent] is defined as

<div class="equation" align="center" data-raw-text="\tan x = \frac{\sin x}{\cos x}" data-equation="eq:tangent">
	<img src="https://cdn.rawgit.com/math-io/tan/f9232860446e042bb09ded8ae9e707f7648e286d/docs/img/eqn.svg" alt="Tangent definition.">
	<br>
</div>


## Installation

``` bash
$ npm install math-tan
```


## Usage

``` javascript
var tan = require( 'math-tan' );
```

#### tan( x )

Computes the [tangent][tangent] of a `number`.

``` javascript
var val = tan( 0 );
// returns ~0

val = tan( -Math.PI/4 );
// returns ~-1

val = tan( Math.PI/4 );
// returns ~1
```


## Examples

``` javascript
var linspace = require( 'compute-linspace' );
var tan = require( 'math-tan' );

var x = linspace( -Math.PI/2, Math.PI/2, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
	console.log( tan( x[ i ] ) );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-tan.svg
[npm-url]: https://npmjs.org/package/math-tan

[build-image]: http://img.shields.io/travis/math-io/tan/master.svg
[build-url]: https://travis-ci.org/math-io/tan

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/tan/master.svg
[coverage-url]: https://codecov.io/github/math-io/tan?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/tan.svg
[dependencies-url]: https://david-dm.org/math-io/tan

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/tan.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/tan

[github-issues-image]: http://img.shields.io/github/issues/math-io/tan.svg
[github-issues-url]: https://github.com/math-io/tan/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[tangent]: http://mathworld.wolfram.com/Tangent.html
