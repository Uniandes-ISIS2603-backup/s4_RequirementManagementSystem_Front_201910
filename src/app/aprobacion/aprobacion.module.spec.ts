import { AprobacionModule } from './aprobacion.module';

describe('AprobacionModule', () => {
  let aprobacionModule: AprobacionModule;

  beforeEach(() => {
    aprobacionModule = new AprobacionModule();
  });

  it('should create an instance', () => {
    expect(aprobacionModule).toBeTruthy();
  });
});
