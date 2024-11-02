import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { sum } from 'package1';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app1';
  result = sum(1, 2);
}
