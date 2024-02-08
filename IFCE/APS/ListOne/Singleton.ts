export class Configuracao {
  private _tema: string = "dark";
  private _idioma: string = "pt-br";
  private _tamanhoFonte: number = 16;

  private constructor() {}

  private static instance: Configuracao;

  public static getInstance(): Configuracao {
    if (!Configuracao.instance) {
      Configuracao.instance = new Configuracao();
    }
    return Configuracao.instance;
  }

  public get tema(): string {
    return this._tema;
  }

  public set tema(tema: string) {
    this._tema = tema;
  }

  public get idioma(): string {
    return this._idioma;
  }

  public set idioma(idioma: string) {
    this._idioma = idioma;
  }

  public get tamanhoFonte(): number {
    return this._tamanhoFonte;
  }

  public set tamanhoFonte(tamanhoFonte: number) {
    this._tamanhoFonte = tamanhoFonte;
  }
}


const configuracao = Configuracao.getInstance();

configuracao.tema = "light";
configuracao.idioma = "en-us";
configuracao.tamanhoFonte = 14;

const configuracao2 = Configuracao.getInstance();

console.log(configuracao2.tema)
console.log(configuracao2.idioma)
console.log(configuracao2.tamanhoFonte)
