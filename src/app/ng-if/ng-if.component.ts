import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  cursos: string[] = [];

  mostrarCursos: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarCursos(): void {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
