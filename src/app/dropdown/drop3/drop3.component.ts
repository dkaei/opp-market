import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drop3',
  standalone: true,
  imports: [],
  templateUrl: './drop3.component.html',
  styleUrl: './drop3.component.scss'
})
export class Drop3Component {
  @Input() dTitle = "";
  @Input() dId = "";
  showOptions = "hidden";
  dSelected = "";

  dHover = "text-gray-400";
  onMouseEnter() {
    this.showOptions = "";
    this.dHover= "text-white";
  }
  
  onMouseLeave() {
    if (this.showOptions == "") {
      this.showOptions = "hidden";
      this.dHover = "text-gray-400";
    }
  }
  onMouseClick() {
    if (this.showOptions == "") {
      this.showOptions = "hidden";
      this.dHover = "text-gray-400";
    }
  }
}
