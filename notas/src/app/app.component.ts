import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  agregando = false;
  notas: any
  titulo: string=''
  contenido: string =''


  ngOnInit() {
    this.notas = []
    this.notas.push({"titulo": "Ejemplo", "contenido": "Esta es una nota"})
  }
  agregar() {
    console.log(this.agregando)
    this.agregando = !this.agregando;
    console.log(this.agregando)
  }
  agregarNotas() {
    this.notas.push({"titulo": this.titulo, "contenido": this.contenido})
    this.agregando = false
    this.titulo = ''
    this.contenido = ''
  }
}
