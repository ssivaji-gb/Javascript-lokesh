//1.checkstring

// let str="abc"
// function checkString(same){
//   let arr=["org","ABC","test"]
//   for(let i=0;i<arr.length;i++){
//   if(arr[i].toLowerCase() === same.toLowerCase()){
//    return true
//   }
//   }
//   return false
// }

// console.log(checkString(str))

//2.checking odd

// let value = [1,2,34,3,4,5,7,23,12];

// function checkingOdd(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       count++;
//     }
//   }
//     if (count >= 3) {
//         return true;
//       } else {
//         return false;
//       }
// }
// let sum = checkingOdd(value);
// console.log(sum);

//3.difrentarray

// function difrentArray(arone, artwo) {
//   for (let i = 0; i < arone.length; i++) {
//     for (let j = 0; j < artwo.length; j++) {
//       if (arone[i] == artwo[j]) {
//         arone.splice(i, 1);
//         artwo.splice(j, 1);
//         i--;
//       }
//     }
//   }
//   console.log(arone,artwo);
// }
// let arr1 = [54, 32, 42, 1, 23];
// let arr2 = [55, 32, 43, 1, 23];
//  difrentArray(arr1, arr2);
