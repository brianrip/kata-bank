const assert = require('chai').assert;
const AccountParser = require('../lib/account-parser');

// Scan a txt file line by line
// Step one:  Identify all zeros after parsing txt file scenario
describe('AccountParser.parse', () => {
  var zeros =
  // 4 lines of 27 chars representing parsed txt file
  " _  _  _  _  _  _  _  _  _ " +
  "| || || || || || || || || |" +
  "|_||_||_||_||_||_||_||_||_|" +
  "                           ";

  var ones =
  "                           " +
  "  |  |  |  |  |  |  |  |  |" +
  "  |  |  |  |  |  |  |  |  |" +
  "                           ";

  var oneToNine =
  "    _  _     _  _  _  _  _ " +
  "  | _| _||_||_ |_   ||_||_|" +
  "  ||_  _|  | _||_|  ||_| _|" +
  "                           ";

  var accountParseZeros = new AccountParser(zeros);
  var accountParseOnes = new AccountParser(ones);

  it('can parse first digit', () => {
    assert.equal(accountParseZeros.digitOne(),
    " _ " +
    "| |" +
    "|_|");
  })

  it('can identify first digit', () => {
    assert.equal(accountParseZeros.digitOneValue(), "0");
  })

  it('can parse all zeros', () => {
    assert.equal(accountParseZeros.accountNumber(), "000000000");
  })

  it('can parse all ones', () => {
    assert.equal(accountParseOnes.accountNumber(), "111111111");
  })

  // it('can parse all twos', () => {
  //   assert.equal(accountParseTwos.accountNumber(), "222222222");
  // })

  xit('can parse one through nine', () => {
    assert.equal(accountParseTwos.accountNumber(), "123456789");
  })
});
