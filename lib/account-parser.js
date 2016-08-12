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

  digitValues() {
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

  digitOneValue() {
    var chars = this.rawChars;
    return this.digitValues()[chars.substring(0, 3) +  chars.substring(27, 30) + chars.substring(54, 57)];
  }

  digitTwoValue() {
    var chars = this.rawChars;
    return this.digitValues()[chars.substring(3, 6) +  chars.substring(30, 33) + chars.substring(57, 60)];
  }

  digitThreeValue() {
    var chars = this.rawChars;
    return this.digitValues()[chars.substring(6, 9) +  chars.substring(33, 36) + chars.substring(60, 63)];
  }

  digitFourValue() {
    var chars = this.rawChars;
    return this.digitValues()[chars.substring(9, 12) +  chars.substring(36, 39) + chars.substring(63, 66)];
  }

  digitFiveValue() {
    var chars = this.rawChars;
    return this.digitValues()[chars.substring(12, 15) +  chars.substring(39, 42) + chars.substring(66, 69)];
  }

  digitSixValue() {
    var chars = this.rawChars;
    return this.digitValues()[chars.substring(15, 18) +  chars.substring(42, 45) + chars.substring(69, 72)];
  }

  digitSevenValue() {
    var chars = this.rawChars;
    return this.digitValues()[chars.substring(18, 21) +  chars.substring(45, 48) + chars.substring(72, 75)];
  }

  digitEightValue() {
    var chars = this.rawChars;
    return this.digitValues()[chars.substring(21, 24) +  chars.substring(48, 51) + chars.substring(75, 78)];
  }

  digitNineValue() {
    var chars = this.rawChars;
    return this.digitValues()[chars.substring(24, 27) +  chars.substring(51, 54) + chars.substring(78, 81)];
  }

}

module.exports = AccountParser;

// digitOneValue() {
//   var chars = this.rawChars
//   if (this.digitOne() === ' _ | ||_|') {
//     return "0"
//   }
//   if (this.digitOne() === '     |  |') {
//     return "1"
//   }
//   if (this.digitOne() === ' _  _||_ ') {
//     return "2"
//   }
//   if (this.digitOne() === ' _  _| _|') {
//     return "3"
//   }
//   if (this.digitOne() === '   |_|  |') {
//     return "4"
//   }
//   if (this.digitOne() === ' _ |_  _|') {
//     return "5"
//   }
//   if (this.digitOne() === ' _ |_ |_|') {
//     return "6"
//   }
//   if (this.digitOne() === ' _   |  |') {
//     return "7"
//   }
//   if (this.digitOne() === ' _ |_||_|') {
//     return "8"
//   }
//   if (this.digitOne() === ' _ |_| _| ') {
//     return "9"
//   }
// }
