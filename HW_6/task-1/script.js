const message = prompt("Enter yor strinng");
const chars = prompt(
  "Enter some chars for removing (if you don't want to remove spaces - please, write chars together :D)"
);

function foo(string, arr) {
  if (string) {
    for (const char of arr.split("")) {
      string = string.replaceAll(char, "");
    }
    // srin
    return string;
  } else {
    return "Write a normal string *crying emoji";
  }
}

const result = foo(message, chars);

alert(result);
