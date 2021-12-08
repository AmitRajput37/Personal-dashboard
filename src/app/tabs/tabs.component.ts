import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  styles: ['.tabs{display: flex; margin: auto;}'],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
