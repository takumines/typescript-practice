"use strict";
// // class Department {
// //     name: string;
// //
// //     constructor(n: string) {
// //         this.name = n;
// //     }
// // }
// //
// // const accounting =  new Department('sales');
// // console.log(accounting);
//
// // thisキーワードについて
// class Department {
//     name: string;
//     employees: string[] = [];
//
//     constructor(n: string) {
//         this.name = n;
//     }
//
//     describe() {
//         console.log('Department' + this.name);
//     }
//
//     addEmployee(employee: string) {
//         this.employees.push(employee);
//     }
//
//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }
//
// const accounting =  new Department('sales');
//
// accounting.addEmployee('takumi');
// accounting.addEmployee('test');
//
// accounting.printEmployeeInformation();
//
// class AccountingDepartment {
//     private lastReports: string;
//
//     get mostResentReport() {
//         if (this.lastReports) {
//             return this.lastReports;
//         }
//         throw new Error('レポートが見つかりません。')
//     }
//
//     set mostResentReport(value: string) {
//         if (!value) {
//             throw new Error('正しい値を設定してください。')
//         }
//         this.lastReports = value;
//     }
//     constructor(id: string, private reports: string[]) {
//         super(id, 'Accounting')
//         this.lastReports = reports[0];
//     }
//
//     addReport(test: string) {
//         this.reports.push(test);
//         this.lastReports = test;
//     }
//
//     printReports() {
//         console.log(this.reports);
//     }
// }
//
// hoge = new AccountingDepartment('1', []);
// hoge.mostResentReport = 'aaaa';
// hoge.mostResentReport;
//インターフェースについて
// interface Greetable {
//     name: string;
//
//     greet(phrase: string): void;
// }
// PersonクラスにGreetableインターフェースを実装する
// class Person implements Greetable {
//     name: string;
//
//     constructor(n: string) {
//         this.name = n
//     }
//
//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name);
//     }
// }
// 変数にinterfaceを型として指定することができる
// let user1: Greetable;
// 変数に値を格納する場合はオブジェクトである必要がある
// user1 = new Person('takumi')
//
// user1.greet('hello');
// 読み取り専用のインターフェースプロパティ
// interface Greetable {
//     readonly name: string;
//
//     greet(phrase: string): void;
// }
//
// class Person implements Greetable {
//     name: string;
//
//     constructor(n: string) {
//         this.name = n
//     }
//
//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name);
//     }
// }
// let user1: Greetable
//
// user1 = new Person('takumi')
// user1.name = 'aaa';
//
// console.log(user1);
// インターフェースの拡張
// interface Named {
//     readonly name: string;
// }
//
// interface Greetable {
//     greet(phrase: string): void;
// }
// NamedとGreetableインターフェースを実装したPersonクラス
// class Person implements Greetable, Named {
//     name: string;
//
//     constructor(n: string) {
//         this.name = n
//     }
//
//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name);
//     }
// }
// 関数型としてのインターフェース
// function型おさらい
// type AddFn = (a: number, b: number) => number;
//
// let add: AddFn;
//
// add = (n1: number, n2: number) => {
//     return n1 + n2;
// }
// インターフェースでのファンクション型の定義
// interface AddFn {
//     (a: number, b: number): number;
// }
//
// let add: AddFn;
//
// add = (n1: number, n2: number) => {
//     return n1 + n2;
// }
// 任意のパラメータ＆プロパティ
// interface Named {
//     readonly name?: string;
//     // プロパティ名の後ろに?をつけることでプロパティを持っているかは任意になる
//     outputName?: string;
// }
//
// // outputNameプロパティを持っていなくてもエラーにならない
// class Person implements Named {
//     name?: string;
//
//     constructor(n?: string) {
//         if (n) {
//             this.name = n
//         }
//     }
// }
//
// let person: Named;
//
// person = new Person();
// console.log(person);
