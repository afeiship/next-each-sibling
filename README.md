# next-slice2arr
> Slice array to two part

## installation
```bash
npm install -S afeiship/next-slice2arr --registry=https://registry.npm.taobao.org
```

## usage
```js
import 'next-slice2arr';
const arr = [1, 2, 3, 4, 5, 6, 7];

nx.slice2arr(arr,2);
// [ 
//   [ 1, 2 ], 
//   [ 3, 4, 5, 6, 7 ]
// ]
```
