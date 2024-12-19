// Define the Rectangle class
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this.width * this.height;
  }
}

// Define the Square class extending Rectangle
class Square extends Rectangle {
  constructor(side) {
    super(side, side); // Call the Rectangle constructor with side for both width and height
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this.width; // Since width and height are the same for a square
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
