(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.eachSibling with indexes split', function () {
      const indexes = [4, 8, 12];
      const res = [];
      nx.eachSibling(indexes, (cur, next) => {
        res.push([cur, next]);
      });

      expect(res).toEqual([
        [4, 8],
        [8, 12]
      ]);
    });
  });
})();
