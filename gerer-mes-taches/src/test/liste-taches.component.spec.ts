import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeTachesComponent } from 'src/app/modules/taches/components/liste-taches/liste-taches.component';
import { TacheComponent } from 'src/app/modules/taches/components/tache/tache.component';

describe('ListeTachesComponent', () => {
  let component: ListeTachesComponent;
  let fixture: ComponentFixture<ListeTachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListeTachesComponent, TacheComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
