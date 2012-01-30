function LocalStorageCalculator() {
  this.KEY = 'key';
  this.az = 'abcdefghijklmnopqrstuvwxyz';
}

LocalStorageCalculator.prototype = new QuotaCalculator;

LocalStorageCalculator.prototype.allocateSpace = function(bytes, callback) {
  console.log('LocalStorage allocateSpace');
  var str = this.randomString(bytes);
  try {
    //localStorage[this.KEY] = str;
    console.log('allocated', str.length);
    callback({});
  } catch(err) {
    callback({error: err});
  }
}

LocalStorageCalculator.prototype.randomString = function(length) {
  // Find the greatest N such that S.length + 2**N < length.
  // Get or compute S += pow2str[N].
  // Now S.length is S.length + 2**N.
  // Keep going until N == 0.
  this.expString[]
};

LocalStorageCalculator.prototype.randomChar = function() {
  return this.az[parseInt(Math.random() * this.az.length - 1)];
}

LocalStorageCalculator.prototype.clear = function() {
  localStorage.clear();
}
