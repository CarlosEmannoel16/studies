interface LibFactory {
  get id(): string;
  set id(value: string);

  createTexture(): any;
  createShadow(): any;
  createModel(): any;
}

class OpenGLFactory implements LibFactory {
  private _id: string;

  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  createTexture() {
    console.log("Create Texture with OpenGL with id: " + this.id);
  }
  createShadow() {
    console.log("Create Shadow with OpenGL with id: " + this.id);
  }
  createModel() {
    console.log("Create Model with OpenGL with id: " + this.id);
  }
}

class DirectXFactory implements LibFactory {
  private _id: string;
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }
  createTexture() {
    console.log("Create Texture with DirectX with id: " + this.id);
  }
  createShadow() {
    console.log("Create Shadow with DirectX with id: " + this.id);
  }
  createModel() {
    console.log("Create Model with DirectX with id: " + this.id);
  }
}

class FactoryLib {
  private static instanceDirectX: LibFactory;
  private static instanceOpenGL: LibFactory;

  static getFactory(type: string): LibFactory {
    if (type === "DirectX") {
      if (!FactoryLib.instanceDirectX) {
        FactoryLib.instanceDirectX = new DirectXFactory();
      }
      return FactoryLib.instanceDirectX;
    } else if (type === "OpenGL") {
      if (!FactoryLib.instanceOpenGL) {
        FactoryLib.instanceOpenGL = new OpenGLFactory();
      }
      return FactoryLib.instanceOpenGL;
    }
    throw new Error("Type not found");
  }
}


//Criando Fabrica DirectX
const factoryGraphDirectX = FactoryLib.getFactory("DirectX");

//Setando id
factoryGraphDirectX.id = "0001";
console.log(factoryGraphDirectX.createModel());
console.log(factoryGraphDirectX.createShadow());
console.log(factoryGraphDirectX.createTexture());

const factoryGraphOpenGL = FactoryLib.getFactory("OpenGL");
factoryGraphOpenGL.id = "0002";
console.log(factoryGraphOpenGL.createModel());
console.log(factoryGraphOpenGL.createShadow());
console.log(factoryGraphOpenGL.createTexture());


// Criando Segunda fabrica de DirectX e sem setar id
const factoryGraphDirectX2 = FactoryLib.getFactory("DirectX");

// O log abaixo mostra que o id foi setado na fabrica anterior
console.log(factoryGraphDirectX2.id);
console.log(factoryGraphDirectX2.createModel());
console.log(factoryGraphDirectX2.createShadow());
console.log(factoryGraphDirectX2.createTexture());

// Setando id na segunda fabrica
factoryGraphDirectX.id = "0003";

// O log abaixo mostra que o id foi setado na fabrica anterior e na fabrica atual
console.log(factoryGraphDirectX2.createModel());
console.log(factoryGraphDirectX.createModel());
console.log(factoryGraphDirectX2.createShadow());
console.log(factoryGraphDirectX.createShadow());
console.log(factoryGraphDirectX2.createTexture());
console.log(factoryGraphDirectX.createTexture());





