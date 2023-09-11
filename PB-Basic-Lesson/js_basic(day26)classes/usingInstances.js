// How can I use an Instance of a class into another class

// create a bankAccount class where people can save their money

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner; // string
    this.balance = balance; // number 
  }
  displayBalance() {
    console.log(`Current balance for ${this.owner} is ${this.balance} Euros`);
  }
  deposit(amount) {
    this.balance += amount; // add the deposit amount in my balance;
    this.displayBalance(); // call the method from above. Using "this" I can have access to other methods from the class
    // console.log(`current balance is ${this.balance}`)
  }
}

const amyAccount = new BankAccount("Amy Smith", 1500);
const jackAccount = new BankAccount("Jack Smith", 750);

amyAccount.displayBalance(); // Current balance for Amy Smith is 1500 Euros

amyAccount.deposit(500); // Current balance for Amy Smith is 2000 Euros

console.log(amyAccount)

// Create a new class family account. In this class I want to put together all the bank accounts off a family.

class FamilyAccount {
  constructor(membersAccount) {
    this.membersAccount = membersAccount; // array
  }
  addMember(newMember) {
    this.membersAccount.push(newMember); // push the new member in the membersAccount array;
  }
  displayMembersAccounts() {
    this.membersAccount.forEach((item) => { // => item = {owner : "" , balance : }
      console.log(`Current balance for ${item.owner} is ${item.balance} Euros`);
    });
  }
  getTotalAmount() {
    const totalAmount = this.membersAccount.reduce((acc, item) => {
      // item = {owner : "" , balance : }
      return acc + item.balance;
    }, 0);
    return totalAmount;
  }
}

const smithFamily = new FamilyAccount([amyAccount, jackAccount]); // I am using the instances from the bankAccount class
console.log(smithFamily);

const johnAccount = new BankAccount("John Smith", 500);
smithFamily.addMember(johnAccount);

smithFamily.displayMembersAccounts();

console.log(smithFamily.getTotalAmount()); // 3250

// what will happen if Amy does a new deposit. The instance of Amy is changing in the family class as well and when I call the getTotalAmount I get the new balance after the deposit.
amyAccount.deposit(1000);

console.log(smithFamily.getTotalAmount()); // 4250

