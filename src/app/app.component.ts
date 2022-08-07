import { Component, OnInit, VERSION } from '@angular/core';
import { from, map, Observable, observable, of, tap } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
ngOnInit(): void {
 of(40,30,20,80).pipe(
   tap(item=> console.log(`emitted item..${item}`)),
   map(item=> item *2),
   tap(item=> console.log(`emitted item..${item}`)),
   map(item=> item-20),
   map(item=>
    {
      if(item===20)
      {
        throw new Error('Zero detected')
      }
      else
      {
        return item;
      }
    }),
    take(1)
 ).subscribe(
   {
  next:item=>console.log(item),
  error: err => console.error(`error detected : ${err}`)
   }
   )
}

}
