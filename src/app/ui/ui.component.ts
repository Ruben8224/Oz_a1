import { Component, OnInit } from "@angular/core";
import { getDesviacion } from "../desviacion/getDesviacion";
import { getMedia } from "../media/getMedia";
import { arreglo } from '../arreglonumeros/arreglo'
@Component({
  selector: "app-ui",
  templateUrl: "./ui.component.html",
  styleUrls: ["./ui.component.css"],
})
export class UiComponent implements OnInit {
  operator2: any;
  operator1: any;
  constructor() {}

  numero1A: number = 0;
  numero2A: number = 0;
  numero3A: number = 0;
  numero4A: number = 0;
  numero5A: number = 0;
  numero6A: number = 0;
  numero7A: number = 0;
  numero8A: number = 0;
  numero9A: number = 0;
  numero10A: number = 0;
  media: number = 0;
  resultnumber = 0;
  TextValueMedia: number = 0 ;
  TextValueDesviacion: number = 0;

  ngOnInit(): void {}

  Media() {
    let myresult = 0;
    let ArregloA: Array<number> = arreglo( this.numero1A, this.numero2A, this.numero3A, this.numero4A, this.numero5A, this.numero6A, this.numero7A, this.numero8A, this.numero9A, this.numero10A);
    myresult = getMedia(ArregloA);
    this.resultnumber = myresult;
    this.TextValueMedia = this.resultnumber;
  }

  Desviacion() {
    let myresult = 0;
    let result = 0;
    let ArregloA: Array<number> = arreglo( this.numero1A, this.numero2A, this.numero3A, this.numero4A, this.numero5A, this.numero6A, this.numero7A, this.numero8A, this.numero9A, this.numero10A);
    result = getMedia(ArregloA);
    myresult = getDesviacion(ArregloA, result);
    this.resultnumber = myresult;
    this.TextValueDesviacion = this.resultnumber;
  }
}
