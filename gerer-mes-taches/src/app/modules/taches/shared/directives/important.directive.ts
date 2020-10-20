import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appImportant]'
})
export class ImportantDirective {

  element: ElementRef

  @Input() isImportant: boolean

  constructor(element: ElementRef) {
    this.element = element
  }

  ngAfterViewInit() {
    if (this.isImportant) {
      this.element.nativeElement.style.color = "red";
    }
  }

}
