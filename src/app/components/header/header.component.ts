import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('bars') bars!: ElementRef;

  menuShow(){
    const bars = this.bars.nativeElement;
    const menu = this.menu.nativeElement;
    bars.addEventListener('click', ()=>{
      menu.classList.toggle("show");
    });
  }

  constructor() { }

  ngOnInit(): void {
  }
}
