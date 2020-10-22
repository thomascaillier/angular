import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-research-bar',
  templateUrl: './research-bar.component.html',
  styleUrls: []
})
export class ResearchBarComponent {

  @Output()
  filter = new EventEmitter<string>()

  private _inputValue: string;

  set inputValue(value: string) {
    this._inputValue = value;

    if (this._inputValue.length > 2) {
      this.filter.emit(this._inputValue)
    } else {
      this.filter.emit("all")
    }
  }

  get inputValue(): string {
    return this._inputValue
  }

  constructor() { }

}
