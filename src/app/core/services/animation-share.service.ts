import { animate, animation, style } from "@angular/animations";

export const fadeInUp = animation([
  style({ transform: 'translateY({{ translateY }}px)', opacity: 0 }),
  animate(
    '{{ duration }} {{ delay }}s {{ easing }}',
    style({ transform: 'translateY(0px)', opacity: 1 })
  ),
]);
