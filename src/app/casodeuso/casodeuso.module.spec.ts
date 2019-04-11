import { CasodeusoModule } from './casodeuso.module';

describe('CasodeusoModule', () => {
  let casodeusoModule: CasodeusoModule;

  beforeEach(() => {
    casodeusoModule = new CasodeusoModule();
  });

  it('should create an instance', () => {
    expect(casodeusoModule).toBeTruthy();
  });
});
