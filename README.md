[![Build Status](https://travis-ci.org/uraway/diff-many-arrays.svg?branch=master)](https://travis-ci.org/uraway/diff-many-arrays)

## Install

```
yarn add diff-many-arrays
```

```
npm install diff-many-arrays
```

## Usage

```js
const diffArrays = require('diff-many-arrays');

diffArrays(['a', 'b', 'c'], ['b', 'c', 'd']) // ['a', 'd']

diffArrays(['a', 'b', 'c'], ['a', 'b', 'c', 'd'], ['c', 'e']) // ['a', 'b', 'd', 'e']
```
