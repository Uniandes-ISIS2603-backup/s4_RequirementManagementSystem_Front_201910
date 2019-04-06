import { InicioModule } from './inicio.module';

describe('InicioModule', () => {
  let inicioModule: InicioModule;

  beforeEach(() => {
    inicioModule = new InicioModule();
  });

  it('should create an instance', () => {
    expect(inicioModule).toBeTruthy();
  });
});
