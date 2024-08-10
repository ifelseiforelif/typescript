class Vector {
  private x: number;
  private y: number;
  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  add(vector: Vector): Vector {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }
}

const v1: Vector = new Vector(2, 3);
const v2: Vector = new Vector(4, 5);
const v3: Vector = v1.add(v2);

//Успадкування, поліморфізм
abstract class Transport {
  private model;
  constructor(model: string) {
    this.model = model;
  }
  abstract move(): void;
}
class Bus extends Transport {
  constructor(model: string) {
    super(model);
  }

  move(): void {
    console.log("Bus move");
  }
}

class Car extends Transport {
  constructor(model: string) {
    super(model);
  }

  move(): void {
    console.log("Car move");
  }
}

let car: Transport = new Bus("ikarus");
car.move();

car = new Car("mazda");
car.move();
