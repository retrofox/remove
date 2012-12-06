
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
 * @param {Array} arr array of items to remove
 * @param {Boolen} multiple
 * @return {Array}
 * @api public
 */

module.exports = function (item, arr, multiple) {
  var ind = indexOf(arr, item);
  if (ind < 0) return arr;
  if (multiple) arr = uniq(arr, item);
  arr.splice(ind, 1);
  return arr;
};
