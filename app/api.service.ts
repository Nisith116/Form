import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  options: any;

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('https://jsonblob.com/api/jsonBlob/3bd199e6-1442-11e9-aac5-a36f24941d33')
    // .pipe(map(res=>res.))
  }
 
 

  editData(data){
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    this.options = {
      headers: headers
    }
    return this.http.put('https://jsonblob.com/api/jsonBlob/3bd199e6-1442-11e9-aac5-a36f24941d33',data,this.options)
  }
}
