//Write a programme to print first and last letter in uppercase (hello = HellO)

function upperCaseValue(string){
    const firstValue = string[0].toUpperCase();
    const middleValue = string.slice(1,string.length-1);
    const lastValue = string[string.length-1].toUpperCase();
    return firstValue + middleValue + lastValue ;
}
console.log(upperCaseValue("hello"));
console.log(upperCaseValue("david"));
console.log(upperCaseValue("Landsberg am Lech"));