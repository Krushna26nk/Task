import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'node_modules/canvasjs/dist/canvasjs.min.js';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  icons: any[] = [
    "home","calendar_today","email","play_circle_filled","shopping_cart","widgets","usb"
  ];
  activeListHeading = " Dashboard "
  showToggle : boolean = true;

  ngOnInit() {
  }
  

  onToggle(){
  }
  onHome(){
    this.activeListHeading = " Dashboard ";
  }
  onEmails(){
    this.activeListHeading = " Email ";
  }
  onEvents(){
    this.activeListHeading = " Events ";
  }
  onECommerce(){
    this.activeListHeading = "  E - Commerce ";
  }
  onApps(){
    this.activeListHeading = " Apps ";
  }
  onTables(){
    this.activeListHeading = " Tables ";
  }
  onWidget(){
    this.activeListHeading = " Widget ";
  }
  onMedia(){
    this.activeListHeading = " Media ";
  }
  onForms(){
    this.activeListHeading = " Forms ";
  }
}


























// var chart = new CanvasJS.Chart("chartContainer",
// {
//   animationEnabled: true,
//   exportEnabled: true,
//   title: {
//     text: "Column Chart"
//   },
//   data: [{
//     type: "column",
//     dataPoints: [
//       { y: 71, label: "Apple" },
//       { y: 55, label: "Mango" },
//       { y: 50, label: "Orange" },
//       { y: 65, label: "Banana" },
//       { y: 95, label: "Pineapple" },
//       { y: 68, label: "Pears" },
//       { y: 28, label: "Grapes" },
//       { y: 34, label: "Lychee" },
//       { y: 14, label: "Jackfruit" }
//     ]
//   }]
// });
// chart.render();
// // chart.render();