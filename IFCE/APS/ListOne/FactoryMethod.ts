interface ILog {
  register(msg: string): void;
}

class LogArquivo implements ILog {
  register(msg: string): void {
    console.log(`Logando em arquivo: ${msg}`);
  }
}

class LogConsole implements ILog {
  register(msg: string): void {
    console.log(`Logando no console: ${msg}`);
  }
}

class LogBancoDeDados implements ILog {
  register(msg: string): void {
    console.log(`Logando no banco de dados: ${msg}`);
  }
}

class LogFactory {
  static Db(): ILog {
    return new LogBancoDeDados();
  }

  static File(): ILog {
    return new LogArquivo();
  }

  static Console(): ILog {
    return new LogConsole();
  }
}

//Main

const log = LogFactory.Console();
log.register("Dados");

const log2 = LogFactory.File();
log2.register("Dados");

const log3 = LogFactory.Db();
log3.register("Dados");
