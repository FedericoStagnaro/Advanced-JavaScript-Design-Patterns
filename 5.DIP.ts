// Las concreciones no deben depender de otras concreciones, sino, de sus interfaces 
// Si instanciamoos una lcase dentro de una clase, estamos rompiendo el principio inversion de dependencia


class Shopping {
    constructor() { }
}

// Si tenemos q hacer un test de shopping basket sin tener q crear las instancias de sqlDatabase y creditCard
// no seria posible...
class ShoppingBasket { // clase de alto nivel
    constructor() { }
    buy(shopping: Shopping) {
        const db: SqlDatabase = new SqlDatabase(); // clase de bajo nivel
        db.save(shopping)
        const creditCard = new CreditCard(); // clase de bajo nivel
        creditCard.pay(shopping)
    }
}

class SqlDatabase {
    constructor() { }
    save(shopping: Shopping) {
        console.log('Saving...')
    }
}

class CreditCard {
    constructor() { }
    pay(shopping: Shopping) {
        console.log('Paying...')
    }
}


// Para arreglar este ejemplo, el primer paso es depender de abstracciones y no de concreciones...


class Shopping2 {
    constructor() { }
}

interface Persistence { // Se crea esta interfaz
    save(shopping: Shopping2) 
}

interface PaymentMethod { // Se crea esta interfaz
    pay (shopping: Shopping2)
}

class ShoppingBasket2 { // clase de alto nivel
    private  persistence : Persistence; // Depende de la INTERFAZ
    private  paymentMethod : PaymentMethod; // Depende de la INTERFAZ

    constructor() { } 

    buy(shopping: Shopping) {
        this.persistence.save(shopping)
        this.paymentMethod.pay(shopping)
    }
}

class SqlDatabase2 implements Persistence {
    constructor() { }
    save(shopping: Shopping) {
        console.log('Saving...')
    }
}

class CreditCard2 implements PaymentMethod {
    constructor() { }
    pay(shopping: Shopping) {
        console.log('Paying...')
    }
}