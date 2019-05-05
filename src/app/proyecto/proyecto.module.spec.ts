import { ProyectoModule } from './proyecto.module';

describe('ProyectoModule', () => {
  let proyectoModule: ProyectoModule;

  beforeEach(() => {
    proyectoModule = new ProyectoModule();
  });

  it('should create an instance', () => {
    expect(proyectoModule).toBeTruthy();
  });
});
