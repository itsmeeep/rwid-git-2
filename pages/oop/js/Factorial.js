import { parseNumber } from "../../js/helper.js";

export class Factorial {
  /** @type {number} */
  number;

  /**
   * @param {number} number
   */
  constructor(number) {
    this.number = parseNumber(number);
  }

  /**
   * Count factorial number from the given "n" value using loop way.
   */
  countUsingLoop() {
    var result = this.number <= 0 ? 1 : this.number;

    for (let i = 1; i < this.number; i++) {
      result = result * (this.number - i);
    }

    return result;
  }

  /**
   * Count factorial number from the given "n" value using recursive way.
   *
   * @param {number | undefined} n
   * @returns {number}
   */
<<<<<<< HEAD:pages/oop/js/Factorial.js
  countUsingRecursive(n = undefined) {
    n ||= this.n;

    if (n < 2) {
=======
  countUsingRecursive(number = undefined) {
    if (number == undefined) {
>>>>>>> abe1295 (fix: functional factorial html, fizzbuzz html, fibonacci html, palindrome html - change title):js/oop/Factorial.js
      return 1;
    }

    if (number < 2) {
      return 1;
    } else {
      return number * this.countUsingRecursive(number - 1);
    }
  }

  /**
   * Count factorial number from the given "n" value.
   *
   * @param {"loop" | "recursive"} method
   * @throws {Error}
   */
  count(method) {
<<<<<<< HEAD:pages/oop/js/Factorial.js
    if (method == "loop") {
      return this.countUsingLoop();
    } else if (method == "recursive") {
      return this.countUsingRecursive();
=======
    let result;

    if (method === "loop") {
      result = this.countUsingLoop();
    } else if (method === "recursive") {
      result = this.countUsingRecursive(this.number);
>>>>>>> abe1295 (fix: functional factorial html, fizzbuzz html, fibonacci html, palindrome html - change title):js/oop/Factorial.js
    } else {
      throw new Error("Method must be loop or recursive.");
    }
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const number = event.target["n"].value;
    const method = event.target["method"].value;

    console.log(number);
    console.log(method);

    const result = new Factorial(number).count(method);

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
