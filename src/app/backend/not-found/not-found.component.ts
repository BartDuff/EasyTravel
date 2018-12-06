import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  secondes : number = 5;
  constructor(private route: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.autoRedirect();
    }, 5000);
    Observable.interval(1000).subscribe(
      () => { this.secondes -= 1; }
    );
  }

  autoRedirect(){
    this.route.navigate(['']);
  }

}
