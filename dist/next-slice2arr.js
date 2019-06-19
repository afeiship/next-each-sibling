/*!
 * name: next-slice2arr
 * url: https://github.com/afeiship/next-slice2arr
 * version: 1.0.0
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.slice2arr = function(inArray, inIndex) {
    var len = inArray.length;
    var index = len <= inIndex ? len : inIndex;
    index = index >= 0 ? index : len + index;
    return [inArray.slice(0, index), inArray.slice(index)];
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.slice2arr;
  }
})();
