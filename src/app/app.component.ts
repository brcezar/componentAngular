import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cardImage: string = 'https://www.fillmurray.com/640/360';
  cardTitle: string = 'Meu Card';
  cardDescription: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ";

  alerts: string[] = [];

  showAlert = true;

  onAlertButtonClick() {
    this.alerts.push('Nice, you triggered this alert message!');
  }

  onClick() {
    this.cardTitle = 'Clicou!';
  }

  onCloseAlert(index: number) {
    this.alerts.splice(index, 1);
  }
}
