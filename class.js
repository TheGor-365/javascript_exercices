class Human {
  constructor(year, hname) {
    this.year = year;
    this.hname = hname;
  }

  scream () {
    return this;
  }

  static listen () {
    return this;
  }

  static displayName = "man"
}

let Den = new Human(1980, "Den")

console.log(Den);
console.log(Human.displayName);


let obj = new Human();
obj.scream();
let scream = obj.scream();
