import {StakeholderModule} from './stakeholder.module';

describe('StakeholderModule', () => {
    let StakeholderModule: StakeholderModule;

    beforeEach(() => {
        StakeholderModule = new StakeholderModule();
    });

    it('should create an instance', () => {
        expect(StakeholderModule).toBeTruthy();
    });
});
