const assert = require('chai').assert;
const AccountParser = require('../lib/account-parser');

// Scan a txt file line by line
// Step one:  Identify all zeros after parsing txt file scenario
describe('AccountParser.parse', () => {
  var zeros=
  // 4 lines of 27 chars representing parsed txt file
  " _  _  _  _  _  _  _  _  _ " +
  "| || || || || || || || || |" +
  "|_||_||_||_||_||_||_||_||_|" +
  "                           ";
  var accountParser = new AccountParser(zeros);

  it('can identify first digit', () => {
    assert.equal(accountParser.digitOne(),
    " _ " +
    "| |" +
    "|_|");
  })

  xit('can parse all zeros', () => {
    assert.equal(accountParser.parse(), "000000000");
  })
});
