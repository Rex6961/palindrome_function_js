//This is recursive function for find palindrome words
function rev(theString) {
    if (theString.length === 0 || theString.length === 1) {
        return true;
    } else {
        let first = theString[0];
        let middle = theString.substring(1, theString.length - 1);
        let last = theString[theString.length - 1];
        return first === last && rev(middle);
    }
}
let text = 'racecar';
document.write(text + ' is a palindrome: ' + rev(text) + "<br/>");
text = 'amanaplanacanalpanama';
document.write(text + ' is a palindrome: ' + rev(text) + "<br/>");
text = 'tacocat';
document.write(text + ' is a palindrome: ' + rev(text) + "<br/>");
text = 'zophie';
document.write(text + ' is a palindrome: ' + rev(text) + "<br/>");
