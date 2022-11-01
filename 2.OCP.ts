class Rectangle {
    width: Number
    height: Number
}

// Se añade una nueva forma
class Triangle {
    width: Number
    height: Number
}


class AreaCalculator {
    function computeArea(shapes: Rectangle[]) {
        let area: Number = 0
        for (let sh of shapes) {
            if(typeof sh == 'Rectangle' ) {
                area = area + (sh.height * sh.width)
            }

            // Por cada nueva funcionalidad, nuestra clase esta abierta al a modificiacion... por lo q hay peligro de incorporar
            // bugs en esta clase...
            if(typeof sh == 'Triangle' ) {
                area = area + (sh.height * sh.width) / 2
            }
            
        }
        return area
    }
}

// Utilizando Open Close Principle

// Se crea una interfaz IShape, con la funcion de calcular area..
interface IShape {
    area(): number; 
}


class Rectangle2 implements IShape {
    width: Number
    height: Number
    area() {
        return this.height * this.width
    }
}

// Se añade una nueva forma
class Triangle2 implements IShape {
    width: Number
    height: Number
    area() {
        return (this.height * this.width)/2
    }
}
