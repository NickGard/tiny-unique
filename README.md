# tiny-unique

[![source](https://badgen.net/npm/v/@ngard/tiny-unique)](https://www.npmjs.com/package/@ngard/tiny-unique)
[![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-unique)](https://bundlephobia.com/result?p=@ngard/tiny-unique)
[![build status](https://badgen.net/travis/NickGard/tiny-unique)](https://travis-ci.org/NickGard/tiny-unique)
[![license](https://badgen.net/badge/license/MIT/blue)](https://badgen.net/badge/license/MIT/blue)

A minimal utility similar to `lodash.uniq`. For when every byte counts!
Returns a copy of the passed array with only the first of any duplicate values included.

<hr/>

lodash.uniq: [![bundle size](https://badgen.net/bundlephobia/minzip/lodash.uniq)](https://bundlephobia.com/result?p=lodash.uniq)
<br/>
tiny-unique: [![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-unique)](https://bundlephobia.com/result?p=@ngard/tiny-unique)

<hr/>

## Syntax

```javascript
unique(/* array [, comparator] */);
```

## Parameters

`array` - An array of possibly duplicated values
`comparator` - An optional function that compares two values for equality. Defaults to `===`.

## Returns
An array containing only the first occurrence of each value in the passed array, in the order that they occur.

## Use

```javascript
import { unique } from '@ngard/tiny-unique';

const set = unique([1, true, 'foo', 3, 1, true]);
// set is [1, true, 'foo', 3]
```
