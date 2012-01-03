function AbstractStorageQuotaChecker() {
}


AbstractStorageQuotaChecker.prototype = {
  /**
   * Allocates the specified number of bytes in this storage.
   */
  allocateSpace: function(bytes) {
  },

  /**
   * @return true iff this kind of storage is available.
   */
  detect: function() {
  },

  /**
   * Clears all data previously allocated by this benchmark.
   */
  clear: function() {
  },

  /**
   * Allocates increasing amounts of space using this method until we fail.
   */
  calculateLimit: function() {
  }
};
