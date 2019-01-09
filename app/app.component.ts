import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  data: any;
  jsonArray:any = []

constructor(private api:ApiService){
  this.jsonArray = JSON.parse(localStorage.getItem('data'))
}
flag:boolean = false
heroes:any
editForm:any=[]
  onSubmit(f){
    console.log(f.value);
    this.jsonArray.push(f.value)
    
    
    localStorage.setItem('data',JSON.stringify(this.jsonArray))
    this.jsonArray = JSON.parse(localStorage.getItem('data'))
    this.api.editData(this.jsonArray).pipe(map(res=>{
      console.log(res);
    })).subscribe(a=>{
      this.api.getData().subscribe(data=>{
        this.heroes = data
        this.flag = true
        })
    })
    }

   
    // })
    
  

  onAdd(){

    // this.data = [
    //   {
    //     "id": "0001",
    //     "type": "donut",
    //     "name": "Cake",
    //     "ppu": 0.55,
    //     "batters":
    //       {
    //         "batter":
    //           [
    //             { "id": "1001", "type": "Regular" },
    //             { "id": "1002", "type": "Chocolate" },
    //             { "id": "1003", "type": "Blueberry" },
    //             { "id": "1004", "type": "Devil's Food" }
    //           ]
    //       },
    //     "topping":
    //       [
    //         { "id": "5001", "type": "None" },
    //         { "id": "5002", "type": "Glazed" },
    //         { "id": "5005", "type": "Sugar" },
    //         { "id": "5007", "type": "Powdered Sugar" },
    //         { "id": "5006", "type": "Chocolate with Sprinkles" },
    //         { "id": "5003", "type": "Chocolate" },
    //         { "id": "5004", "type": "Maple" }
    //       ]
    //   },
    //   {
    //     "id": "0002",
    //     "type": "donut",
    //     "name": "Raised",
    //     "ppu": 0.55,
    //     "batters":
    //       {
    //         "batter":
    //           [
    //             { "id": "1001", "type": "Regular" }
    //           ]
    //       },
    //     "topping":
    //       [
    //         { "id": "5001", "type": "None" },
    //         { "id": "5002", "type": "Glazed" },
    //         { "id": "5005", "type": "Sugar" },
    //         { "id": "5003", "type": "Chocolate" },
    //         { "id": "5004", "type": "Maple" }
    //       ]
    //   },
    //   {
    //     "id": "0003",
    //     "type": "donut",
    //     "name": "Old Fashioned",
    //     "ppu": 0.55,
    //     "batters":
    //       {
    //         "batter":
    //           [
    //             { "id": "1001", "type": "Regular" },
    //             { "id": "1002", "type": "Chocolate" }
    //           ]
    //       },
    //     "topping":
    //       [
    //         { "id": "5001", "type": "None" },
    //         { "id": "5002", "type": "Glazed" },
    //         { "id": "5003", "type": "Chocolate" },
    //         { "id": "5004", "type": "Maple" }
    //       ]
    //   }
    // ]
  
    this.jsonArray = JSON.parse(localStorage.getItem('data'))
 
   this.api.editData(this.jsonArray).subscribe(res=>{
     console.log(res);
     
   })
    
    
  }


  updateData(data,f){
    for (let index = 0; index < this.jsonArray.length; index++) {
      this.editForm.push(f.value)
      this.jsonArray = JSON.parse(localStorage.getItem('data'))
      if(this.jsonArray[index].first == f.value.first){
        this.jsonArray[index] = this.editForm[0]
        console.log('j'+ JSON.stringify(this.jsonArray));
        
        this.api.editData(this.jsonArray).pipe(map(res=>{
          console.log(res);
        })).subscribe(a=>{
          this.api.getData().subscribe(data=>{
            this.heroes = data
            this.flag = true
            })
        })
      }
      
    }
  }
}
