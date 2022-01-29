import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dateNow:any;
  time:string;
  date:string;
  
  gradiente:any;
  constructor(){
    this.time = ''; 
    this.date = '';
  }

  ngOnInit(): void {
    
    this.timeGet();
  }

  twoDigitos(number:number){
    return number<=9? '0'+number:number;
  }
  timeGet(){
    
    setInterval(()=>{
      this.dateNow = new Date();

      
      this.date = `${this.twoDigitos(this.dateNow.getDate())}${this.twoDigitos(this.dateNow.getMonth()+1)}${this.twoDigitos(this.dateNow.getYear().toString().slice(1,3))}`;
      this.time = `${this.twoDigitos(this.dateNow.getHours())}${this.twoDigitos(this.dateNow.getMinutes())}${this.twoDigitos(this.dateNow.getSeconds())}`;
      this.gradiente = `linear-gradient(90deg, #${this.date} 30%, #${this.time} 60%)`;
    },1000);  
  }
}
