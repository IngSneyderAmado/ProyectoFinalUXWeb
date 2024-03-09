import { Component ,OnInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  cerrasesion(){
    this.router.navigate(['/']);
  }

  usuarios(){
    this.router.navigate(['/usuarios']);
  }

  aplicaciones(){
    this.router.navigate(['/aplicaciones']);
  }
}