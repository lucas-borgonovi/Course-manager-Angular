import { Component } from '@angular/core';

@Component({
  // o seletor será uma tag utilizada no html dentro do index.html
  selector: 'app-root',
  // aqui estamos definindo o arquivo html desse componente
  templateUrl: './app.component.html',
  // Aqui define-se o arquivo css do componente
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'course-manager';

  name: string = "Lucas";

}
