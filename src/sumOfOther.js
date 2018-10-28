function sumOfOther(arr) {
    const arrNew = [];
    for (let i = 0, l = arr.length; i < l ; i++) {
        arrNew.push(arr.reduce(function (a, b) {
            return (a + b)
        }) - arr[i]);
    }
return arrNew;
}
