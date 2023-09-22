import { parseNumber } from "../../js/helper.js";

/**
 * Count factorial number from the given "n" value using loop way.
 *
 * @param {number} n
 */
function countFactorialUsingLoop(n) {
  n = parseNumber(n);
  let result = n <= 0 ? 1 : n;

<<<<<<< HEAD:pages/functional/js/factorial.js
  let result = 1;

  for (let index = n; index > 0; index--) {
    result *= index;
=======
  for (let i = 1; i < n; i++) {
    result = result * (n - i);
>>>>>>> abe1295 (fix: functional factorial html, fizzbuzz html, fibonacci html, palindrome html - change title):js/functional/factorial.js
  }

  return result;
}

/**
 * Count factorial number from the given "n" value using recursive way.
 *
 * @param {number} n
 * @returns {number}
 */
function countFactorialUsingRecursive(n) {
  n = parseNumber(n);

  if (n < 2) {
    return 1;
  } else {
    return n * countFactorialUsingRecursive(n - 1);
  }
}

/**
 * Count factorial number from the given "n" value.
 *
 * @param {number} n
 * @param {"loop" | "recursive"} method
 * @throws {Error}
 */
function countFactorial(n, method) {
  if (method == "loop") {
    return countFactorialUsingLoop(n);
  } else if (method == "recursive") {
    return countFactorialUsingRecursive(n);
  } else {
    throw new Error("Method must be loop or recursive.");
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const n = event.target["n"].value;
    const method = event.target["method"].value;

    const result = countFactorial(n, method);

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
