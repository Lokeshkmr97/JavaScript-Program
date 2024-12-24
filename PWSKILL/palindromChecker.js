function palindromeCheck(st)
{
    let stRev="";
    for(let i=0;i<st.length;i++){
        stRev+=st[st.length-1-i];
    }
    if(st===stRev){
        return true;
    }
    return false;
}

console.log(palindromeCheck("madam")); // true
console.log(palindromeCheck("abc"));
console.log(palindromeCheck("racecar"));
