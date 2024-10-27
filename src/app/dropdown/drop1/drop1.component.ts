import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drop1',
  standalone: true,
  imports: [],
  templateUrl: './drop1.component.html',
  styleUrl: './drop1.component.scss'
})
export class Drop1Component {
  @Input() dTitle = "";
  @Input() dId = "";
  showOptions = "hidden";
  dSelected = "text-white";

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
