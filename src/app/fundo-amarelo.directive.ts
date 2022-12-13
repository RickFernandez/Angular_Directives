import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // selector: '[appFundoAmarelo]'
  selector: 'p[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
      private _elementRef: ElementRef,
      private _renderer: Renderer2
    ){
    // console.log(this._elementRef);
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';

    // Evitar usar o ElementRef diretamente pois traz vulnerabilidade para o código, pois acessa o elemento diretamente na ávore do DOM.
  
      this._renderer.setStyle(
          this._elementRef.nativeElement,
          'backgroundColor',
          'yellow'
        );
  }

}
