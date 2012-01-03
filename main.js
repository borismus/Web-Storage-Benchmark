var STORAGE_TYPES = [LocalStorageQuotaChecker];

function main() {
  for (var i = 0; i < STORAGE_TYPES.length; i++) {
    var type = STORAGE_TYPES[i];
    // Calculate the limit for this storage type
    var limit = type.calculateLimit();
    // Allocate more than the limit for the storage type and see what happens.
  }
}

/**
 * Returns a string representing the browser we are currently using.
 */
function detectBrowser() {

}
