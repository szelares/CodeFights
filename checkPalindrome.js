function checkPalindrome(inputString) {
    let revStr = '';
    let i = inputString.length;
    while (i >=0){
        revStr += inputString.charAt(i);
        i--;
    }
    if(revStr === inputString){
        return true
    } else {
        return false
    }
}
