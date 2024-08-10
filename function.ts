function subtract(a: number, b: number): void {
  console.log(a - b);
}

type TypeFuncAdd = (a: number, b: number) => number;

const add: TypeFuncAdd = (a, b) => {
  return a + b;
};

console.log(add(4, 3));
