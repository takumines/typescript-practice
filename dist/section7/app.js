"use strict";
// ジェネリクスについて
// 組み込みのGeneric型 & Genericsとは
// const names: Array<string> = []; // string[]
// // names[0].split(' ')
//
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('終わりました。')
//     }, 2000);
// });
//
// // dataにはstringが入ってくることをTSが認識できる
// promise.then(data => {
//     data.split(' ')
// });
// ジェネリック関数の作成
// ジェネリック型を指定して異なる型が入ってくることを明示する
// function merge<T, U>(objA: T,objB: U) {
//     return Object.assign(objA, objB);
// }
//
// // オブジェクトがマージされる
// // {
// //     name: 'takumi',
// //     age: 25
// // }
// // console.log(merge({name: 'takumi'}, {age: 25}));
//
// const mergedObj = merge({name: 'takumi'}, {age: 25});
// // 変数のオブジェクトのプロパティにはアクセスできない。エラーになる
// // TSは型がobjectであることにしか認識していないのでプロパティの存在などは知らない状態
// console.log(mergedObj);
// ジェネリック型に制約をつける
// function merge<T extends object, U extends object>(objA: T,objB: U) {
//     return Object.assign(objA, objB);
// }
//
// const mergedObj = merge({name: 'takumi'}, {age: 'aaa'});
// console.log(mergedObj.age);
// もう一つのジェネリック関数
// interface  Lengthy {
//     length: number;
// }
//
// function countAndDescribe<T extends Lengthy>(element: T) {
//     let descriptionText = '値がありません';
//     if (element.length > 0) {
//         descriptionText = '値は' + element.length + '個です。'
//     }
//     return [element, descriptionText]
// }
//
// console.log(countAndDescribe('aaaaaaaaaa'));
// keyofの制約
// function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
//     return 'Value' + obj[key];
// }
//
// extractAndConvert({name: 'takumi'}, 'name');
// Generic クラス
//
// class DataStorage<T extends string | number | boolean> {
//     private data: T[] = [];
//
//     addItem(item: T) {
//         this.data.push(item);
//     }
//
//     removeItem(item: T) {
//         if (this.data.indexOf(item) === -1) {
//             return;
//         }
//         this.data.splice(this.data.indexOf(item), 1);
//     }
//
//     getItems() {
//         return [...this.data];
//     }
// }
//
// const numberStorage = new DataStorage<number>();
// numberStorage.addItem(10);
// numberStorage.addItem(20);
// console.log(numberStorage.getItems()); // [10, 20]
// const objStorage = new DataStorage<object>();
// const obj = {name: 'takumi'};
// objStorage.addItem(obj);
// objStorage.addItem({name: 'taro'});
// objStorage.removeItem(obj);
//
// console.log(objStorage.getItems());
// Generic型のユーティリティ
// interface CourseGoal {
//     title: string;
//     description: string;
//     completeDate: Date;
// }
//
// function createCourseGoal(
//     title: string,
//     description: string,
//     date: Date
// ): CourseGoal {
//     let courseGoal: Partial<CourseGoal> = {};
//     courseGoal.title = title;
//     courseGoal.description = description;
//     courseGoal.completeDate = date;
//
//
//     return courseGoal as CourseGoal;
// }
// const names : Readonly<string[]> = ['takumi', 'taro'];
// names.push('zoo');
