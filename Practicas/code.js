// class Persona{

//     constructor(nombre,apellido){
//         this.nombre = nombre
//         this.apellido = apellido
//     }

//     imprimirQuienEs(){
//         console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
//     }
// }

// const laura = new Persona ('Laura','X')
// laura.imprimirQuienEs

// class Animal{
//     constructor(nombre){
//         this.velocidad = 0;
//         this.nombre = nombre;
//     }
//     empiezaAMoverse(velocidad){
//         this.velocidad = velocidad;
//         return `El ${this.nombre} se mueve con una velocidad de ${this.velocidad} km/h`;
//     }
//     dejoDeMoverse(){
//         this.velocidad=0
//         return `El ${this.nombre} se ha detenido`;
//     }    
// }

// let animal = new Animal("Pinguino")
// console.log(animal.empiezaAMoverse(30))
// console.log(animal.dejoDeMoverse)


// class Perro extends Animal {
//     ladra(){
//         return `El ${this.nombre} está ladrando!.`
//     }
// }

// let doggo = new Perro('prro')
// console.log(doggo.empiezaAcorrer(20))


class Persona{
    constructor(nombre,apellido,apellido2){
        this.nombre = nombre
        this.apellido = apellido
        this.apellido2 = apellido2
    }

    get nombreCompleto(){
        return `${this.nombre} ${this.apellido} ${this.apellido2}`
    }
    set nombreCompleto(nombre){
        const partes = nombre.split(' ')
        this.nombre = partes[0];
        this.apellido = partes[1];
        this.apellido2 = partes[2];
    }
}
const laura = new Persona('Laura','Cuevas','Torres')
console.log(laura.nombreCompleto)

// laura.nombreCompleto = 'Laura X T';
// console.log(laura.nombreCompleto)

// const objeto = {
//     nombre:'Carlitos',

//     get nombreObjeto(){
//         return this.nombre
//     },
//     set nombreObjeto(nombre){
//         this.nombre=nombre
//     }
// }
// console.log(objeto.nombreObjeto)
// objeto.nombreObjeto = `sentao de pana`
// console.log(objeto.nombreObjeto)

