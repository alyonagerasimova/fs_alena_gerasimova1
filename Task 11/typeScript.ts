// Использовать классы, интерфейсы, объединения типов.
// Все функции и переменные должны быть полностью типизированы.
// С использованием generics написать фабрику для создания объектов.
// Для фабрики написать декоратор, который при создании объекта
// будет выводить в консоль строку "Object ObjectType created!"
// где ObjectType - тип создаваемого объекта.
// Написать тесты для проверки работоспособности.
// (*) Настроить eslint и его плагины для работы с TypeScript.

// Classes
abstract class Product {
    protected constructor(
        protected _nameProduct: string,
        protected _nameModel: string,
        protected _modelCode: number,
        protected _specifications: Specifications,
        protected _cost: number
    ) {}

    get nameProduct(): string {
        return this._nameProduct;
    }

    set nameProduct(string: string) {
        this._nameProduct = string;
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

    get specifications(): Specifications {
        return this._specifications;
    }

    set specifications(value: Specifications) {
        this._specifications = value;
    }
}

class Store<T extends Product = Product> {
    constructor(protected _name: string, protected _store: T[]) {
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        if (!value) {
            alert("Пустое имя");
        }
        this._name = value;
    }

    get store(): T[] {
        return this._store;
    }

    set store(products: T[]) {
        if (!products.length) {
            alert("Склад пуст");
        }
        this._store = products;
    }
}

class Specifications {
    constructor(protected _year: number,
                protected _producer: string,
                protected _countryProducer: string,
                protected _guarantee?: string,
                protected _size?: string, protected _material?: string) {
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

class ConcreteProduct extends Product {
    private _codeOfCoreWeapons = 442535;

    constructor(
        nameProduct: string,
        nameModel: string,
        modelCode: number,
        specifications: Specifications,
        cost: number
    ) {
        super(nameProduct, nameModel, modelCode, specifications, cost);
    }

    get codeOfCoreWeapons(): number {
        return this._codeOfCoreWeapons;
    }
}

class Customer {
    constructor(
        protected _name: string,
        protected _phone: number,
        protected _email?: string
    ) {
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
    constructor(
        protected _customer: Customer,
        protected _products: Product,
        protected _orderNumber: number
    ) {
    }

    get customer() {
        return this._customer;
    }

    set customer(value: Customer) {
        this._customer = value;
    }

    get products() {
        return this._products;
    }

    set products(value: Product) {
        this._products = value;
    }

    get orderNumber() {
        return this._orderNumber;
    }

    set orderNumber(value) {
        this._orderNumber = value;
    }
}

// Decorator
function fabricLogger(classType: string) {
    return (target: ProductCreator, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log("fabricLogger decorator init");
        const originalFn = descriptor.value;

        descriptor.value = (...args) => {
            const instance = originalFn(...args);
            console.log(`Object ${classType} created!`);
            return instance;
        }
        return descriptor;
    }
}

//Fabrics
interface ProductCreator<T extends Product = Product> {
    createInstance(...args): T;
}

class ConcreteProductCreator implements ProductCreator<ConcreteProduct>{
    @fabricLogger("ConcreteProduct")
    public createInstance(nameProduct: string, nameModel: string, modelCode: number, specifications: Specifications, cost: number): ConcreteProduct {
        return new ConcreteProduct(nameProduct, nameModel, modelCode, specifications, cost);
    }
}

function testFabric(): void {
    const creator: ProductCreator<ConcreteProduct> = new ConcreteProductCreator();
    const specific: Specifications = new Specifications(2020, "Philips", "China", "1 year", "78*274*174mm");

    const products: ConcreteProduct[] = [];
    products[0] = creator.createInstance("Фен", "Сушка волос", 32243, specific, 10);
    products[1] = creator.createInstance("Утюг", "Глажка одежды", 7897, specific, 30);

    console.log("Concrete Products", products);

    const concreteStore = new Store<ConcreteProduct>("dns", products);

    console.log("Store", concreteStore);

    const customer = new Customer("Ivan", 89279032840);
    const order: Order = new Order(customer, products[1], 1234);

    console.log("Concrete order", order);
}

testFabric();
