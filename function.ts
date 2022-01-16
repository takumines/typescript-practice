// function add(n1: number, n2:number): number {
//     return n1 + n2;
// };
//
// function printResult(num: number) {
//     return console.log('Result' + num);
// };
//
// printResult(add(5, 17));
//
// let combineValue: (a: number, b: number) => number;
//
// combineValue = add;
//
// console.log(combineValue(8, 9));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
};

addAndHandle(10, 30, (result) => {
    console.log(result);
});
