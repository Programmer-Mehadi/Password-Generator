const textToPassLengthField = document.getElementById(
  "text_to_pass_length_field"
);
const textToPassLengthValue = document.getElementById(
  "text_to_pass_length_value"
);
const textToPassReloadBtn = document.getElementById("text_to_pass_reload");
const textToPassPasswordInput = document.getElementById(
  "text_to_pass_password_input"
);
const textInput = document.getElementById("text_input");

// set value
textToPassLengthValue.innerText = textToPassLengthField.value;

// event listener
textToPassLengthField.oninput = function (e) {
  textToPassLengthValue.innerText = e.target.value;
};

function copyPasswordTextToPass() {
  // Select the text field
  textToPassPasswordInput.select();
  textToPassPasswordInput.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(textToPassPasswordInput.value);
}

function removeSpace(sentence) {
  return sentence.split(" ").join("");
}

const generateArray = (len) => {
  const array = [];
  for (let i = 0; i < len; i++) {
    array.push(i);
  }
  return array;
};

const getRandomIndex = (newSentence, arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return newSentence[item];
};

function generateTextToPassword() {
  let sentence = textInput.value;
  let newSentence = removeSpace(sentence);
  const array = generateArray(newSentence.length);
  let password = "";
  if (newSentence.length > 0) {
    for (let i = 0; i < textToPassLengthField.value; i++) {
      password += getRandomIndex(newSentence, array);
    }
    if (password !== undefined) {
      textToPassPasswordInput.value = password;
    }
  }
}
textToPassReloadBtn.addEventListener("click", () => {
  generateTextToPassword();
});
