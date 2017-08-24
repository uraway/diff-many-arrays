## Install

```
yarn add diff-arrays
```

```
npm install diff-arrays
```

## Usage

```js
const diffArrays = require('diff-arrays');

diffArrays(['a', 'b', 'c'], ['b', 'c', 'd']) // ['a', 'd']

diffArrays(['a', 'b', 'c'], ['a', 'b', 'c', 'd'], ['c', 'e']) // ['a', 'b', 'd', 'e']
```
