import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //criando as variaveis
  public nomeProduto: string = 'CRUD Angular 14';
  //está usanso `` pra poder inserir uma variavel dentro da string sem precisar concatenar
  public anuncio: string = `O ${this.nomeProduto} está em promoção`;
  public idProduto: number = 123;
  public precoProduto: number = 2.59;
  public promocao: boolean = true;

  constructor() {
    // Variaveis de string com concatenação
    //this.anuncio = 'O ' + this.nomeProduto + ' está em promoção'

    // usando virgula para passar mais de um argumento
    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('Anuncio: ', this.anuncio);
    console.log('ID: ', this.idProduto);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção: ', this.promocao);

    //escopo das variaveis dentro do código (como podemos declarar)
    //var variavel1;
    //let variavel2;
    //const variavel3;


  }

  ngOnInit(): void {
  }

}
