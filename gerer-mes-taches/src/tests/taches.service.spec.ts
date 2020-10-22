import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { SharedServicesModule } from 'src/app/modules/shared/services/shared-services.module';
import { TachesService } from 'src/app/modules/shared/services/taches.service';
import { Tache } from 'src/app/modules/taches/shared/interfaces/tache';
import { environment } from 'src/environments/environment';

describe('TachesService', () => {
  let service: TachesService;
  let httpTestingController: HttpTestingController;

  let tachesMock: Tache[] = [
    { id: 0, name: "task_0", isImportant: false },
    { id: 1, name: "task_1", isImportant: true },
    { id: 2, name: "task_2", detail: "detail_2", isImportant: false }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedServicesModule, HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(TachesService);
  });

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all taches', async(() => {
    service.getAll().subscribe(taches => {
      expect(taches).toBeTruthy()
      expect(taches.length).toBe(tachesMock.length)
    })

    const req = httpTestingController.expectOne(environment.apiUrl + '/taches')
    req.flush(tachesMock)
  }))

  it('should return the tache corresponding to id', async(() => {
    service.read(1).subscribe(tache => {
      expect(tache.id).toBe(1)
      expect(tache.name).toBe("task_1")
    })

    const req = httpTestingController.expectOne(environment.apiUrl + '/taches/1')
    req.flush(tachesMock[1])
  }))
});
