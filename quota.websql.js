function WebSQLCalculator() {
}

WebSQLCalculator.prototype = new QuotaCalculator;

WebSQLCalculator.prototype.allocateSpace = function(bytes) {
  console.log('WebSQL allocateSpace');
}
