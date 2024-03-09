import { Component ,OnInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aplicaciones',
  templateUrl: './aplicaciones.component.html',
  styleUrls: ['./aplicaciones.component.css']
})
export class AplicacionesComponent implements OnInit  {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  volverhome(){
    this.router.navigate(['/home']);
  }
}