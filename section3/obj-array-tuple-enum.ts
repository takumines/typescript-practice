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

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

const parson = {
    name: 'takumi',
    age: 26,
    hobbies: ['soccer', 'golf'],
    role: Role.ADMIN,
};

console.log(parson.role);