//Short circuit assignment
//falsy value
// undefined, null, "", 0, false, NaN
//NaN = "Hello1234"

//or operator
console.log("Rodrigue" || "Sasha" || "Marwah" || "Iryna");//Rodrigue
console.log("" || "Sasha" || "Marwah" || "Iryna");//Sasha
console.log("" || null || "Marwah" || "Iryna");//Marwah
console.log("" || null || undefined || "Iryna");//Iryna

//And operator
console.log("Rodrigue" && "Sasha" && "Marwah" && "Iryna");//Iryna
console.log("" && "Sasha" && "Marwah" && "Iryna");//""
console.log("Rodrigue" && null && "Marwah" && "Iryna");//null
console.log( undefined && "Marwah" && "Sasha" && "Iryna");//undefined
console.log("Rodrigue" && "Sasha" && NaN && null && "Iryna");//NaN

//Complex Short Circuit assignment

console.log((0 && 1)||((2 && 3) || (false && true) ) ||"Hello");//3
console.log(0 || (3 || false ) || "Hello");
//console.log(0 || 3 || "Hello");
//console.log(3 || "Hello"); //3

