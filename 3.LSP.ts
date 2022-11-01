class Duck {
    fly() {}
    swin() {}
    cuack() {}
}

// se añade una nueva clase hija, donde sus caracteristicas que la definen en el dominio del problema
// la hacen distinto a la clase padre, por lo q , no podria sustituir a la clase padre
class RubberDuck extends Duck {
    fly() {
        throw new Error(); // Como el pato de goma no puede volar se implementa el metodo vacio o con excepcion
    }
    swin() {
        console.log('Flotar')
    }
    cuack() {
        console.log('Chirrido')
    }
}

// Ese metodo vacio o excepcion, requiere que, al momento de procesar este pato y otros mas, necesita un tratamiento especial
// El procesador de patos debera considerarlo
class DuckProcesser {
    makeDuckFly(ducks:Duck[]) {
        for (let duck of ducks){
            try {
                duck.fly() // metodo polimorfico
            } catch (error) {
                console.log('Rubber duck can´t fly')
            }
        }
    }
}
// De esta forma vemos q el principio de liskov no se cumple.
// Dicho de otra forma, estamos obligando a RubberDuck a implementar un metodo q no va a utilizar

// Liskov Sustitution Principle
// La solucion consiste en dividir el sistema en componentes o subsistemas individuales.. En este caso, interfaces
interface IFly {
    fly() 
}
interface ISwin {
    swin() 
}
interface ICuack {
    cuack()
}

class Duck2 implements IFly, ISwin, ICuack{
    fly() {}
    swin() {}
    cuack() {}
    
}

// se añade una nueva clase hija, donde sus caracteristicas que la definen en el dominio del problema
// pero en esta ocasion , implementamos los metodos q la clase necesita, y no, No hereda de la clase Duck
class RubberDuck2 implements ISwin, ICuack {
    swin() {
        console.log('Flotar')
    }
    cuack() {
        console.log('Chirrido')
    }
}
