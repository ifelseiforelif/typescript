function test<T>(a: T): string {
  return `Value: ${a} Type: ${typeof a}`;
}

const test2 = <T>(a: T) => {
  return `Value: ${a} Type: ${typeof a}`;
};

const ob: object = {
  a: 1,
  b: 12,
};

console.log(test<string>("hello"));
console.log(test<number>(19));
console.log(test<null>(null));
console.log(test<undefined>(undefined));
console.log(test<object>(ob));
