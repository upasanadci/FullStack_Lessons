function add(a,b,c,d,e,f,g,h,i,){
    return `${a+b+c+d+e+f+g+h+i}`;
}
console.log(add(4,5,6,7,8,9,5,6,74,3));//9

//rest parameters
function addition(x,y,...input){
    console.log(x);//9
    console.log(y);//2
    console.log(...input);//6 7 3 4 5
    console.log(input);//[ 6, 7, 3, 4, 5 ]
    //return `${x+y}`
}
console.log(addition(9,2,6,7,3,4,5));//11

function additionOfNumbers(...args){
    console.log(args);//[2,3,4,5,1,2,34]
    let sum = 0;
    for(let i = 0; i<args.length;i++){
        sum = sum+args[i];
        
    }
    return sum;//46
}

console.log(additionOfNumbers(2,3,4,1,2,34));
// i = 0;
// sum = 0+2 = 2
// sum = 2+3 = 5
// sum = 5+4 = 9
// sum = 9+1 =10;
// sum = 10+2 = 12
// sum = 12+34 = 46 

function myFun(firstName,lastName,...rest){
    console.log(...rest);//South DCi
    return `${firstName +" " +lastName}`//Rodrigue Tjani

}
console.log(myFun("Rodrigue","Tjani","South","DCi"))

function fun(a,b,...c){
    console.log(a);
    console.log(`${a} ${b}`);//Marwah
    console.log(c);//["Netta", "Moses"]
    console.log(...c)//Netta Moses
    console.log(c[0]);//Netta
    console.log(c.length);//2
    console.log(c.indexOf('Netta'));//0
}
fun("Marwah","peculiar","Netta","Moses")
