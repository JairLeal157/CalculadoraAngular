import { Component } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pantalla: string = "";
  keydown(event:MouseEvent) {
    let botonHtml:any= event.composedPath()[0];
    let boton:string= botonHtml.id;
    switch(boton){
      case "botones":
        return;
      case "C":
        this.pantalla="";
        break;
      case "←":
        this.pantalla = this.pantalla.includes("Error")? "": this.pantalla;
        this.pantalla = this.pantalla.substring(0, this.pantalla.length - 1);
        break;
      case "=":
        this.pantalla = this.pantalla.includes("Error")? "": this.pantalla;
        this.evaluar();
        break;
      default:
        this.pantalla = this.pantalla.includes("Error")? "": this.pantalla;
        this.pantalla = this.pantalla.length < 25? this.pantalla + boton: this.pantalla;
        break;
    }
  }
  evaluar(){
    try{
      let resultado:string = eval(this.pantalla).toString();
      this.pantalla = resultado.length < 25? resultado: "Error";
    }catch(e){
      this.pantalla = "Error";
    }
  }
}