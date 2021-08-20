
function isPalindrome(arr){
    for(var left = 0; left < arr.length/2; i++){
        var right = arr.length - 1 - left;
        if(arr[left] != arr[right]){
            return "Not a palindrome";
        }
    }
    return "this is a palindrome!"
}

var result = isPalindrome([1,2,4,2,1]);
console.log(result);