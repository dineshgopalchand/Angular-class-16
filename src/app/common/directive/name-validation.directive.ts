import { Directive, Input, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appNameValidation]',
})
export class NameValidationDirective implements OnInit {
  @Input() appNameValidation: string;
  currentElement: HTMLInputElement;
  parentNode: HTMLElement;
  appendedElement: HTMLDivElement;
  inputVal = '';

  constructor(private ele: ElementRef, private renderer: Renderer2) {
    // console.log(this.ele);
  }
  ngOnInit() {
    this.currentElement = this.ele.nativeElement;
    // this.parentNode = this.currentElement.parentNode as HTMLElement;
    this.parentNode = this.renderer.parentNode(this.currentElement);
    this.appendedElement = this.renderer.createElement('div');
  }
  @HostListener('keyup') onKeyup() {
    const styles = {
      position: 'absolute',
      width: '100%',
      'background-color': '#e8e4e4',
      padding: '5px 10px'
    };
    this.inputVal = this.currentElement.value.toUpperCase();
    const textNode = this.renderer.createText(this.inputVal);
    this.renderer.setProperty(this.appendedElement, 'innerHTML', this.inputVal);
    for (const key in styles) {
      if (styles.hasOwnProperty(key)) {
        this.renderer.setStyle(this.appendedElement, key, styles[key]);
      }
    }
    // this.renderer.setStyle(this.appendedElement, 'position', 'absolute');
    this.renderer.appendChild(this.parentNode, this.appendedElement);

  }
  @HostListener('blur') onBlur() {
    // const inputVal = this.currentElement.value;
    // const textNode = this.renderer.createText(inputVal);
    // this.renderer.setProperty(this.appendedElement, 'innerHTML', inputVal);
    this.renderer.setProperty(this.currentElement, 'value', this.inputVal);
    this.renderer.removeChild(this.parentNode, this.appendedElement);
  }

}
