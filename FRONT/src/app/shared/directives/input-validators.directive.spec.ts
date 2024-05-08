import { OnlyNumbersDirective } from './input-validators.directive';

describe('InputValidatorsDirective', () => {
  it('should create an instance', () => {
    const directive = new OnlyNumbersDirective();
    expect(directive).toBeTruthy();
  });
});
