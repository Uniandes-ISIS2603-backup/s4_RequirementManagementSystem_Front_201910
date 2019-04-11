import { CondicionModule } from './condicion.module';

describe('CondicionModule', () => {
  let condicionModule: CondicionModule;

  beforeEach(() => {
    condicionModule = new CondicionModule();
  });

  it('should create an instance', () => {
    expect(condicionModule).toBeTruthy();
  });
});
