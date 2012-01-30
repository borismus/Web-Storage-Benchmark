var STORAGE_TYPES = [LocalStorageCalculator, WebSQLCalculator];

function main() {
  for (var i = 0; i < STORAGE_TYPES.length; i++) {
    var type = STORAGE_TYPES[i];
    var calculator = new type();
    calculator.clear();
    // Calculate the exact limit for this storage type.
    calculator.calculateLimit(function() {
    });
    // Allocate more than the limit for the storage type and see what happens.
    calculator.allocateSpace(calculator.limit + 1, function() {
    });
  }
}

/**
 * Returns a string representing the browser we are currently using.
 */
function detectBrowser() {

}

main();
