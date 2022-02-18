// const add = (a: number, b: number = 1) => a + b;
//
// const printOutput: (output: string | number) => void = output => {
//     console.log(output)
// };
//
// printOutput(add(1));

// スプレッドオペレータ
// const hobbies = ['Soccer', 'baseboll'];
// const activeHobbies = ['Hiking'];
//
// // 下記の書き方は冗長
// activeHobbies.push(hobbies[0], hobbies[1]);
// // 上記と同じ意味になる
// // 配列を展開して渡している
// activeHobbies.push(...hobbies);

// レストパラメータ
// 引数に受け取った数値を全て足して返す関数
// const add = (...numbers: number[]) => {
//     return numbers.reduce((curResult, curValue) => {
//         return curResult + curValue;
//     }, 0);
// }
// const addedNumbers = add(5, 10, 3.7);
// console.log(addedNumbers);
// console.log('ttest');

