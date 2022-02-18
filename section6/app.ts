// 交差型

// オブジェクト型を交差型にした場合はそれぞれのプロパティを結合したからになる
// type Admin = {
//     name: string;
//     privileges: string[];
// }
//
// type Employee = {
//     name: string;
//     startDate: Date;
// }
//
// type ElevatedEmployee = Admin & Employee;
//
// const e1: ElevatedEmployee = {
//     name: 'takumi',
//     privileges: ['test'],
//     startDate: new Date(),
// }
//
// // Union型を交差型にした場合は共通の型が適応される
// type Combinable = string | Date;
// type Numeric = number | boolean;
//
// type Universal = Combinable & Numeric;

// インターフェースでの交差型

// interface Admin {
//     name: string;
//     privileges: string[];
// }
//
// interface Employee {
//     name: string;
//     startDate: Date;
// }
//
// interface ElevatedEmployee extends Admin, Employee {}
//
// const e1: ElevatedEmployee = {
//     name: 'takumi',
//     privileges: ['test'],
//     startDate: new Date(),
// }

// 型ガード

// type Combinable = string | number;

// function add(a: Combinable, b: Combinable) {
//     if (typeof a === 'string' || typeof b === 'string') {
//         return a.toString() + b.toString();
//     }
//     return a + b;
// }

// type Admin = {
//     name: string;
//     privileges: string[];
// }

// type Employee = {
//     name: string;
//     startDate: Date;
// }

// type ElevatedEmployee = Admin & Employee;

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log(emp.name);
//     if ('privileges' in emp) {
//         console.log(emp.privileges)
//     }
//     if ('startDate' in emp) {
//         console.log(emp.startDate)
//     }
// }

// const e1: UnknownEmployee = {
//     name: 'takumi',
//     privileges: ['test'],
//     startDate: new Date(),
// }
// printEmployeeInformation(e1)

// class Car {
//     drive() {
//         console.log('運転中');
//     }
// }

// class Truck {
//     drive() {
//         console.log('トラックを運転中');
//     }
//
//     loadCargo(amount: number) {
//         console.log('貨物を乗せています...' + amount);
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     if (vehicle instanceof Truck) {
//         vehicle.loadCargo(1000)
//     }
// }

// useVehicle(v1);
// useVehicle(v2);

// Discriminated Unions

// interface Bird {
//     // リテラル型を指定
//     type: 'bird',
//     flyingSpeed: number;
// }

// interface Horse {
//     // リテラル型を指定
//     type: 'horse'
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     let speed;
//     switch (animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;
//             break;
//     }
//     console.log('移動速度：' + speed);
// }

// moveAnimal({type: 'horse', runningSpeed: 70})

// 型キャスト
// DOMなどの型が明確にわからな時に使用する

// const paragraph = document.querySelector('p');
// const userInputElement = <HTMLInputElement>document.getElementById("user-input")
// const userInputElement = document.getElementById("user-input") as HTMLInputElement
// nullかもしれないのでエラーになる
// userInputElement.value = 'こんにちは';

// インデックス型

// エラーメッセージを格納する
//// 例
//// {
////     email: 'このメールアドレスは正しくありません',
////     username: '名前の入力が正しくありません',
//// }

// interface ErrorContainer {
//     // propの値と個数が不明な状態
//     [prop: string]: string;
// }
//
// const errorBag: ErrorContainer = {
//     email: '正しいメールアドレスではありません。',
//     username: 'ユーザー名が正しくありません。'
// }

// 関数オーバーロード

// type Combinable = string | number;
//
// function add(a: number, b: number): number;
// function add(a: string, b: string): string
// function add(a: number, b: string): string
// function add(a: string, b: number): string
// function add(a: Combinable, b: Combinable) {
//     if (typeof a === 'string' || typeof b === 'string') {
//         return a.toString() + b.toString();
//     }
//     return a + b;
// }
//
// const result = add('test', 'takumi');
// result.split(' ');

// オプショナルチェイン

// const fetchUserData = {
//     id: 'u1',
//     name: 'user1',
//     job: {
//         title: 'Developer',
//         description: 'TypeScript',
//     }
// }

// console.log(fetchUserData?.job?.title);

// NULL合体演算子

// const userInput = undefined;
//
// const storedData = userInput ?? 'DEFAULT';
//
// console.log(storedData);