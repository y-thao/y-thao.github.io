/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);


  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window loaded!");
    const encryptBtn = document.getElementById("encrypt-it");
    const resetBtn = document.getElementById("reset");

    encryptBtn.addEventListener("click", handleClick);
    resetBtn.addEventListener("click", handleReset);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function handleClick() {
    const textArea = document.getElementById("input-text");
    console.log("Button clicked!");

    textArea.value = shiftCipher(textArea.value);
  }

  function handleReset() {
    const textArea = document.getElementById("input-text");
    textArea.value = "";
  }

  /**
 * Returns an encrypted version of the given text, where
 * each letter is shifted alphabetically ahead by 1 letter,
 * and 'z' is shifted to 'a' (creating an alphabetical cycle).
 */
  function shiftCipher(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] >= 'a' && text[i] <= 'z') {
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode((((letter + 1) - 97) % 26) + 97);
        result += resultLetter;
      } else if (text[i] >= 'A' && text[i] <= 'Z') {
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode((((letter + 1) - 65) % 26) + 65);
        result += resultLetter;
      } else {
        result += text[i];
      }
  }
  return result;
}
})();
