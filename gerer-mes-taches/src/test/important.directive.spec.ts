import { ImportantDirective } from "src/app/modules/taches/shared/directives/important.directive";

describe('ImportantDirective', () => {
  it('should create an instance', () => {
    const directive = new ImportantDirective(null);
    expect(directive).toBeTruthy();
  });
});
