// 1.Let string = “Dckap123” how many objects and numbers in the string. Output :

// let string = "Dckap123";
// let num = 0;
// let str = 0;
// for (let i = 0; i < string.length; i++) {
//   if (string[i] >= "0" && string[i] <= "9") {
//     num++;
//   } else {
//     str++;
//   }
// }
// console.log("number of alfubut in string:", num);
// console.log("number of numbers in string", str);

//output
// number of alfubut in string: 3
// number of numbers in string 5

// 2.sum of the elements let a = [1,2,3,4,5,true] output : 15

// 2.sum of the elements let a = [1,2,3,4,5,true] output : 15

// let arr = [1, 2, 3, 4, 5, true];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "number") {
//     sum += arr[i];
//   }
// }
// console.log(sum);

//output : 15

// 3.second largest number a = [54,23,11,17,10] output : 23

// let arr = [54,23,11,17,10]
// let large=0;
// let secondlarge=0

// for (let i =0; i < arr.length; i++) {
// if(large < arr[i]){
//   large=arr[i]
// }
//   if(large !== arr[i]){
//     for(let j=0 ;j<arr.length;j++){
//       if(secondlarge<arr[i]){
//           secondlarge=arr[i]
//       }
//     }


// }
// }
// console.log("second largest number:",secondlarge)

//output-second largest number: 23

// 4.Assending and descending two arguments passed

///method-1

// function assDess(value,callback){
//   return callback(value)
// }

// function ascSort(arr){
//   for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[i]>arr[j]){
//         let temp = arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//       }
//     }
//   }
//   return arr;
// }

// function descSort(arr){
//   for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[i]<arr[j]){
//         let temp = arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//       }
//     }
//   }
//   return arr;
// }

// let arr=[-1,5,2,-2]
// let AD=assDess(arr,ascSort)
// console.log(AD)



    


//method-2
// function assDess(value,callback,method){
//   return callback(value,method)
// }
// function sorting(arr,method){
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//       if(method === 'asc' ? arr[i]>arr[j] : arr[i]<arr[j]){
//         let temp = arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//       }
//     }
//   }
//   return arr  
// }
// let arr=[22,44,77,711,-2,43,676]
// const res = assDess(arr,sorting,'asc')
// console.log(res)

// 5.Count positive and negative values in the array // positives are sum and negative are count
// let arr=[-1,2,3,-4,-5,6,-7,-8,-9]
// let sum=0
// let count=0
// for (let i = 0; i < arr.length; i++) {
// if(arr[i]<0){
//   count++
// }else{
//   sum+=arr[i]
// }
// }

// console.log("positives are sum:",sum)
// console.log("negative are count:",count)

//output-positives are sum: 11
// negative are count: 6

// 6.Find the missing number in the array 
// let arr = [1,2,3,4,6,9] //output : 5 is missing

// let arr = [4,6,19]
// let mtArr=[]
// let count=arr[0]
// for (let i = 0; i < arr.length; i++) {
//   if (count!==arr[i]) {
//     mtArr[mtArr.length]=count
//      count++
//      i--
//   }else{
//     count++
//   }
// }
// console.log(mtArr)


