const StringLengthFrequency =  (stringArray) => {
    if(stringArray.length == 0){
        return [];
    }
    if(stringArray.length == 1){
        return stringArray;
    }

    var stringLengthFrequencyDict = new Map();

    stringArray.forEach(s => {
        var strLength = s.length;
        if(stringLengthFrequencyDict.has(strLength)){
            stringLengthFrequencyDict.set(strLength, 1);
        }
        else{
            stringLengthFrequencyDict.set(strLength,stringLengthFrequencyDict.get(strLength) + 1);
        }
    })

    var maxStringLenghtFrequencyKey = null;
    var maxStringLenghtFrequency = 0;
    for(const [key, value] of stringLengthFrequencyDict){
        if(value > maxStringLenghtFrequency ){
            maxStringLenghtFrequency = value;
            maxStringLenghtFrequencyKey = key;
        }
    }
    
    return stringArray.filter(s => s.length == maxStringLenghtFrequencyKey)
}

var testArray = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];
var result = StringLengthFrequency(testArray);
console.log(result);

var testArray2 = [];
result = StringLengthFrequency(testArray2);
console.log(result);

var testArray3 = ['a'];
result = StringLengthFrequency(testArray3);
console.log(result);
