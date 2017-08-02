import { Component } from '@angular/core';
import { useAnimation, trigger, transition, style, animate,query } from '@angular/animations';
@Component({
  selector: 'inner',
  template: `
    <div [@queryAnimation]="exp">
      <h1>Title</h1>
      <div class="content">
        Blah blah blah
      </div>
    </div>
  `,
  animations: [
   trigger('queryAnimation', [
     transition('* => goAnimate', [
       // hide the inner elements
       query('h1', style({ opacity: 0 })),
       query('.content', style({ opacity: 0 })),
     ])
   ])
 ]
})
export class Cmp {
  exp = '';
 
  goAnimate() {
    this.exp = 'goAnimate';
  }
}