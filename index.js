
/**
 * dependencies
 */

try {
  var indexOf = require('indexof');
  var uniq = require('uniq');
} catch(e){
  var indexOf = require('indexof-component');
  var uniq = require('uniq-component');
}

/**
 * Remove the given element from the give array
 *
 * @param item
 * @param {Array} arr array of items to remove the item/s
 * @param {Boolen} multiple (optional - default true)
 * @return {Array}
 * @api public
 */

module.exports = function (item, arr, multiple) {
  if (!(item instanceof Array)) {
    return removeItem(item, arr, multiple);
  }

  for (var i = 0; i < item.length; i++) {
    arr = removeItem(item[i], arr, multiple);
  }
  return arr;
};

function removeItem(item, arr, multiple){
  var ind = indexOf(arr, item);
  if (ind < 0) return arr;
  if (false !== multiple) arr = uniq(arr, item);
  arr.splice(ind, 1);
  return arr;
}
