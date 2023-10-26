class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getCircumference() {
    return Math.PI * 2 * this.radius;
  }
}


const circle_1 = new Circle(1);
const circle_2 = new Circle(3);
const circle_3 = new Circle(11);

console.log(circle_1.getArea());
console.log(circle_2.getArea());
console.log(circle_3.getArea());

console.log(circle_1.getCircumference());
console.log(circle_2.getCircumference());
console.log(circle_3.getCircumference());