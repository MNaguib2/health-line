import { Component, HostListener, OnInit } from '@angular/core';
import { FeedBackEntity } from './store/feedback.class';
import fake_data from './store/fake-data.json';

@Component({
  selector: 'health-line-feed-back',
  standalone: true,
  imports: [],
  templateUrl: './feed-back.component.html',
  styleUrl: './feed-back.component.scss'
})
export class FeedBackComponent implements OnInit {
  carouse_feedback = fake_data.map(ele => new FeedBackEntity(ele).data);
  constructor(){
  }
  ngOnInit(): void {
    if(this.carouse_feedback && this.carouse_feedback.length > 0){
      const last_element = this.carouse_feedback[this.carouse_feedback.length - 1];
      const first_element = this.carouse_feedback[0];
      this.carouse_feedback.unshift(last_element);
      this.carouse_feedback.push(first_element);
      console.log(this.carouse_feedback);

    }
  }
  @HostListener('window:scroll', ['$event'])
  monitorScreenFeedback(event: Event){
    const element = document.getElementById('carousal-feedback-section') as HTMLDivElement;
    const ComputedStyle = window.getComputedStyle((<HTMLDivElement>element.parentElement));
    const padding_parent = parseInt(ComputedStyle.paddingLeft, 10) + parseInt(ComputedStyle.paddingRight, 10)
    const width_element = (element?.parentElement?.clientWidth || 0) - padding_parent;
    let cards = document.getElementsByClassName('card-feed-back');
    for (let element of Array.from(cards)) {
      (<HTMLDivElement>element).style.width = `${width_element}px`
    }
    element.style.transform = 'translateX(' + -width_element + 'px)';
  }
  backPost(event: Event){
    const element = document.getElementById('carousal-feedback-section') as HTMLDivElement;
    element.style.transition = "transform 0.5s ease-in-out";
    const count_child = element.childElementCount - 2; // number of child elements index from zero
    const ComputedStyle = window.getComputedStyle((<HTMLDivElement>element.parentElement));
    const padding_parent = parseInt(ComputedStyle.paddingLeft, 10) + parseInt(ComputedStyle.paddingRight, 10)
    const width_element = (element?.parentElement?.clientWidth || 0) - padding_parent;
    const ComputedStyleElement = window.getComputedStyle((<HTMLDivElement>element));
    const old_translateX = new DOMMatrixReadOnly(ComputedStyleElement.transform).m41  // X translation;
    const new_translateX = old_translateX - width_element;
    element.style.transform = `translateX(${new_translateX}px)`;
    const index_element_transform = Math.abs(new_translateX / width_element);
    if(index_element_transform > count_child){
      setTimeout(() => {
        element.style.transition = "none";
        element.style.transform = `translateX(-${width_element}px)`;
      }, 1000 * parseFloat(ComputedStyleElement.transitionDuration));
    }
  }
  forwardPost(event: Event){
    const element = document.getElementById('carousal-feedback-section') as HTMLDivElement;
    element.style.transition = "transform 0.5s ease-in-out";
    const count_child = element.childElementCount - 2; // number of child elements index from zero
    const ComputedStyle = window.getComputedStyle((<HTMLDivElement>element.parentElement));
    const padding_parent = parseInt(ComputedStyle.paddingLeft, 10) + parseInt(ComputedStyle.paddingRight, 10)
    const width_element = (element?.parentElement?.clientWidth || 0) - padding_parent;
    const ComputedStyleElement = window.getComputedStyle((<HTMLDivElement>element));
    const old_translateX = new DOMMatrixReadOnly(ComputedStyleElement.transform).m41  // X translation;
    const new_translateX = old_translateX + width_element;
    element.style.transform = `translateX(${new_translateX}px)`;
    const index_element_transform = Math.abs(new_translateX / width_element);
    if(index_element_transform <= 0){
      setTimeout(() => {
        element.style.transition = "none";
        element.style.transform = `translateX(-${width_element * count_child}px)`;
      }, 1000 * parseFloat(ComputedStyleElement.transitionDuration));
    }
  }
}
