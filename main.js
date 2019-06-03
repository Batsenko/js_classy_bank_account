class Person {
  constructor(name, date, money) {
    this.name = name;
    this.date = date;
    this.money = 0;
    this.history = [];    
    this.addMoney(money, "Initial");
  }
  
  getAge() {
    let birthdate = new Date(this.date.replace(/(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3"));
    let cur = new Date();
    let diff = cur - birthdate;

    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  }
  
  getInfo() {
    return `Name: ${this.name}, Age: ${this.getAge()}, Amount: ${this.money}$`;
  }
  
  addMoney(count, text) {
    this.money += count;
    this.addHistory(text, count);
  }
  
  withdrawMoney(count, text) {
    this.money -= count;
    this.addHistory(text, -count);
  }

  addHistory(text, count) {
    this.history.push(`${text}: ${count}$`);
  }
  
  getAccountHistory() {
	  return this.history;
  }
}
const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: 24, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: 24, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo();