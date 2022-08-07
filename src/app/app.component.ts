import { Component, OnInit, VERSION } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
ngOnInit(): void {
  const Observer=
  {
   next:item => console.log(`emitted item from next: ${item}`),
   error:err => console.log(`emitted item from error: ${err}`),
   complete:()=> console.log(`completed`),
  };
  const apples$ = new Observable(appleSubscriber =>{
    appleSubscriber.next("Apple1");
    appleSubscriber.next("Apple1");
    appleSubscriber.next("Apple3");
    appleSubscriber.complete();

  });

  const sub = apples$.subscribe( {
    next:item => console.log(`emitted item from next: ${item}`),
    error:err => console.log(`emitted item from error: ${err}`),
    complete:()=> console.log(`completed`),
   });
  
}

}
