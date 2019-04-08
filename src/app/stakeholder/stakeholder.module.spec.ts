import { StakeholderModule } from './stakeholder.module';

describe('StakeholderModule', () => {
  let stakeholderModule: StakeholderModule;

  beforeEach(() => {
    stakeholderModule = new StakeholderModule();
  });

  it('should create an instance', () => {
    expect(stakeholderModule).toBeTruthy();
  });
});
