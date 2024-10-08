import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
openMyTournaments() {
throw new Error('Method not implemented.');
}

  constructor(private navCtrl: NavController) {}

    // Método para voltar à página anterior
    goBack() {
      this.navCtrl.back(); // Navega de volta para a página anterior
    }

  // Método para abrir a página do Calendário
  openCalendar() {
    this.navCtrl.navigateForward('/'); // Substitua pelo caminho correto da sua página de calendário
  }
}



