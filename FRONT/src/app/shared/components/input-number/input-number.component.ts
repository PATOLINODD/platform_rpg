import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from "@angular/forms";

@Component({
  selector: 'input-number',
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.sass'
})
export class InputNumberComponent {

  @Input() controlName: string = "";
  @Input() labelName: string = "";
  @Input() classLabel: string = "";
  @Input() classInput: string = "";
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() mainClass: string = "";
  @Input() isRequired: boolean = false;

  @Output() onChange = new EventEmitter<Object>();
  @Output() onBlur = new EventEmitter<Object>();
  
  public change(event: any) {
    this.onChange.emit(event);
  }

  public blur(event: any) {
    this.onBlur.emit(event);
  }
  
}
