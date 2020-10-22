import { TestBed } from '@angular/core/testing';
import { DataMockService } from 'src/app/mock/data-mock.service';

describe('DataMockService', () => {
  let service: DataMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: []
    });
    service = new DataMockService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
