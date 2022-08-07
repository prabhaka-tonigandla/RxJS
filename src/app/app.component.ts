import { Component, OnInit, VERSION } from '@angular/core';
import { from, map, Observable, observable, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
ngOnInit(): void {
 of(2,4,6).pipe(
   map(item=> item *4)
 ).subscribe(
   item=>console.log(item)
  
   
   )
}

}
