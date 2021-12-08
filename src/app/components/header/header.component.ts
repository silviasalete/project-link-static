import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}
  mobileNavToggle(event: Event) {
    const dom: HTMLElement = this.elementRef.nativeElement;
    const navbar = dom.querySelectorAll('.navbar');
    const navbarMobile = dom.querySelectorAll('.navbar-mobile');
    const biList = dom.querySelectorAll('.bi-list');
    const biX = dom.querySelectorAll('.bi-x');

    if (navbar[0].className == 'navbar') {
      navbar[0].classList.toggle('navbar-mobile');
      biList[0].classList.remove('bi-list');
      biList[0].classList.toggle('bi-x');
    } else {
      navbarMobile[0].classList.remove('navbar-mobile');
      navbarMobile[0].classList.add('navbar');
      biX[0].classList.remove('bi-x');
      biX[0].classList.toggle('bi-list');
    }
  }
}
