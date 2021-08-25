'use strict';

//Создать 3-7 связанных классов, предметную область придумать самостоятельно и обсудить с куратором.
// Необходимо использовать наследование и композицию, работу с конструкторами, геттерами с сеттерами.
// Для некоторых полей использовать списки.
// Продемонстрировать создание / удаление / редактирование сущностей через вывод на консоль (UI не нужен).

class ElectronicsStore {

    constructor(name, store) {
        this._name = name;
        this._store = store;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value === ' ') {
            alert("Пустое имя");
            return;
        }
        this._name = value;
    }

    get store() {
        return this._store;
    }

    set store(products) {
        if (products.length === 0) {
            alert("Склад пуст");
            return;
        }
        this._store = products;
    }
}

class Product {

    constructor(nameProduct, assignment) {
        this._nameProduct = nameProduct;
        this._assignment = assignment;
    }

    get nameProduct() {
        return this._nameProduct;
    }

    get assignment() {
        return this._assignment;
    }

    set assignment(string) {
        if (string === ' ') {
            alert("Нет определенного назначения");
            return;
        }
        this._assignment = string;
    }

    set nameProduct(string) {
        this._nameProduct = string;
    }
}

class ProductsModel extends Product {

    constructor(nameProduct, assignment, nameModel, modelCode, specifications, cost) {
        super(nameProduct, assignment);
        this._specifications = specifications;
        this._nameProduct = nameProduct;
        this._assignment = assignment;
        this._nameModel = nameModel;
        this._modelCode = modelCode;
        this._cost = cost;
    }

    get nameProduct() {
        return this._nameProduct;
    }

    set nameProduct(value) {
        this._nameProduct = value;
    }

    get assignment() {
        return this._assignment;
    }

    set assignment(value) {
        this._assignment = value;
    }

    get nameModel() {
        return this._nameModel;
    }

    set nameModel(value) {
        this._nameModel = value;
    }

    get modelCode() {
        return this._modelCode;
    }

    set modelCode(value) {
        this._modelCode = value;
    }

    get cost() {
        return this._cost;
    }

    set cost(value) {
        this._cost = value;
    }

    get specifications() {
        return this._specifications;
    }

    set specifications(value) {
        this._specifications = value;
    }
}

class Specifications {

    constructor(year, producer, countryProducer, guarantee, size, material) {
        this._year = +year;
        this._producer = producer;
        this._countryProducer = countryProducer;
        this._guarantee = guarantee;
        this._size = size;
        this._material = material;
    }

    get guarantee() {
        return this._guarantee;
    }

    set guarantee(value) {
        this._guarantee = value;
    }

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
    }

    get material() {
        return this._material;
    }

    set material(value) {
        this._material = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        this._year = value;
    }

    get producer() {
        return this._producer;
    }

    set producer(value) {
        this._producer = value;
    }

    get countryProducer() {
        return this._countryProducer;
    }

    set countryProducer(value) {
        this._countryProducer = value;
    }
}

class Customer {

    constructor(name, phone, email) {
        this._name = name;
        this._phone = phone;
        this._email = email;
    }

    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

class Order {

    constructor(customer, products, orderNumber) {
        this._customer = customer;
        this._products = products;
        this._orderNumber = orderNumber;
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


const products = [];

products[0] = new Product('Фен', 'Сушка волос');
products[1] = new Product();
products[1].nameProduct = 'Утюг';
products[1].assignment = 'Глажка одежды';

let electronicsStore = new ElectronicsStore('dns', products);
const specific = new Specifications(2020, 'Philips', 'China', '1 year', `78*274*174mm`);
let model = new ProductsModel(products[0].nameProduct, products[0].assignment);
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