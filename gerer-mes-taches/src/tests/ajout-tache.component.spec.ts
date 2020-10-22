import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedServicesModule } from 'src/app/modules/shared/services/shared-services.module';
import { TachesService } from 'src/app/modules/shared/services/taches.service';
import { AjoutTacheComponent } from 'src/app/modules/taches/components/ajout-tache/ajout-tache.component';

describe('AjoutTacheComponent', () => {

  const routerMock = {
    navigate: jest.fn()
  }

  const tachesServiceMock = {
    create: jest.fn(() => {
      return new Observable<number>(observer => {
        observer.next(55)
        observer.complete()

        return { unsubscribe() { } }
      });
    })
  }

  let component: AjoutTacheComponent;
  let fixture: ComponentFixture<AjoutTacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutTacheComponent],
      imports: [SharedServicesModule, FormsModule, ReactiveFormsModule],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: TachesService, useValue: tachesServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjoutTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get created tache id after ajouter()', async(() => {
    component.nouvelIdentifiant$.subscribe(id => {
      expect(id).toBe(55)
    })
    component.ajouter()
  }));

});
