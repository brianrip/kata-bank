const assert = require('chai').assert;
const AccountParser = require('../lib/account-parser');

// Scan a txt file line by line
// Step one:  Identify all zeros after parsing txt file scenario
describe('AccountParser.parse', () => {
  var zeros=
  " _  _  _  _  _  _  _  _  _ \n" +
  "| || || || || || || || || |\n" +
  "|_||_||_||_||_||_||_||_||_|\n" +
  "                           \n";
  var accountParser = new AccountParser(zeros);

  it('can parse all zeros', () => {
    assert.equal(accountParser.parse(), "000000000");
  })
});
