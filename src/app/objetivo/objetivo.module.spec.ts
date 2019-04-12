import { ObjetivoModule } from './objetivo.module';

describe('ObjetivoModule', () => {
  let objetivoModule: ObjetivoModule;

  beforeEach(() => {
    objetivoModule = new ObjetivoModule();
  });

  it('should create an instance', () => {
    expect(objetivoModule).toBeTruthy();
  });
});
