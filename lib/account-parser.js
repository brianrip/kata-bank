class AccountParser {

  constructor(rawData) {
    this.rawAccounts = rawData.match(/.{108}/g);
  }

  dashesToDigits() {
    return {
      ' _ | ||_|' : "0",
      '     |  |' : "1",
      ' _  _||_ ' : "2",
      ' _  _| _|' : "3",
      '   |_|  |' : "4",
      ' _ |_  _|' : "5",
      ' _ |_ |_|' : "6",
      ' _   |  |' : "7",
      ' _ |_||_|' : "8",
      ' _ |_| _|' : "9"
    };
  }

  accountNumbers() {
    var accounts = this.rawAccounts;
    var convertedNumbers = [];
    var dashesToDigits = this.dashesToDigits();
    accounts.map(function(account) {
      convertedNumbers.push(dashesToDigits[account.substring(0, 3) +  account.substring(27, 30) + account.substring(54, 57)]   +
                            dashesToDigits[account.substring(3, 6) +  account.substring(30, 33) + account.substring(57, 60)]   +
                            dashesToDigits[account.substring(6, 9) +  account.substring(33, 36) + account.substring(60, 63)]   +
                            dashesToDigits[account.substring(9, 12) +  account.substring(36, 39) + account.substring(63, 66)]  +
                            dashesToDigits[account.substring(12, 15) +  account.substring(39, 42) + account.substring(66, 69)] +
                            dashesToDigits[account.substring(15, 18) +  account.substring(42, 45) + account.substring(69, 72)] +
                            dashesToDigits[account.substring(18, 21) +  account.substring(45, 48) + account.substring(72, 75)] +
                            dashesToDigits[account.substring(21, 24) +  account.substring(48, 51) + account.substring(75, 78)] +
                            dashesToDigits[account.substring(24, 27) +  account.substring(51, 54) + account.substring(78, 81)]
                           );
    });
    return convertedNumbers;

  }
}

module.exports = AccountParser;
