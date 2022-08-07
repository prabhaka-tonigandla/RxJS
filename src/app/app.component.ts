import { Component, OnInit, VERSION } from '@angular/core';
import { from, Observable, observable, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
ngOnInit(): void {
  of('Private Applications','ModGL Wires').subscribe(
    {
    next:item=> console.log(item)
    }
  );
  from(['Private Applications','ModGL Wires']).subscribe(
    {
    next:item=> console.log(`from observable ${item}`)
    }
  );
}

}
