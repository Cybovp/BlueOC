const SumTwoLargest = (array) => {
    if(array.length == 0){
        return 0;
    }
    if(array.length == 1){
        return array[0];
    }

    array.sort((a,b) => b - a);
    var biggestEle = array[0];
    var secondBiggestEle = array[1];

    return biggestEle + secondBiggestEle;
}

module.exports = SumTwoLargest;

var testArray = [1, 4, 2, 3, 5];
var result = SumTwoLargest(testArray);
console.log(result);

var testArray2 = [];
result = SumTwoLargest(testArray2);
console.log(result);

var testArray3 = [1];
result = SumTwoLargest(testArray3);
console.log(result);