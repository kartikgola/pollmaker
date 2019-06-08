import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  category: string;
  created_by: string;
  creation_date: Date ;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Favorite politician', category: "Politics", created_by: 'RG', creation_date: new Date()},
  {position: 2, name: 'Whether KG shd be more obedient?', category: "Women Rights", created_by: 'RG', creation_date: new Date("24/3/12")},
  {position: 3, name: 'Favorite video game', category: 'Games', created_by: 'RG', creation_date: new Date("24/6/12")}
];


@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.scss']
})

export class PollListComponent implements OnInit {
dataSource: PeriodicElement[];
displayedColumns:string[]  = ['position', 'name', 'category', 'created_by', 'creation_date'];
  constructor() { }

  ngOnInit() {
    
    this.dataSource = ELEMENT_DATA;
  }

}

