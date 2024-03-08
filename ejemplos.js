class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    obtenerInformacion() {
        return `Título: ${this.titulo}, Autor: ${this.autor}`;
    }
}

class Novela extends Libro {
    constructor(titulo, autor, genero) {
        super(titulo, autor);
        this.genero = genero;
    }

    obtenerInformacion() {
        return `Titulo: ${this.titulo}, Autor: ${this.autor}, Género: ${this.genero}`;
    }
}

class LibroDeTexto extends Libro {
    constructor(titulo, autor, materia) {
        super(titulo, autor);
        this.materia = materia;
    }

    obtenerInformacion() {
        return `Titulo: ${this.titulo}, Autor: ${this.autor}, Materia: ${this.materia}`;
    }
}

const novela = new Novela("Cien años de soledad", "Gabriel García Márquez", "Realismo mágico");
const libroDeTexto = new LibroDeTexto("Introducción a la programación", "Jack Daniels", "Informática");

console.log(novela.obtenerInformacion());
console.log(libroDeTexto.obtenerInformacion());

// EJEMPLO 2
class LuchadorUFC {
    constructor(nombre, apodo, edad) {
        this.nombre = nombre;
        this.apodo = apodo;
        this.edad = edad;
    }

    informacion() {
        return `Nombre: ${this.nombre}, Apodo: ${this.apodo}, Edad: ${this.edad}`;
    }
}

class LuchadorPesoPesado extends LuchadorUFC {
    constructor(nombre, apodo, edad, peso) {
        super(nombre, apodo, edad);
        this.pesoKg = peso;
    }

    informacion() {
        return `Nombre: ${this.nombre}, Apodo: ${this.apodo}, Edad: ${this.edad}, Peso: ${this.pesoKg} kg (Peso Pesado)`;
    }
}

class LuchadorPesoPluma extends LuchadorUFC {
    constructor(nombre, apodo, edad, peso) {
        super(nombre, apodo, edad);
        this.pesoKg = peso;
    }

    informacion() {
        return `Nombre: ${this.nombre}, Apodo: ${this.apodo}, Edad: ${this.edad}, Peso: ${this.pesoKg} kg (Peso Pluma)`;
    }
}

// Ejemplo de uso
const luchadorPesado = new LuchadorPesoPesado("Jon Jones", "Bones", 36, 112);
const luchadorPluma = new LuchadorPesoPluma("Ilia Topuria", "El Matador", 27, 65);

console.log(luchadorPesado.informacion());
console.log(luchadorPluma.informacion());
