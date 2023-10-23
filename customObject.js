var Human = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function () {
    var fname = this.firstName + ' ' + this.lastName;
    return fname;
  }
}

console.log(Human)
console.log(Human.firstName)
console.log(Human.lastName)
console.log(Human.getFullName())
