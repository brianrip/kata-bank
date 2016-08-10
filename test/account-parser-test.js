const assert = require('chai').assert;
const AccountParser = require('../lib/account-parser');

describe('AccountParser', () => {
  var number1 = "1"
  var accountParser = new AccountParser(number1);

  it('testing setup', () => {
    assert.equal(accountParser.number1, "1");
  })
});
