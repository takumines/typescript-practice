"use strict";
// const parson: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'takumi',
//     age: 26,
//     hobbies: ['soccer', 'golf'],
//     role: [2, 'author'],
// };
//
// parson.role.push('admin');
//
// console.log(parson.role);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const parson = {
    name: 'takumi',
    age: 26,
    hobbies: ['soccer', 'golf'],
    role: Role.ADMIN,
};
console.log(parson.role);
