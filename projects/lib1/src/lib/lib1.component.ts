import { Component } from '@angular/core';
import { sum } from 'package1';

@Component({
  selector: 'lib-lib1',
  standalone: true,
  imports: [],
  template: ` <p>lib1 works!</p> `,
  styles: ``,
})
export class Lib1Component {
  result = sum(1, 2);
}
