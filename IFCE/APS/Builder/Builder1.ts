// Padrão Builder
// Contexto: Você está desenvolvendo um sistema para uma concessionária
// de veículos, onde diferentes tipos de veículos
// (carros, motocicletas, caminhões) podem ser
// configurados e encomendados por clientes.
//
//     Problema: A criação de objetos veículo é complexa,
//     envolvendo múltiplos passos e variações na configuração
//     (modelo, cor, motor, acessórios, etc.).
//     A aplicação precisa suportar a construção flexível de
//     diferentes veículos sem sobrecarregar o cliente com detalhes de
//     construção.
//
//     Atividade: Implemente o padrão Builder para abstrair
//     o processo de construção dos veículos. Crie uma classe
//     VeiculoBuilder com métodos específicos para a configuração de
//     cada aspecto do veículo (modelo, motor, cor, etc.).
//     Inclua uma classe Diretor que encapsula a lógica de construção
//     para diferentes tipos de veículos, como um carro de luxo,
//     uma moto esportiva, ou um caminhão robusto, utilizando o
//     mesmo processo de construção (VeiculoBuilder).





interface VehicleInterface {
    model: string;
    color: string;
    engine: string;
    accessories: string[];

}
class  Vehicle implements VehicleInterface {
    _model: string = '';
    _color: string = '';
    _engine: string = '';
    _accessories: string[] = [];

    constructor() {}

    set model(model: string) {
        this._model = model;
    }

    get model() {
        return this._model;
    }

    set color(color: string) {
        this._color = color;
    }

    get color() {
        return this._color;
    }


    set engine(engine: string) {
        this._engine = engine;
    }

    get engine() {
        return this._engine;
    }

    set accessories(accessories: string[]) {
        this._accessories = accessories;
    }

    get accessories() {
        return this._accessories;
    }

}


interface VehicleBuilderInterface {

    getVehicle(): VehicleInterface;
    createVehicle(): void;
    setModel(model: string): void;
    setColor(color: string): void;
    setEngine(engine: string): void;

}

class VehicleBuilder implements  VehicleBuilderInterface {
    private vehicle!: VehicleInterface;

    createVehicle() {
        this.vehicle = new Vehicle();
    }

    getVehicle() {
        return this.vehicle;
    }

    setModel(model: string) {
        this.vehicle.model = model;
    }

    setColor(color: string) {
        this.vehicle.color = color;
    }

    setEngine(engine: string) {
        this.vehicle.engine = engine;
    }

}


interface VehicleBuilderDirectorInterface {
    createVehicleLuxury(): VehicleBuilderInterface;
    createVehicleSport(): VehicleBuilderInterface;
    createVehicleTruck(): VehicleBuilderInterface;
}

class Diretor implements VehicleBuilderDirectorInterface {
    private builder: VehicleBuilderInterface;

    constructor(builder: VehicleBuilderInterface) {
        this.builder = builder;
        this.builder.createVehicle()
    }

    createVehicleLuxury(): VehicleBuilderInterface {
        this.builder.setModel('Carro de Luxo');
        this.builder.setColor('Preto');
        this.builder.setEngine('2.0');
        return this.builder;
    }

    createVehicleSport(): VehicleBuilderInterface {
        this.builder.setModel('Moto Esportiva');
        this.builder.setColor('Vermelho');
        this.builder.setEngine('1.0');
        return this.builder;
    }

    createVehicleTruck(): VehicleBuilderInterface {
        this.builder.setModel('Caminhão Robusto');
        this.builder.setColor('Azul');
        this.builder.setEngine('3.0');
        return this.builder;
    }
}

//Main

const builder = new VehicleBuilder();
const director = new Diretor(builder);

const luxuryCar = director.createVehicleLuxury().getVehicle();
console.log(luxuryCar.color);