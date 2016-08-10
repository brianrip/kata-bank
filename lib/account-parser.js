class AccountParser {
  constructor(rawChars) {
    this.rawChars = rawChars;
  }

  parse() {
    return this.rawChars
  }

  accountNumber() {
    return this.digitOneValue() + this.digitTwoValue() + this.digitThreeValue() +
    this.digitFourValue() + this.digitFiveValue() + this.digitSixValue() +
    this.digitSevenValue() + this.digitEightValue() + this.digitNineValue()
  }

  digitOne() {
    var chars = this.rawChars
    return chars.substring(0, 3) +  chars.substring(27, 30) + chars.substring(54, 57)
  }

  digitOneValue() {
    var chars = this.rawChars
    if (this.digitOne() === ' _ | ||_|') {
      return "0"
    }
  }

  digitTwo() {
    var chars = this.rawChars
    return chars.substring(3, 6) +  chars.substring(30, 33) + chars.substring(57, 60)
  }

  digitTwoValue() {
    var chars = this.rawChars
    if (this.digitTwo() === ' _ | ||_|') {
      return "0"
    }
  }

  digitThree() {
    var chars = this.rawChars
    return chars.substring(6, 9) +  chars.substring(33, 36) + chars.substring(60, 63)
  }
  digitThreeValue() {
    var chars = this.rawChars
    if (this.digitThree() === ' _ | ||_|') {
      return "0"
    }
  }

  digitFour() {
    var chars = this.rawChars
    return chars.substring(9, 12) +  chars.substring(36, 39) + chars.substring(63, 66)
  }
  digitFourValue() {
    var chars = this.rawChars
    if (this.digitFour() === ' _ | ||_|') {
      return "0"
    }
  }

  digitFive() {
    var chars = this.rawChars
    return chars.substring(12, 15) +  chars.substring(39, 42) + chars.substring(66, 69)
  }
  digitFiveValue() {
    var chars = this.rawChars
    if (this.digitFive() === ' _ | ||_|') {
      return "0"
    }
  }

  digitSix() {
    var chars = this.rawChars
    return chars.substring(15, 18) +  chars.substring(42, 45) + chars.substring(69, 72)
  }
  digitSixValue() {
    var chars = this.rawChars
    if (this.digitSix() === ' _ | ||_|') {
      return "0"
    }
  }

  digitSeven() {
    var chars = this.rawChars
    return chars.substring(18, 21) +  chars.substring(45, 48) + chars.substring(72, 75)
  }
  digitSevenValue() {
    var chars = this.rawChars
    if (this.digitSeven() === ' _ | ||_|') {
      return "0"
    }
  }

  digitEight() {
    var chars = this.rawChars
    return chars.substring(21, 24) +  chars.substring(48, 51) + chars.substring(75, 78)
  }
  digitEightValue() {
    var chars = this.rawChars
    if (this.digitEight() === ' _ | ||_|') {
      return "0"
    }
  }

  digitNine() {
    var chars = this.rawChars
    return chars.substring(24, 27) +  chars.substring(51, 54) + chars.substring(78, 81)
  }
  digitNineValue() {
    var chars = this.rawChars
    if (this.digitNine() === ' _ | ||_|') {
      return "0"
    }
  }


}

module.exports = AccountParser;
