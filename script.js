"use strict";

// Selecting elements
const userInput = document.querySelector(".user-input");
const submitBtn = document.querySelector(".submit-button");
const form = document.querySelector(".input-form");

// Functions
const renderErrElement = (msg) => {
  return `<p class="error-msg">${msg}</p>`;
};

// Input formatting function
function checkForPalindrome(input) {
  // Selecting previous palidrome results and error message elements
  const previousResult = document.querySelector(".palindrome-result");
  const previousError = document.querySelector(".error-msg");

  // Rendering an error and stopping execution if no input is provided
  if (input.length < 1) {
    // Remove any previous errors if present
    if (previousError) previousError.remove();

    return submitBtn.insertAdjacentHTML(
      "afterend",
      renderErrElement("Please provide an input")
    );
  }

  // Removing the previous palidrome results and error message elements if present
  if (previousResult) previousResult.remove();
  if (previousError && input.length >= 1) previousError.remove();

  // Removing punctialization and spaces
  const formattedInput = input
    .replace(/[^\w\s]|_/g, "")
    .replaceAll(" ", "")
    .toLowerCase();

  // Reversing the formatted input
  const reversedInput = formattedInput.split("").reverse().join("");

  // Checking whether or not the input is a Palindrome
  const isPalindrome = reversedInput === formattedInput;

  const resultMsg = isPalindrome
    ? "It IS a palindrome"
    : "It is NOT a palindrome";

  const markup = `
    <div class="palindrome-result ${
      isPalindrome ? "is-palindrome" : "not-palindrome"
    }">${resultMsg}</div>
    `;

  form.insertAdjacentHTML("afterend", markup);
}

// Implement the check button interaction
submitBtn.addEventListener("click" || "submit", function (e) {
  e.preventDefault();
  checkForPalindrome(userInput.value);
});
