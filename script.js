"use strict";

// Selecting elements
const userInput = document.querySelector(".user-input");
const submitBtn = document.querySelector(".submit-button");
const form = document.querySelector(".input-form");

// Functions

// Renders an error element with a custom message
const renderErrElement = (msg) => {
  return `<p class="error-msg">${msg}</p>`;
};

// Removes punctualization and spaces and sets everything to lowercase in order to be comparable
function formatToPalindrome(str) {
  // Removing punctialization and spaces
  return str
    .replace(/[^\w\s]|_/g, "")
    .replaceAll(" ", "")
    .toLowerCase();
}

// Reverses the characters' order in a string
const reverseString = (str) => str.split("").reverse().join("");

// Returns true if a string is a palindrome and false if it isn't
const checkPalindrome = (originalStr, reversedStr) =>
  originalStr === reversedStr;

// Main function
function checkForPalindrome(input) {
  // Selecting previous palidrome results and error message elements
  const previousResult = document.querySelector(".palindrome-result");
  const previousError = document.querySelector(".error-msg");

  // Rendering an error and stopping execution if no input is provided
  if (input.length < 1) {
    // Remove any previous errors and palindrome results if present
    if (previousError) previousError.remove();
    if (previousResult) previousResult.remove();

    return submitBtn.insertAdjacentHTML(
      "afterend",
      renderErrElement("Please provide an input")
    );
  }

  // Removing the previous palidrome results and error message elements if present
  if (previousResult) previousResult.remove();
  if (previousError && input.length >= 1) previousError.remove();

  // Removing punctialization and spaces
  const formattedInput = formatToPalindrome(input);

  // Reversing the formatted input
  const reversedInput = reverseString(formattedInput);

  // Checking whether or not the input is a Palindrome
  const isPalindrome = checkPalindrome(formattedInput, reversedInput);

  // Returning a conditional message depending on the check result
  const resultMsg = isPalindrome
    ? `"${input}" IS a palindrome ✅`
    : `"${input}" is NOT a palindrome ❌`;

  // Creating a HTML element containing the conditional message
  const markup = `
    <div class="palindrome-result ${
      isPalindrome ? "is-palindrome" : "not-palindrome"
    }">${resultMsg}</div>
    `;

  // Rendering the newly created HTML element after the form element
  form.insertAdjacentHTML("afterend", markup);
}

// Implement the check button interaction
submitBtn.addEventListener("click" || "submit", function (e) {
  e.preventDefault();
  checkForPalindrome(userInput.value);
});
