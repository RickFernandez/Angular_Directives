import { Directive, HostListener, ElementRef, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    //this._renderer.setStyle(this._elementRef.nativeElement, 'backgroundColor', 'red');
    this.backgroundColor = this.highlightColor;
  };
  
  @HostListener('mouseleave') onMouseLeave() {
    //this._renderer.setStyle(this._elementRef.nativeElement, 'backgroundColor', 'white');
    this.backgroundColor = this.defaultColor;
  };

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'red';

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
