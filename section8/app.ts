// 最初のデコレータ

// function Logger(constructor: Function) {
//     console.log('ログ出力中...');
//     console.log(constructor);
// }
//
// @Logger
// class Person {
//     name = 'takumi';
//
//     constructor() {
//         console.log('Personオブジェクトを作成中...');
//     }
// }
//
// const person = new Person();
// console.log(person)

// デコレータファクトリ

// function Logger(logString: string) {
//     return function (constructor: Function) {
//         console.log(logString);
//         console.log(constructor);
//     }
// }
//
// @Logger('ログ出力中 - PERSON')
// class Person {
//     name = 'takumi';
//
//     constructor() {
//         console.log('Personオブジェクトを作成中...');
//     }
// }