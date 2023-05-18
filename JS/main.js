"use strict";
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let id = setInterval(function () {
//     console.log(array[0]);
//     array.shift();
//     if (array.length == 0) {
//         clearInterval(id);
//     }
// }, 500);


// for (let i in array) {
//     let id = setTimeout(function () {
//         console.log(array[0]);
//         array.shift()
//         clearTimeout(id);
//     }, 1000);
// }

// let obj1 = {};
// let obj2 = {
//     name: "Tania",
// }
// function ChekObj(obj) {
//     if (Object.keys(obj).length == 0) {
//         console.log("Empty");
//     }
//     else {
//         console.log("Not empty");
//     }
// }
// ChekObj(obj1);
// ChekObj(obj2)

// function ChechValue(value) {
//     if (typeof (value) == "object") {
//         if (value == null) {
//             console.log("null");
//         }
//         else if (Array.isArray(value)) {
//             console.log("array");
//         }
//         else if (value.arguments != undefined) {
//             console.log("function");
//         }
//         else {
//             console.log("object");
//         }

//     }
//     else {
//         console.log(typeof (value));
//     }
// }
// ChechValue(null);
// ChechValue([]);
// ChechValue({});
// ChechValue(function () {

// });
// ChechValue(1);
// ChechValue("Hello");
// ChechValue(true);
// ChechValue(1n);

// function deleteProperty(obj, ...props) {
//     for (let i of props) {
//         delete obj[i];
//     }
// }
// let obj = {
//     name: "Tania",
//     age: 32,
//     surname: "Sherbak",
// }
// deleteProperty(obj, "name", "age");
// console.log(obj);


// let bank = [500, 500, 200, 200, 100, 100, 50, 50, 20, 20, 10, 10]
// function cash() {
//     let money = document.getElementById("sum").value;
//     bank.sort((a, b) => b - a);
//     while (money != 0) {
//         for (let i = 0; i < bank.length; i++) {
//             if (money >= bank[i]) {
//                 money -= bank[i];
//                 bank.splice(i, 1);
//             }
//         }
//         document.getElementById("sum").value = "";
//         if ((money > 0) && (bank.length == 0)) {
//             alert("Not enough money");
//         }
//         break;
//     }
// }

let bank = [
    { 500: 2 },
    { 200: 1 },
    { 100: 1 },
    { 50: 2 },
    { 20: 3 },
    { 10: 4 },
    { 5: 4 },
    { 2: 4 },
    { 1: 5 },
];
function cash() {
    let money = document.getElementById("sum").value;
    while (money != 0) {
        for (let i = 0; i < bank.length; i++) {
            let curValue = Object.keys(bank[i])[0];
            let amountBanknot = parseInt(money / curValue);
            if (bank[i][curValue] >= amountBanknot) {
                money -= curValue * amountBanknot;
                bank[i][curValue] -= amountBanknot;

            }
            else if (bank[i][curValue] < amountBanknot && amountBanknot > 0) {
                money -= curValue * bank[i][curValue];
                bank[i][curValue] = 0;
            }
            else if (bank[i][curValue] == 0) continue;
            else if (money == 0) break;
            console.log(money);
            console.log(bank);
        }
        document.getElementById("sum").value = "";
        if ((money > 0) && (bank.filter(item => Object.values(item)[0] !== 0).length == 0)) {
            alert("Not enough money");
        }
        break;
    }
}


