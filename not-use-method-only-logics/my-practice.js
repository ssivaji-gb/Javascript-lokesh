// ⭐ POP — 5 Tasks
//1. Last element remove pannitu, remaining array print pannunga.

// let arr=["apple","banana","egg","siva"]
// arr.pop()
// console.log(arr);
//OT-[ 'apple', 'banana', 'egg' ]

// 2.Array last element pop pannitu “removed element” ah print pannunga.

// let arr=["apple","banana","egg","siva"]
// let remo=arr.pop()
// console.log(remo);

//OT-siva

//3. Users list irukkum → last user removed.
// let users = ["Arun", "Kavi", "Muthu", "Deepa"];
// users.pop()
// console.log(users);

// 4.Numbers array-la repeated pop pannitu empty aakunga.

// let users = ["Arun", "Kavi", "Muthu", "Deepa"];
// users.pop()
// users.pop()
// users.pop()
// users.pop()
// console.log(users);

// 5.Stack structure creates pannunga (push + pop).

// let users = [];
// users.push("Arun")
// users.push("Arun")
// users.push("Arun")
// users.push("Arun")
// users.pop()
// console.log(users);

// ⭐ PUSH — 5 Tasks
// 1.Array last-la ஒரு number add pannunga.

// let users = ["Arun", "Kavi", "Muthu", "Deepa"];
// users.push(1)
// console.log(users);

// 2.Fruits array-il “Mango” add pannunga.

// let users = ["Arun", "Kavi", "Muthu", "Deepa"];
// users.push("Mango")
// console.log(users);

// 3.Empty array-la 5 items push pannunga.

// let users = ["Arun", "Kavi", "Muthu", "Deepa"]
// users.push("apple")
// users.push("banana")
// users.push("egg")
// users.push("siva")
// users.push("eeecc")
// console.log(users);

// 4.User input-like object {name, age} push pannunga.
// let users=[]
// users.push(users.name="sivaji")
// users.push(users.age=22)
// console.log(users);

// 5.Loop use panni numbers 1–10 push pannunga.

// let user=[]
// for(let i=1;i<=10;i++){
//     user.push(i)
// }
// console.log(user);

// ⭐ MAP — 5 Tasks
// 1.Numbers array → எல்லா values-um *2 செய்யுங்க.

// let arr=[2,3,4,5,6,7,8,9]
// let ne=arr.map(n=>n*2)
// console.log(ne);

// 2.Marks array → 5 marks bonus add pannunga.

// let arr=[2,3,4,5,6,7,8,9]
// let ne=arr.map(n=>n+5)
// console.log(ne);

// 3.Names array → எல்லாம் capital letters-la convert pannunga.

// let users = ["Arun", "Kavi", "Muthu", "Deepa"];
// let ne=users.map(n=>n.toUpperCase())
// console.log(ne);

// 4.Product list → just price மட்டும் return pannunga.

// let arr=[{price:22},{price:33},{price:44},{price:55},{price:66},{price:77}]
// let ne=arr.map(n=>n.price)
// console.log(ne);

// 5.Student list → pass/fail array create pannunga.

//checking odd number

let value = [1,2,34,3,4,5,7,23,12];

function checkingOdd(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      count++;
    }
  }
    if (count >= 3) {
        return true;
      } else {
        return false;
      }
}
let sum = checkingOdd(value);
console.log(sum);
