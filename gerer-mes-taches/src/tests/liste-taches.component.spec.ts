import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ResearchBarComponent } from 'src/app/modules/shared/components/research-bar/research-bar.component';
import { TachesService } from 'src/app/modules/shared/services/taches.service';
import { ListeTachesComponent } from 'src/app/modules/taches/components/liste-taches/liste-taches.component';
import { TacheComponent } from 'src/app/modules/taches/components/tache/tache.component';
import { ImportantDirective } from 'src/app/modules/taches/shared/directives/important.directive';

describe('ListeTachesComponent', () => {
  let component: ListeTachesComponent;
  let fixture: ComponentFixture<ListeTachesComponent>;

  const tachesServiceMock = {
    readAll: jest.fn()
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [ListeTachesComponent, TacheComponent, ResearchBarComponent, ImportantDirective],
      providers: [
        { provide: TachesService, useValue: tachesServiceMock }
      ]
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
