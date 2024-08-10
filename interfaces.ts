interface ICategory {
  id: number;
  name: string;
}

interface IProduct {
  id: number;
  name: string;
  price: number;
  is_show: boolean;
  category: ICategory;
}

const category: ICategory = {
  id: 10,
  name: "category name",
};

const product: IProduct = {
  id: 23,
  name: "bread",
  price: 20,
  is_show: true,
  category: category,
};

console.group("Product");
console.log(
  `Name: ${product.name} Price: ${product.price} Category: ${product.category.id} ${product.category.name}`
);
