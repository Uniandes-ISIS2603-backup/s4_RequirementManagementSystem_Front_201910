import { RequisitoModule } from './requisito.module';

describe('RequisitoModule', () => {
  let requisitoModule: RequisitoModule;

  beforeEach(() => {
    requisitoModule = new RequisitoModule();
  });

  it('should create an instance', () => {
    expect(requisitoModule).toBeTruthy();
  });
});
