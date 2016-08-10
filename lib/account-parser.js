class AccountParser {
  constructor(rawNumber) {
    this.rawNumber = rawNumber;
  }
  parse() {
    return this.rawNumber
  }

  digitOne() {
    var chars = this.rawNumber
    return chars.substring(0, 3) +  chars.substring(27, 30) + chars.substring(54, 57)
  }

}

module.exports = AccountParser;
