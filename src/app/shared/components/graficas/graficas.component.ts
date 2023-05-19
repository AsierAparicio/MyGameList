import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';
import { BbddService } from 'src/app/core/services/bbdd.service';
import { LoginService } from 'src/app/core/services/login.service';
import Valoracion from 'src/app/interfaces/Valoracion.interfaces';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss']
})
export class GraficasComponent implements OnInit {
  constructor(private bbddService: BbddService, private loginService: LoginService) { }
  contenidoTextarea!: string;
  public doughnutChartLabels: string[] = [];
  public doughnutChartData!: ChartData<'doughnut'>;
  public doughnutChartType: ChartType = 'doughnut';
  public usuario = this.loginService.getId();
  @Input() usucompa: string = '';

  juegos1: Valoracion[] = []
  juegos2: Valoracion[] = []

  num1!: number;
  num2!: number;
  num3!: number;
  num4!: number;
  num5!: number;
  num1_1!: number;
  num2_1!: number;
  num3_1!: number;
  @Input() linea: boolean = false;
  @Input() lista: number = 0;
  @Input() game: number = 0;

//@Input() conparacion: string = '';
  ngOnInit(): void {
  if(this.linea != false){
    if(this.usucompa!=''){
      console.log(this.usucompa)
      this.doughnutChartType ='bar' 
      this.comparar()
    }else{
      this.doughnutChartType ='bar'   
      this.cargarBarras();
    }
    

  }else{
    this.cargarcirculo();
  }

  }
  
  logTextAreaValue(value: string) {
    this.usucompa = value
    this.comparar()
  }
  cargarBarras(){
    var test1 = this.bbddService.select( this.usuario, 1);
    var test2 = this.bbddService.select( this.usuario, 3);
    var test3 = this.bbddService.select( this.usuario, 2);

    test1.then((objeto) => {
      this.juegos1 = objeto;
      this.num1 = this.juegos1.length
    }).catch((error) => {
      console.log(error); // Manejo de errores
    });
   
    test2.then((objeto) => {
      this.juegos1 = objeto;
      this.num2 = this.juegos1.length
    }).catch((error) => {
      console.log(error); // Manejo de errores
    });
   
    test3.then((objeto) => {
      this.juegos1 = objeto;
      this.num3 = this.juegos1.length
      if(this.usucompa!='' && this.num1_1+this.num2_1+this.num3_1!=0){
        this.montarBarrasComparacion()
      }else{
        this.montarBarras()
      }
      
    }).catch((error) => {
      console.log(error); // Manejo de errores
    });
  }



  montarBarras(){
    this.doughnutChartLabels = ['Seguidos', 'Pendientes', 'Abandonados'];
      this.doughnutChartData = {
        labels: this.doughnutChartLabels,
        datasets: [
          {
            data: [this.num1, this.num2, this.num3],
            label: 'Tus Datos',
            backgroundColor: ['#0C981F', '#E09900', '#A40404']
          }
        ]
      };
  }

  montarBarrasComparacion(){
    this.doughnutChartLabels = ['Seguidos', 'Pendientes', 'Abandonados'];
      this.doughnutChartData = {
        labels: this.doughnutChartLabels,
        datasets: [
          {
            data: [this.num1, this.num2, this.num3],
            label: 'Tus Datos',
            backgroundColor: ['#0C981F', '#E09900', '#A40404']
          },
          {
            data: [this.num1_1, this.num2_1, this.num3_1],
            label: 'Comapracion',
            backgroundColor: ['#4aba5a', '#c4a562', '#a15555']
          }
        ]
      };
  }

  cargarcirculo(){
    if(this.game!=0){
      var test1 = this.bbddService.selectGame( this.game);
    }else{
      var test1 = this.bbddService.select( this.usuario, this.lista);
    }

    test1.then((objeto) => {
      this.juegos1 = objeto;
      this.juegos2 = this.juegos1.filter(valoracion => valoracion.valoracion === 1);
      this.num1 = this.juegos2.length
      this.juegos2 = this.juegos1.filter(valoracion => valoracion.valoracion === 2);
      this.num2 = this.juegos2.length
      this.juegos2 = this.juegos1.filter(valoracion => valoracion.valoracion === 3);
      this.num3 = this.juegos2.length
      this.juegos2 = this.juegos1.filter(valoracion => valoracion.valoracion === 4);
      this.num4 = this.juegos2.length
      this.juegos2 = this.juegos1.filter(valoracion => valoracion.valoracion === 5);
      this.num5 = this.juegos2.length

      this.montarCirculo();
    }).catch((error) => {
      console.log(error); // Manejo de errores
    });
  }

  montarCirculo(){
    this.doughnutChartLabels = ['1-★', '2-★', '3-★', '4-★', '5-★']
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [ this.num1, this.num2, this.num3, this.num4, this.num5 ] ,
          backgroundColor: ['#C71E00','#C76D00', '#C7C400', '#15C700', '#00C7B5']},
      ]
    };
  }

  comparar(){
    var test1 = this.bbddService.select( this.usucompa, 1);
    var test2 = this.bbddService.select( this.usucompa, 3);
    var test3 = this.bbddService.select( this.usucompa, 2);

    test1.then((objeto) => {
      this.juegos1 = objeto;
      this.num1_1 = this.juegos1.length
    }).catch((error) => {
      console.log(error); // Manejo de errores
    });
   
    test2.then((objeto) => {
      this.juegos1 = objeto;
      this.num2_1 = this.juegos1.length
      
    }).catch((error) => {
      console.log(error); // Manejo de errores
    });
   
    test3.then((objeto) => {
      this.juegos1 = objeto;
      this.num3_1 = this.juegos1.length
      this.cargarBarras();
      
    }).catch((error) => {
      console.log(error); // Manejo de errores
    });
  }
}
