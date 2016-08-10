class AccountParser {
  constructor(rawChars) {
    this.rawChars = rawChars;
  }
  parse() {
    return this.rawChars
  }
  rawDigit() {
    var chars = this.rawChars
    return chars.substring(0, 3) +  chars.substring(27, 30) + chars.substring(54, 57)    
  }
  digitOne() {
    var chars = this.rawChars
    if ((chars.substring(0, 3) +  chars.substring(27, 30) + chars.substring(54, 57)) === ' _ | ||_|') {
      return "0"
    }
  }

}

module.exports = AccountParser;
