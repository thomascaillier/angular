import { TestBed } from '@angular/core/testing';
import { ModificationGuard } from 'src/app/modules/shared/guards/modification.guard';

describe('ModificationGuard', () => {
  let guard: ModificationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ModificationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
