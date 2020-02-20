import { Directive, Input, ElementRef, HostListener, Renderer2, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appNameValidation]',
})
export class NameValidationDirective implements OnInit {
  @Input() appNameValidation: string;
  @Output() submitField = new EventEmitter();
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
  @HostListener('keyup', ['$event']) onKeyup(event) {


    const styles = {
      position: 'absolute',
      width: '100%',
      // 'background-color': '#e8e4e4',
      padding: '5px 10px',
      'min-height': '35px',
      'z-index': 99
    };
    this.inputVal = this.currentElement.value.trim().toUpperCase();
    if ((event as KeyboardEvent).keyCode === 13 && this.inputVal !== '') {
      this.returnUpdatedValue();
    }
    // const textNode = this.renderer.createText(this.inputVal);
    this.renderer.setProperty(this.appendedElement, 'innerHTML', this.inputVal);
    for (const key in styles) {
      if (styles.hasOwnProperty(key)) {
        this.renderer.setStyle(this.appendedElement, key, styles[key]);
      }
    }
    const textLength = this.inputVal.length;
    let backgroundColor = '';
    switch (true) {
      case (textLength === 0):
        backgroundColor = '#e8e4e4';
        break;
      case (textLength < 3):
        backgroundColor = 'red';
        break;
      case (textLength <= 4):
        backgroundColor = 'blue';
        break;
      case (textLength <= 20):
        backgroundColor = 'green';
        break;
      case (textLength > 20):
        backgroundColor = 'yellow';
        break;
    }
    this.renderer.setStyle(this.appendedElement, 'background-color', backgroundColor);
    // this.renderer.setStyle(this.appendedElement, 'position', 'absolute');
    this.renderer.appendChild(this.parentNode, this.appendedElement);

  }
  @HostListener('blur') onBlur() {
    // const inputVal = this.currentElement.value;
    // const textNode = this.renderer.createText(inputVal);
    // this.renderer.setProperty(this.appendedElement, 'innerHTML', inputVal);
    this.updateAndRemove();
  }
  updateAndRemove() {
    this.renderer.setProperty(this.currentElement, 'value', this.inputVal);
    this.renderer.removeChild(this.parentNode, this.appendedElement);

  }
  returnUpdatedValue() {
    // this.renderer.setProperty(this.currentElement, 'value', '');
    // this.renderer.removeChild(this.parentNode, this.appendedElement);
    const returnVal: InputSubmitField = {
      value: this.inputVal
    };
    this.inputVal = '';
    this.updateAndRemove();
    this.submitField.emit(returnVal);

  }

}

export interface InputSubmitField {
  value: string;
}

