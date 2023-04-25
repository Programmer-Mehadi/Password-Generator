// varibale
const lengthField = document.getElementById("length_field");
const lengthValue = document.getElementById("length_value");
const reloadBtn = document.getElementById("reload");
const passwordInput = document.getElementById("password_input");
lengthValue.innerText = lengthField.value;
// function

function copyPassword() {
  // Get the text field
  var copyText = document.getElementById("password_input");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}

function getRandomItem(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return String.fromCharCode(item);
}

function generatePassword() {
  const array = [
    33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
    90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106,
    107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121,
    122, 123, 124, 125, 126,
  ];
  let password = "";
  for (let i = 0; i < lengthField.value; i++) {
    password = password + getRandomItem(array);
  }
  passwordInput.value = password;
}

generatePassword();

// event listener
lengthField.oninput = function (e) {
  lengthValue.innerText = e.target.value;
};

reloadBtn.addEventListener("click", () => {
  generatePassword();
});
