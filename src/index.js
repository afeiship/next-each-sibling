(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.eachSibling = function (inArray, inCallback, inContext) {
    for (var i = 0; i < inArray.length - 1; i++) {
      var cur = inArray[i];
      var next = inArray[i + 1];
      var ret = inCallback.call(inContext, cur, next, i);
      if (ret === nx.BREAKER) break;
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.eachSibling;
  }
})();
