class Account {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance = amount + this.balance;
  }
  withdrawl(amount) {
    this.balance = this.balance - amount;
  }
  suspend() {
    this.owner = undefined;
    this.balance = undefined;
  }
}

let myAccount1 = new Account('Adolfo', 1000);

console.log(myAccount1);

let myAccount2 = new Account('AJ', 100);

console.log(myAccount2);

myAccount2.deposit(1000);
console.log(myAccount2);

myAccount2.withdrawl(500);
console.log(myAccount2);

myAccount2.suspend();
console.log(myAccount2);
