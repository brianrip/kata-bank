class AccountParser {

  constructor(rawData) {

    // this.rawAccounts = RawDataParer.parse(rawData);
    this.rawData = rawData.match(/.{108}/g);
    // eval(require('locus'))
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
    var accounts = this.rawData;

    return accounts.map(this.parseRawAccount.bind(this));
    // return accounts.map(Parser.parseRawAccount.bind(this));
  }

  parseRawAccount(rawAccount) {
    var dashesToDigits = this.dashesToDigits();

    return (
      dashesToDigits[rawAccount.substring(0, 3) +  rawAccount.substring(27, 30) + rawAccount.substring(54, 57)]   +
      dashesToDigits[rawAccount.substring(3, 6) +  rawAccount.substring(30, 33) + rawAccount.substring(57, 60)]   +
      dashesToDigits[rawAccount.substring(6, 9) +  rawAccount.substring(33, 36) + rawAccount.substring(60, 63)]   +
      dashesToDigits[rawAccount.substring(9, 12) +  rawAccount.substring(36, 39) + rawAccount.substring(63, 66)]  +
      dashesToDigits[rawAccount.substring(12, 15) +  rawAccount.substring(39, 42) + rawAccount.substring(66, 69)] +
      dashesToDigits[rawAccount.substring(15, 18) +  rawAccount.substring(42, 45) + rawAccount.substring(69, 72)] +
      dashesToDigits[rawAccount.substring(18, 21) +  rawAccount.substring(45, 48) + rawAccount.substring(72, 75)] +
      dashesToDigits[rawAccount.substring(21, 24) +  rawAccount.substring(48, 51) + rawAccount.substring(75, 78)] +
      dashesToDigits[rawAccount.substring(24, 27) +  rawAccount.substring(51, 54) + rawAccount.substring(78, 81)]
      )
  }


  // accountValidation() {
  //   var sum = account.split('').reverse().reduce(
  //     function(previous, current,index) {
  //       return (9 - index) * current + previous;
  //     }, 0);
  //     return (sum % 11) === 0;
  //
  //
  //     // account number:  3  4  5  8  8  2  8  6  5
  //     // position names:  d9 d8 d7 d6 d5 d4 d3 d2 d1
  //     // checksum calculation: (d1+2*d2+3*d3 +..+9*d9) mod 11 = 0
  //   }

}




module.exports = AccountParser;
