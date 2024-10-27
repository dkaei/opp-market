import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  selectedSort = "Last updated";
  showSort = "hidden";

  openSort() {
    if (this.showSort=='') this.showSort='hidden'; 
    else this.showSort='';
  }
}
