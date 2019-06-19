var nx = require('next-js-core2');
require('../src/next-slice2arr');

describe('Basic test', () => {
  var items = [];
  beforeEach(() => {
    items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  });
  test('split in middle', function() {
    var res = nx.slice2arr(items, 3);
    expect(res[0]).toEqual([1, 2, 3]);
    expect(res[1]).toEqual([4, 5, 6, 7, 8, 9]);
  });
  test('split in 0', function() {
    var res = nx.slice2arr(items, 0);
    expect(res[0]).toEqual([]);
    expect(res[1]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test('split in length-1', function() {
    var len_ = items.length - 1;
    var res = nx.slice2arr(items, len_);
    expect(res[0]).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(res[1]).toEqual([9]);
  });
  test('split in eq length', function() {
    var len_ = items.length;
    function willThrow() {
      nx.slice2arr(items, len_);
    }
    expect(willThrow).toThrow();
  });
  test('split in large then length', function() {
    var len_ = items.length + 4;
    function willThrow() {
      nx.slice2arr(items, len_);
    }
    expect(willThrow).toThrow();
  });
});
