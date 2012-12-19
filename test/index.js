var remove = require('../');

describe('remove(string, array)', function(){
  it('should remove the first matched item', function(){
    var arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
    remove(2, arr, false).should.be.eql([1, 3, 1, 2, 3, 1, 2, 3]);
  });

  it('should remove all matched items', function(){
    var arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
    remove(2, arr).should.be.eql([1, 3, 1, 3, 1, 3]);
  });
});

describe('remove(array, array)', function(){
  it('should remove the first matched item', function(){
    var arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
    remove([2, 1], arr, false).should.be.eql([3, 1, 2, 3, 1, 2, 3]);
  });

  it('should remove all matched items', function(){
    var arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
    remove([2, 1], arr).should.be.eql([3, 3, 3]);
  });
});
