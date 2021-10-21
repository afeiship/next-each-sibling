# next-each-sibling
> Each sibling for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-each-sibling
```

## usage
```js
import '@jswork/next-each-sibling';

const indexes = [4, 8, 12];
const res = [];
nx.eachSibling(indexes, (cur, next) => {
  res.push([cur, next]);
});

// result
[
  [4, 8],
  [8, 12]
];
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-each-sibling/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-each-sibling
[version-url]: https://npmjs.org/package/@jswork/next-each-sibling

[license-image]: https://img.shields.io/npm/l/@jswork/next-each-sibling
[license-url]: https://github.com/afeiship/next-each-sibling/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-each-sibling
[size-url]: https://github.com/afeiship/next-each-sibling/blob/master/dist/next-each-sibling.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-each-sibling
[download-url]: https://www.npmjs.com/package/@jswork/next-each-sibling
