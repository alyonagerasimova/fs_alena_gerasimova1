'use strict';

//Использовать классы, интерфейсы, объединения типов.
// Все функции и переменные должны быть полностью типизированы.
// С использованием generics написать фабрику для создания объектов.
// Для фабрики написать декоратор, который при создании объекта
// будет выводить в консоль строку "Object ObjectType created!"
// где ObjectType - тип создаваемого объекта.
// Написать тесты для проверки работоспособности.
// (*) Настроить eslint и его плагины для работы с TypeScript.

class ElectronicsStore {

    protected _name: string;
    protected _store: any[];

    constructor(name: string, store: any[]) {
        this._name = name;
        this._store = store;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        if (value === ' ') {
            alert("Пустое имя");
        }
        this._name = value;
    }

    get store(): any[] {
        return this._store;
    }

    set store(products: any[]) {
        if (products.length === 0) {
            alert("Склад пуст");
        }
        this._store = products;
    }
}

class Product {

    protected _nameProduct: string;
    protected _assignment: string;

    constructor(nameProduct: string, assignment: string) {
        this._nameProduct = nameProduct;
        this._assignment = assignment;
    }

    get nameProduct(): string {
        return this._nameProduct;
    }

    get assignment(): string {
        return this._assignment;
    }

    set assignment(string: string) {
        if (string === ' ') {
            alert("Нет определенного назначения");
            return;
        }
        this._assignment = string;
    }

    set nameProduct(string: string) {
        this._nameProduct = string;
    }
}

class ProductsModel extends Product {

    constructor(nameProduct, assignment, protected _nameModel: string, protected _modelCode: number,
                protected _specifications: Specifications, protected _cost: number) {
        super(nameProduct, assignment);
        // this._specifications = specifications;
        // this._nameProduct = nameProduct;
        // this._assignment = assignment;
        // this._nameModel = nameModel;
        // this._modelCode = modelCode;
        // this._cost = cost;
    }

    get nameProduct(): string {
        return this._nameProduct;
    }

    set nameProduct(value: string) {
        this._nameProduct = value;
    }

    get assignment(): string {
        return this._assignment;
    }

    set assignment(value: string) {
        this._assignment = value;
    }

    get nameModel(): string {
        return this._nameModel;
    }

    set nameModel(value: string) {
        this._nameModel = value;
    }

    get modelCode(): number {
        return this._modelCode;
    }

    set modelCode(value: number) {
        this._modelCode = value;
    }

    get cost(): number {
        return this._cost;
    }

    set cost(value: number) {
        this._cost = value;
    }

    get specifications(): any {
        return this._specifications;
    }

    set specifications(value: any) {
        this._specifications = value;
    }
}

class Specifications {

    constructor(protected _year: number, protected _producer: string, protected _countryProducer: string,
                protected _guarantee?: string, protected _size?: string, protected _material?: string) {
    }

    get guarantee(): string {
        return this._guarantee;
    }

    set guarantee(value: string) {
        this._guarantee = value;
    }

    get size(): string {
        return this._size;
    }

    set size(value: string) {
        this._size = value;
    }

    get material(): string {
        return this._material;
    }

    set material(value: string) {
        this._material = value;
    }

    get year(): number {
        return this._year;
    }

    set year(value: number) {
        this._year = value;
    }

    get producer(): string {
        return this._producer;
    }

    set producer(value: string) {
        this._producer = value;
    }

    get countryProducer(): string {
        return this._countryProducer;
    }

    set countryProducer(value: string) {
        this._countryProducer = value;
    }
}

class Customer {

    constructor(protected _name: string, protected _phone: number, protected _email?: string) {
    }

    get phone(): number {
        return this._phone;
    }

    set phone(value: number) {
        this._phone = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

class Order {

    constructor(protected _customer: Customer, protected _products: string, protected _orderNumber: number) {
    }

    get customer() {
        return this._customer;
    }

    set customer(value) {
        this._customer = value;
    }

    get products() {
        return this._products;
    }

    set products(value) {
        this._products = value;
    }

    get orderNumber() {
        return this._orderNumber;
    }

    set orderNumber(value) {
        this._orderNumber = value;
    }
}


const products: any[] = [];

products[0] = new Product('Фен', 'Сушка волос');
products[1] = new Product('Утюг', 'Глажка одежды');

let electronicsStore: ElectronicsStore = new ElectronicsStore('dns', products);
const specific: Specifications = new Specifications(2020, 'Philips', 'China', '1 year', `78*274*174mm`);
let model = new ProductsModel(products[0].nameProduct, products[0].assignment,'GHKR-1924',3453, specific, 1499);
let customer1 = new Customer('Ivan', 89279032840);
let order1 = new Order(customer1, products[1], 1234);

console.log(`Магазин электроники:`);
console.log(electronicsStore);
console.log(`Товары магазина:`);
console.log(products);

model.specifications = specific;

console.log(`Модель первого товара:`);
console.log(model);
console.log(`Его характеристики:`);
console.log(model.specifications);

electronicsStore.name = 'Mvideo';

console.log(`Новое название магазина: ${electronicsStore.name}`);
console.log(`Первый покупатель:`);
console.log(customer1);
console.log(`Его заказ:`);
console.log(order1);

order1 = undefined;
console.log(`Заказ удален: ${order1}`);
