import readlineSync from "readline-sync";

//write a programme till it is not equal to given password

let password = "12345";
let input = "";

do{
    console.clear()
    input = readlineSync.question("Enter a password");   
}
while(input != password)

//write a programme that will print only day or night

let text = "";

do{
    console.clear();
    text = readlineSync.question("Enter day or night....");

}while(text !== "day" && text !== "night");

