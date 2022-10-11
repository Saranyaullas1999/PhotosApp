import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private myapi:ServiceService) {
    this.fetchData()
   }

 fetchData=()=>{
  this.myapi.photoView().subscribe(
    (data)=>{
      this.photoData=data
    }
  )
 }


  photoData:any=[]

  ngOnInit(): void {
  }

}
