type Combine = number | string;
type Conversion = 'as-number' | 'as-string';

function combine(
    input1: Combine,
    input2: Combine,
    resultConversion: Conversion,
) {
    let result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combinedAges = combine(30, 5, 'as-number');
console.log(combinedAges);

const combinedNames = combine('taro', 'takumi', 'as-string');
console.log(combinedNames);

const combinedStrings = combine('15', '11', 'as-number');
console.log(combinedStrings);