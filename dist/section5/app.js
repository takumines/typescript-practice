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
// outputNameプロパティを持っていなくてもエラーにならない
class Person {
    constructor(n) {
        if (n) {
            this.name = n;
        }
    }
}
let person;
person = new Person();
console.log(person);
