import { CambioModule } from './cambio.module';

describe('CambioModule', () => {
  let cambioModule: CambioModule;

  beforeEach(() => {
    cambioModule = new CambioModule();
  });

  it('should create an instance', () => {
    expect(cambioModule).toBeTruthy();
  });
});
