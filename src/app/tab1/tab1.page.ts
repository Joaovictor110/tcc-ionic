import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MESES } from '../enum/meses.enum';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;  // Referência ao input de arquivo

  dias = Array.from({ length: 31 }, (_, i) => i + 1);
  meses = Object.keys(MESES).filter(mes => isNaN(Number(mes)));
  anos: number[] = [];

  // Variáveis para armazenar os dados do formulário
  formulario: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    nickname: new FormControl(),
    shirtNumber: new FormControl(),
    position: new FormControl(),
    profileId: new FormControl(12345),
  });
  
  day: number = this.dias[0];
  month: number = 1;
  year!: number;
  oldDay: number = this.day;
  oldMonth: number = this.month;
  oldYear!: number;
  age: number = 0;

  photo: string | ArrayBuffer = ''; // Variável para armazenar a URL da foto

  constructor() {
    for (let year = 2024; year >= 1950; year--) {
      this.anos.push(year);
    }

    this.year = this.anos[0];
    this.oldYear = this.year;
  }

  onDayChange(event: CustomEvent) {
    this.day = event.detail.value;
    this.oldDay = this.day;
  }

  didDismissDay(event: CustomEvent) {
    this.day = event.detail.data;

    this.calculateAge();
  }

  onMonthChange(event: CustomEvent) {
    this.month = event.detail.value;
    this.oldMonth = this.month;
  }

  calculaQtdeDiasNoMes() {
    const nomeMes = Object.keys(MESES)[this.month+2] as keyof typeof MESES;
    const qtdeDias = MESES[nomeMes];

    this.dias = Array.from({ length: qtdeDias }, (_, i) => i + 1);
  }

  didDismissMonth(event: CustomEvent) {
    this.month = event.detail.data;

    this.calculaQtdeDiasNoMes();
    this.calculateAge();
  }

  onYearChange(event: CustomEvent) {
    this.year = event.detail.value;
    this.oldYear = this.year;
  }

  didDismissYear(event: CustomEvent) {
    this.year = event.detail.data;

    this.calculateAge();
  }

  // Função para calcular a idade com base na data de nascimento
  calculateAge() {
    if (this.day && this.month && this.year) {
      const birthDate = new Date(this.year, this.month - 1, this.day);
      const ageDifMs = Date.now() - birthDate.getTime();
      const ageDate = new Date(ageDifMs);
      this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  }

  // Função para abrir o seletor de arquivo do avatar
  selectImage() {
    if (this.fileInput && this.fileInput.nativeElement) {
      this.fileInput.nativeElement.click(); // Aciona o clique no input de arquivo oculto
    }
  }

  // Função para tratar o upload de arquivo
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.photo = reader.result || '';  // Garante que 'null' não seja atribuído
      };
      reader.readAsDataURL(file);
    }
  }

  // Função para salvar o perfil
  saveProfile() {
    // Lógica de salvamento - por exemplo, enviar os dados para uma API ou localStorage
    console.log('Perfil salvo!', {
      name: this.formulario.controls['name'].value,
      email: this.formulario.controls['email'].value,
      nickname: this.formulario.controls['nickname'].value,
      shirtNumber: this.formulario.controls['shirtNumber'].value,
      position: this.formulario.controls['position'].value,
      age: this.age,
      profileId: this.formulario.controls['profileId'].value,
    });
  }
}
