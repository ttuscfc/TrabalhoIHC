import { Produto } from './../../models/produto';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {
  estiloImg = {
    height: '300px',
    width: '300px;',
    marginLeft: '0px',
    marginTop: '0px',
    cursor: 'auto',
  }
  constructor(@Inject(MAT_DIALOG_DATA) public p: Produto) { }

  ngOnInit(): void {
  }



  imgZoom(e) {

    var posi = document.getElementById('crop').getBoundingClientRect();

    var x = ((e.clientX - posi.left) / 160) * 400;
    var y = ((e.clientY - posi.top) / 150) * 400;

    console.log(`${x}, ${y}`);

    this.estiloImg = {
      height: `800px`,
      width: '800px;',
      marginLeft: `-${x}px`,
      marginTop: `-${y}px`,
      cursor: 'crosshair'
    }

  }

  mouseOut() {
    this.estiloImg = {
      height: '300px',
      width: '300px;',
      marginLeft: '0px',
      marginTop: '0px',
      cursor: 'auto'
    }
  }

}
