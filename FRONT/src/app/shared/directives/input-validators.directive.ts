import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[OlnyNumbers]',
  standalone: true
})
export class OnlyNumbersDirective {

  constructor() { }

  @HostListener("change", ["$event.target"])
  public onlyNumbers(val: string): string {
    if(val === null || val === "") return val;
    if(val.match(/\D/g)) return val.replace(/\D/, "");
    return val;
  }

}

@Directive({
  selector: '[appOlnyTexts]',
  standalone: true
})
export class OnlyTextsDirective {

  constructor() { }

}
@Directive({
  selector: '[appNoSpecialWords]',
  standalone: true
})
export class NoSpecialWordsDirective {

  constructor() { }

}
