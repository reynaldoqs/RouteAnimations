import { animation, style, animate } from '@angular/animations';

export var fadeAnimation = animation([
  style({ opacity: "{{ start }}" }),
  animate("{{ time }}", style({ opacity: "{{ end }}" }))
], {params: { time: "1s" , start:0, end:1}})