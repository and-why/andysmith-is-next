'use strict';
// JavaScript notes

// Classes

// ```jsx
class Shapes {
  constructor(a, b) {
    this.a = a;
    this.b = b;
    //add method inside constructor
    this.perimeter = function () {
      return this.a + this.b * 2;
    };
  }
  // add method outside constructor
  getArea() {
    return this.a * this.b;
  }
}

console.log(square.getArea());
// 4
console.log(square.getArea);
// ƒ getArea() {
//   return this.a * this.b
// }
console.log(square.area());
// Uncaught TypeError: oblong.area is not a function at <anonymous>:1:8

// whoops, what about just using area we can add another method outside of the class declaration
Shapes.prototype.area = function () {
  return this.a * this.b;
};

let square = new Shapes(2, 2);
console.log(square.getArea());
// 4
console.log(square.area());
// 4

square.a = 10;
console.log(square.area());
// 20

console.log(square.perimeter());
// 28
// ```

square.area(2, 2);
// 20 - we can't declare new values for the function, it's based on the classes values

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

// The correct way to call a static method
console.log(Point.distance(p1, p2));

// Attempt to call a static method on an instance of the class
try {
  console.log(p1.distance(p1, p2));
} catch (exception) {
  console.log(exception.name + ': ' + exception.message);
}

// log:
// 7.0710678118654755
// TypeError: p1.distance is not a function

// Extending classes

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name, 'speaks');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name, 'barks');
  }
}

let spot = new Dog('Spot');
spot.speak();
// spot barks
spot = new Animal('Spot');
spot.speak();
// spot speaks
