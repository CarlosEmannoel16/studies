interface ComponentFactory {
  createButton(): any;
  createInput(): any;
  createWindow(): any;
}

class MacOsButton {
  render() {
    console.log("Renderizando botão no MacOs");
  }
}

class MacOsInput {
  render() {
    console.log("Renderizando input no MacOs");
  }
}

class WindowsButton {
  render() {
    console.log("Renderizando botão no Windows");
  }
}

class MacOsComponentFactory implements ComponentFactory {
  createWindow() {
    throw new Error("Method not implemented.");
  }
  createButton(): any {
    return new MacOsButton();
  }

  createInput(): any {
    return new MacOsInput();
  }
}

class WindowsComponentFactory implements ComponentFactory {
  createWindow() {
    throw new Error("Method not implemented.");
  }
  createButton(): any {
    return new WindowsButton();
  }

  createInput(): any {
    throw new Error("Method not implemented.");
  }
}

class FactoryComponent {
  static getFactory(type: string): ComponentFactory {
    if (type === "MacOs") {
      return new MacOsComponentFactory();
    } else if (type === "Windows") {
      return new WindowsComponentFactory();
    }
    throw new Error("Type not found");
  }
}

//Main

const factory = FactoryComponent.getFactory("MacOs");

const button = factory.createButton();
button.render();

const input = factory.createInput();
input.render();


