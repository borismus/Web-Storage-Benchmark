function QuotaCalculator() {
}


QuotaCalculator.prototype = {
  /**
   * Allocates the specified number of bytes in this storage.
   */
  allocateSpace: function(bytes, callback) {
  },

  /**
   * @return true iff this kind of storage is available.
   */
  isAvailable: function() {
  },

  /**
   * Clears all data previously allocated by this benchmark.
   */
  clear: function() {
  },

  calculateLimit: function(callback) {
    var calc = this;
    // TODO: get a more specific quota limit.
    for (var i = 0; i < 200; i++) {
      var bytes = Math.pow(2, i);
      this.allocateSpace(bytes, function(result) {
        if (result.error) {
          // We've hit the limit.
          var limit = bytes / 2;
          calc.limit = limit;
          callback();
        }
      });
    }
  }

};
