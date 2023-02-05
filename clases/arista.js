class Arista {
     arista;

    constructor(arista = '') {
        if (arista.length == 0) {
            arista = '00000';
        }
        this.arista = arista.split('');
    }
    get arista(){
        return this.arista;
    }
    get espejar(){
        return (new Arista(this.arista.reverse().join('')));
    }
}