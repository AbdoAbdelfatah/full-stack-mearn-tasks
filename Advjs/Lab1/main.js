function Shape(){
  if(this.constructor === Shape){
    throw new Error('this is a abstract class')
  }
}
Shape.prototype.toString = function () {
  return '[--- Shape ---]';
};

function Rectangle(width, height) { 
  Shape.call(this);

    
  Object.defineProperty(this, 'dims', {
    value: {width:Number(width),height:Number(height)},
    writable: false,       
    configurable: false,     
    enumerable: false       
  });

   
  Object.defineProperties(this, {
    width: {
      get: function () { return this.dims.width; },
      enumerable: false,
      configurable: false
    },
    height: {
      get: function () { return this.dims.height; },
      enumerable: false,
      configurable: false
    },
    area: {
      get: function () { return this.dims.width * this.dims.height; },
      enumerable: false,
      configurable: false
    },
    perimeter: {
      get: function () { return 2 * (this.dims.width + this.dims.height); },
      enumerable: false,
      configurable: false
    }
  });
 
  Object.seal(this);
}

//Copy Parent Prototype as a reference Object.create
Rectangle.prototype = Object.create(Shape.prototype);
//re-setup child constructor prototype functions and properties
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.toString = function () {
  return 'Rectangle --> Width: ' + this.width + ', Height: ' + this.height + ', Area: ' +
         this.area + ', perimeter: ' + this.perimeter;
};
Rectangle.prototype.valueOf = function () {
  return this.area;
};


// Create rectangles
var r1 = new Rectangle(5, 12);  
var r2 = new Rectangle(1, 37);  
console.log(r1.toString());  
console.log(r2.toString());  
console.log('r1 + r2 =', r1 + r2); // 97
console.log('r1 - r2 =', r1 - r2); // 23 



//--------------------------------------------------------------------------------------------------------------------------------------
function Square(side) { 

   Rectangle.call(this, side, side);
   Square.counter++;
   Object.seal(this);
}

//Copy Parent Prototype as a reference Object.create
Square.prototype = Object.create(Rectangle.prototype);
//re-setup child constructor prototype functions and properties
Square.prototype.constructor = Square;
Square.prototype.toString = function () {
  return 'Square --> side: ' + this.width + ', area: ' + this.area + ', perimeter: ' + this.perimeter;
};

Square.counter = 0

// Static Function
Square.display = function(){
  return Square.counter
}

// Create square
var sq1=new Square(5);
var sq2=new Square(10); 
console.log(sq1.toString());  
console.log(sq2.toString()); 
console.log('number of created squares= '+Square.display())
 