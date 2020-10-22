import { Component, DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImportantDirective } from 'src/app/modules/taches/shared/directives/important.directive';

let baseColor = "black"

@Component({
  template: '<input type="text" style="color: ' + baseColor + '" [isImportant]="isImportant" appImportant>'
})
class TestImportantComponent {
  isImportant: boolean
}

let component: TestImportantComponent
let fixture: ComponentFixture<TestImportantComponent>
let inputElement: DebugElement

describe('ImportantDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestImportantComponent, ImportantDirective]
    })
    fixture = TestBed.createComponent(TestImportantComponent)
    component = fixture.componentInstance
    inputElement = fixture.debugElement.query(el => el.name === "input")
  }))

  it('input should be in original color', () => {
    component.isImportant = false
    fixture.detectChanges()
    expect(inputElement.nativeElement.style.color).toBe(baseColor);
  });

  it('input should be in red', () => {
    component.isImportant = true
    fixture.detectChanges()
    expect(inputElement.nativeElement.style.color).toBe("red");
  });
});
