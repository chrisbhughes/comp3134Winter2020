const mixedArray = ['Pizza', 10, true, 25, false, 'Wings']
var newArray = mixedArray.map(function (val) { return val.toLowerCase(); });
console.log(newArray)