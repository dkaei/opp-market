import { Component, Input } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-drop4',
  standalone: true,
  imports: [MatSliderModule],
  templateUrl: './drop4.component.html',
  styleUrl: './drop4.component.scss'
})
export class Drop4Component {
  @Input() drop4p1 = "";
  @Input() drop4p2 = "";
  @Input() dTitle = "";
  @Input() dId = "";
  showOptions = "hidden";

  onMouseEnter() {
    this.showOptions = "";
  }
  
  onMouseLeave() {
    if (this.showOptions == "") {
      this.showOptions = "hidden";
    }
  }
  onMouseClick() {
    if (this.showOptions == "") {
      this.showOptions = "hidden";
    }
  }
}
