//const arr1 = [1, 2, 3, 4, 5, 6]
const arr1  = [[1,2,3,4],[5,6,7,8],[9,10,11,12]] //nesting array
console.log(arr1);
console.log(arr1[1]);//[ 5, 6, 7, 8 ]
console.log(arr1[0]);//[ 1, 2, 3, 4 ]
console.log(arr1[0][2]);//3
console.log(arr1[0][0]);//1
console.log(arr1[2][3]);//12

//using loop printing all the value of array

console.log(arr1.length)//3
let len = arr1.length;

for(let i = 0; i< len; i++){//outer loop is for outer array
     item = arr1[i].length;
    for(j=0; j< item; j++){//inner loop to get value of inner array
        console.log(arr1[i][j]);//1,2,3,4,5,6,7,8,9,10,11,12
    }
}

const arr2 = [["Mongo","Apple","Banana"],[3,5,8,2],["Car","Tractor"]]
console.log(arr2);
console.log(arr2[0]);//[ 'Mongo', 'Apple', 'Banana' ]
console.log(arr2[0][0]);//Mongo
console.log(arr2[1][1]);//5

let len2 = arr2.length;
console.log(len2);//3

for(let i = 0; i< len2; i++){
    item2 = arr2[i].length;
    console.log(item2);//arr2[0] = 3, arr2[1] = 4, arr[2] = 2 //inner loop array length
    for(let j = 0; j<item2; j++){
        console.log("All the value from array will be printed",arr2[i][j]);
    }
}