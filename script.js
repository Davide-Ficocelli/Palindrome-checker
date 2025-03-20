"use strict";

// Selecting elements
const userInput = document.querySelector(".user-input");
const submitBtn = document.querySelector(".submit-button");
const form = document.querySelector(".input-form");

// Functions

// Input formatting function
function formatInput(input) {
  // Guard clauses
  // Providing an error if no input is provided
  if (!input) throw "No input provided, please provide a string input";

  // Providing an error if input is provided and is not a string
  if (typeof input !== "string") throw "Input must be a string";

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

formatInput("test");
