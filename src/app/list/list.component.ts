import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  bucketList=[
    {
      wish:"Leh Ladak",
      status:"Not Planned",
      type:"Bike trip",
      completeBefore:"June 2019",
      tentitiveDate:"01-06-2019",
      location:"Leh",
      priority:"High",
      details:{
        expenses:[],
        planning:{
          description:""
        },
        notes:[]
      }
    } ,
    {

      wish:"Deep Water Diving",
      status:"Not Planned",
      type:"Exploring Nature",
      completeBefore:"June 2019",
      tentitiveDate:"01-06-2019",
      location:"Leh",
      priority:"High",
      details:{
        expenses:[],
        planning:{
          description:""
        },
        notes:[]
      }
    
    } ]
  ;

  types=[
    {
      type:"road trip",
    },
    {
      type:"Misc",
    },
    {
      type:"Hiking"
    },
    {
      type:"Exploring Nature"
    },
    {
      type:"International Trip"
    },
  ];

  status =[
    {
      status:"Not Planned"
    },
    {
      status:"Pending"
    },
    {
      status:"Completed"
    },
    {
      status:"Postponed"
    }
  ]

  ngOnInit() {
  }

  handlePress(event){
    alert("Hi");
  }

}
