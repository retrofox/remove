var remove = require('../');

describe('remove(string, array)', function(){
  it('should remove the first matched item', function(){
    var arr = ['a', 'b', 'c', 'b', 'd', 'b'];
    remove('b', arr).should.be.eql(['a', 'c', 'b', 'd', 'b']);
  });

  it('should remove all matched items', function(){
    var arr = ['a', 'b', 'c', 'b', 'd', 'b'];
    remove('b', arr, true).should.be.eql(['a', 'c', 'd']);
  });
});
