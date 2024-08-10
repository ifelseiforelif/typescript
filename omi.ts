//Утіліти типів
interface IProduct {
  id: number;
  name: string;
  price: number;
}
//Прибрали id з IProduct
interface IProductCreate extends Omit<IProduct, "id"> {}

const product: IProductCreate = {
  name: "bread",
  price: 23,
};
//Pick дозволяє створити інтерфейс на базі існуючого, і отримати лише певні поля
interface IProductId extends Pick<IProduct, "id"> {}
const productId: IProductId = {
  id: 10,
};

//Partial - всі властивості робить не обов'язковими
interface IPartProduct extends Partial<IProduct> {}

//Readonly - всі поля доступні лише для считування
interface IReadOnlyProduct extends Readonly<IProduct> {}
