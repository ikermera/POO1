class telefono {
    procesador: string;
    tamaño: number;
    marca: string;
    peso: number;
    color: string;
    prendida: boolean;
    
    constructor(procesador: string, marca: string, color: string){
        this.procesador = procesador;
        this.tamaño = 0;
        this.marca = marca;
        this.peso = 0;
        this.color = color;
        this.prendida = false;
    }
    prender():void{
        this.prendida = true;
        console.log("El telefono se encendio");
    }

    apagar():void{
        this.prendida = false;
        console.log("El telefono se apago")
    }
}