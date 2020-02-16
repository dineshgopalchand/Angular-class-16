import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'textFormating'
})
export class TextFormatingPipe implements PipeTransform {

  colorPattern = ['#333745', '#e63462'];
  constructor(private sanitized: DomSanitizer) {

  }
  transform(value: string, args: TextFormatPattern) {
    console.log('pipe args value', args);
    // const colorPattern = args ? args.color ? args.color : this.colorPattern : this.colorPattern;
    let colorPattern = this.colorPattern;
    if (args && args.color) {
      colorPattern = args.color;
    }
    console.log(value);
    const valueArr = value.split(' ');
    const newVal = valueArr.map((ele: string) => {
      return ele.split('').map((char, i) => {
        return `<span style="color:${colorPattern[i % colorPattern.length]};">${char}</span>`;
        // return '<span style="color:' + this.colorPattern[i % this.colorPattern.length] + ';">' + char + '</span>';
      }).join('');
    });
    // console.log(newVal);
    // console.log(newVal.join(' '));
    return this.sanitized.bypassSecurityTrustHtml(newVal.join(' '));
    // return value;
  }

}

export interface TextFormatPattern {
  color?: string[];
  fontFamily?: string;
}
