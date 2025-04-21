let string = "a man, a plan, a canal panama";
function checkPalindrome(str) {
  let start = 0;
  let end = str.length - 1;
  while (start < end && !/^[a-zA-Z0-9]$/.test(str[start])) {
    if (str[start] === str[end]) {
      start += 1;
      end -= 1;
    } else {
      return false;
    }
  }
  return true;
}

console.log(checkPalindrome(string));
