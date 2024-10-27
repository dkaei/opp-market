import { Component } from '@angular/core';
import { FilterComponent } from './filter/filter.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FilterComponent, MainComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
