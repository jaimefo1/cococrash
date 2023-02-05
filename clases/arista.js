class Arista {
    static arista;

    constructor(arista = '') {
        if (arista.length == 0) {
            arista = new Array([0, 0, 0, 0, 0]);
        } else {
            this.arista = arista.split(',');
        }
    }
}