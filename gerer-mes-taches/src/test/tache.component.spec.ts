import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TacheComponent } from 'src/app/modules/taches/components/tache/tache.component';
import { ImportantDirective } from 'src/app/modules/taches/shared/directives/important.directive';

describe('TacheComponent', () => {
  let component: TacheComponent;
  let fixture: ComponentFixture<TacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TacheComponent, ImportantDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
