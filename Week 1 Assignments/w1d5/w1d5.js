function reverseArr(arr){
    var arrNew = []
    for(var i = arr.length - 1 ; i >= 0; i--){
        arrNew.push(arr[i]);
    }
    return arrNew;
}
reverseArr([4,2,3,4,5,6,9,0])