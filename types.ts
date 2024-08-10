let n: number;
let b: boolean;
let s: string;

type TypeUser = {
  name: string;
  age: number;
};

type TypeAddress = {
  city: string;
  country: string;
};

type TypeCommon = TypeAddress & TypeUser;

let user: TypeUser = {
  name: "Alex",
  age: 20,
};

let address: TypeAddress = {
  city: "Odessa",
  country: "Ukraine",
};

let common: TypeCommon = {
  ...user,
  ...address,
};

console.group("User");
console.log(common.name);
console.log(common.age);
console.log(common.city);
console.log(common.country);
