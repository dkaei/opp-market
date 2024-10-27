import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drop2',
  standalone: true,
  imports: [],
  templateUrl: './drop2.component.html',
  styleUrl: './drop2.component.scss'
})
export class Drop2Component {
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
    this.dHover = "text-gray-400";
    this.showOptions = "hidden";
  }
  onMouseClick() {
    if (this.showOptions == "") {
      this.showOptions = "hidden";
      this.dHover = "text-gray-400";
    }
  }
}
