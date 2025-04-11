// check upperCase First
// Write a JavaScript program to test whether the first character of a string is uppercase or not.

function checkUppercase(str) {
  const uppercaseRegex = /^[A-Z]/;

  // const firstLetter = str.slice(0, 1);

  // const checkUppercase = uppercaseRegex.test(firstLetter);
  const checkUppercase = uppercaseRegex.test(str);

  if (checkUppercase) {
    console.log(`The first letter of "${str}" is in uppercase.`);
  } else {
    console.log(`The first letter of "${str}" is not in uppercase.`);
  }
}

checkUppercase("Hello");
checkUppercase("john doe");
