import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  solicitacoes = [
    {
      id: 1,
      nome: 'Solicitação 1',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnuwTPl2ZShJOyiI30x2P-YILtHrxCwlFUHWzA5JCPltSVsrfrzR1kVIvTaa5hRoO7i8U&usqp=CAU'
    },
    {
      id: 2,
      nome: 'Solicitação 2',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpaMt76FseCmxD5YB2nBUxe05lKy6eGYAgsnA09nHUzTQSeFFxaYL5EO_VJuaeYJbNNc0&usqp=CAU'
    },
    {
      id: 3,
      nome: 'Solicitação 3',
      imagem: 'https://img.myloview.com.br/fotomurais/vector-futebol-time-futebol-clube-icone-400-114633272.jpg'
    },
    {
      id: 4,
      nome: 'Solicitação 4',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJGQztUBhtJD82dfemkDuXpdGsbz_CgUjbP6FsKS0ZWJ9GiMg6aAggeuaTPkIf1cLq7w&usqp=CAU'
    }
  ];

  constructor() {}

  aprovarSolicitacao(solicitacao: any) {
    console.log('Solicitação aprovada:', solicitacao.nome);
    // Lógica para aprovar solicitação
  }

  rejeitarSolicitacao(solicitacao: any) {
    console.log('Solicitação rejeitada:', solicitacao.nome);
    // Lógica para rejeitar solicitação
  }
}
