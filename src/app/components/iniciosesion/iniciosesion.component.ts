import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent implements OnInit  {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irAHome(): void {
    this.router.navigate(['/home']);
  }

}

