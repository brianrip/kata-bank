// eval(require('locus'))
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

  var multipleAccounts =
  "    _  _     _  _  _  _  _ " +
  "  | _| _||_||_ |_   ||_||_|" +
  "  ||_  _|  | _||_|  ||_| _|" +
  "                           " +
  " _  _  _  _  _  _  _  _  _ " +
  "| || || || || || || || || |" +
  "|_||_||_||_||_||_||_||_||_|" +
  "                           " +
  "                           " +
  "  |  |  |  |  |  |  |  |  |" +
  "  |  |  |  |  |  |  |  |  |" +
  "                           ";


  xit('can parse first digit', () => {
    assert.equal(accountParseZeros.digitOne(),
    " _ " +
    "| |" +
    "|_|");
  });

  xit('can identify first digit', () => {
    assert.equal(accountOfZeros.digitOneValue(), "0");
  });

  var accountOfZeros = new AccountParser(zeros);

  it('can parse all zeros', () => {
    assert.equal(accountOfZeros.accountNumbers(), "000000000");
  });

  var accountOfOnes = new AccountParser(ones);

  it('can parse all ones', () => {
    assert.equal(accountOfOnes.accountNumbers(), "111111111");
  });

  var accountOfOneToNine = new AccountParser(oneToNine);

  it('can parse one through nine', () => {
    assert.equal(accountOfOneToNine.accountNumbers(), "123456789");
  });

  var threeAccounts = new AccountParser(multipleAccounts);

  it('can parse multiple account numbers', () => {
    assert.equal(threeAccounts.accountNumbers()[0], "123456789");
    assert.equal(threeAccounts.accountNumbers()[1], "000000000");
    assert.equal(threeAccounts.accountNumbers()[2], "111111111");
  });


// it('can parse multiple account numbers', () => {
//
//   AccountParser.expects(:parse).with(fakeAccounts).returns([1,2,3])
//   RawAccountNumber.expects(:parse)
//
// });






  // Account Validation tests:

  // var preParsedAccount = new AccountParser();
  //
  // var validAccount1 = "345882865";
  // var validAccount2 = "457508000";
  //
  // xit('can check if account number is valid', () => {
  //   assert.equal(preParsedAccount.accountNumbers(validAccount1), "345882865");
  // });
});
