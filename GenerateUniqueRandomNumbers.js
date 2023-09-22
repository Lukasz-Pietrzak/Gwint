

export default class GenerateUniqueRandomNumbers {
  static getRandomNumber(max, excludedNumbers = []) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * max) + 1;
    } while (excludedNumbers.includes(randomNumber));

    return randomNumber;
  }
}

